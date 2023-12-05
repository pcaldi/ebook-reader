import axios from 'axios';

const api = axios.create({
  baseURL: 'https://escribo.com/'
})

export default api
