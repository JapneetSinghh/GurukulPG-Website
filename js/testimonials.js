const data = [
  {
     id: 1,
     img: "./img/testimonials/1.jpg",
     custName:"Yash Tiwari",
     custLocn:"Uttar Pradesh",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"I have been living in Gurukul PG for the last 2 years preparing for the UPSC exam, and have experienced a stay-at-home feeling at this PG. The people working in pg are very cooperative and supportive. Food and Hygiene are taken well care off. The rooms are well-ventilated and clean. Overall facilities that this PG provides are remarkable in every sense. I would recommend it to everyone who wishes to have a pleasant, safe stay here"
  },
  {
     id: 2,
     img: "./img/testimonials/2.jpg",
     custName:"Japneet Singh",
     custLocn:"Janakpuri, New Delhi",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`,
     review:"Location of the PG is a very good metro station and bus terminal both are just in front of PG, rooms are spacious and well ventilated...Food is not like other PG’s, the food here is clean, warm and yummy, we can access the hostel kitchen anytime for making Maggi, coffee, tea, etc. Washrooms are cleaned daily. Their charges are also very nominal. I will definitely recommend it."
  },
  {
     id: 3,
     img: "./img/testimonials/3.jpg",
     custName:"Saarthak Trikha",
     custLocn:"Kanpur",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"Gurukul PG is one of the best PGs in Uttam Nagar, Janakpuri. For a reasonable price, Gurukul PG provides clean, furnished rooms and good food. The staff is very friendly and has helped me tremendously during my first stay in Delhi. The PG is located at a very good location which has all the coaching institutes, shops, restaurants, hospital within 100m radius. I would certainly recommend it for students or bachelors looking for a suitable PG within affordable limits."
  },
  {
     id: 4,
     img: "./img/testimonials/4.jpg",
     custName:"Harshjeet Singh",
     custLocn:"Bhiwadi, Haryana",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`,
     review:"Completed my 3 years of college while staying in Gurukul PG...during my first days in Delhi  I have faced many difficulties in searching for good pg. Had to shift many times.. but once I get into this PG my search was over.Gurukul PG provides homely comfort and clean and spacious rooms with housekeeping that cleans every room every day. Food is very good and changes every day. PG has a 7-day menu plan that serves different meals everyday. Travelling to college was very easy as PG is just opposite to metro station. "
  },
  {
     id: 5,
     img: "./img/testimonials/5.jpg",
     custName:"Ramanpreet Singh",
     custLocn:"Amritsar, Punjab",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`,
     review:"Very Easy to commute, PG is just opp to metro station and bus terminal. I was living in this PG for 2 years studying at Akash Institute (50m away from PG) and it was a great experience. The staff takes care of their guests just like family. Pg food is not just any PG food it's hygienic and delicious. Washrooms are clean, rooms are cleaned daily and every day we get something new to eat.      "
  },
  {
     id: 6,
     img: "./img/testimonials/6.jpeg",
     custName:"Ravindar Kumar",
     custLocn:"Patna, Bihar",
     rating:`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
     review:"Found this paying guest on Google and was really happy how it turned out to be. The hygiene and safety are well maintained. The rooms are great and spacious. It's better than renting a flat as you get all facilities and comfort here too. Their charges are also very nominal. I will definitely recommend it."
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



