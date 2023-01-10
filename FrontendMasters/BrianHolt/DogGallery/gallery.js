const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    //we'll come back to you
});

nextBtn.addEventListener('click', function() {
    console.log('this happens');
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++; //currentlySelected = currentlySelected + 1;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
        console.log("You're done");
    }
});

