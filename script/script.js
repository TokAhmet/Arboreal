$(document).ready(function () {

	var headerHeight = $("header").outerHeight(true);

	$(".slide-section").click(function (e) {
		var linkhref = $(this).attr("href");
		console.log(headerHeight);

		$("html, body").animate({
			scrollTop: $(linkhref).offset().top - headerHeight
		},1000);


		e.preventDefault();
	});
});

