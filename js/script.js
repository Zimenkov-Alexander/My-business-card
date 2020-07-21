let burgerMain = document.querySelector('.burger');
let pageHeader = document.querySelector('.page-header');

burgerMain.addEventListener('click', function(){
	burgerMain.classList.toggle("active");
	pageHeader.classList.toggle("visually-hidden");
});
