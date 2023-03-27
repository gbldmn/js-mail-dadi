

let iscritti = [
    'marco@gmail.it',
    'giovanni@gmail.it',
    'alberto@gmail.it',
    'gianni@gmail.it',
    'bruno@gmail.it',
]

btn.addEventListener("click", function() {
    let mail = document.querySelector('#controllo').value;
    let soldatino = false

    for (let i = 0; i < iscritti.length; i++) {
        console.log(iscritti[i])

        if (iscritti[i] == mail) { 
            soldatino = true 
        } 

    }
    if (soldatino == true) {
        document.querySelector('#convalida').innerHTML = 'Email convalidata';
    } else {
        document.querySelector('#convalida').innerHTML = 'Email non valida';    
    }    
 
});





 
