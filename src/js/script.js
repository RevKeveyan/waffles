
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo__menu__ithems'),
        menuItem = document.querySelectorAll('.promo__menu__link'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__menu__ithems_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('promo__menu__ithems_active');
            });
        });
    });