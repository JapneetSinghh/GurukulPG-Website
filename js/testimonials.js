const data = [
  {
     id: 1,
     img: "./img/testimonials/1.jpg",
     custName:"Yash Tiwari",
     custLocn:"Uttar Pradesh",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"nt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam!nt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam!"
  },
  {
     id: 2,
     img: "./img/testimonials/2.jpg",
     custName:"Japneet Singh",
     custLocn:"Janakpuri, New Delhi",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`,
     review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consequuntur illo id? Incidunt in non deserunt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam! "
  },
  {
     id: 3,
     img: "./img/testimonials/3.jpg",
     custName:"Saarthak Trikha",
     custLocn:"Kanpur",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"Aiam!nt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam!"
  },
  {
     id: 4,
     img: "./img/testimonials/4.jpg",
     custName:"Harshjeet Singh",
     custLocn:"Bhiwadi, Haryana",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`,
     review:"Aiam!nt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam!"
  },
  {
     id: 5,
     img: "./img/testimonials/5.jpg",
     custName:"Ramanpreet Singh",
     custLocn:"Amritsar, Punjab",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`,
     review:"Aiam!nt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dict harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dict harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam!"
  },
  {
     id: 6,
     img: "./img/testimonials/6.jpeg",
     custName:"Ravindar Kumar",
     custLocn:"Patna, Bihar",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"Aiam!nt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dict harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dict harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam!"
  },
  {
     id: 7,
     img: "./img/testimonials/7.jpg",
     custName:"Lakshay Khurana",
     custLocn:"Jaipur, Rajasthan",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consequuntur illo id? Incidunt in non deserunt animi! Quibusdam obcaecati corporis totam eaque magnam illo impedit et harum nemo blanditiis inventore ipsa natus distinctio fuga, rerum ex veritatis minus dicta? Aperiam! "
  }
];


const leftCust=document.querySelector('.customer-img-left');
const centerCust=document.querySelector('.customer-center');
const rightCust=document.querySelector('.customer-img-right');
const reviewCust=document.querySelector('.customerReview');
var left=0;
var center=1;
var right=2;

const prev=document.getElementById('prevCustomer');
const next=document.getElementById('nextCustomer');
// console.log(prev);
// console.log(next);
// next btn
next.addEventListener('click',()=>{
if(right != data.length){
  center++;
  right++;
  left++;
 setData();
}
else{
  console.log('data over');
}
});
// prev btn
prev.addEventListener('click',()=>{
if(left!= -1){
  center--;
  right--;
  left--;
console.log(left,center,right);
 setData();

}
else{
  console.log('data over')
}
console.log(left,center,right);
});





window.addEventListener('DOMContentLoaded',()=>{
  setData();
})

function setData(){
  const obj1=data[left];
  const obj2=data[center];
  const obj3=data[right];
  
  

// SETTING CUSTOMER IMAGES
if(left===-1){
  leftCust.src='';
  prev.style.display='none';
  leftCust.style.visibility='hidden';


 }
else{
  leftCust.src=obj1.img;
  prev.style.display='block';
  leftCust.style.visibility='visible';


}

if(right===data.length){
  rightCust.style.visibility='hidden';
  next.style.display='none';

}else{
  rightCust.style.visibility='visible';
  rightCust.src=obj3.img;
next.style.display='block';

}

centerCust.innerHTML=
`
<img class="customer-img" src="${obj2.img}" alt="">        
<p class="customerName">${obj2.custName}</p>
<p class="customerLocn">${obj2.custLocn}</p>
<p class="customerRating">${obj2.rating}</p>
`;
reviewCust.innerHTML=`${obj2.review}`;

}



