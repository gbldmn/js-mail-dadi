// genero 2 numeri a caso da 1 a 6
// stabilisco il vincitore 
//stampo in pagina


bottone.addEventListener('click',function () { 


const winner = document.getElementById("winner");
// ! il massimo
const max = 6;

const giocatore = Math.floor(Math.random()* max + 1)
const CPU = Math.floor(Math.random()* max + 1)

if(giocatore === CPU){
    winner.innerHTML= ("<h2 class='black'>MI DISPIACE! HAI PAREGGIATO</h2>")
}else if (giocatore > CPU){
    winner.innerHTML= ("<h1 class='black'>HAI VINTO!</h1>")
}else if (giocatore < CPU){
    winner.innerHTML= ("<h1 class='red'>HAI PERSO!</h1>")

}
});

 console.log(giocatore, CPU);