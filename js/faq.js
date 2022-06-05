const questions = document.querySelectorAll('.question');
const openIcons = document.querySelectorAll('.question i');

function handleOpened() {
	questions.forEach((question, index) => {
		const isOpened = getBoolValue(question.dataset.opened) || false;
		const answer = question.querySelector('.answer');

		isOpened
			? answer.classList.remove('hidden')
			: answer.classList.add('hidden');

		openIcons[index].classList = getIconClassList(isOpened);
	});
}

function toggleOpened() {
	const question = this.parentElement.parentElement;
	const isOpened = getBoolValue(question.dataset.opened) || false;
	const icon = question.querySelector('i');

	const main = this.parentElement.nextElementSibling;

	question.dataset.opened = !isOpened;
	isOpened === true
		? main.classList.add('hidden')
		: main.classList.remove('hidden');

	icon.classList = getIconClassList(!isOpened);
}

function getIconClassList(state) {
	return state
		? 'fa-solid fa-chevron-up pointer'
		: 'fa-solid fa-chevron-down pointer';
}

function addIconsListeners() {
	openIcons.forEach(icon => {
		icon.addEventListener('click', toggleOpened);
	});
}

function getBoolValue(input) {
	return input === 'true';
}

addIconsListeners();
handleOpened();
