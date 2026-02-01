import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import TaskDetails from './pages/TaskDetail';
import { TaskProvider } from './components/TaskContext';
import { useAuth0 } from '@auth0/auth0-react';



const App: React.FC = () => {

 const { isLoading } = useAuth0();

  // ⛔ DO NOT render routes until Auth0 is ready
  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <BrowserRouter>
      <TaskProvider>
        <NavBar /> {/* Only shows if logged in */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/task/:id"
            element={
              <ProtectedRoute>
                <TaskDetails />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
};

export default App;
