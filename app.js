ScrollReveal({
    // reset: true,
    distance: '70px',
    duration: 1800,
    delay: 100
});

ScrollReveal().reveal('#landing_text', { origin: 'bottom' });
ScrollReveal().reveal('#landing_text_ref', { origin: 'left' });
ScrollReveal().reveal('.arm', { origin: 'left' });

const quotes = [
    {
        quote: "I can do all things through Christ who strengthens me.",
        verse: "- Philippians 4:13"
    },
    {
        quote: "For I know the plans I have for you, declares the Lord.",
        verse: "- Jeremiah 29:11"
    },
    {
        quote: "The Lord is my shepherd; I shall not want.",
        verse: "- Psalm 23:1"
    },
    {
        quote: "I am the way, the truth, and the life.",
        verse: "- John 14:6"
    },
    {
        quote: "For we walk by faith, not by sight.",
        verse: "- 2 Corinthians 5:7"
    },
    {
        quote: "Pray without ceasing.",
        verse: "- 1 Thessalonians 5:17"
    },
    {
        quote: "Cast all your anxiety on him because he cares for you.",
        verse: "- 1 Peter 5:7"
    },
];

const quoteElement = document.getElementById('landing_text');
const verseElement = document.getElementById('landing_text_ref');
const button = document.getElementById('change-quote-btn');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = `"${randomQuote.quote}"`;
    verseElement.textContent = randomQuote.verse;
});

const hamburger = document.getElementById("hamburger");
const slide_nav_cont = document.getElementById("slide_nav_cont"); 
const close_btn = document.getElementById("menu_close_btn");

hamburger.addEventListener("click",  () => {
    slide_nav_cont.classList.toggle("active");
});

close_btn.addEventListener("click",  () => {
    slide_nav_cont.classList.toggle("active");
});

window.addEventListener("scroll" , () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("blury" , window.scrollY > 100);
})
