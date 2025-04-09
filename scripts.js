// script.js

// Get the scroll button element
const scrollBtn = document.getElementById('scrollBtn');

// Function to check scroll and show/hide the button
function checkScroll() {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// Add click event to scroll smoothly to the top
scrollBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// In script.js (after the scroll button code)

// Select all elements that should fade in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5  // Adjust this value based on when you want the animation to trigger
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
