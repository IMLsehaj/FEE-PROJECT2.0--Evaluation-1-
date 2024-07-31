document.getElementById('open-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.content').classList.add('shifted');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.content').classList.remove('shifted');
});

// Slider manual navigation functionality
let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('.prev-btn').addEventListener('click', function() {
    moveSlides(-1);
});

document.querySelector('.next-btn').addEventListener('click', function() {
    moveSlides(1);
});

function moveSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.navigation-auto div');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex - 1) ? 'block' : 'none';
        dots[index].style.background = (index === slideIndex - 1) ? '#00c6ff' : '#c4c4c4';
    });
}