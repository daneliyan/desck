$(document).ready(function () {

	// -------------------- header --------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('header').addClass('active');
		}
		else {
			$('header').removeClass('active');
		}
	});

	// -------------------- burger --------------------------
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close'),
		body = document.querySelector('body');

	/*===== MENU SHOW =====*/
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			body.classList.add('dis-scroll');
		})
	}

	/*===== MENU HIDDEN =====*/
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			body.classList.remove('dis-scroll');
		})
	}

	/*=============== REMOVE MENU MOBILE ===============*/
	const navLink = document.querySelectorAll('.nav__link')

	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show-menu');
		body.classList.remove('dis-scroll');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));

	// --------------------- Tabs ---------------------------
	var tab = $('#technoTabs .tabs-items > div');
	tab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#technoTabs .tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#technoTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('#technoTabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	});
	// Отрытие вкладки из хеша URL
	if (window.location.hash) {
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#".window.location.hash).offset().top);
	}

	// -------------------- Acordion -------------------------
	$('.accordion-list > .accordion > .accordion-content').hide();
	$('.accordion-list > .accordion').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".accordion-content").slideUp();
		} else {
			$(".accordion-list > .accordion.active .accordion-content").slideUp();
			$(".accordion-list > .accordion.active").removeClass("active");
			$(this).addClass("active").find(".accordion-content").slideDown();
		}
		return false;
	});

	// ----------------- onClick Dropdown -------------------
	/*1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун*/
	// const menuBtns = document.querySelectorAll('.cldpd-btn');
	// const drops = document.querySelectorAll('.cldpd-content');
	// menuBtns.forEach(el => {
	// 	el.addEventListener('click', (e) => {
	// 		let currentBtn = e.currentTarget;
	// 		let drop = currentBtn.closest('.cldpd').querySelector('.cldpd-content');
	// 		menuBtns.forEach(el => {
	// 			if (el !== currentBtn) {
	// 				el.classList.remove('cldpd-btn--active');
	// 			}
	// 		});
	// 		drops.forEach(el => {
	// 			if (el !== drop) {
	// 				el.classList.remove('cldpd-content--active');
	// 			}
	// 		});
	// 		drop.classList.toggle('cldpd-content--active');
	// 		currentBtn.classList.toggle('cldpd-btn--active');
	// 	});
	// });
	// document.addEventListener('click', (e) => {
	// 	if (!e.target.closest('.cldpd')) {
	// 		menuBtns.forEach(el => {
	// 			el.classList.remove('cldpd-btn--active');
	// 		});
	// 		drops.forEach(el => {
	// 			el.classList.remove('cldpd-content--active');
	// 		});
	// 	}
	// });
	
	//--------------- fancybox -----------
	// $('[data-fancybox-popup]').fancybox({
	// 	closeExisting: true,
	// 	smallBtn: false,
	// 	toolbar: false,
	// 	autoFocus: false,
	// 	hash: false,
	// 	touch: false
	// });

	// FANCYBOX CERTIFICATE
	// ====================
	// $('[data-fancybox-certificate]').fancybox({
	// 	transitionEffect: 'fade',
	// 	animationEffect: false,
	// 	clickContent: false,
	// 	touch: true,
	// 	loop: true,
	// 	selector: '.cert-item',
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			ZOOM: 'Увеличить',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"zoom",
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });
	// $('[data-fancybox-gallery]').fancybox({
	// 	transitionEffect: 'fade',
	// 	animationEffect: false,
	// 	clickContent: false,
	// 	touch: true,
	// 	loop: true,
	// 	selector: '.gal-img',
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			NEXT: 'Вперёд',
	// 			PREV: 'Назад',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });

	// $('[data-fancybox="gallery"]').fancybox({
	// 	Thumbs: false,
	// 	Toolbar: false,
	// 	Image: {
	// 		zoom: false,
	// 		click: false,
	// 		wheel: "slide",
	// 	},
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			NEXT: 'Вперёд',
	// 			PREV: 'Назад',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });

	// ----------------- SWIPER ----------------------
	var swiper = new Swiper(".examplesSwiper", {
		navigation: {
			nextEl: ".swiper-button-next.examplesSwiper-next",
			prevEl: ".swiper-button-prev.examplesSwiper-prev",
		},
		pagination: {
			el: ".swiper-pagination.examplesSwiper-pagination",
			clickable: true,
		},
	});

	// -------------------- Scroll -------------------------
	// $(".scrolls").on("click", "a", function (event) {
	// 	// исключаем стандартную реакцию браузера
	// 	event.preventDefault();
	// 	// получем идентификатор блока из атрибута href
	// 	var id = $(this).attr('href'),
	// 		// находим высоту, на которой расположен блок
	// 		top = $(id).offset().top - 50;
	// 	// анимируем переход к блоку, время: 800 мс
	// 	$('body,html').animate({ scrollTop: top }, 800);
	// });

	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	//end
});