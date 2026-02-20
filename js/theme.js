const root = document.documentElement;
const preference = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', preference)

document.getElementById('theme-toggle').addEventListener('click', () => {
	const theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
	root.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
})