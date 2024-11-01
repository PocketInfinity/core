// Get modal element
const modal = document.getElementById('privacyModal');

// Get open modal button
const openModalButton = document.getElementById('openModal');

// Get close button
const closeModalButton = document.getElementById('closeModal');

// Listen for open click
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Listen for close click
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Listen for outside click
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
