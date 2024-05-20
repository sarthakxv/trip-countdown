var second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

var countDown = new Date("Jun 02, 2024 17:00:00").getTime(),
  x = setInterval(function () {
    var now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    // if (distance < 0) {
    //  clearInterval(x);
    // }
  }, second);
