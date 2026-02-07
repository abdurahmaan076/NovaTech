document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');

    // 1. Hamburger Openen/Sluiten
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // 2. Submenu Openen
    productToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Voorkomt dat het hele menu sluit bij het openen van submenu
        submenu.classList.toggle('open');
    });

    // 3. Sluit menu na klik op een link (voor mobiel gebruik)
    document.querySelectorAll('.menu-item, .menu-sub-item').forEach(link => {
        link.addEventListener('click', () => {
            // We sluiten het menu alleen als het geen uitklap-knop is
            if (link.id !== 'product-toggle') {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // 4. Scroll Actie Hero Button
    exploreBtn.addEventListener('click', () => {
        heroImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            document.getElementById('tech-section').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });

    // 5. Cart Teller
    let count = 0;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            btn.innerText = "Toegevoegd!";
            btn.style.background = "#00c3ff";
            setTimeout(() => { 
                btn.innerText = "In Winkelwagen"; 
                btn.style.background = "black";
            }, 1000);
        });
    });
});
