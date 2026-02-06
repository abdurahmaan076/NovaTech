document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Variabelen
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    
    // 2. Hero & Scroll
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');

    // Hamburger klik
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Producten uitklappen in menu
    productToggle.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('open');
        productToggle.innerText = submenu.classList.contains('open') ? "📦 Producten ▴" : "📦 Producten ▾";
    });

    // Scroll actie met Zoom
    exploreBtn.addEventListener('click', () => {
        heroImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            document.getElementById('tech-section').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });

    // 3. KLEUR WISSELAAR VOOR iPHONES
    const colorDots = document.querySelectorAll('.dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const mainImg = card.querySelector('.main-img');
            const newImgSrc = this.getAttribute('data-img');

            // Update actieve stip
            card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // Verander de afbeelding met een fade effect
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
                mainImg.src = newImgSrc;
                mainImg.style.opacity = '1';
            }, 150);
        });
    });

    // 4. Winkelwagen Teller
    let count = 0;
    const cartCount = document.getElementById('cart-count');
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCount.innerText = count;
            btn.innerText = "✅ Toegevoegd";
            setTimeout(() => { btn.innerText = "In Winkelwagen"; }, 1000);
        });
    });

    // Sluit menu als je op link klikt
    document.querySelectorAll('.menu-sub-item, .menu-item').forEach(link => {
        if(link.id !== 'product-toggle') {
            link.addEventListener('click', () => mobileMenu.classList.remove('active'));
        }
    });
});
