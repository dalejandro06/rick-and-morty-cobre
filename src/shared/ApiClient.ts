import axios from 'axios';

export const ApiClient = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
});
