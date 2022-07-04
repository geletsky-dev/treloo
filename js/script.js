

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const tabsLinkTickets = document.querySelectorAll(".search-block-tabs__link");
const tabsItemsTickets = document.querySelectorAll(".search-block-tabs__block");
const tabsLinkOffers = document.querySelectorAll(".offers-tabs__link");
const tabsItemsOffers = document.querySelectorAll(".offers-tabs__block");
const tabsLinkDestination = document.querySelectorAll(".destination-tabs__link");
const tabsItemsDestination = document.querySelectorAll(".destination-tabs__block ");

tabsLinkTickets.forEach(onTabClickTickets);

function onTabClickTickets(item) {
	item.addEventListener("click", function () {
		let currentLink = item;
		let linkId = currentLink.getAttribute("href");
		let currentBlock = document.querySelector(linkId);

		if ( ! currentLink.classList.contains('active')) {
			tabsLinkTickets.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItemsTickets.forEach(function (item) {
				item.classList.remove('active');
			});

			currentLink.classList.add('active');
			currentBlock.classList.add('active');
		}
	});
}

document.querySelector('.search-block-tabs__link').click();



tabsLinkOffers.forEach(onTabClickOffers);

function onTabClickOffers(item) {
	item.addEventListener("click", function () {
		let currentLink = item;
		let linkId = currentLink.getAttribute("href");
		let currentBlock = document.querySelector(linkId);

		if ( ! currentLink.classList.contains('active')) {
			tabsLinkOffers.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItemsOffers.forEach(function (item) {
				item.classList.remove('active');
			});

			currentLink.classList.add('active');
			currentBlock.classList.add('active');
		}
	});
}

document.querySelector('.offers-tabs__link').click();



tabsLinkDestination.forEach(onTabClickDestination);

function onTabClickDestination(item) {
	item.addEventListener("click", function () {
		let currentLink = item;
		let linkId = currentLink.getAttribute("href");
		let currentBlock = document.querySelector(linkId);

		if ( ! currentLink.classList.contains('active')) {
			tabsLinkDestination.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItemsDestination.forEach(function (item) {
				item.classList.remove('active');
			});

			currentLink.classList.add('active');
			currentBlock.classList.add('active');
		}
	});
}

document.querySelector('.destination-tabs__link').click();



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',

	navigation: {
		nextEl: '.feedbacks-button-next',
		prevEl: '.feedbacks-button-prev',
		},

	breakpoints: {
		// when window width is >= 320px
		1200: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			
		}
	
	}
 });