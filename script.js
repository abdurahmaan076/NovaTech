document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');

    // 1. Hamburger menu openen en sluiten
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
        });
    }

    // 2. Submenu Producten openklappen
    if (productToggle) {
        productToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            submenu.classList.toggle('open');
        });
    }

    // 3. Menu sluiten bij link-klik of klik buiten menu
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // 4. Ontdek knop scroll actie
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            if (heroImg) heroImg.style.transform = 'scale(1.1)';
            setTimeout(() => {
                document.getElementById('tech-section').scrollIntoView({ behavior: 'smooth' });
            }, 300);
        });
    }

    // 5. Winkelwagen teller
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            const originalText = btn.innerText;
            btn.innerText = "Toegevoegd!";
            setTimeout(() => { btn.innerText = originalText; }, 1000);
        });
    });
});
