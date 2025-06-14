import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axios';
  import {jwtDecode} from 'jwt-decode'; // sem chaves porque é default export

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  // Função que verifica se token está expirado
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;
      return decoded.exp < now;
    } catch {
      return true;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (isTokenExpired(token)) {
        logout();
      } else {
        const decoded = jwtDecode(token);
        setUser(decoded);
        setToken(token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.post('auth/login', { email, password });
    const jwt = response.data.access_token;
    localStorage.setItem('token', jwt);
    setToken(jwt);
    const decoded = jwtDecode(jwt);
    setUser(decoded);
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
