import { home } from 'js';
import { render } from 'utils/hbs-helper';

export const routes = { '/': () => render('root', home) };

const rootDiv = document.getElementById('root');

// On navigate
export const onNavigate = pathname => {
	window.history.pushState({}, pathname, window.location.origin + pathname);
	rootDiv.innerHTML = routes[pathname];
};
