//todo: Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const userWordA = prompt('Type a word');
const userWordB = prompt('Type another word');

if (sameLength(userWordA, userWordB) === true){
    console.log(userWordA, userWordB);
} else if (userWordA.length > userWordB.length) {
    console.log(userWordA);
} else {
    console.log(userWordB);
}



// --> funzione per verificare se le parole hanno la stessa lunghezza
function sameLength (wordA, wordB){
    let result = wordA.length === wordB.length;
    return result;
}