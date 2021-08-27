import axios from 'axios';

export const AxiosApi = axios.create({
    responseType: 'json',
});
