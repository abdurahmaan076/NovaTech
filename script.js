// 1. Hamburger Menu & Animatie
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Streepjes animatie
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

// 2. SUBMENU PRODUCTEN UITKLAPPEN
const productToggle = document.getElementById('product-toggle');
const submenu = document.getElementById('submenu');

productToggle.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.classList.toggle('open');
    // Verander het pijltje
    productToggle.innerText = submenu.classList.contains('open') ? "📦 Producten ▴" : "📦 Producten ▾";
});

// 3. Scroll naar tech sectie met Zoom
const exploreBtn = document.getElementById('explore-btn');
const techSection = document.getElementById('tech-section');
const heroImage = document.querySelector('.tv-image-container img');

exploreBtn.addEventListener('click', () => {
    heroImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        techSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
});

// 4. Winkelwagen Teller
let count = 0;
const cartDisplay = document.getElementById('cart-count');

document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartDisplay.innerText = count;
        button.innerText = "Toegevoegd!";
        setTimeout(() => { button.innerText = "In Winkelwagen"; }, 1000);
    });
});
