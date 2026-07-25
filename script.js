function showMessage() {
document.getElementById("message").innerHTML =
"❤️ Happy Birthday! May your life always be successful, healthy and filled with happiness.";
}

// Countdown starts here
const birthday = new Date("August 9, 2026 00:00:00").getTime();

setInterval(function () {

const now = new Date().getTime();
const distance = birthday - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";

}, 1000);
