const galleryHome=[
  {
    src:'./img/testimonials/1.jpg'
  },
  {
    src:'./img/testimonials/2.jpg'
  },
  {
    src:'./img/testimonials/3.jpg'
  },
  {
    src:'./img/testimonials/4.jpg'
  },
  {
    src:'./img/testimonials/5.jpg'
  },
  {
    src:'./img/testimonials/1.jpg'
  },
  {
    src:'./img/testimonials/2.jpg'
  },
  {
    src:'./img/testimonials/3.jpg'
  },
  {
    src:'./img/testimonials/4.jpg'
  },
  {
    src:'./img/testimonials/5.jpg'
  }
]

window.addEventListener('DOMContentLoaded',()=>{
  displayGalleryHome(galleryHome);
})

const gallerySection= document.querySelector('.flex-gallery');

function displayGalleryHome(images){
let gallery = images.map(function(item){
return `
<!-- IMAGE 1 -->
<div class="image-block">
  <div class="image">
    <img class="clickToOpen" src="${item.src}" alt="">
  </div>
</div>
<!-- IMAGE 1 ENDS -->
`;
});
gallery=gallery.join("");
gallerySection.innerHTML=gallery;
}