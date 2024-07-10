// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { jwt } = useContext(AuthContext);

  // Check if there is a JWT token
  if (!jwt) {
    // User not authenticated, redirect them to the login page
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, allow access to the children components
  return children;
};

export default ProtectedRoute;
