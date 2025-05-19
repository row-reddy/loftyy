document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const formMessage = document.getElementById("formMessage");

  // Simple validation
  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // Simulate form submission (replace with real submission if needed)
  formMessage.style.color = "green";
  formMessage.textContent = "Thank you for contacting Lofty! We will get back to you soon.";

  // Clear form
  this.reset();
});

function validateEmail(email) {
  // Simple email regex validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
