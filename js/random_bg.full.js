$(document).ready(function() {
	var imgId = Math.floor((Math.random()*29)+1);
	var bgImg = 'url(bg-img/' + imgId + '.jpg)';
	$('body').css({'background':bgImg, 'background-size':'cover', });
});