// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
});

// Form submission handling
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Here you would typically send this data to a server
  console.log("Form submitted:", { name, email, message });
  alert("Thank you for your message! I will get back to you soon.");

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// Add animation to skill cards on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".skill-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  observer.observe(card);
});

// Add typing effect to hero title
const heroTitle = document.querySelector(".hero-content h1");
const originalText = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    heroTitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typing effect when page loads
window.addEventListener("load", typeWriter);
