const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0; 

const showSlide = (n) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[n].classList.add('active');
};

prev.addEventListener('click', (event) => {
    event.stopPropagation(); // Adicione isto
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

next.addEventListener('click', (event) => {
    event.stopPropagation(); // Adicione isto
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Função para auto-play (opcional)
const autoPlay = () => {
    setInterval(() => {
        next.click();
    }, 5000); // Muda a imagem a cada 5 segundos
};

autoPlay();
