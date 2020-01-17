let navMenu = document.querySelector('nav');
let mainContent = document.querySelector('main');
let mainBtn = document.querySelector('.mainBtn');
let navBtn = document.querySelector('.navBtn');

let firstClick = false;
let isShown = false;

// uses button to toggle display of nav menu and main content
navigate = () => { 
	// on first click, show initially hidden nav menu
	// prevents slideOut animation onLoad
	if(!firstClick) {
		navMenu.classList.remove('initialHide');
		showMenu();
		firstClick = true;
	} else {
		isShown = !isShown;
		if(isShown) showMenu();
		else hideMenu();
	}
}

showMenu = () => {
	navMenu.classList.remove('hide');
	navMenu.classList.add('show');

	mainContent.classList.remove('show');
	mainContent.classList.add('hide');
}

hideMenu = () => {
	navMenu.classList.remove('show');
	navMenu.classList.add('hide');

	mainContent.classList.remove('hide');
	mainContent.classList.add('show');
}

mainBtn.addEventListener('click', navigate);
navBtn.addEventListener('click', navigate);