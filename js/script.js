let burgerMain = document.querySelector('.burger'),
	pageHeader = document.querySelector('.page-header'),
	pageExperienceWrapper = document.querySelector('.page-experience-wrapper'),
	buttonHome = document.querySelector('.button--home');
	modalHome = document.querySelector('#modalHome');
	modalBtn = document.querySelector('.modal-btn');

burgerMain.addEventListener('click', function(){
	burgerMain.classList.toggle("active");
	pageHeader.classList.toggle("visually-hidden");
});

buttonHome.addEventListener('click', function(){
	buttonHome.classList.toggle("hidden");
	buttonHome.classList.toggle("active");
	modalHome.classList.toggle("visually-hidden");
});
modalBtn.addEventListener('click', function(){
	buttonHome.classList.toggle("hidden");
	buttonHome.classList.toggle("active");
	modalHome.classList.toggle("visually-hidden");
});

// jquery
$('.info-title').click(function(event) {
	if ($('.experience__wrapper').hasClass('one')){
		$('.info-title').not($(this)).removeClass('active');
		$('.info-wrapper').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
});