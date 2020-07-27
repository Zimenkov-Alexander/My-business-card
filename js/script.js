let burgerMain = document.querySelector('.burger'),
	pageHeader = document.querySelector('.page-header'),
	pageExperienceWrapper = document.querySelector('.page-experience-wrapper'),
	buttonHome = document.querySelector('.home__wrapper').querySelector('.button');
	modalHome = document.querySelector('#modalHome');
	// modalBtn = document.querySelector('.modal-btn');

burgerMain.addEventListener('click', function(){
	burgerMain.classList.toggle("active");
	pageHeader.classList.toggle("visually-hidden");
});

buttonHome.addEventListener('mouseover', function(){
	buttonHome.classList.remove("button--home");
	buttonHome.classList.add("button--active");
}),3000;
buttonHome.addEventListener('mouseout', function(){
	buttonHome.classList.remove("button--active");
	buttonHome.classList.add("button--home");
}),4000;




// modalBtn.addEventListener('click', function(){
// 	buttonHome.classList.toggle("hidden");
// 	buttonHome.classList.toggle("active");
// 	modalHome.classList.toggle("visually-hidden");
// });

// jquery
$('.info-title').click(function(event) {
	if ($('.experience__wrapper').hasClass('one')){
		$('.info-title').not($(this)).removeClass('active');
		$('.info-wrapper').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
});