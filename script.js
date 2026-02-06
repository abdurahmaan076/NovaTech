document.addEventListener('DOMContentLoaded', () => {
    // 1. Zoek alle kleur-bolletjes op de pagina
    const dots = document.querySelectorAll('.dot');
    
    // 2. Zoek de winkelwagen teller (als je die hebt)
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    // 3. Zorg dat elk bolletje luistert naar een KLIK
    dots.forEach(dot => {
        dot.onclick = function() {
            // Zoek de product-kaart waar dit bolletje in zit
            const card = this.closest('.product-card');
            
            // Zoek de grote afbeelding binnen DEZE kaart
            const mainImg = card.querySelector('.main-img');

            // --- DE FOTO WISSEL ---
            // De computer pakt hier de link die jij op de BLAUWE plek in de HTML hebt gezet:
            const nieuweFotoLink = this.getAttribute('data-img');

            // Maak de foto heel even doorzichtig voor een mooi effect
            mainImg.style.opacity = '0.3';

            setTimeout(() => {
                // Verander de bron (src) naar jouw nieuwe link
                mainImg.src = nieuweFotoLink;
                // Maak de foto weer volledig zichtbaar
                mainImg.style.opacity = '1';
            }, 150);

            // --- DE BLAUWE CIRKEL WISSEL ---
            // Haal de blauwe rand weg bij alle bolletjes in deze kaart
            card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            // Zet de blauwe rand op het bolletje waar je net op klikte
            this.classList.add('active');
        };
    });

    // 4. Optioneel: Bestel-knop logica
    const orderBtn = document.querySelector('.btn-bestel');
    if (orderBtn) {
        orderBtn.onclick = function() {
            count++;
            if (cartCount) cartCount.innerText = count;
            
            const originalText = this.innerText;
            this.innerText = "✅ Toegevoegd!";
            this.style.backgroundColor = "#28a745"; // Groen
            
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = "#005cff"; // Terug naar blauw
            }, 1500);
        };
    }
});
