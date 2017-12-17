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

var slideIndex = 0;
carousel();

function carousel() {

    var x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {
    	slideIndex = 1;
    } 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}

