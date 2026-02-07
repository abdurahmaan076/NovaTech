document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');

    // 1. Menu toggles
    menuBtn.onclick = (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
    };

    productToggle.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        submenu.classList.toggle('open');
    };

    // 2. Ontdek nu: Kies een willekeurige TV
    exploreBtn.onclick = () => {
        const tvs = document.querySelectorAll('.tv-item');
        const randomIndex = Math.floor(Math.random() * tvs.length);
        const randomTv = tvs[randomIndex];

        // Scroll naar de TV
        randomTv.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Geef de gekozen TV even een blauwe rand
        tvs.forEach(tv => tv.classList.remove('highlight-tv'));
        setTimeout(() => {
            randomTv.classList.add('highlight-tv');
        }, 500);
    };

    // 3. Winkelwagen
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.onclick = () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            btn.innerText = "✅";
            setTimeout(() => { btn.innerText = "In Winkelwagen"; }, 1000);
        };
    });

    // Sluit menu bij klik buiten
    document.onclick = () => mobileMenu.classList.remove('active');
});
