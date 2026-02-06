document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger
    const menuBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // 2. Scroll & Zoom
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');
    const target = document.getElementById('tech-section');

    exploreBtn.addEventListener('click', () => {
        heroImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });

    // 3. Teller
    let count = 0;
    const countDisplay = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.btn-add');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            countDisplay.innerText = count;
            btn.innerText = "Toegevoegd!";
            btn.style.background = "#00c3ff";
            setTimeout(() => {
                btn.innerText = "In Winkelwagen";
                btn.style.background = "black";
            }, 1000);
        });
    });
});
