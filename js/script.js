let burgerMain = document.querySelector('.burger'),
	pageHeader = document.querySelector('.page-header'),
	// infoTitle = document.querySelectorAll('.info-title'),
	// infoWrapper = document.querySelectorAll('.info-wrapper'),
	pageExperienceWrapper = document.querySelector('.page-experience-wrapper');

burgerMain.addEventListener('click', function(){
	burgerMain.classList.toggle("active");
	pageHeader.classList.toggle("visually-hidden");
});

$(document).ready(function() {
	$('.info-title').click(function(event) {
		if($('.experience__wrapper').hasClass('one')){
			$('.info-title').not($(this)).removeClass('active');
			$('.info-wrapper').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});