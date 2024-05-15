//todo: Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const numbersArray = [];
let sum = 0; 
while (sum < 50){
    const userNumber = Number.parseInt(prompt('Type a number'), 10);
    if(!Number.isNaN(userNumber) && userNumber < 50){
        numbersArray.push(userNumber);
        sum += userNumber;
    }
}
console.log(numbersArray, sum);