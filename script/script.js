$(document).ready(function () {

	$(".slide-section").click(function (e) {
		var linkhref = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(linkhref).offset().top
		},1000);


		e.preventDefault();
	});
});