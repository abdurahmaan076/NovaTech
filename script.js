document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');

    // Menu knoppen
    menuBtn.onclick = (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
    };

    productToggle.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        submenu.classList.toggle('open');
    };

    // Ontdek nu knop -> scrolt naar de "Best Verkocht" sectie
    exploreBtn.onclick = () => {
        document.getElementById('best-verkocht').scrollIntoView({ behavior: 'smooth' });
    };

    // Winkelwagen teller
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.onclick = () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            btn.innerText = "Toegevoegd!";
            setTimeout(() => { btn.innerText = "In Winkelwagen"; }, 1000);
        };
    });

    // Sluit menu bij klik op link of buiten menu
    document.onclick = () => mobileMenu.classList.remove('active');
});
