import axios from "axios";

const api = axios.create({
  baseURL: 'https://fed-team.modyo.cloud/api',
});

export default api;