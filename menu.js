document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    
    // Mostrar o menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        // Ocultar o menu quando o corpo for clicado
        if (mobileMenu.classList.contains('active')) {
            body.addEventListener('click', outsideClickListener);
        } else {
            body.removeEventListener('click', outsideClickListener);
        }
    });

    // Fechar o menu se o clique for fora do menu
    function outsideClickListener(event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
            body.removeEventListener('click', outsideClickListener);
        }
    }
});
