import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.themoviedb.org/4/list/1?page=1&api_key=c8fffcad6d7b27e05f8629fb14230b12',
});

export default api;
