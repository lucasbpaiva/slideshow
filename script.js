let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// // Automatic slideshow
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// prev.style.display = "none";
// next.style.display = "none";
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let slides = document.querySelectorAll(".mySlides");
//   let dots = document.querySelectorAll(".dot");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dots[i].classList.remove("active");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex - 1].classList.add("active");
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }