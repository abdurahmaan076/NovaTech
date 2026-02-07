// Wacht tot de pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');

    // 1. Hamburger Openen
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // 2. Submenu Openen
    productToggle.addEventListener('click', () => {
        submenu.classList.toggle('open');
    });

    // 3. Scroll Actie
    exploreBtn.addEventListener('click', () => {
        heroImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            document.getElementById('tech-section').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });

    // 4. Cart Teller
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            btn.innerText = "Toegevoegd!";
            setTimeout(() => { btn.innerText = "In Winkelwagen"; }, 1000);
        });
    });
});
