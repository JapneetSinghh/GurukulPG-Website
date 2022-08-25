setTimeout(() => {
  clickToOpenImages();


}, 2000);

function sleep(){
  setTimeout(()=>{
    clickToOpenImages();

  },1200)
}

function clickToOpenImages(){
  const images = document.querySelectorAll('.clickToOpen');

const activeImage = document.querySelector('.modalOpenImg');
const modalContainer = document.querySelector('.modalForClickImage');
const modalCloseBtn = document.querySelector('.closeImageModal');
const ModalImageNext = document.querySelector('.nextModalImg');
const ModalImagePrev = document.querySelector('.prevModalImg');
const innerContainer = document.querySelector('.modalClickImage-container');
var activeIndex = 0;


// OPEN MODAL WHEN IMG IS CLICKED
images.forEach(function (image, index) {
  image.addEventListener('click', () => {
    // console.log(image, index);
    modalContainer.style.display = 'grid';
    activeIndex = index;
  innerContainer.style.opacity='1';
    // activeImage.src = images[index].src;
    setTimeout(()=>{
      setAnimation();
      setActiveImage(activeIndex);
    },500)

  });
});

// CLOSE BTN
modalCloseBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
  activeImage.src='./img/loader.gif';
});

// PREV BTN
ModalImagePrev.addEventListener('click', function () {
  activeIndex--;
  modalCloseBtn.style.opacity='0';
  setAnimation();
  setActiveImage(activeIndex);
});
document.onkeydown = checkKey;

function checkKey(e) {

  window.event;

  if (e.keyCode == '37') {
    if(activeIndex!==0)
    ModalImagePrev.click();
    
  }
  else if (e.keyCode == '39') {
    if(activeIndex !== images.length - 1)
    ModalImageNext.click();
  }

}


// ModalImageNEXT BTN
ModalImageNext.addEventListener('click', function () {
  activeIndex++;
  modalCloseBtn.style.opacity='0';
  setAnimation();
  setActiveImage(activeIndex);

});


function setActiveImage(index) {
  if (index === 0) {
    ModalImagePrev.style.visibility = 'hidden';
  } else {
    ModalImagePrev.style.visibility = 'visible';
  }

  if (index === images.length - 1) {
    ModalImageNext.style.visibility = 'hidden';
    console.log(index);

  } else {
    ModalImageNext.style.visibility = 'visible';
  }
  setTimeout(() => {
    activeImage.src = images[index].src;
  }, 600)

}

function setAnimation() {
  innerContainer.style.transform = 'scaleY(0.4)';
  innerContainer.style.transform = 'scaleX(0.4)';
  innerContainer.style.opacity = '0';
  setTimeout(() => {
    innerContainer.style.transform = 'scaleY(1)';
    innerContainer.style.transform = 'scaleX(1)';
    innerContainer.style.opacity = '1';
    modalCloseBtn.style.opacity='1';
  }, 600);
}
}
