$(document).ready(function () {
	$('select').niceSelect();
	$('.navigation__toggler').click(function () {
		$('.menu').toggleClass('menu--togled');
	});
});