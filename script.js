var hourspan = document.getElementById("hour");
var minutespan = document.getElementById("minute");
var secondspan = document.getElementById("second");
var amorpmspan = document.getElementById("amorpm");
function Changetime() {
  var date = new Date();
  var hour = date.getHours();
  hourspan.textContent = hour;
  var minute = date.getMinutes();
  minutespan.textContent = minute;
  var second = date.getSeconds();
  secondspan.textContent = second;
  if (hour == 0) {
    amorpmspan.textContent = "am";
  } else if (hour > 0 && hour < 12) {
    amorpmspan.textContent = "am";
  } else {
    amorpmspan.textContent = "pm";
  }
}
setInterval(Changetime, 1000);
