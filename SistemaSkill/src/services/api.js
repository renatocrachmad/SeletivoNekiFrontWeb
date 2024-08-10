import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // URL base da sua API
});

export const login = (username, password) => {
  return api.post('/login', { username, password });
};

export const register = (username, password) => {
  return api.post('/register', { username, password });
};

export const getSkills = () => {
  return api.get('/skills');
};

export const getAvailableSkills = () => {
  return api.get('/available-skills');
};

export const addSkill = (skill) => {
  return api.post('/skills', skill);
};
export const deleteSkill = (skill) => {
  return api.delete('/skills', skill);
};

export default { login, register, getSkills, getAvailableSkills, addSkill, deleteSkill };
