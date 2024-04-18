let slides = document.querySelectorAll('.image-slide');
let currentIndex = 0; 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    currentIndex = index;
}

function changeSlide(index) {
    showSlide(index);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}


showSlide(0);


setInterval(nextSlide, 1000);
