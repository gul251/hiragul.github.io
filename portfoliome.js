



// typing animate
const words = ["Software Engineer", "Web Developer", "Graphic Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnd = false;
let typingActive = false; // observer se control karenge

function loop() {
  if (typingActive) { // sirf jab section visible ho
    isEnd = false;
    document.getElementById('typed').innerHTML = currentWord.join('');

    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord.push(words[i][j]);
        j++;
        document.getElementById('typed').innerHTML = currentWord.join('');
      }

      if (isDeleting && j <= words[i].length) {
        currentWord.pop(words[i][j]);
        j--;
        document.getElementById('typed').innerHTML = currentWord.join('');
      }

      if (j == words[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentWord = [];
        isDeleting = false;
        i++;
        if (i === words.length) {
          i = 0;
        }
      }
    }
  }

  const speed = isEnd ? 2000 : isDeleting ? 50 : 150;
  setTimeout(loop, speed);
}
loop();

// observer for typing section
let target = document.getElementById("typed"); // jis element par type show ho raha
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typingActive = true;  // section visible → start typing
    } else {
      typingActive = false; // section hidden → stop typing
    }
  });
}, { threshold: 0.3 });

observer.observe(target);

// Observe
document.querySelectorAll(".animate-section").forEach(section => {
  observer.observe(section);
});

  // Function to check if element is visible in viewport
function isInView(el) {
  let rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
// ✅ Reusable Scroll Observer Function
function animateOnScroll(sectionSelector, callback) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  let played = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !played) {
        console.log(`🎯 Triggered: ${sectionSelector}`);
        callback();
        played = true;
        observer.unobserve(section);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
}




//header
// 🎬 HEADER ANIMATION FUNCTION
function animateHeader() {
  const logo = document.querySelector(".logo");
  const nav = document.querySelector(".nav");
  const hire = document.querySelector(".hire-me");

  // remove animation first (to reset state)
  logo.style.animation = "none";
  nav.style.animation = "none";
  hire.style.animation = "none";

  // force reflow (for restart)
  void logo.offsetWidth;

  // re-apply the animations from CSS
  logo.style.animation = "slideLeft 1s ease-in-out forwards";
  nav.style.animation = "slideTop 1s ease-in-out forwards";
  hire.style.animation = "slideRight 1s ease-in-out forwards";
}

// 🔹 Base Scroll Observer Function (same as before)
function animateOnScroll(sectionSelector, callback) {
  const section = document.querySelector(sectionSelector);
  let played = false;

  if (section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !played) {
          callback();
          played = true;
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(section);
  }
}

//intro
// 🔹 Introduction Section Animation Function
function animateIntroduction() {
  const intro = document.querySelector(".introduction");
  if (!intro) return;

  const img = intro.querySelector("img");
  const h3 = intro.querySelector("h3");
  const h2 = intro.querySelector("h2");
  const h1 = intro.querySelector("h1");
  const p = intro.querySelector("p");
  const buttons = intro.querySelectorAll("button");

  // Reset all animations (so they can re-trigger properly)
  [img, h3, h2, h1, p, ...buttons].forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth; // force reflow
  });

  // Re-apply CSS animations smoothly
  img.style.animation = "slideRight 1s ease-in-out forwards";
  h3.style.animation = "slideLeft 0.8s ease-in-out forwards";
  h2.style.animation = "slideLeft 0.8s ease-in-out forwards";
  h1.style.animation = "slideLeft 0.8s ease-in-out forwards";
  p.style.animation = "slideLeft 0.9s ease-in-out forwards";

  buttons.forEach((btn, i) => {
    btn.style.animation = `slideBottom 1s ease-in-out ${i * 0.2}s forwards`;
  });
}

// 🔹 Observe Introduction Section
animateOnScroll(".introduction", animateIntroduction);

//about
// 🔹 About Me Section Animation Function
function animateAboutMe() {
  const about = document.querySelector(".aboutme");
  if (!about) return;

  const heading = about.querySelector("h2");
  const paragraph = about.querySelector("p");

  // Reset animations first
  [heading, paragraph].forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth; // force reflow to reset animation state
  });

  // Re-apply animations smoothly
  heading.style.animation = "slideTop 1s ease-in-out forwards";
  paragraph.style.animation = "slideBottom 1s ease-in-out 0.3s forwards";
}


