document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');

    // 1. Hamburger menu openen/sluiten
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
        };
    }

    // 2. Producten submenu uitklappen
    if (productToggle && submenu) {
        productToggle.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            submenu.classList.toggle('open');
        };
    }

    // 3. Klik buiten menu = menu sluiten
    document.onclick = () => {
        if (mobileMenu) mobileMenu.classList.remove('active');
    };

    // 4. Winkelwagen teller
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.onclick = () => {
            count++;
            const counter = document.getElementById('cart-count');
            if (counter) counter.innerText = count;
            
            btn.innerText = "✅ Toegevoegd";
            setTimeout(() => { btn.innerText = "In Winkelwagen"; }, 1000);
        };
    });

    // 5. Scroll naar beneden
    if (exploreBtn) {
        exploreBtn.onclick = () => {
            const target = document.getElementById('tv-sectie');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        };
    }
});
