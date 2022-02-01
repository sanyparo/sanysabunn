$(".bar").click(function () {
	$(this).toggleClass('active');
	$("header").toggleClass('panelactive');
});
$("header a").click(function () {
	$(".bar").removeClass('active');
	$("header").removeClass('panelactive')
})