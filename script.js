ScrollReveal().reveal('.container',{ duration: 11000});
ScrollReveal().reveal('header',{ duration: 3000});


let song = document.getElementById("song")
let icon = document.getElementById("icon")

function clicou() {
   if(song.paused){
    song.play();
    icon.src = "/assets/images/som-desligado.png"

   } else {
    song.pause();
    icon.src = "/assets/images/som.png"
   }
}

icon.addEventListener("click", clicou)
