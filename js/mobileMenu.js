const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mobile-menu');

burgerIcon.addEventListener('click', () =>
	mobileMenu.classList.remove('closed')
);
closeIcon.addEventListener('click', () => mobileMenu.classList.add('closed'));
