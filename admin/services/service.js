import axios from 'axios';

export default class Service {
  constructor(route) {
    this.axios = axios;
    let host = 'http://localhost'//process.env.API_URL;
    let basePath = '/api/v1' //process.env.API_PATH;
    let port = 5000 //process.env.API_PORT;
    this.url = `${host}:${port}${basePath}/${route}`
  }

  async create(object) {
    return await this.axios.post(this.url, object)
  }

  async find(filters) {
    return (await this.axios.get(this.url)).data
  }

  async delete(id) {
    return (await this.axios.delete(`${this.url}/${id}`)).data
  }

}