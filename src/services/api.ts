import axios from 'axios';

interface tipos {
  username: string;
  data: string;
  params: {
    email: string;
  };
}

const api = axios.create({
  baseURL: 'https://segware-book-api.segware.io/api',
});

export default api;
