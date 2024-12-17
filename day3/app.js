 const emojis = document.querySelectorAll('.emoji');
const feedbackInput = document.getElementById('feedback');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');
const feedbackContainer = document.querySelector('.feedback-container'); // Get the whole container
let selectedFeedback = '';

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    // Clear previous selections
    emojis.forEach(e => e.style.transform = 'scale(1)');
    // Mark selected emoji
    emoji.style.transform = 'scale(1.2)';
    // Set the selected feedback
    selectedFeedback = emoji.getAttribute('data-feedback');
  });
});

submitButton.addEventListener('click', () => {
  if (selectedFeedback) {
    const additionalFeedback = feedbackInput.value;
    feedbackContainer.innerHTML = `
      <p>Thank you for your feedback!</p>
      <p>You feel: <strong>${selectedFeedback}</strong></p>
      <p>Additional comments: ${additionalFeedback ? additionalFeedback : 'None'}</p>
    `;
  } else {
    // Show an error message if no emoji is selected
    result.innerHTML = '<p style="color: red;">Please select a feedback emoji!</p>';
  }
});
