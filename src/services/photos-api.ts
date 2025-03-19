import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
import { Photo } from '../App/App.types';
import { FetchPhotosData } from '../App/App.types';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common.Authorization = `Client-ID ${API_KEY}`;

export const fetchPhotos = async (
  query: string,
  page: number,
  perPage: number = 30,
): Promise<FetchPhotosData> => {
  const response = await axios.get<FetchPhotosData>('/search/photos', {
    params: {
      query,
      page,
      orientation: 'landscape',
      per_page: perPage,
    },
  });

  console.log('response.data', response.data.results);
  return response.data;
};
