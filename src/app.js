import { routes } from 'routes/routes';

document.querySelector('body').innerHTML = '<div id="root"></div>';

const rootDiv = document.getElementById('root');

// First time
routes[window.location.pathname]();

// On navigate
const onNavigate = pathname => {
	window.history.pushState({}, pathname, window.location.origin + pathname);
	rootDiv.innerHTML = routes[pathname];
};

// Listen to popstate event
window.onpopstate = () => {
	rootDiv.innerHTML = routes[window.location.pathname];
};

export { onNavigate };
