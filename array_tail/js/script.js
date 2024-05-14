const numbersArray = [];
let userNumber = Number.parseInt(prompt('Type a number'), 10);

if(userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)) {
    console.log('Errore! Ti verrà assegnato un numero di default')
    userNumber = 10;
} else {
    // todo scrivo un ciclo for e pusho nell'array i  numeri generati randomicamente
}