import axios from 'axios';

const API_ENDPOINT = 'http://localhost:4200';

export const makeRequest = (config) => {
  config.url = `${API_ENDPOINT}${config.url}`;

  return axios(config);
};
