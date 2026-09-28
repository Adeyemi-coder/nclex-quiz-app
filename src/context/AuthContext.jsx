// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // 1. Read initial user safely from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // 2. Persistent theme state ('light' | 'dark')
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('app_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  // Sync theme with the DOM's <html> root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('app_theme', theme);
    } catch (e) {
      console.warn('Unable to persist theme to localStorage', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isAuthenticated = Boolean(currentUser);

  // Login handler
  const login = (userData) => {
    const userToSave = {
      name: userData?.name || userData?.email?.split('@')[0] || 'Candidate',
      email: userData?.email || '',
      token: userData?.token || `token-${Date.now()}`
    };

    localStorage.setItem('user', JSON.stringify(userToSave));
    localStorage.setItem('token', userToSave.token);
    setCurrentUser(userToSave);
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.clear();
    setCurrentUser(null);
  };

  // Update profile data in real-time across all components
  const updateUser = (updatedFields) => {
    setCurrentUser((prev) => {
      const updated = { ...(prev || {}), ...updatedFields };
      try {
        localStorage.setItem('user', JSON.stringify(updated));
      } catch (e) {
        console.warn('Unable to persist updated user to localStorage', e);
      }
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        login,
        logout,
        updateUser,
        theme,
        toggleTheme
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return {
      currentUser: null,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
      updateUser: () => {},
      theme: 'light',
      toggleTheme: () => {}
    };
  }
  return context;
};

export default AuthContext;