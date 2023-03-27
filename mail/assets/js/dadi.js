// genero 2 numeri a caso da 1 a 6
// stabilisco il vincitore 
//stampo in pagina







const winner = document.getElementById("winner");
// ! il massimo
const max = 6;

const giocatore = Math.floor(Math.random()* max + 1)
const CPU = Math.floor(Math.random()* max + 1)

if(giocatore === CPU){
    winner.innerText= ("Mi dispiace! è un pareggio!")
}else if (giocatore > CPU){
    winner.innerText= ("<h1 class="black">HAI VINTO!</h1>")
}else if (giocatore < CPU){
    winner.innerText= ("HAI PERSO!")

}


console.log(player, CPU);