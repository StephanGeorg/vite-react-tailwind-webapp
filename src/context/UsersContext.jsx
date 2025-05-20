// src/context/UsersContext.jsx
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { fetchUsers } from '../services/api';

import { delay } from '../utils/helpers';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const loadUsers = async () => {
    if (isInitialized) return;
    
    try {
      setLoading(true);

      // Artificial delay (can be removed in production)
      await delay(1500);
      const data = await fetchUsers();
      
      setUsers(data);
      setError(null);
      setIsInitialized(true);
    } catch (err) {
      setError('Error loading user data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Expose methods to manually reload data if needed
  const refreshUsers = () => {
    setIsInitialized(false);
    loadUsers();
  };

  return (
    <UsersContext.Provider value={{ users, loading, error, loadUsers, refreshUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};