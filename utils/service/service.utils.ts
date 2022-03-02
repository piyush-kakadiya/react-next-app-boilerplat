import axios from 'axios';
import { API_URL } from '../../constants/app.constants';
import { IRequestBody } from '../../types/service.types';

export const postRequest = (url: string, body?: IRequestBody) => {
  return axios.post(API_URL + url, body, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    } });
};