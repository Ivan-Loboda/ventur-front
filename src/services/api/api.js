import axios from 'axios';
const baseUrl = process.env.BASE_URL;

axios.defaults.baseURL = 'https://loboda-test-deploy.onrender.com';
console.log(baseUrl);
export const getDebtsList = () => axios.get('/api/debts');

export const addNewDebt = (body) => axios.post('/api/debts/create', body);

export const sendNotify = (body) => axios.post('/api/notifications/send', body);
