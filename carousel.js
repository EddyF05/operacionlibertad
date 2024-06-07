document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showCurrentSlide() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToNextSlide() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        showCurrentSlide();
    }

    function goToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        showCurrentSlide();
    }

    nextButton.addEventListener('click', goToNextSlide);
    prevButton.addEventListener('click', goToPrevSlide);
});
