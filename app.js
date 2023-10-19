let hamburger = document.querySelector('.hamburger');
let mbl_nav_cont = document.querySelector('.mobile-nav-container');
let close_btn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    mbl_nav_cont.classList.toggle('active');
});

close_btn.addEventListener('click', () => {
    mbl_nav_cont.classList.toggle('active');
})

ScrollReveal({
    // reset: true,
    distance: '70px',
    duration: 1800,
    delay: 100
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.said-by , .service-invite, .arm ', { origin: 'bottom' });
ScrollReveal().reveal('.sundays , .fridays , .first-day-of-month', { origin: 'left' });
ScrollReveal().reveal('.wednesdays , .mondays', { origin: 'right' });

let quote1 = 'We are a WORD based church';

let quote2 = 'Sin is the Enterprise of the devil';

let quote3 = 'Christianity is the normal way of life';

const typed = new Typed('.words', {
    strings: [quote1, quote2, quote3],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 5000,
    loop: true,
});
