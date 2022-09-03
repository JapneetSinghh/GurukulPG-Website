const closeBtn=document.querySelector('.close-btn');
const navBar=document.querySelector('.navbar');
const toggleBtn=document.querySelector('.nav-toggle');


toggleBtn.addEventListener('click',()=>{
  console.log(navBar);
  console.log('hi')
  navBar.classList.toggle('show-navbar');
});

closeBtn.addEventListener('click',()=>{
  console.log(navBar);
  console.log('hi')
  navBar.classList.toggle('show-navbar');
})


// Fixed Navbar
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  const windowWidth=this.window.innerWidth;
  if(windowWidth<850){
    navBar.classList.remove("fixed-nav");
  }
})