//social
// 🔹 Social Icons Section Animation Function
function animateSocialIcons() {
  const section = document.querySelector(".Social-icons");
  if (!section) return;

  const heading = section.querySelector("h2");
  const oneSide = section.querySelector(".one-side");
  const anotherSide = section.querySelector(".another-side");
  const education = section.querySelector(".education");
  const socialImage = section.querySelector(".social-image");

  // Reset all animations first (for smooth re-trigger)
  [heading, oneSide, anotherSide, education, socialImage].forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth; // reflow to reset animation
  });

  // Re-apply animations from CSS
  heading.style.animation = "slideRight 1s ease-in-out forwards";
  oneSide.style.animation = "slideBottom 0.8s ease-in-out 0.2s forwards";
  anotherSide.style.animation = "slideBottom 0.9s ease-in-out 0.3s forwards";
  education.style.animation = "slideBottom 1s ease-in-out 0.4s forwards";
  socialImage.style.animation = "slideRight 1.2s ease-in-out 0.5s forwards";
}


//skls
// 🔹 Skills Animation Function
function animateSkills() {
  const skillSection = document.querySelector(".skills");
  const skills = document.querySelectorAll(".skill");

  // ✨ CSS animation ko trigger karna (bina CSS me likhe)
  skillSection.querySelectorAll("h2, p, .skills-1, .skills-2").forEach(el => {
    // Reset animation forcefully
    el.style.animation = "none";
    el.offsetHeight; // reflow (trick to restart)
    el.style.animation = ""; // CSS me jo animation likhi hai wo fir se chalegi
  });
  // Bar aur percentage animation
  skills.forEach(skill => {
    let bar = skill.querySelector(".fill");
    let percent = parseInt(bar.getAttribute("data-percent"));
    let span = skill.querySelector("span");

    let counter = 0;
    let interval = setInterval(() => {
      if (counter >= percent) {
        clearInterval(interval);
      } else {
        counter++;
        span.textContent = counter + "%";
        bar.style.width = counter + "%";
      }
    }, 20);
  });

 
}







//languages

// 🔹 Languages Animation Function
function animateLanguages() {
  const langSection = document.querySelector(".languages");

  // ✨ Trigger all existing CSS animations (restart)
  langSection.querySelectorAll("h2, p, #circle-1, #circle-2").forEach(el => {
    el.style.animation = "none";   // animation reset
    el.offsetHeight;               // reflow trick
    el.style.animation = "";       // CSS animation restart
  });

  // ✨ Animate circular progress dynamically
  document.querySelectorAll(".lang-circle").forEach(circle => {
    const percent = parseInt(circle.getAttribute("data-percent"));
    const circleDiv = circle.querySelector(".circle");
    const percentText = circle.querySelector(".percent");

    let current = 0;
    const interval = setInterval(() => {
      if (current >= percent) {
        clearInterval(interval);
      } else {
        current++;
        percentText.textContent = current + "%";
        circleDiv.style.background = `conic-gradient(#FFC007 ${current * 3.6}deg, #333 ${current * 3.6}deg)`;
      }
    }, 20);
  });
}

//projects
function animateProjects() {
  console.log("🎬 Projects animation triggered");

  // select all visible elements in Projects section
  const elements = document.querySelectorAll(
    '.projects h2, .projects .projects-p, .website h3, .website-p, .website-articles, .graphicdesigning h3, .graphicdesigning p, .graphicdesigning-articles, .graphicdesigning-article'
  );

  elements.forEach((el, i) => {
    // Start hidden
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
  });

  // Small delay to ensure transition works
  setTimeout(() => {
    elements.forEach((el, i) => {
      el.style.transition = `all 0.8s ease ${i * 0.15}s`;
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, 200);
}


//reviews
//animate
function animateReviews() {
    const elements = document.querySelectorAll(
        ".reviews h2, .stars, .result p, .form input, .form textarea, .form button, .review, #showMore"
    );

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
    });

    // Animate each element with delay
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "all 0.6s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 150); // stagger animation
    });
}

//services
//anmte
function animateServices() {
    const elements = document.querySelectorAll(
        ".services h2, .services p, .services-card"
    );

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
    });

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "all 0.6s ease-out";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 150); // stagger animation
    });
}

//hireme
//anmte
function animateHire() {
    const elements = document.querySelectorAll(
        "#hire-form h2, #hire-form h3, #hire-form label, #hire-form input, #hire-form select, #hire-form .budget-options label, #hire-form textarea, #hire-form button, #hire-form .hire-image"
    );

    // Initial state
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
    });

    // Staggered animation
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "all 0.6s ease-out";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 100); // 100ms delay per element
    });
}




//contact
// Pure JS animation function without CSS animations
function animateContact() {
    const elements = document.querySelectorAll(
        "#contactme-form h2, #contactme-form h3, #contactme-form input, #contactme-form textarea, #contactme-form button, #contactme-form .contact-image"
    );

    // Initial state
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
    });

    // Staggered animation
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "all 0.6s ease-out";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 150); // 150ms delay per element
    });
}



//base function sb k lia use karna h ik jsa h hga
//scroll
function animateOnScroll(sectionSelector, callback) {
  const section = document.querySelector(sectionSelector);
  let played = false; // ek hi dafa animation chalana hai

  if (section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !played) {
          callback();       // yaha apni animation function call kar do
          played = true;    // repeat se bachne ke liye
          observer.unobserve(section); // us section ko observe karna band
        }
      });
    }, { threshold: 0.3 }); // jab 30% section viewport me aaye

    observer.observe(section);
  }
}

