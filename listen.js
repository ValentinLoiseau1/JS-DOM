
let phraseCacher = document.querySelector('p');
let bouton = document.querySelector('button');


function afficherMessage(){
    phraseCacher.style.display=flex;
}

bouton.addEventListener('click', afficherMessage);