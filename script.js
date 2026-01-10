document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-list li a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Simple scroll animation for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.menu-item, .about-content, .about-image, .testimonial, .image-item');
    hiddenElements.forEach((el) => observer.observe(el));
});
