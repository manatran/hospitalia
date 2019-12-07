// Counting down until
const countDownDate = new Date("Dec 5, 2019 19:00:00").getTime();

// Update every second
const x = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  // Countdown is over
  if (timeLeft < 0) {
    clearInterval(x);
    document.querySelector(".card").style.display = "none";
    document.querySelector("header").style.paddingBottom = "80px";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Set content of timer
  document.querySelector("#days").innerHTML = ("0" + days).slice(-2);
  document.querySelector("#hrs").innerHTML = ("0" + hours).slice(-2);
  document.querySelector("#mins").innerHTML = ("0" + minutes).slice(-2);
  document.querySelector("#secs").innerHTML = ("0" + seconds).slice(-2);
}, 1000);

// Secure emails
window.addEventListener("load", () => {
  const emails = document.querySelectorAll('a[href^="mailto:"]');
  for (let i = 0; i < emails.length; i++) {
    emails[i].href = emails[i].href.replace("(at)", "@").replace("(dot)", ".");
    emails[i].innerHTML = emails[i].innerHTML
      .replace("(at)", "@")
      .replace("(dot)", ".");
  }
});
