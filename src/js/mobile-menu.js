function mobileMenu() {
    let el = document.querySelector('.header__inner')
    let toggle = document.querySelector('.header__label')
    toggle.addEventListener('click', function() {
        el.classList.toggle('active');
    })
    
}

mobileMenu();