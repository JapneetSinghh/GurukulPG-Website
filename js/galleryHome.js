const galleryHome=[
  {
    src:'./img/Building/Gurukul-pg-building-2.jpg'
  },
  {
    src:'./img/Double Occupancy/Gurukul-pg-uttamNagar-Janakpuri-double-occupancy-11.jpg'
  },
  {
    src:'./img/Single Occupancy/Gurukul-pg-uttamNagar-Janakpuri-single-occupancy-11.jpg'
  },  
  {
    src:'./img/Lobby/Pg_in_delhi_janakpuri_lobby-5.jpg'
  }, 
  {
    src:'./img/Washroom/Gurukul-pg-uttamNagar-janakpuri-washrooms-8.jpg'
  }, 
  {
    src:'./img/Food/Gurukul-pg-food-4.jpg'
  }, 
  {
    src:'./img/Gym/Gurukul_pg_uttamNagar_janakpuri_gym5.jpg'
  }, 
  {
    src:'./img/Single Occupancy/Gurukul-pg-uttamNagar-Janakpuri-single-occupancy-13.jpg'
  },
  {
    src:'./img/Food/Gurukul-pg-food-2.jpg'
  },
  {
    src:'./img/Rest/Gurukul-pg-amenities-9.jpg'
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