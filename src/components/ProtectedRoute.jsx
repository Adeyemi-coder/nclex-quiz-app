// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function hasStoredSession() {
  try {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return Boolean(token || user);
  } catch {
    return false;
  }
}

export default function ProtectedRoute() {
  const location = useLocation();
  const auth = useAuth() || {};
  const { currentUser, loading, isLoading } = auth;

  // Wait for the auth context to finish restoring the session (if it reports that)
  if (loading || isLoading) return null;

  const isAuthed = Boolean(currentUser) || hasStoredSession();

  if (!isAuthed) {
    // Remember where the visitor was going so login can send them back
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
