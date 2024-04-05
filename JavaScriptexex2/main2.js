  let modifie = document.getElementById("Mode")

  document.getElementById("Mode").addEventListener('click', function() {
    console.log("CLICK")
    DarkMode();

    if (modifie.innerHTML === 'Mode Lumineux'){
      modifie.innerHTML = 'Mode Sombre'
    }else if(modifie.innerHTML === 'Mode Sombre') {
      modifie.innerHTML = 'Mode Lumineux'
    }
  });


function DarkMode() { 
  [...document.getElementsByClassName("Dark"),...document.getElementsByClassName("light")].forEach(element => { //fonction anonyme
    console.log(element)
    element.classList.toggle("Dark")
    element.classList.toggle("light")
  })
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});