// Smooth Scrolling Function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form Submit Alert
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
});
let currentIndex = 0;

function moveSlide(direction) {
  const wrapper = document.querySelector('.catalog-wrapper');
  const items = document.querySelectorAll('.catalog-item');
  const itemWidth = items[0].offsetWidth + 20; // Includes margin
  const visibleItems = Math.floor(wrapper.parentElement.offsetWidth / itemWidth);
  const totalItems = items.length;

  // Calculate new index
  currentIndex += direction;

  // Limit index range
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalItems - visibleItems) {
    currentIndex = totalItems - visibleItems;
  }

  // Move wrapper
  wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
