import axios from 'axios';
//import AlertUtil from '../utils/alert';

export default class Service {
  constructor(route) {
    this.axios = axios;
    const host = 'http://localhost'; // process.env.API_URL;
    const basePath = '/api/v1'; // process.env.API_PATH;
    const port = 5000; // process.env.API_PORT;
    this.initialParams = {
      withCredentials: true,
      credentials: 'include',
    };
    this.url = `${host}:${port}${basePath}/${route}`;
  }

  async create(object) {
    const response = await this.axios.post(this.url, object, this.initialParams);

    if (!response || response.status != 200) {
      console.error(response);
      AlertUtil.error('Ha ocurrido un error.');
    }

    return response.data;
  }

  async update(id, object) {
    let response = await this.axios.put(`${this.url}/${id}`, object, this.initialParams)

    if(!response || response.status != 200) {
      console.error(response)
      //AlertUtil.error('Ha ocurrido un error.')
    }
    
    return response.data
  }

  async find(filters) {
    let params =  new URLSearchParams(filters).toString()
    const response = await this.axios.get(`${this.url}?${params}`, this.initialParams);

    if (!response || response.status != 200) {
      console.error(response);
      AlertUtil.error('Ha ocurrido un error.');
    }

    return response.data;
  }


  async findById(id) {
    let response = await this.axios.get(`${this.url}/${id}`, this.initialParams)

    if(!response || response.status != 200) {
      console.error(response)
      //AlertUtil.error('Ha ocurrido un error.')
    }

    return response.data
  }


  async delete(id) {
    const response = await this.axios.delete(`${this.url}/${id}`, this.initialParams);

    if (!response || response.status != 200) {
      console.error(response);
      AlertUtil.error('Ha ocurrido un error.');
    }

    return response.data;
  }
}
