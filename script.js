document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementen ophalen
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');

    // 2. Hamburger Menu Toggle
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            console.log("Menu geklikt!"); // Zo kun je zien in F12 of hij werkt
        });
    }

    // 3. Producten Submenu Toggle
    if (productToggle && submenu) {
        productToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            submenu.classList.toggle('open');
            console.log("Submenu geklikt!");
        });
    }

    // 4. Sluit menu als je op een link klikt
    document.querySelectorAll('.menu-item, .menu-sub-item').forEach(link => {
        link.addEventListener('click', () => {
            if (link.id !== 'product-toggle') {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // 5. Sluit menu als je ergens anders op het scherm klikt
    document.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.remove('active');
    });
});
