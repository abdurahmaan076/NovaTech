// 1. Hamburger Menu Toggle & Animatie
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Hamburger animatie: de streepjes veranderen in een X
    const spans = menuBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// 2. Scroll naar tech sectie met Zoom effect
const exploreBtn = document.getElementById('explore-btn');
const techSection = document.getElementById('tech-section');
const heroImage = document.querySelector('.tv-image-container img');

exploreBtn.addEventListener('click', () => {
    // Zoom effect op de TV foto voordat we scrollen
    heroImage.style.transform = 'scale(1.15)';
    
    setTimeout(() => {
        techSection.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Korte vertraging voor de zoom-ervaring
    
    // Zoom herstellen na scrollen (zodat het weer normaal is als je teruggaat)
    setTimeout(() => {
        heroImage.style.transform = 'scale(1)';
    }, 1500);
});

// 3. Winkelwagen Teller Logica
let count = 0;
const cartDisplay = document.getElementById('cart-count');

// Zoek alle knoppen met de class 'btn-add'
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', () => {
        // Teller verhogen
        count++;
        cartDisplay.innerText = count;
        
        // Visuele feedback op de knop
        const originalText = button.innerText;
        button.innerText = '✅ Toegevoegd';
        button.style.backgroundColor = '#00c3ff';
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = ''; // Reset naar CSS kleur
        }, 1000);
    });
});

// 4. Sluit menu automatisch als je op een link klikt
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        
        // Reset hamburger animatie
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});
