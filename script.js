document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const mainImg = document.getElementById('main-display');

    dots.forEach(dot => {
        dot.onclick = function() {
            // Pak de naam van de foto uit de HTML (de blauwe tekst)
            const fotoNaam = this.getAttribute('data-img');
            
            // Verander de foto bovenin
            mainImg.src = fotoNaam;

            // Verplaats de blauwe cirkel
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        };
    });
});
