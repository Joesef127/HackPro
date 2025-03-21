document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// form submit alert
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Message sent successfully! We'll get back to you shortly.");
});

// typing effect
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typing-text", {
    strings: ["Hire a Hacker", "Catch a Cheating Partner", "Find the Truth"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
  });
});

// scroll to top effect
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
