ScrollReveal().reveal('.container',{ duration: 11000});
ScrollReveal().reveal('header',{ duration: 3000});


let song = document.getElementById("song")
let icon = document.getElementById("icon")


// Evento de som
function clicou() {
   if(song.paused){
    song.play();
    icon.src = "/assets/images/som.png"

   } else {
    song.pause();
    icon.src = "/assets/images/som-desligado.png"
   }
}

icon.addEventListener("click", clicou)




// botão de rolagem

function segundatela() {

   window.scrollTo(1600, 0)

}