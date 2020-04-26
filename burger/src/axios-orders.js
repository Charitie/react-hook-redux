import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-c6016.firebaseio.com/'
});

export default instance;