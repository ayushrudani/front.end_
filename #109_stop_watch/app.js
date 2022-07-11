 second = 0;
 interval = null;
 document.getElementById('start').onclick = function() {
     start();
 }
 document.getElementById('stop').onclick = function() {
     stop();
 }
 document.getElementById('reset').onclick = function() {
     reset();
 }


 function timer() {
     second++;
     hr = Math.floor(second / 3600);
     min = Math.floor((second - (hr * 3600)) / 60);
     sec = second % 60;


     if (sec < 10) {
         sec = '0' + sec;
     }
     if (min < 10) {
         min = '0' + min;
     }
     if (hr < 10) {
         hr = '0' + hr;
     }
     document.getElementById('time').innerHTML = `${hr}:${min}:${sec}`;
 }

 function start() {
     if (interval) {
         return
     }
     interval = setInterval(timer, 1000);
 }

 function stop() {
     clearInterval(interval)
     interval = null;
 }

 function reset() {
     stop();
     second = 0;
     document.getElementById('time').innerHTML = '00:00:00'
 }