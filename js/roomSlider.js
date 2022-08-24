
const roomSlides = document.querySelectorAll('.roomSlideImg2');
const nextRoomBtn = document.querySelector(".roomSlideNext2");
const prevRoomBtn = document.querySelector(".roomSlidePrev2");

let counterRoomSlide = 0;
nextRoomBtn.addEventListener("click", function () {
  counterRoomSlide++;
  Roomcarousel();
  console.log('hi');
  if (counterRoomSlide > roomSlides.length - 1) {
    prevRoomBtn.click();
  }
});

prevRoomBtn.addEventListener("click", function () {
  counterRoomSlide--;

  Roomcarousel();

});

function Roomcarousel() {

  if (counterRoomSlide < roomSlides.length - 1) {
    nextRoomBtn.style.visibility = "visible";
  } else {
    nextRoomBtn.style.visibility = "hidden";
  }
  if (counterRoomSlide > 0) {
    prevRoomBtn.style.visibility = "visible";
  } else {
    prevRoomBtn.style.visibility = "hidden";
  }
  roomSlides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counterRoomSlide * 100}%)`;
  });
}
prevRoomBtn.style.visibility = 'hidden';

function yourRoomSlideFunction() {
  if (counterRoomSlide < roomSlides.length - 1) {
    nextRoomBtn.click();
    Roomcarousel();
  } else {
    for (let i = 0; i < roomSlides.length - 1; i++) {
      prevRoomBtn.click()
    }
  }
  setTimeout(yourRoomSlideFunction, 7000);
}
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(yourRoomSlideFunction, 5000);
 
})


const roomSlides2 = document.querySelectorAll('.roomSlideImg');
const nextRoomBtn2 = document.querySelector(".roomSlideNext");
const prevRoomBtn2 = document.querySelector(".roomSlidePrev");

let counterRoomSlide2 = 0;
nextRoomBtn2.addEventListener("click", function () {
  counterRoomSlide2++;
  Roomcarousel2();
  console.log('hi');
  if (counterRoomSlide2 > roomSlides2.length - 1) {
    prevRoomBtn2.click();
  }
});

prevRoomBtn2.addEventListener("click", function () {
  counterRoomSlide2--;

  Roomcarousel2();

});

function Roomcarousel2() {

  if (counterRoomSlide2 < roomSlides2.length - 1) {
    nextRoomBtn2.style.visibility = "visible";
  } else {
    nextRoomBtn2.style.visibility = "hidden";
  }
  if (counterRoomSlide2 > 0) {
    prevRoomBtn2.style.visibility = "visible";
  } else {
    prevRoomBtn2.style.visibility = "hidden";
  }
  roomSlides2.forEach(function (slide) {
    slide.style.transform = `translateX(-${counterRoomSlide2 * 100}%)`;
  });
}
prevRoomBtn2.style.visibility = 'hidden';

function yourRoomSlideFunction2() {
  if (counterRoomSlide2 < roomSlides2.length - 1) {
    nextRoomBtn2.click();
    Roomcarousel2();
  } else {
    for (let i = 0; i < roomSlides2.length - 1; i++) {
      prevRoomBtn2.click()
    }
  }
  setTimeout(yourRoomSlideFunction2, 7000);
}
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(yourRoomSlideFunction2, 5000);
 
})
