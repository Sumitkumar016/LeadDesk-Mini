import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/api';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('leaddesk_admin_token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [isLoading, setIsLoading] = useState(true);

  // Validate existing token on boot
  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          const data = await authService.getMe();
          setUser(data.admin);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('[Auth Init Error]', error);
          logout();
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, [token]);

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      if (data.success && data.token) {
        localStorage.setItem('leaddesk_admin_token', data.token);
        localStorage.setItem('leaddesk_admin_user', JSON.stringify(data.admin));
        setToken(data.token);
        setUser(data.admin);
        setIsAuthenticated(true);
        toast.success(`Welcome back, ${data.admin.email}!`);
        return { success: true };
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Login failed. Please check your credentials.';
      toast.error(msg);
      return { success: false, error: msg };
    }
  };

  const logout = () => {
    localStorage.removeItem('leaddesk_admin_token');
    localStorage.removeItem('leaddesk_admin_user');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
