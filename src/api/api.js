import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://65c7c3bae7c384aada6eec1a.mockapi.io',
});
export const requestFetchContacts = () => {
  return instance.get('/contacts');
};
export const requestAddContacts = body => {
  return instance.post('/contacts', body);
};
export const requestDeleteContacts = id => {
  return instance.delete(`/contacts/${id}`);
};
