// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_CANDIDATE = {
  id: 'cand-001',
  name: 'Adeyemi Kehinde',
  email: 'adeyemi@clinicalmaster.com',
  indexNumber: 'NMCN/UITH/2026/0491',
  targetExam: 'NMCN RN Professional Exam',
  joinedDate: '2026-08-01',
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const active = localStorage.getItem('nclex_active_session');
      return active ? JSON.parse(active) : DEFAULT_CANDIDATE;
    } catch {
      return DEFAULT_CANDIDATE;
    }
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const users = localStorage.getItem('nclex_registered_users');
      return users ? JSON.parse(users) : [DEFAULT_CANDIDATE];
    } catch {
      return [DEFAULT_CANDIDATE];
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('nclex_active_session', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('nclex_active_session');
    }
  }, [currentUser]);

  // Strict Login: Rejects unregistered emails
  const login = (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = registeredUsers.find(
      (u) => u.email.toLowerCase() === trimmedEmail
    );

    if (!existing) {
      return { 
        success: false, 
        message: 'No candidate record found for this email. Please register first.' 
      };
    }

    if (existing.password && password && existing.password !== password) {
      return {
        success: false,
        message: 'Invalid password. Please check your credentials.'
      };
    }

    setCurrentUser(existing);
    return { success: true };
  };

  // Registration: Stores credentials
  const register = ({ name, email, password, targetExam, indexNumber }) => {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = registeredUsers.find(
      (u) => u.email.toLowerCase() === trimmedEmail
    );

    if (existing) {
      return {
        success: false,
        message: 'An account with this candidate email already exists. Please sign in.'
      };
    }

    const newUser = {
      id: `cand-${Date.now()}`,
      name: name.trim(),
      email: trimmedEmail,
      password: password || '',
      indexNumber: indexNumber?.trim() || `NMCN/CAND/${Math.floor(1000 + Math.random() * 9000)}`,
      targetExam: targetExam || 'NMCN RN Professional Exam',
      joinedDate: new Date().toISOString().split('T')[0],
    };

    const updated = [...registeredUsers, newUser];
    setRegisteredUsers(updated);
    localStorage.setItem('nclex_registered_users', JSON.stringify(updated));
    setCurrentUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (data) => {
    const updated = { ...currentUser, ...data };
    setCurrentUser(updated);
    const updatedList = registeredUsers.map((u) =>
      u.id === updated.id ? updated : u
    );
    setRegisteredUsers(updatedList);
    localStorage.setItem('nclex_registered_users', JSON.stringify(updatedList));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Ensure both of these exports exist at the bottom:
export const useAuth = () => useContext(AuthContext);
export default AuthContext;