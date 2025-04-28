import axios from 'axios';


const apiKey:string = import.meta.env.VITE_API_KEY

const axiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com',
    timeout: 5000,
    headers: { 'x-api-key' : apiKey }
  });
  
// Helper lấy tokens
function getAccessToken() {
    return localStorage.getItem('access_token');
  }
  
  function getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }
  
  // Helper lưu tokens
  function saveTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }
  // Request interceptor: tự động gắn access token vào header
  axiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  // Response interceptor: bắt lỗi hết hạn token và tự refresh
  axiosInstance.interceptors.response.use(
    (response) => response, // Nếu thành công thì trả về luôn
    async (error) => {
      const originalRequest = error.config;
      // Nếu lỗi 401 và chưa thử refresh token
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // Đánh dấu đã retry
  
        try {
          const refreshToken = getRefreshToken();
          if (!refreshToken) {
            throw new Error('No refresh token available');
          }
  
          // Gọi API refresh token
          const response = await axios.post('https://your-auth-server.com/refresh', {
            refresh_token: refreshToken,
          });
  
          const { access_token, refresh_token } = response.data;
          saveTokens(access_token, refresh_token);
  
          // Update token mới vào header request cũ và retry
          originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // Nếu refresh token cũng lỗi -> logout
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          console.log(refreshError);
          window.location.href = '/login'; // hoặc xử lý redirect tùy bạn
        }
      }
  
      return Promise.reject(error);
    }
  );


export default axiosInstance;