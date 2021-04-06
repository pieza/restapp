import axios from 'axios';

export default class AuthService {
  constructor() {
    this.axios = axios;
    const host = 'http://localhost'; // process.env.API_URL;
    const basePath = '/api/v1'; // process.env.API_PATH;
    const port = 5000; // process.env.API_PORT;
    this.initialParams = {
      withCredentials: true,
      credentials: 'include',
    };
    this.url = `${host}:${port}${basePath}`;
  }

  async signup(object) {
    const response = await this.axios.post(`${this.url}/signup`, object, this.initialParams);
    return response;
  }

  async signin(object) {
    const response = await this.axios.post(`${this.url}/signin`, object, this.initialParams);
    return response;
  }
}