export const render = (id = 'root', fn, data) => {
	const rootDiv = document.getElementById(id);
	rootDiv.innerHTML = fn(data);
};
