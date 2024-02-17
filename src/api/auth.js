import axios from 'axios';
const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signupRequest = body => {
  return authInstance.post('/users/signup', body);
};

export const loginRequest = body => {
  return authInstance.post('/users/login', body);
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
