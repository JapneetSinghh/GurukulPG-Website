const roomsData = [
  {
    RoomName: 'Single Occupancy',
    RoomType: 'With AC',
    RoomContent: `
    Gurukul PG offer fully furnished rooms that are installed with air conditioners for your comfort. Our rooms cover enough space for your personal bed, almirah, table and chair which is completely perfect for your study routine along with a closet for all your personal needs. Our PG offers single occupancy rooms that includes a variety of three course proper meals (breakfast, lunch, and dinner) with weekly menu revisions, premium furnishings, free wifi, an open gym, authorized parking, Cctv surveillance, housekeeping, and helpful staff to make your stay as hassle-free as possible, specifically created for working professionals and students.
    `,
    RoomImg: './img/Single Occupancy/Gurukul-pg-uttamNagar-Janakpuri-single-occupancy-16.jpg',
  },
  {
    RoomName: 'Double Occupancy',
    RoomType: 'With AC',
    RoomContent: `
    Gurukul PG offers  <span style="font-size:18px" class="secondry-color-red">
     Double Occupancy Rooms With AC</span>
      that include a variety of three course proper meals (breakfast, lunch, and dinner) with weekly menu revisions, premium furnishings,   
    <span style="font-size:18px" class="secondry-color-red">
    Maintained and Serviced Air Conditioner, 2 Beds, 2 Chairs, 2 Tables, 2 Almirahs
   </span>,
    free wifi, an open gym, authorized parking, Cctv surveillance, housekeeping, and helpful staff to make your stay as hassle-free as possible, specifically created for working professionals and students.
    <br>
    Double occupancy rooms add an advantage of splitting the bills and creating a bond of friendship that you can cherish for life.
    `,
    RoomImg: './img/Double Occupancy/Gurukul-pg-uttamNagar-Janakpuri-double-occupancy-11.jpg',
  },
  {
    RoomName: 'Single Occupancy',
    RoomType: 'With Cooler',
    RoomContent: `
    We provide completely equipped single-occupancy rooms with a pre-installed cooler to help you beat Delhi's scorching summers. Our rooms cover enough space for your personal bed, table and chair which is completely perfect for your study routine along with a closet for all your personal needs. 

     Room Includes 
     <span style="font-size:18px" class="secondry-color-red">
     Cooler, 1 Bed, 1 Chair, 1 Table, 1 Almirah
    </span>
     and helpful staff to make your stay as hassle-free as possible, specifically created for working professionals and students. 
    <br><br>
    All Hostels don't have the same spartan aesthetic in mind. Our top priority is your comfort because we believe that a better life is one that is more comfortable! `,
    RoomImg: './img/Single Occupancy/Gurukul-pg-uttamNagar-Janakpuri-single-occupancy-5.jpg'
  },
  {
    RoomName: 'Double Occupancy',
    RoomType: 'With Cooler',
    RoomContent: `
    Gurukul PG offers  <span style="font-size:18px" class="secondry-color-red">
    Double Occupancy Rooms Without AC</span>
     that include a variety of three course proper meals (breakfast, lunch, and dinner) with weekly menu revisions, premium furnishings,   
   <span style="font-size:18px" class="secondry-color-red">
   Cooler, 2 Beds, 2 Chairs, 2 Tables, 2 Almirahs
  </span>,
   free wifi, an open gym, authorized parking, Cctv surveillance, housekeeping, and helpful staff to make your stay as hassle-free as possible, specifically created for working professionals and students.
   <br>
   We plan to provide our residents with a balanced, healthy lifestyle! We have you covered when it comes to cleanliness, eating habits, lifestyle and emergencies.`,
    RoomImg: './img/Double Occupancy/Gurukul-pg-uttamNagar-Janakpuri-double-occupancy-4.jpg',
  },
]


activeRoomIndex = 0;
const roomImg = document.getElementById('room-img');
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
  roomImg.src = `${obj.RoomImg}`;
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

  function setRoomAnimation() {
    roomContainer.style.opacity = '0';



    setTimeout(() => {
      roomContainer.style.opacity = '1';
      setRoomData(activeRoomIndex);
    }, 600)

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

    roomImg.src = `${room.RoomImg}`

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

