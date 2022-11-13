import axios from 'axios';
import Cookies from 'js-cookie';

// Axios interceptors
const Axios = axios.create({
	baseURL: '',
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' }
});

// Change REQUEST data/error here
Axios.interceptors.request.use(config => {
	const token = Cookies.get('AUTH_TOKEN');
	config.headers = { ...config.headers, Authorization: `Bearer ${token || ''}` };
	return config;
});

// Change RESPONSE data/error here
Axios.interceptors.response.use(
	response => response,
	error => {
		if (
			(error.response && error.response.status === 401) ||
			(error.response && error.response.status === 403)
		) {
			Cookies.remove('AUTH_TOKEN');
		}
		return Promise.reject(error);
	}
);

class HttpClient {
	async get(url, params) {
		const response = await Axios.get(url, { params });
		return response.data;
	}

	async post(url, data, options) {
		const response = await Axios.post(url, data, options);
		return response.data;
	}

	async put(url, data) {
		const response = await Axios.put(url, data);
		return response.data;
	}

	async delete(url) {
		const response = await Axios.delete(url);
		return response.data;
	}
}

export const httpClient = Object.freeze(HttpClient);
