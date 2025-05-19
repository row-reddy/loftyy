document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Example hardcoded credentials (replace with real validation)
    const validEmail = "user@lofty.com";
    const validPassword = "lofty123";

    if (email === validEmail && password === validPassword) {
      alert("Login successful! Redirecting...");
      window.location.href = "home.html"; // Redirect on success
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
