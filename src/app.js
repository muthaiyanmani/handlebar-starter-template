import { routes } from 'routes/routes';

document.querySelector('body').innerHTML = '<div id="root"></div>';

const rootDiv = document.getElementById('root');

// First time
routes[window.location.pathname]();

// Listen to popstate event
window.onpopstate = () => {
	rootDiv.innerHTML = routes[window.location.pathname];
};
