import api from '../utils/axios';

export async function login(email: string) {
  const response = await api.post('/api/v1/auth-service/auth/login', { email });
  return response.data;
}

export async function verify(email: string, code: string) {
  const response = await api.post('/api/v1/auth-service/auth/verify', { email, code });
  return response.data; // { userId, accessToken, refreshToken }
}

export async function getUser(userId: string) {
  const response = await api.get(`/api/v1/user-service/users/${userId}`);
  return response.data;
}

export async function refreshTokenRequest(refreshToken: string) {
  const response = await api.post('/api/v1/user-service/refresh', { refreshToken });
  return response.data; // { accessToken, refreshInterval }
} 