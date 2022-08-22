const roomsData = [
  {
    RoomName: 'Single Occupancy',
    RoomType: 'With AC',
    RoomContent: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit error saepe, ex ratione rem facilis magnam aut quae earum nihil maiores eveniet adipisci sunt repellendus inventore id quibusdam blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis odio non, cupiditate quam fuga blanditiis dignissimos minima dolorem maiores!`,
    RoomImg: './img/gallery/1.jpg',
  },
  {
    RoomName: 'Double Occupancy',
    RoomType: 'With AC',
    RoomContent: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit error saepe, ex ratione rem facilis magnam aut quae earum nihil maiores eveniet adipisci sunt repellendus inventore id quibusdam blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis odio non, cupiditate quam fuga blanditiis dignissimos minima dolorem maiores!`,
    RoomImg: './img/gallery/3.jpg',
  },
  {
    RoomName: 'Single Occupancy',
    RoomType: 'With Cooler',
    RoomContent: `
Loreore id quibusdam blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis odio non, cupiditate quam fuga blanditiis dignissimos minima dolorem maiores!am aut quae earum nihil maiores eveniet adipisci sunt repellendus invent`,
    RoomImg: './img/gallery/4.jpg',
  },
  {
    RoomName: 'Double Occupancy',
    RoomType: 'With Cooler',
    RoomContent: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit error saepe, ex ratione ing elit. Et officiis odio non, cupiditate quam fuga blanditiis dignissimos minima dolorem maiorore id quibusdam blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis odio non, cupiditate quam fuga blanditiis dignissimos minima dolorem maiores!es!`,
    RoomImg: './img/gallery/5.jpg',
  },
]


activeRoomIndex = 0;
const roomImg=document.getElementById('room-img');
const roomContainer = document.querySelector('.setRoomData');

function getNumber(index) {
  if (roomsData[index].RoomName === 'Single Occupancy') {
    return 1;
  }
  else return 2;
}
var num = 0;
function getIcon(index) {
  if (roomsData[index].RoomType === 'With AC') {
    num = 1;
    return "./img/Rooms/icons8-ac-64.png";
  }
  else {
    num = 2;
    return "./img/Rooms/icons8-cooler-67.png";
  }
}
function getCool() {
  if (num === 1) {
    return 'Air Conditioner';
  } else if (num === 2) {
    return 'Cooler';
  }
}


const obj = roomsData[activeRoomIndex];
window.addEventListener('DOMContentLoaded', () => {
  roomImg.src=`${obj.RoomImg}`;
  roomContainer.innerHTML = `
  <div class="header-aboutus">
  <h3><span class="secondry-color-red">${obj.RoomName}</span> Room ${obj.RoomType}</h3>
  <div class="underline">
    <div class="underline-2"></div>
  </div>

</div>

<div class="room-info">
  <p>${obj.RoomContent}</p>

  <div class="room-icons">
    <div class="room-icons-left">
      <div class="room-flex">
        <img src="./img/Rooms/icons8-meal-50.png" alt="">
        <p>Breakfast, Lunch & Dinner</p>
      </div>
      <div class="room-flex">
        <img src="${getIcon(activeRoomIndex)}" alt="">
        <p>${getCool()}</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-bed-60.png" alt="">
        <p>${getNumber(activeRoomIndex)} Bed</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-toilet-room-50.png" alt="">
        <p>8 Common Washrooms</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-water-heater-50.png" alt="">
        <p>Geyser</p>
      </div>
    </div>
    <div class="room-icons-right">
      <div class="room-flex">
        <img src="./img/Rooms/icons8-bureau-60.png" alt="">
        <p>${getNumber(activeRoomIndex)} Almirah.</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-office-chair-60.png" alt="">
        <p>${getNumber(activeRoomIndex)} Chair</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-desk-50.png" alt="">
        <p>${getNumber(activeRoomIndex)} Table</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-refrigerator-64.png" alt="">
        <p>Common Refrigerator</p>
      </div>
      <div class="room-flex">
        <img src="./img/Rooms/icons8-room-service-62.png" alt="">
        <p>Room Service</p>
      </div>
    </div>

  </div>



</div>
`
});

setTimeout(() => {
  const prevRoom = document.querySelector('.prev-btn');
  const nextRoom = document.querySelector('.next-btn');
  // prev room
  prevRoom.addEventListener('click', () => {
    activeRoomIndex--;
    console.log('hi i am prev');
    setRoomAnimation();
  })
  // next room
  nextRoom.addEventListener('click', () => {
    activeRoomIndex++;
    console.log('hi i am next');
    setRoomAnimation();
  })

  function setRoomAnimation(){
    roomContainer.style.opacity='0';

    
    
    setTimeout(()=>{
    roomContainer.style.opacity='1';
    setRoomData(activeRoomIndex);
    },600)
    
    }


  function setRoomData(index) {

    const room = roomsData[index];
    if (index === 0) {
      prevRoom.style.visibility = 'hidden';
    } else {
      prevRoom.style.visibility = 'visible';
    }

    if (index === roomsData.length - 1) {
      nextRoom.style.visibility = 'hidden';
    } else {
      nextRoom.style.visibility = 'visible';
    }
    
    roomImg.src=`${room.RoomImg}`

    roomContainer.innerHTML = `
    <div class="header-aboutus">
    <h3><span class="secondry-color-red">${room.RoomName}</span> Room ${room.RoomType}</h3>
    <div class="underline">
      <div class="underline-2"></div>
    </div>
  
  </div>
  
  <div class="room-info">
    <p>${room.RoomContent}</p>
  
    <div class="room-icons">
      <div class="room-icons-left">
        <div class="room-flex">
          <img src="./img/Rooms/icons8-meal-50.png" alt="">
          <p>Breakfast, Lunch & Dinner</p>
        </div>
        <div class="room-flex">
          <img src="${getIcon(activeRoomIndex)}" alt="">
          <p>${getCool()}</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-bed-60.png" alt="">
          <p>${getNumber(activeRoomIndex)} Bed</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-toilet-room-50.png" alt="">
          <p>8 Common Washrooms</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-water-heater-50.png" alt="">
          <p>Geyser</p>
        </div>
      </div>
      <div class="room-icons-right">
        <div class="room-flex">
          <img src="./img/Rooms/icons8-bureau-60.png" alt="">
          <p>${getNumber(activeRoomIndex)} Almirah.</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-office-chair-60.png" alt="">
          <p>${getNumber(activeRoomIndex)} Chair</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-desk-50.png" alt="">
          <p>${getNumber(activeRoomIndex)} Table</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-refrigerator-64.png" alt="">
          <p>Common Refrigerator</p>
        </div>
        <div class="room-flex">
          <img src="./img/Rooms/icons8-room-service-62.png" alt="">
          <p>Room Service</p>
        </div>
      </div>
  
    </div>
  
  
  
  </div>
  `
  }
}, 1000);

