import axios from 'axios';
import AlertUtil from '../utils/alert';

export default class Service {
  constructor(route) {
    this.axios = axios;
    let host = 'http://localhost'//process.env.API_URL;
    let basePath = '/api/v1' //process.env.API_PATH;
    let port = 5000 //process.env.API_PORT;
    this.url = `${host}:${port}${basePath}/${route}`
  }

  async create(object) {
    let response = await this.axios.post(this.url, object)

    if(!response || response.status != 200) {
      console.error(response)
      AlertUtil.error('Ha ocurrido un error.')
    }
    
    return response.data
  }

  async find(filters) {
    let response = await this.axios.get(this.url)

    if(!response || response.status != 200) {
      console.error(response)
      AlertUtil.error('Ha ocurrido un error.')
    }

    return response.data
  }

  async delete(id) {
    let response = await this.axios.delete(`${this.url}/${id}`)

    if(!response || response.status != 200) {
      console.error(response)
      AlertUtil.error('Ha ocurrido un error.')
    }

    return response.data
  }

}