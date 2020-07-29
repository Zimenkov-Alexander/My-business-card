let burgerMain = document.querySelector('.burger'),
	pageHeader = document.querySelector('.page-header'),
	mainNav = document.querySelector('.main-nav__wrapper');
	pageExperienceWrapper = document.querySelector('.page-experience-wrapper'),
	buttonHome = document.querySelector('.home__wrapper').querySelector('.button');
	modalHome = document.querySelector('#modalHome');

// Skills
let skillsHtml = document.querySelector('.level-html'),
	skillsCss = document.querySelector('.level-css'),
	skillsScss = document.querySelector('.level-scss'),
	skillsJs = document.querySelector('.level-javascript'),
	skillsReact = document.querySelector('.level-react'),
	skillsPhotoshop = document.querySelector('.level-photoshop'),
	skillsJira = document.querySelector('.level-jira'),
	skillsGithub = document.querySelector('.level-github'),
	skillsTesting = document.querySelector('.level-testing');


burgerMain.addEventListener('click', function(){
	burgerMain.classList.toggle("active");
	pageHeader.classList.toggle("active");
}),3000;
buttonHome.addEventListener('mouseover', function(){
	buttonHome.classList.remove("button--home");
	buttonHome.classList.add("button--active");
}),3000;
buttonHome.addEventListener('mouseout', function(){
	buttonHome.classList.remove("button--active");
	buttonHome.classList.add("button--home");
}),4000;


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
	skillsScss.classList.add('skills__scss');
	skillsJs.classList.add('skills__javascript');
	skillsReact.classList.add('skills__react');
	skillsPhotoshop.classList.add('skills__photoshop');
	skillsJira.classList.add('skills__jira');
	skillsGithub.classList.add('skills__github');
	skillsTesting.classList.add('skills__testing');

  } else {
	// Если элемент не видно, то запускаем этот код
	
  };
};
// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (skillsTesting);
});
// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (skillsHtml);


// jquery
$('.info-title').click(function(event) {
	if ($('.experience__wrapper').hasClass('one')){
		$('.info-title').not($(this)).removeClass('active');
		$('.info-wrapper').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
});


$("#menu").on("click","a", function (event) {
	event.preventDefault();
	let id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});