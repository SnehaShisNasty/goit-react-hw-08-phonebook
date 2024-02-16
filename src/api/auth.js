import axios from 'axios';
const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const signupRequest = body => authInstance.post('/users/signup', body);
export const loginRequest = body => authInstance.post('/users/login', body);
