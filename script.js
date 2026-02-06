document.addEventListener('DOMContentLoaded', () => {
    // Menu
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');

    menuBtn.onclick = () => mobileMenu.classList.toggle('active');
    
    productToggle.onclick = (e) => {
        e.preventDefault();
        submenu.classList.toggle('open');
        productToggle.innerText = submenu.classList.contains('open') ? "📦 Producten ▴" : "📦 Producten ▾";
    };

    // Hero Scroll
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');
    exploreBtn.onclick = () => {
        heroImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            document.getElementById('tech-section').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    // KLEUR WISSELAAR (Fix)
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const img = card.querySelector('.main-img');
            const newSrc = this.getAttribute('data-img');

            // Dots updaten
            card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // Afbeelding wisselen
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = newSrc;
                img.style.opacity = '1';
            }, 200);
        });
    });

    // Cart Teller
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.onclick = () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            btn.innerText = "✅ Toegevoegd";
            setTimeout(() => btn.innerText = "In Winkelwagen", 1000);
        };
    });
});
