// JavaScript for mobile navigation toggling
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggler');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


// Simple Scroll Animation for Portfolio Items
document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    window.addEventListener('scroll', function () {
        portfolioItems.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add('show');
            }
        });
    });
});

document.addEventListener('mousemove', function (e) {
    const serviceCards = document.querySelectorAll('.service-card');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    serviceCards.forEach(function (card) {
        card.style.transform = `rotateY(${mouseX * 15}deg) rotateX(${-mouseY * 15}deg)`;
    });
});


// Additional animations or interactivity
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.06)';  // Optional additional interactivity
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotateY(0deg)';
    });
});


// Hover effect for additional 3D transformations
document.querySelectorAll('.terms-content h2').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'perspective(1000px) rotateX(15deg)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg)';
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for reaching out AlphaCode Solutions! We will get back to you soon.");
    }
});


document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.testimonial-card-inner').style.transform = 'rotateY(180deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.testimonial-card-inner').style.transform = 'rotateY(0)';
    });
});


document.querySelectorAll('.privacy-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.privacy-card-inner').style.transform = 'rotateY(180deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.privacy-card-inner').style.transform = 'rotateY(0)';
    });
});

// Floating Snippets
function createFloatingSnippets() {
    const floatingContainer = document.querySelector('.floating-snippets');
    const snippets = ['<div>', '<AlphaCode>', '<button>', '</div>', '</Solutions>'];

    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        span.textContent = snippets[Math.floor(Math.random() * snippets.length)];

        const x = Math.random() * 100;
        const duration = Math.random() * 10 + 10; // Between 10s and 20s
        const delay = Math.random() * -20; // Start randomly within animation range

        span.style.left = `${x}%`;
        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `${delay}s`;

        floatingContainer.appendChild(span);
    }
}

document.addEventListener('DOMContentLoaded', createFloatingSnippets);
