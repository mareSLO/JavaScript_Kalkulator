var seconds_min = 60;
var mins_hour = 60;
var hours_day = 24;
var days_week = 7;
var week_year = 52;
var seconds_day = seconds_min * mins_hour * hours_day;
var your_name = prompt('Kako ti je ime?')
var years_alive = prompt('Koliko si star/a ?');
var days_alive = years_alive * 365;
var hours_alive = days_alive * hours_day;
var mins_alive = hours_alive * 60;
var seconds_alive = 365 * seconds_day * years_alive;
alert('Praviš da ti je ime ' + your_name + ' in da si star/a ' + years_alive + ' let. ' + ' Za nadaljevanje pritisni na OK.');
alert('Sedaj pa preračunajmo tvoja leta še v metrični čas:');
alert('Glede na izračun, si na zemlji že ' + hours_alive + ' ur, ' + mins_alive + ' minut, ' + ' ter ' + seconds_alive + ' sekund. ');





