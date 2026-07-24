import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach JWT Token if available in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('leaddesk_admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle global 401 unauth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear invalid token if unauthenticated
      if (localStorage.getItem('leaddesk_admin_token')) {
        localStorage.removeItem('leaddesk_admin_token');
        localStorage.removeItem('leaddesk_admin_user');
      }
    }
    return Promise.reject(error);
  }
);

// API Service Methods
export const authService = {
  login: async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    return res.data;
  },
  getMe: async () => {
    const res = await api.get('/auth/me');
    return res.data;
  },
};

export const leadService = {
  createLead: async (leadData) => {
    const res = await api.post('/leads', leadData);
    return res.data;
  },
  getLeads: async (search = '', status = 'All') => {
    const params = {};
    if (search) params.search = search;
    if (status && status !== 'All') params.status = status;
    const res = await api.get('/leads', { params });
    return res.data;
  },
  updateStatus: async (leadId, updateData) => {
    const payload = typeof updateData === 'string' ? { status: updateData } : updateData;
    const res = await api.patch(`/leads/${leadId}/status`, payload);
    return res.data;
  },
};

export const dashboardService = {
  getStats: async () => {
    const res = await api.get('/dashboard/stats');
    return res.data;
  },
};

export default api;
