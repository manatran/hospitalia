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
