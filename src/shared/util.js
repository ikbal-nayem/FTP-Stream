import axios from 'axios';

export const API_Key = "46795c6a0e668def775efa13c95d30bc"

export const url = 'https://api.themoviedb.org/3'
export const image_base_url = 'http://image.tmdb.org/t/p'


export default axios.create({
  baseURL: url,
  params: {
  	api_key: API_Key,
  	language: 'en-US',
  },
  headers: {
    accept: 'application/json',
  }
});