//calling function ids from base function
//ids
animateOnScroll(".skills-list,.skills", animateSkills);
animateOnScroll(".languages", animateLanguages);
animateOnScroll(".projects", animateProjects );
animateOnScroll(".header",animateHeader)
animateOnScroll(".introduction",animateIntroduction)
animateOnScroll(".aboutme",animateAboutMe)
animateOnScroll(".Social-icons",animateSocialIcons)
animateOnScroll(".reviews", animateReviews);
animateOnScroll(".services", animateServices);
animateOnScroll('#contactme-form',animateContact);
animateOnScroll("#hire-form", animateHire);


//projects
const slides = document.querySelectorAll(".graphicdesigning-articles");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".slider-dots");

let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

const dots = document.querySelectorAll(".slider-dots span");

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
  });

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

// Initialize
updateSlider();


//review & ratings

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll("#starSelect span");
  const submitBtn = document.getElementById("submit");
  const resetBtn = document.getElementById("resetBtn");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const resultText = document.getElementById("result");
  const avgText = document.getElementById("avg");
  const reviewList = document.getElementById("reviewList");

  let selectedRating = 0;
  let totalRating = 0;
  let reviewCount = 0;

  // ⭐ star click
  stars.forEach((star, idx) => {
    star.addEventListener("click", () => {
      selectedRating = idx + 1;
      resultText.textContent = selectedRating;

      stars.forEach((s, i) => {
        s.style.color = i <= idx ? "gold" : "gray";
      });
    });
  });

  // ✅ submit review
  submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const msg = messageInput.value.trim();

    if (!selectedRating || !name || !msg) {
      alert("Please enter name, review and select stars!");
      return;
    }

    // review block
    const review = document.createElement("div");
    review.classList.add("reviewItem");
    review.style.borderBottom = "1px solid #ccc";
    review.style.margin = "10px 0";
    review.style.padding = "5px";
    review.innerHTML = `
      <div>${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</div> 
    <h4>${name}</h4>
     
      <p>${msg}</p>
    `;

    reviewList.appendChild(review);

    // average update
    totalRating += selectedRating;
    reviewCount++;
    avgText.textContent = (totalRating / reviewCount).toFixed(1);

    // reset form
    nameInput.value = "";
    messageInput.value = "";
    stars.forEach(s => (s.style.color = "gray"));
    selectedRating = 0;
    resultText.textContent = "0";
  });

  // 🔁 reset button
  resetBtn.addEventListener("click", () => {
    nameInput.value = "";
    messageInput.value = "";
    stars.forEach(s => (s.style.color = "gray"));
    selectedRating = 0;
    resultText.textContent = "0";
  });
});







  //hireme
// ✅ HIRE FORM TO WHATSAPP
document.getElementById("hireForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop normal form submission

    // Get values
    let hiringFor = document.getElementById("hiringFor").value;
    let category = document.getElementById("category").value;
    let budget = document.querySelector('input[name="budget"]:checked')?.value || "Not Selected";

    let company = document.getElementById("company").value;
    let companyName = document.getElementById("companyName").value;
    let companyWebsite = document.getElementById("companyWebsite").value;
    let hireMessage = document.getElementById("hireMessage").value;

    // Your WhatsApp number (with country code, no + or spaces)
    let phone = "923115907108"; // Replace with your number

    // Format WhatsApp message
    let whatsappMessage = `*New Hire Request*%0A
📌 Hiring For: ${hiringFor}%0A
📂 Category: ${category}%0A
💰 Budget: ${budget}%0A
🏢 Company/Personal: ${company}%0A
🏢 Company Name: ${companyName}%0A
🔗 Company Website: ${companyWebsite}%0A
📝 Message: ${hireMessage}`;

    // Open WhatsApp
    window.open("https://wa.me/" + phone + "?text=" + whatsappMessage, "_blank");
});


// ✅ CONTACT FORM TO WHATSAPP
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop normal form submission

    // Get values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    // Your WhatsApp number (with country code, no + or spaces)
    let phone = "923115907108"; // Replace with your number
// Format WhatsApp message
    let whatsappMessage = `*New Contact Message*%0A
👤 Name: ${name}%0A
📧 Email: ${email}%0A
📝 Subject: ${subject}%0A
💬 Message: ${message}`;

  // Open WhatsApp
    window.open("https://wa.me/" + phone + "?text=" + whatsappMessage, "_blank");
  });



const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section, footer");

// ✅ Smooth scroll + click color change
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll smooth
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }

    // Remove previous active, add to clicked
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ✅ Update color on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = "#" + section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
