import { home as homeTemplate } from 'templates';

export const home = () => {
	return homeTemplate({ name: 'Guest' });
};
