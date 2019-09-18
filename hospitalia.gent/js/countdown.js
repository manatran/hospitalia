// Counting down to:
const countDownDate = new Date("Nov 5, 2019 18:00:00").getTime();

// Update the count down every second
const x = setInterval(function() {
  // Current date
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Set content of elements
  document.getElementById("days").innerHTML = ("0" + days).slice(-2);
  document.getElementById("hrs").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("mins").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("secs").innerHTML = ("0" + seconds).slice(-2);

  // Countdown over!
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
