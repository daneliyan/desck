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
	const navLink = document.querySelectorAll('.nav__list li a')

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