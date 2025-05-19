const orgDetails = {
  hope: "Providing shelter, education, and love to orphaned children.",
  support: "Helping poor families with food and basic necessities.",
  children: "Empowering orphans through education and care programs.",
  community: "Working with local communities to fight poverty.",
  charity: "Join us in providing clothes, food, and hope to the underprivileged."
};

const select = document.getElementById('org-select');
const detailsDiv = document.getElementById('org-details');

select.addEventListener('change', () => {
  const value = select.value;
  detailsDiv.textContent = orgDetails[value] || "Please select an organization to see details.";
});




