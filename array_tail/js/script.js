const numbersArray = [];
let userNumber = Number.parseInt(prompt('Type a number'), 10);

if(userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)) {
    console.log('Errore! Ti verrà assegnato un numero di default')
    userNumber = 10;
}

for(let i = 0; i < userNumber; i++){
    numbersArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numbersArray);