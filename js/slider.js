const slides = document.querySelectorAll('.slider-container');
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// let counter = 1;
// slides.forEach(function (slide, index) {
//   slide.style.left = `${index * 100}%`
// });

// nextBtn.addEventListener('click', () => {
//   counter++;
//   if(counter>slides.length-1){
//     prevBtn.click();
//   }

// });
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
  if (counter > slides.length - 1) {
    prevBtn.click();

  }
});

prevBtn.addEventListener("click", function () {
  counter--;

  carousel();

});

function carousel() {

  if (counter < slides.length - 1) {
    nextBtn.style.visibility = "visible";
  } else {
    nextBtn.style.visibility = "hidden";
  }
  if (counter > 0) {
    prevBtn.style.visibility = "visible";
  } else {
    prevBtn.style.visibility = "hidden";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.visibility = 'hidden';

function yourFunction() {
  if (counter < slides.length - 1) {
    
    nextBtn.click();

    carousel();
  } else {
    for (let i = 0; i < slides.length - 1; i++) {
      prevBtn.click()

    }
  }
  setTimeout(yourFunction, 7000);
}
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(yourFunction, 5000);
  animateSlide();
})


function animateSlide() {
  const slideAnimation = document.querySelectorAll('.slideAnimation');
  slideAnimation.forEach(function (animatorSlide) {
    animatorSlide.classList.add('animate__animated');
    animatorSlide.classList.add('animate__fadeInDown');
    setInterval(function () {
      removeAnimation();
    }, 2000);

  });

}
function removeAnimation() {
  const slideAnimation = document.querySelectorAll('.slideAnimation');
  slideAnimation.forEach(function (animatorSlide) {
    animatorSlide.classList.remove('animate__animated');
    animatorSlide.classList.remove('animate__fadeInDown');
  });

}
