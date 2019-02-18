//console.dir(backdrop) //returns object notation of selected element
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector('.main-nav__item--cta');

//This opens the modal
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = "block"; //Inline CSS manipulations
        // backdrop.style.display = "block";
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 300);
    })
}

//when you click on the backdrop, modal and sideNav closes
backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

// when you click 'NO' on the modal, modal closes 
if (modalNoButton)
    modalNoButton.addEventListener('click', closeModal);

//This is the close modal function
function closeModal() {
    // modal.style.display = "none"; // Inline
    // backdrop.style.display = "none";// Styles
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.style.display = 'none';
    setTimeout(function() {
        backdrop.classList.remove('open');
    }, 300);
}

//opens sideNav when you click on hamburger
toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block'; //Inline
    // backdrop.style.display = "block"; // Styles
    mobileNav.classList.toggle('open');
    setTimeout(function() {
        backdrop.classList.toggle('open');
    }, 300);
})

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation iteration', event);
})