document.addEventListener("DOMContentLoaded", () => {
    // Desplazamiento suave para la navegación interna
    const navLinks = document.querySelectorAll('.nav-header a, .btn-primary');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});