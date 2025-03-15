// ========== Menu show Y Hidden ===========

const navMenuEl = document.getElementById('navMenu');
const navToggleEl = document.getElementById('navToggle');
const navCloseEl = document.getElementById('navClose');



// ========== Menu Show =========


navToggleEl.addEventListener('click', () => {
    navMenuEl.classList.add('show-menu');
})

navCloseEl.addEventListener('click', () => {
    navMenuEl.classList.remove('show-menu');
})


// ========== Remove menu mobile ===========

const navLinkEl = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenuEl = document.getElementById('navMenu');
    navMenuEl.classList.remove('show-menu');
}
navLinkEl.forEach(n => n.addEventListener('click', linkAction));


// =============== Accordion Skills ===============

const skillsContentEl = document.getElementsByClassName('skills-content');
const skillsHeaderEl = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContentEl.length; i++) {
        skillsContentEl[i].className = 'skills-content skills-close';
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    }
}

skillsHeaderEl.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

// ================ Qualification Tabs ===========

const tabsEl = document.querySelectorAll('[data-target]');
const tabContentEl = document.querySelectorAll('[data-content]');

tabsEl.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetEl = document.querySelector(tab.dataset.target);

        tabContentEl.forEach(tabContent => {
            tabContent.classList.remove('qualification-active');
        })
        targetEl.classList.add('qualification-active');

        tabsEl.forEach(tab => {
            tab.classList.remove('qualification-active');
        })
        tab.classList.add('qualification-active ');
    })
})

// ============== Services Modal ===============

const modalViewsEl = document.querySelectorAll('.services-modal');
const modalBtnsEl = document.querySelectorAll('.services-button');
const modalClosesEl = document.querySelectorAll('.services-modal-close');

let modal = function (modalClick) {
    modalViewsEl[modalClick].classList.add('active-modal');
}

modalBtnsEl.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalClosesEl.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViewsEl.forEach((modalViews) => {
            modalViews.classList.remove("active-modal")
        })
    })
})



/* ============= Portfolio Swiper =========== */

let swiperPortfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/* ============= Testimonial Swiper =========== */

let swiperTestimonial = new Swiper('.testimonial-container', {
    // cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//=================== Change background header ==================
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ================ Email JS ================
// const formEl = document.getElementById('uform');
// const nameEl = document.getElementById('uname');
// const emailEl = document.getElementById('uemail');
// const projectEl = document.getElementById('uproject');
// const messageEl = document.getElementById('umessage');
// const formBtnEl = document.getElementById('contactForm')
// const contactMessLbl = document.getElementById('contact-message');

// const sendEmail = (e) =>{
//     //check the field has a value
//     if(nameEl.value === '' || emailEl.value === '' || projectEl.value === '' || messageEl.value === ''){
//         // Add and remove color
//         contactMessLbl.classList.remove('color-blue');
//         contactMessLbl.classList.add('color-red');

//         //Show message
//         contactMessLbl.textContent = 'Write all the input fields'
//     }
//     else{
//         // serviceID - templateID - #form - publicKey
//         emailjs.sendForm('service_30i00vt','template_ss4j82r','#uform','JR-eFsHXd41bYXZQ5')
//         .then(() =>{
//             //Show message and add color
//             contactMessLbl.classList.add('color-blue');
//             contactMessLbl.textContent = 'Message sent ✅';

//             //Remove message after five seconds
//             setTimeout(() =>{
//                 contactMessLbl.textContent = ''
//             }, 5000)
//         })
//     }
// }
// formBtnEl.addEventListener('click', sendEmail);


//  EMAIL JS*

const contactForm = document.getElementById("contact-form"),
contactName = document.getElementById("contact-name"),
 contactEmail = document.getElementById("contact-email"),
 contactProject = document.getElementById("contact-project"),
 contactMessage = document.getElementById("contact-message")

const sendEmail = (e) =>{
    e.preventDefault()

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){

        //Add and Remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red');

        //show message
        contactMessage.textContent = "write all the input field"
    }else{
        //serviceID - templateId - #form - publckey
        emailjs.sendForm('service_30i00vt','template_ss4j82r','#contact-form','JR-eFsHXd41bYXZQ5')
        .then(()=>{
            //show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'
            //Remove message after five second
            setTimeout(() => { contactMessage.textContent = ''
                
            }, 5000);

        },(error) =>{
            alert('OOPS! SOMETHING HAS FAILED...',error)
        })

        //To clear the input field
        contactName.value =''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit',sendEmail)