// donor.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('donor-form');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const type = document.getElementById('donationType').value;

    if (name && email && type) {
      successMessage.textContent = `Thank you, ${name}! Your donation will help change lives.`;
      form.reset();
    } else {
      successMessage.textContent = 'Please fill out all required fields.';
      successMessage.style.color = 'red';
    }
  });
});
