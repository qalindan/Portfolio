document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Toggle dark/light mode
    const moonIcon = document.querySelector('.fa-moon');
    moonIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});