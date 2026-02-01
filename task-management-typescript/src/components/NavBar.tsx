import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  if (!isAuthenticated) return null; // Hide navbar if not logged in

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <span style={{ marginRight: '1rem' }}>Hello, {user?.name}</span>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
