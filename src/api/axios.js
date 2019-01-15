import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lab.lectrum.io/redux/api/user/',
});

export default api;
