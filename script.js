// Wacht tot de hele pagina (DOM) geladen is
document.addEventListener('DOMContentLoaded', () => {
    
    // Alle elementen ophalen
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');
    const cartCountElement = document.getElementById('cart-count');

    // --- 1. HET HOOFDMENU (HAMBURGER) ---
    // Opent en sluit het witte uitklapmenu
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Voorkomt dat het menu meteen weer sluit
            mobileMenu.classList.toggle('active');
        });
    }

    // --- 2. HET SUBMENU (PRODUCTEN) ---
    // Zorgt dat de lijst met TV's, Telefoons etc. uitklapt
    if (productToggle && submenu) {
        productToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Zorgt dat het hoofdmenu open blijft terwijl je dit klikt
            submenu.classList.toggle('open');
        });
    }

    // --- 3. AUTO-SLUIT NA KLIK ---
    // Dit zorgt ervoor dat als je op 'Contact' of een product klikt, 
    // het menu direct dichtgaat zodat je de content kunt zien.
    const navLinks = document.querySelectorAll('.menu-item, .menu-sub-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // We sluiten het menu alleen als het een echte link is (met een #)
            // en niet de 'Producten' toggle knop zelf.
            if (link.id !== 'product-toggle') {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Klikken buiten het menu sluit het menu ook (gebruiksvriendelijk)
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // --- 4. HERO ANIMATIE & SCROLL ---
    if (exploreBtn && heroImg) {
        exploreBtn.addEventListener('click', () => {
            heroImg.style.transform = 'scale(1.1)'; // Zoom effect
            setTimeout(() => {
                const techSection = document.getElementById('tech-section');
                if (techSection) {
                    techSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
