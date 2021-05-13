const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
	const aboutBox = new WinBox({
		title: 'About Me',
		background: '#00aa00',
		width: '400px',
		height: '400px',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		mount: aboutContent,
	});
});
contact.addEventListener('click', () => {
	const contactBox = new WinBox({
		title: 'Contact',
		background: '#00aa00',
		width: '400px',
		height: '400px',
		top: 50,
		right: 50,
		bottom: 50,
		left: 50,
		mount: contactContent,
	});
});
