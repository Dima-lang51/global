document.addEventListener('DOMContentLoaded', function(){ 
  const axisEl = document.querySelector('.axis');
  axisEl.classList.toggle('active');


  async function getText() {
    try {
      let response = await fetch('https://baconipsum.com/api/?type=lucky');
      let text = await response.json();
      let b = document.getElementById('title');
      b.innerText = text[0].substring(0, 100);
      
      return text;
    } catch(error) {
      alert(error);
    }
  }
  
  getText();
});


//Inpun REG
let name = document.querySelector('#search'); 
let regex = /[\!\@\#\$\%\&\(\)\^\*\`]/g; // регулярка !@#$%^&*()
 
name.oninput = function(){
    this.value = this.value.replace(regex, '');
}


//Burger menu
let nav_toggle = document.querySelector("#nav_toggle");
let nav = document.querySelector("#nav");


nav_toggle.addEventListener("click", function(event) {
  event.preventDefault();

  this.classList.toggle("active");
  nav.classList.toggle("active");

})