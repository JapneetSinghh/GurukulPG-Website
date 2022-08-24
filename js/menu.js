const menuData=[
{
  day:'Monday',
  breakfast:`Prantha + Aloo Jeera 
  + Tea`,
  lunch:`Dal + Sabji + Roti 
  + Rice + Salad`,
  dinner:`Dal + Sabji + Roti 
  + Rice`,
},
{
  day:'Tuesday',
  breakfast:`Sandwich + Prantha
  + Tea`,
  lunch:`Kadi + Rice + Sabji
  + Roti + Salad`,
  dinner:`Dal + Sabji + Roti 
  + Rice`,
},
{
  day:'Wednesday',
  breakfast:`Puri + Sabji
  + Tea`,
  lunch:`Dal + Sabji + Roti 
  + Rice + Salad`,
  dinner:`Suji Halwa + Roti + Aloo
  + Mutter + Rice`,
},
{
  day:'Thursday',
  breakfast:`Onion Prantha
  + Tea`,
  lunch:`Dal + Sabji + Roti 
  + Rice + Salad`,
  dinner:`Dal Makhni + Roti 
  + Rice`,
},
{
  day:'Friday',
  breakfast:`Aloo Prantha
  + Tea`,
  lunch:`Rajma + Sabji + Roti 
  + Rice + Salad`,
  dinner:`Dal + Sabji + Roti + Kheer
  +Kheer`,
},
{
  day:'Saturday',
  breakfast:`Dry Mutter + Prantha + Tea`,
  lunch:`Kale Chole + Sabji + Roti 
  + Rice + Salad`,
  dinner:`Mutter Paneer + Kheer
  + Roti`,
},
{
  day:'Sunday',
  breakfast:`Chwomen 
  + Tea`,
  lunch:`White Chole + Sabji + Roti 
  + Rice / Puri + Salad`,
  dinner:`Dal + Sbji + Roti + Rice`,
},
]
const menuArticle = document.querySelector('.menuRows');

for(var i=0;i<menuData.length;i++){

menuArticle.innerHTML+=`  <article class="category ">
<div class="menu-day">
  <p>${menuData[i].day}</p>
</div>
<div class="menu-columns">
  <p><span class="hiddenValue secondry-color-red">Breakfast: </span> ${menuData[i].breakfast }</</p>
</div>
<div class="menu-columns">
  <p><span class="hiddenValue secondry-color-red">Lunch: </span> ${menuData[i].lunch }</</p>
</div>
<div class="menu-columns">
  <p><span class="hiddenValue secondry-color-red">Dinner: </span>${menuData[i].dinner }</
  </p>
</div>
</article>`;
}
