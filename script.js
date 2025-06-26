document.addEventListener('DOMContentLoaded', () => {
    // Agregar animación a las tarjetas de aguacate
    const avocadoCards = document.querySelectorAll('.avocado-card');
    avocadoCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.dataset.name;
            alert(`¡Hola! Soy un ${name} 🥑`);
        });
    });

    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.5
    });

    avocadoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(card);
    });
});
    // Agregar animación a las tarjetas de aguacate
    const avocadoCards = document.querySelectorAll('.avocado-card');
    avocadoCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.dataset.name;
            alert(`¡Hola! Soy un ${name} 🥑`);
        });
    });

    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.5
    });

    avocadoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(card);
    });

    // Botón de historias en el footer
    const storiesBtn = document.querySelector('footer a[href="#stories"]');
    storiesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('¡Vamos a descubrir las historias más jugosas del mundo del aguacate! 🥑');
        window.location.href = '#stories';
    });
