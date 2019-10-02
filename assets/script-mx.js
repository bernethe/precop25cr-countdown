'use strict';
var countDownDate,x,now,distance;
const init = (eAI) => {
	countDownDate = new Date("Oct 8, 2019 08:00:00").getTime();
	x = setInterval(refreshDate, 1000);
	refreshDate();
};
const refreshDate = (eRD) => {
	now = new Date().getTime();
	distance = countDownDate - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	//let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById('day_txt').innerHTML = days;
	document.getElementById('hour_txt').innerHTML = hours;
	document.getElementById('min_txt').innerHTML = minutes;
	//document.getElementById('sec_txt').innerHTML = zeroFirst(seconds);
};
document.addEventListener('DOMContentLoaded', init, !1);