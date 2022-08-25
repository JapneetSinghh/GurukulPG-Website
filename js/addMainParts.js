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
    href:'#',
  },
  {
    id:7,
    name:'Contact',
    href:'./contact.html',
  },
]


const footerContainer = document.getElementsByTagName('footer');
const navbarContainer = document.querySelector('.navbar-dynamic');
window.addEventListener('DOMContentLoaded', () => {
  setNavbar();
  setFooter();
})
function setFooter() {
  footerContainer[0].innerHTML = `<div class="footer-header container">
  <div style="text-align:center">
    <h4>Address: </h4>
    <p>Competition Gurukul Building</p>
    <p style="margin:2px">40, Old Pankha Road, Opp Metro Pillar No.641, Uttam Nagar East, New Delhi, Delhi 110059</p>
  </div>
  <div>
    <h4>Reservation: </h4>
    <p>000-111-222
    </p>
    <p> contact@thecrispysnack.com</p>
  </div>
  <div>
    <h4>Open Hours: </h4>
    <p>Monday - Friday: 10 AM - 11 PM </p>
    <p>Saturday - Sunday: 9 AM - 1 PM</p>
  </div>
  </div>
  <div class="social-icons">
  <ul>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-behance"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-sketch"></i>
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
navbarContainer.innerHTML+=`<li><a href="${navObj.href}">${navObj.name}</a></li>`;
}
}

