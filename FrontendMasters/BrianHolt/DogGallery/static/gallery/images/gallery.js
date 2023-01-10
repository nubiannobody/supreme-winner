const prevBtn = document.querySelector('prev');
const nextBtn = document.querySelector('next');
const galleryImgs = document.querySelectorAll('.gallery-img');

prevBtn.addEventListener('click', function() {
    //we'll come back to you
});

nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");

});

