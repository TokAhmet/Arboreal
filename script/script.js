$(document).ready(function () {

	var headerHeight = $("header").outerHeight();

	$(".slide-section").click(function (e) {
		var linkhref = $(this).attr("href");
		var mq = 

		$("html, body").animate({
			scrollTop: $(linkhref).offset().top - headerHeight
		},1000);


		e.preventDefault();
	});
});