import axios from 'axios';
import { BASE_URL } from './url';

const axiosClient = axios.create();
axiosClient.defaults.baseURL = BASE_URL;
axiosClient.defaults.headers = {
  'Content-Type': 'aplication/json',
  Accept: 'aplication/json',
};
export { axiosClient };
