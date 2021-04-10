import axios from 'axios';

export default class AuthService {

  static _instance

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

  static getInstance() {
    if(this._instance == null) this._instance = new AuthService()
    return this._instance
  }

  async signup(object) {
    const response = await this.axios.post(`${this.url}/signup`, object, this.initialParams);
    return response;
  }

  async signin(object) {
    const response = await this.axios.post(`${this.url}/signin`, object, this.initialParams);
    return response;
  }

  async _current() {
    const response = await this.axios.get(`${this.url}/current`, this.initialParams);
    return response.data;
  }

  static async current() {
    return await this.getInstance()._current()
  }

  async logout() {
    const response = await this.axios.get(`${this.url}/logout`, this.initialParams);
    return response;
  }
}