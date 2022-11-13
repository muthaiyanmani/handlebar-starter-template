import { API_ENDPOINTS } from './api-endpoints';
import { httpClient } from './http-client';

export class Client {
	// Example data
	users = {
		get: () => httpClient.get(API_ENDPOINTS.users),
		post: data => httpClient.post(API_ENDPOINTS.users, data),
		put: data => httpClient.put(API_ENDPOINTS.users, data),
		delete: id => httpClient.delete(`${API_ENDPOINTS.users}/${id}`)
	};
}
