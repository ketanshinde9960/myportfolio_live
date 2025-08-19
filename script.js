// ========== Menu show & hide ===========
const navMenuEl = document.getElementById('navMenu');
const navToggleEl = document.getElementById('navToggle');
const navCloseEl = document.getElementById('navClose');

// Show menu
navToggleEl.addEventListener('click', () => {
    navMenuEl.classList.add('show-menu');
});

// Close menu
navCloseEl.addEventListener('click', () => {
    navMenuEl.classList.remove('show-menu');
});

// Remove menu on mobile when a link is clicked
const navLinkEl = document.querySelectorAll('.nav-link');
function linkAction() {
    navMenuEl.classList.remove('show-menu');
}
navLinkEl.forEach(n => n.addEventListener('click', linkAction));

// =============== Accordion Skills ===============
const skillsContentEl = document.getElementsByClassName('skills-content');
const skillsHeaderEl = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContentEl.length; i++) {
        skillsContentEl[i].className = 'skills-content skills-close';
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    }
}
skillsHeaderEl.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

// ================ Qualification Tabs ===========
const tabsEl = document.querySelectorAll('[data-target]');
const tabContentEl = document.querySelectorAll('[data-content]');

tabsEl.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetEl = document.querySelector(tab.dataset.target);
        tabContentEl.forEach(tabContent => tabContent.classList.remove('qualification-active'));
        targetEl.classList.add('qualification-active');

        tabsEl.forEach(t => t.classList.remove('qualification-active'));
        tab.classList.add('qualification-active');
    });
});

// ============== Services Modal ===============
const modalViewsEl = document.querySelectorAll('.services-modal');
const modalBtnsEl = document.querySelectorAll('.services-button');
const modalClosesEl = document.querySelectorAll('.services-modal-close');

let modal = function (modalClick) {
    modalViewsEl[modalClick].classList.add('active-modal');
};

modalBtnsEl.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => modal(i));
});

modalClosesEl.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalViewsEl.forEach(modalView => modalView.classList.remove('active-modal'));
    });
});

// ============= Portfolio Swiper ===========
let swiperPortfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    mousewheel: true,
    keyboard: true,
});

// ============= Testimonial Swiper ===========
let swiperTestimonial = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
    breakpoints: { 568: { slidesPerView: 2 } },
});

//==================== Scroll Sections Active Link ====================
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if(navLink) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

//=================== Change background header ==================
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//==================== Show Scroll Top ====================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//==================== Dark Light Theme ====================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

//==================== EmailJS Integration ====================
(function() {
  emailjs.init("WJS5lPgCsTxU86P8d"); // ✅ Your Public Key
})();

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("form-status");

const sendEmail = (e) => {
  e.preventDefault();

  // Optional: treat Project as optional
  if(contactName.value.trim() === '' || contactEmail.value.trim() === '' || contactProject.value.trim() === '') {
    contactMessage.style.color = "red";
    contactMessage.textContent = "⚠️ Please fill in all fields";
    return;
  }

  emailjs.sendForm("service_fy7aj2o", "template_4isee1t", "#contact-form")
    .then(() => {
      contactMessage.style.color = "green";
      contactMessage.textContent = "✅ Message sent successfully!";
      contactForm.reset();
      setTimeout(() => { contactMessage.textContent = ''; }, 5000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      contactMessage.style.color = "red";
      contactMessage.textContent = "❌ Failed to send. Please try again later.";
    });
};

contactForm.addEventListener("submit", sendEmail);
