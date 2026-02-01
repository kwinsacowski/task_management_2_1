import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';


const LoginPage: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-page">
      <h2>Welcome to Your Cozy Cottage Task Manager</h2>
      <button onClick={() => loginWithRedirect()}>Log In / Register</button>
    </div>
  );
};


export default LoginPage;
