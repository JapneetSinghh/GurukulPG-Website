
const GallerySource=[
  {
    type:'lobby',
    src:'./img/gallery/1.jpg',
    alt:''
  },
  {
    type:'Washroom',
    src:'./img/gallery/2.jpg',
    alt:''
  },
  {
    type:'Single-Occupancy-Room',
    src:'./img/gallery/3.jpg',
    alt:''
  },
  {
    type:'Double-Occupancy-Room',
    src:'./img/gallery/4.jpg',
    alt:''
  },
]
const galleryContainer=document.querySelector('#gallery-images');
console.log(galleryContainer);
const btnGalleryContainer=document.querySelector('.gallery-types');
displayGalleryMenu();
displayAllImages(GallerySource);

// FUNCTION TO DISPLAY ALL Images
function displayAllImages(galleryItems) {

  let displayItems = galleryItems.map(function (list) {


    // DYNAMICALLY ADDING DATA 

    return ` <div  class="gallery-box">
               <img class="clickToOpen" src="${list.src}" alt="${list.alt}">
              </div> `;

  });
  displayItems = displayItems.join("");

  // ADDING DATA TO THE WINDOW FROM ARRAY 
  galleryContainer.innerHTML = displayItems;
}



// DISPLAYING GALLERY NAVBAR BTNS
function displayGalleryMenu(){
// CREATING ARRAY FOR BTN TYPES
const galleyCategories=GallerySource.reduce(function(values,item){
  if(!values.includes(item.type)){
    values.push(item.type);
    // console.log(values);
   }
   return values;  
 },
 ["All"]
 );
console.log(galleyCategories);


// ADDING ARRAY DATA TO NAVBAR AS BTNS
const categoryBtns = galleyCategories
  .map(function (btn) {
    return `<li><button type="button" class="btn" data-id=${btn}>
        ${btn}
      </button><li>`;
  })
  .join("");
  console.log(categoryBtns);
  btnGalleryContainer.innerHTML=categoryBtns;

  const filterGalleryBtns=btnGalleryContainer.querySelectorAll('.btn');

  filterGalleryBtns.forEach(function(btn){
   
    btn.addEventListener("click",function(e){
      filterGalleryBtns.forEach((btn2)=>{
        btn2.style.background='none';
      btn2.style.borderColor='white';

       })
      btn.style.background='var(--mustard)';
      btn.style.borderColor='var(--mustard)';
      const type=e.currentTarget.dataset.id;
      const galleryCat=GallerySource.filter(function(list){
        if(list.type === type){
          return list;
        }
      });
      if (type === "All") {
       displayAllImages(GallerySource);
     } else {
       displayAllImages(galleryCat);
     }
 
    });
 
  });



}
