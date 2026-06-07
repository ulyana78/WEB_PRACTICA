document.addEventListener('DOMContentLoaded', () => {
    const burgerButtons = document.querySelectorAll('.header__burger, .mobile-burger');
    const menu = document.getElementById('headerMenu');

    if (burgerButtons.length && menu) {
       
        burgerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); 
                menu.classList.toggle('is-active');
            });
        });

        // Закрываем меню при клике в любое место экрана
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target)) {
                menu.classList.remove('is-active');
            }
        });
    }
});