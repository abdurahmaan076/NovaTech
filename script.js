// 1. Hamburger Menu Toggle
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Hamburger animatie (optioneel: de streepjes laten kruisen)
    const spans = menuBtn.querySelectorAll('span');
    spans[0].style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : 'none';
    spans[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translate(6px, -7px)' : 'none';
});

// 2. Scroll naar tech sectie
const exploreBtn = document.getElementById('explore-btn');
const techSection = document.getElementById('tech-section');
const heroImage = document.querySelector('.tv-image-container img');

exploreBtn.addEventListener('click', () => {
    // Zoom effect op de TV foto voordat we scrollen
    heroImage.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        techSection.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Korte vertraging voor de zoom-ervaring
});

// Sluit menu als je op een link klikt
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});
