import authInstance from './auth';

export const requestFetchContacts = () => {
  return authInstance.get('/contacts');
};
export const requestAddContacts = body => {
  return authInstance.post('/contacts', body);
};
export const requestDeleteContacts = id => {
  return authInstance.delete(`/contacts/${id}`);
};
