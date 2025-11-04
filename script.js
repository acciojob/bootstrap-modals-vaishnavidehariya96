// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get button and modal elements
  const openButton = document.getElementById('open-modal');
  const modalElement = document.getElementById('newton-modal');

  // Initialize Bootstrap modal instance
  const modal = new bootstrap.Modal(modalElement);

  // Show modal when button is clicked
  openButton.addEventListener('click', function () {
    modal.show();
  });

  // You can also close the modal programmatically (optional example)
  modalElement.addEventListener('hidden.bs.modal', function () {
    console.log('Modal closed!');
  });
});
