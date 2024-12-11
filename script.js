function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
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

document.addEventListener('DOMContentLoaded', function () {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbox = document.getElementById('chatbox');
  const chatAnswer = document.getElementById('chat-answer');
  const openChatbot = document.getElementById('open-chatbot'); // Live Chat trigger link

  // Handle chatbot toggle visibility
  chatbotToggle.addEventListener('click', function () {
    chatbox.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
  });

  // Open chatbot from "Live Chat" link
  openChatbot.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    chatbox.style.display = 'block'; // Show chatbot
  });

  // Dynamic answers based on clicks
  const questionResponses = {
    0: 'We offer various biotechnology products, including PCR machines and flow cytometers.',
    1: 'Our services include product support, technical consultations, and research solutions.',
    2: 'We serve industries like healthcare, pharmaceuticals, and academic research.',
    3: 'You can contact support at +1800-123-4567 or email us at support@genezyme.com.',
    4: 'Yes, we currently have promotions on bulk orders. Contact us for more details.',
    5: 'For all other inquiries, please reach out to our support team directly.',
  };

  const questionElements = document.querySelectorAll('.chat-questions .question');

  questionElements.forEach((questionEl, index) => {
    questionEl.addEventListener('click', function () {
      chatAnswer.innerText = questionResponses[index];
    });
  });
});
// Open the modal
function openModal() {
  const modal = document.getElementById('demo-modal');
  modal.style.display = 'block';
}

// Close the modal
function closeModal() {
  const modal = document.getElementById('demo-modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById('demo-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Handle form submission
const demoForm = document.getElementById('demo-form');
demoForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload
  alert('Demo session successfully scheduled!');
  closeModal(); // Close the modal after submission
});
const textElement = document.querySelector('.typing');
const textArray = ['Genomic Sequencing', 'Proteomic Analysis', 'Biomarker Identification', 'Custom Research Solutions'];
let i = 0;

document.addEventListener('DOMContentLoaded', function () {
  const typingElement = document.querySelector('.typing');
  const services = ['Genomic Sequencing', 'Proteomic Analysis', 'Biomarker Identification', 'Custom Research Solutions'];
  let serviceIndex = 0; // Tracks the current term being typed
  let charIndex = 0; // Tracks the current character being typed
  const typingSpeed = 100; // Speed of typing (in milliseconds)
  const pauseAfterWord = 1500; // Pause after typing each term (in milliseconds)

  function type() {
    if (charIndex < services[serviceIndex].length) {
      // Add the next character to the element
      typingElement.textContent += services[serviceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      // Pause after completing the term
      setTimeout(() => {
        charIndex = 0; // Reset character index
        serviceIndex = (serviceIndex + 1) % services.length; // Move to the next term
        typingElement.textContent = ''; // Clear the text
        type(); // Start typing the next term
      }, pauseAfterWord);
    }
  }

  type(); // Start the typing effect
});
