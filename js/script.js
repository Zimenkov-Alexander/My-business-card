//TODO 1.Нужно переписать весь код на jQuery 2. Оптимизировать большенство функций 3. Разбить на модули 

let burgerMain = document.querySelector('.burger'),
	pageHeader = document.querySelector('.page-header'),
	mainNav = document.querySelector('.main-nav__wrapper');
	pageExperienceWrapper = document.querySelector('.page-experience-wrapper'),
	buttonHome = document.querySelector('.home__wrapper').querySelector('.button');
	modalHome = document.querySelector('#modalHome'),
	body = document.querySelector('body');

// Skills
let skillsHtml = document.querySelector('.level-html'),
	skillsCss = document.querySelector('.level-css'),
	skillsJs = document.querySelector('.level-javascript'),
	skillsReact = document.querySelector('.level-react'),
	skillsPhotoshop = document.querySelector('.level-photoshop'),
	skillsJira = document.querySelector('.level-jira'),
	skillsGithub = document.querySelector('.level-github'),
	skillsTesting = document.querySelector('.level-testing'),
	skillsWebpack = document.querySelector('.level-webpack'),
	skillsJquery = document.querySelector('.level-jquery'),
	skillsBem = document.querySelector('.level-bem'),
	skillsFigma = document.querySelector('.level-figma');


burgerMain.addEventListener('click', function(){
	burgerMain.classList.toggle("active");
	pageHeader.classList.toggle("active");

	if(burgerMain.classList.contains('active')){
		body.classList.add('lock');
	}else{
		body.classList.remove('lock');
	}

}),500;

buttonHome.addEventListener('mouseover', function(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		function addActive(){
			buttonHome.classList.remove("button--home");
			buttonHome.classList.add("button--active");
		}
		setTimeout(addActive,500)
	  } else {
		buttonHome.classList.remove("button--home");
		buttonHome.classList.add("button--active");
	}
}),2000;

buttonHome.addEventListener('mouseout', function(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		function addRemove(){
			buttonHome.classList.remove("button--active");
			buttonHome.classList.add("button--home");
		}
		setTimeout(addRemove,500)
	  } else {
		buttonHome.classList.remove("button--active");
		buttonHome.classList.add("button--home");
	}
}),2000;


// ? Отслеживание элемента на странице
// Получаем нужный элемент
let Visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
	// Если элемент полностью видно, то запускаем следующий код
		
	skillsHtml.classList.add('skills__html');
	skillsCss.classList.add('skills__css');
	skillsJs.classList.add('skills__javascript');
	skillsReact.classList.add('skills__react');
	skillsPhotoshop.classList.add('skills__photoshop');
	skillsJira.classList.add('skills__jira');
	skillsGithub.classList.add('skills__github');
	skillsTesting.classList.add('skills__testing');
	skillsWebpack.classList.add('skills__webpack');
	skillsJquery.classList.add('skills__jquery');
	skillsBem.classList.add('skills__bem');
	skillsFigma.classList.add('skills__figma');
  } else {
	// Если элемент не видно, то запускаем этот код
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		skillsHtml.classList.remove('skills__html');
		skillsCss.classList.remove('skills__css');
		skillsJs.classList.remove('skills__javascript');
		skillsReact.classList.remove('skills__react');
		skillsPhotoshop.classList.remove('skills__photoshop');
		skillsJira.classList.remove('skills__jira');
		skillsGithub.classList.remove('skills__github');
		skillsTesting.classList.remove('skills__testing');
		skillsWebpack.classList.remove('skills__webpack');
		skillsJquery.classList.remove('skills__jquery');
		skillsBem.classList.remove('skills__bem');
		skillsFigma.classList.remove('skills__figma');
	  }						
	}
};
// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (skillsReact);
});
// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (skillsReact);


// jquery
$(document).ready(function() {
    $('.info-title').click(function(event) {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			if ($('.experience__wrapper').hasClass('one')){
				$('.info-title').not($(this)).removeClass('active');
				$('.info-wrapper').not($(this).next()).slideUp(300);
			}
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
	
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});


