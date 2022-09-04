const navBarLinks=[
  {
    id:1,
    name:'Home',
    href:'./index.html',
  },
  {
    id:2,
    name:'About',
    href:'./about.html',
  },
  {
    id:3,
    name:'Rooms',
    href:'./rooms.html',
  },
  {
    id:4,
    name:'Meals',
    href:'./menu.html',
  },
  {
    id:5,
    name:'Gallery',
    href:'./gallery.html',
  },
  {
    id:6,
    name:'Blog',
    href:'https://gurukulpg.in/blog/',
  },
  {
    id:7,
    name:'Contact',
    href:'./contact.html',
  },
]


const footerContainer = document.getElementsByTagName('footer');
const navbarContainer = document.querySelector('.navbar-dynamic');
const contactTop=document.querySelector('#contact-top');



window.addEventListener('DOMContentLoaded', () => {
  setNavbar();
  setFooter();
  addContactTop();
  setSocialIcons();
})

function setFooter() {
  footerContainer[0].innerHTML = `<div class="footer-header container">
  <div>
        <img width="130px" src="./img/logo.png" alt="">
        <h4 style="font-size: 20px;margin: 5px;">Gurukul Pg</h4>
        <p style="text-align: center; font-size:14px">Welcome to Gurukul PG for boys, a clean and furnished Paying Guest with a focus on providing Safety, Affordability and Comfort.
         <br> Gurukul PG is a reasonably priced option that offers all the facilities you need. A few of the benefits that are included in the total rent are air conditioning as per your preference, fully furnished large rooms...
          </p>
          <a class="btn2" href="about.html">Read More</a>
      </div>
  <div style="text-align:center; padding:10px">
    <h4>Address: </h4>
    <p>Competition Gurukul Building</p>
    <p style="margin:2px">40, Old Pankha Road, Opp Metro Pillar No.641, Uttam Nagar East, New Delhi, Delhi 110059</p>
  </div>
  <div>
    <h4>Reservation: </h4>
    <p> 9313565406
    </p>
    <p> invoice@gurukulpg.in</p>
  </div>
  
  </div>
  <div class="social-icons">
  <ul>
    <li>
      <a href="https://www.facebook.com/Gurukul-PG-ACNon-AC-PG-for-Boys-in-Janakpuri-Uttam-Nagar-Delhi-1458678364414154/">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://wa.me/message/UB5ILPOGTBYQL1">
        <i class="fab fa-whatsapp"></i>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCIzl07NnUOT_uQxU3uK_kzQ">
        <i class="fab fa-youtube"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/pggurukul/?hl=en">
        <i class="fab fa-instagram"></i>
      </a>
    </li>
  </ul>
  </div>
  <p class="footer-line">COPYRIGHT © 2022, GURUKUL PG . DESIGNED BY JAPNEET SINGH BALUJA</p>`;
}

function setNavbar() {
  // console.log(navbarContainer);
navbarContainer.innerHTML='';
for(let i=0;i<=navBarLinks.length-1;i++){
const navObj=navBarLinks[i];
navbarContainer.innerHTML+=`<li><a target="_blank" href="${navObj.href}">${navObj.name}</a></li>`;
}
}


function addContactTop(){
  contactTop.innerHTML=`    <div class="contacts-info">
  <h3 style="margin: 0;"><i class="fa-solid fa-phone"></i></h3>
  <p>9313565406 &nbsp;&nbsp; 9911-620-684</p>
</div>
<div class="contacts-info">
  <h3><i class="fa-solid fa-location-dot"></i> </h3>
  <div>
    <p style="font-size:14px ;line-height: 17px;">A-38,39,40, Old Pankha Road, Opp
      Metro Pillar No.641, Uttam Nagar East, New Delhi, Delhi 110059</p>
  </div>
</div>
<div class="contacts-info">
  <h3 style="margin: 0;"><i class="fa-solid fa-envelope"></i></h3>
  <div>
    <p>invoice@gurukulpg.in</p>
  </div>
</div>`;
}

const socialIcons=document.querySelector('.social-icons');

function setSocialIcons(){
  socialIcons.innerHTML=`
  <ul>
  <li>
    <a href="https://www.facebook.com/Gurukul-PG-ACNon-AC-PG-for-Boys-in-Janakpuri-Uttam-Nagar-Delhi-1458678364414154/">
      <i class="fab fa-facebook"></i>
    </a>
  </li>
  <li>
    <a href="https://wa.me/message/UB5ILPOGTBYQL1">
      <i class="fab fa-whatsapp"></i>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/channel/UCIzl07NnUOT_uQxU3uK_kzQ">
      <i class="fab fa-youtube"></i>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/pggurukul/?hl=en">
      <i class="fab fa-instagram"></i>
    </a>
  </li>
</ul>
  `
}