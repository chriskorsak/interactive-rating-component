const form = document.querySelector('#rating-form');
const feedbackDiv = document.querySelector('#feedback');
const thankYouDiv = document.querySelector('#thank-you');

form.addEventListener('submit', e => {
  e.preventDefault();
  // get rating value
  const ratings = document.getElementsByName('rating');
  const selectedRating = [...ratings].filter(rating => rating.checked === true);
  // if no rating selected exit function
  if (selectedRating.length === 0) return;
  // update dom
  populateMessage(selectedRating[0].defaultValue);
  showThankYou();
});

function populateMessage(rating) {
  document.querySelector('#rating').textContent = rating;
}

function showThankYou() {
  feedbackDiv.style.display = 'none';
  thankYouDiv.style.display = 'block';
}
