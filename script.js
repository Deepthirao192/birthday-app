function showMessage() {
document.getElementById("message").innerHTML =
"❤️ Happy Birthday! May your life always be successful, healthy and filled with happiness.";
}

const countdownElement = document.getElementById("countdown");

const birthday = new Date("2026-08-09T00:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = birthday - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "🎉 Happy Birthday! ❤️";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
