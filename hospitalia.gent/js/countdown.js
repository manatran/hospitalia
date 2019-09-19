// Counting down to:
const countDownDate = new Date("Nov 5, 2019 18:00:00").getTime();

// Update the count down every second
const x = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  // Countdown over!
  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Set content of elements
  document.getElementById("days").innerHTML = ("0" + days).slice(-2);
  document.getElementById("hrs").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("mins").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("secs").innerHTML = ("0" + seconds).slice(-2);
}, 1000);
