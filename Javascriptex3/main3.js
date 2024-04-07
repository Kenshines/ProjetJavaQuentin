/*function fetchpokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then((response) => response.json())
}


async function displaypokemon(pokemon){
    const data = await fetchpokemon(pokemon)
    document.getElementById("pokemon").innerHTML = `
        <h1>${data.name}</h1>
        <img src='${data.sprites.front_default}' alt='${data.name}' />
    
    `
}
displaypokemon("bulbasaur")*/


function fetchPotter(potter) {
    return fetch('https://hp-api.lainocs.fr/characters/' + potter)
    .then((response) => response.json())
}

async function displayPotter(potter,ID){
    const data = await fetchPotter(potter)
    document.getElementById(ID).innerHTML = `
        <h1>${data.name}</h1>
        <img src='${data.image}' alt='${data.name}' />
        <p>${data.role} (${data.house})</p>
    `
}

displayPotter("lord-voldemort","Voldemort")
displayPotter("viktor-krum","Babos")
displayPotter("quirinus-quirrel","BaldQuirrel")
displayPotter("vincent-crabbe","Crabe")
displayPotter("luna-lovegood","Crazy")
displayPotter("albus-dumbledore","Fool")


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });