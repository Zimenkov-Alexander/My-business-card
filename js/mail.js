$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				let formModal = document.querySelector('modal-form');
				formModal.classList.remove('visually-hidden');
				setTimeout(function(){
					formModal.classList.add('visually-hidden');
				},1500)
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});