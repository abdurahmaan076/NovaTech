// Deze functie zorgt dat de code pas start als de website helemaal geladen is
document.addEventListener('DOMContentLoaded', () => {
    
    // --- STAP 1: ALLE ELEMENTEN OPZOEKEN ---
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const productToggle = document.getElementById('product-toggle');
    const submenu = document.getElementById('submenu');
    const exploreBtn = document.getElementById('explore-btn');
    const heroImg = document.getElementById('hero-img');
    const cartCountElement = document.getElementById('cart-count');

    // --- STAP 2: HET HOOFDMENU (HAMBURGER) ---
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            // e.stopPropagation zorgt dat de klik niet 'doorlekt' naar de rest van de pagina
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            console.log("Hoofdmenu geactiveerd");
        });
    }

    // --- STAP 3: HET PRODUCTEN SUBMENU ---
    if (productToggle && submenu) {
        productToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Zorgt dat het hoofdmenu open blijft
            submenu.classList.toggle('open');
            console.log("Submenu geactiveerd");
        });
    }

    // --- STAP 4: AUTO-SLUIT NA KLIK OP LINK ---
    // Als je op 'Contact' of een product klikt, moet het menu dicht
    const navLinks = document.querySelectorAll('.menu-item, .menu-sub-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // We sluiten alleen als het geen uitklap-knop is
            if (link.id !== 'product-toggle') {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // --- STAP 5: KLIKKEN BUITEN HET MENU ---
    // Als je ergens anders op het scherm klikt, gaat het menu ook dicht
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        }
    });

    // --- STAP 6: HERO SCROLL KNOP ---
    if (exploreBtn && heroImg) {
        exploreBtn.addEventListener('click', () => {
            heroImg.style.transform = 'scale(1.1)';
            setTimeout(() => {
                const techSection = document.getElementById('tech-section');
                if (techSection) {
                    techSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    }

    // --- STAP 7: WINKELWAGEN TELLER ---
    let count = 0;
    const addButtons = document.querySelectorAll('.btn-add');
    
    addButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            if (cartCountElement) {
                cartCountElement.innerText = count;
            }

            const originalText = btn.innerText;
            btn.innerText = "✅ Toegevoegd!";
            btn.style.backgroundColor = "#00c3ff";
            
            setTimeout(() => { 
                btn.innerText = originalText;
                btn.style.backgroundColor =
