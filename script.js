// Smooth Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


// Slider Functionality (Fixes Applied)
let currentIndex = 0;

function moveSlide(direction) {
  const wrapper = document.querySelector(".catalog-wrapper");
  const items = document.querySelectorAll(".catalog-item");
  
  if (!wrapper || items.length === 0) return;

  const itemWidth = items[0].offsetWidth + 20; // Include margin
  const visibleItems = Math.floor(wrapper.parentElement.offsetWidth / itemWidth);
  const totalItems = items.length;

  currentIndex += direction;

  // Ensure index stays within bounds
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalItems - visibleItems) {
    currentIndex = totalItems - visibleItems;
  }

  wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
// Chatbot Fix
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbox = document.getElementById("chatbox");
  const chatAnswer = document.getElementById("chat-answer");
  const openChatbot = document.getElementById("open-chatbot"); // Live Chat trigger link

  if (chatbotToggle && chatbox && openChatbot) {
    chatbotToggle.addEventListener("click", function () {
      chatbox.classList.toggle("show-chatbot");
    });

    openChatbot.addEventListener("click", function (event) {
      event.preventDefault();
      chatbox.classList.add("show-chatbot");
    });
  }

  // Chatbot Response Handling
  const questionResponses = {
    0: "We offer various biotechnology products, including PCR machines and flow cytometers.",
    1: "Our services include Molecular Biology, Identification and Diagnostic, Polyclonal Antibody Production, Agriculture, R&D, and Protein Related Services.",
    2: "We serve industries like laboratories, educational institutions, and academic research.",
    3: "You can contact support at +91-9900549000 or email us at genezyme.bio@gmail.com.",
    4: "Yes, we currently have promotions on bulk orders. Contact us for more details.",
    5: "For all other inquiries, please reach out to our support team directly.",
  };

  const questionElements = document.querySelectorAll(".chat-questions .question");

  if (questionElements) {
    questionElements.forEach((questionEl, index) => {
      questionEl.addEventListener("click", function () {
        chatAnswer.innerText = questionResponses[index];
      });
    });
  }

// Typing Effect
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing");
  const services = [
    "Molecular Biology",
    "Identification and Diagnostic",
    "Polyclonal Antibody Production",
    "Agriculture",
    "R&D",
    "Protein Related",
  ];
  let serviceIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const pauseAfterWord = 1500;

  function type() {
    if (charIndex < services[serviceIndex].length) {
      typingElement.textContent += services[serviceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        charIndex = 0;
        serviceIndex = (serviceIndex + 1) % services.length;
        typingElement.textContent = "";
        type();
      }, pauseAfterWord);
    }
  }

  type();
});

// Toggle Service Information
function toggleInfo(serviceId) {
  const currentCard = document.getElementById(serviceId).parentElement;
  const allCards = document.querySelectorAll(".service-card");
  const allInfos = document.querySelectorAll(".service-info");

  allCards.forEach((card) => {
    if (card !== currentCard) {
      card.classList.remove("expanded");
      card.querySelector(".service-info").style.display = "none";
    }
  });

  const info = document.getElementById(serviceId);
  if (info.style.display === "block") {
    info.style.display = "none";
    currentCard.classList.remove("expanded");
  } else {
    info.style.display = "block";
    currentCard.classList.add("expanded");
  }
}

// Product Hover Details
function showDetails(card) {
  const details = card.querySelector(".product-details");
  if (details) {
    details.style.display = "block";
  }
}

function hideDetails(card) {
  const details = card.querySelector(".product-details");
  if (details) {
    details.style.display = "none";
  }
}
