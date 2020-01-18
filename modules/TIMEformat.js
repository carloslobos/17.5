var os = require('os');
var colors = require('colors');


function showTime() {
    var secNumb = os.uptime();
    var hours = Math.floor(secNumb / 3600);
    var minutes = Math.floor((secNumb - (hours * 3600)) / 60);
    var seconds = secNumb - (hours * 3600) - (minutes * 60);
    var time = hours + 'godz.' + minutes + 'min.' + seconds + 'sec.';
    return console.log('Uptime: '.green + time);
}

exports.print = showTime;