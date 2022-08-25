
const arrowBtn = document.querySelector('.sideForm-block1');
const block2 = document.querySelector('.sideForm-block2');
const block3 = document.querySelector('.sideForm-block3');
const block4 = document.querySelector('.sideForm-block4');
const sideForm = document.querySelector('.sideForm-container');
const formCloseBtn = document.querySelector('.closeSideForm');
const opacity =document.querySelector('.opacity-control');

var Navstatus = true;

// OPEN CLOSE OF SIDE FORM BAR
arrowBtn.addEventListener('click', () => {
  console.log('hi i am arrow close btn');
  if (Navstatus === true) {
    block2.style.transform = 'translateX(60px)';
    block3.style.transform = 'translateX(60px)';
    block4.style.transform = 'translateX(60px)';
    arrowBtn.innerHTML = ' <i class="fa-solid fa-arrow-left"></i>'
    closeSideForm();
    setTimeout(() => {
      Navstatus = false;
    }, 500);
  }
  if (Navstatus === false) {
    block2.style.transform = 'translateX(0px)';
    block3.style.transform = 'translateX(0px)';
    block4.style.transform = 'translateX(0px)';
    arrowBtn.innerHTML = ' <i class="fa-solid fa-arrow-right"></i>'

    setTimeout(() => {
      Navstatus = true;

    }, 500);

  }
})

var sideFormStatus = true;

// OPEN CLOSE OF CONTACT US FORM
block2.addEventListener('mouseover', () => {
  console.log('hi i am contact us');
  if (sideFormStatus === false) {
    openSideForm();
  }

  if (sideFormStatus === true) {
    closeSideForm();
    setTimeout(() => {
    }, 500)
  }



})
// FORM CLOSED
function closeSideForm() {
  sideForm.style.width = '0px';
  block2.style.background = 'rgb(39, 82, 167)';
  opacity.style.opacity='0';  setTimeout(()=>{
    sideFormStatus=false;
  },300)

}
// FORM OPEN
function openSideForm() {
  sideForm.style.width = '350px';
  block2.style.background = 'rgb(43, 43, 65)';
  opacity.style.opacity='1';
  setTimeout(()=>{
    sideFormStatus=true;

  },300);
}


formCloseBtn.addEventListener('click', () => {
  closeSideForm();
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    openSideForm();
  }, 1500);
});