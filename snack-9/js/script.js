//todo: Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const numbersArray = [];
let index = 0;
do {
    const userNumber = Number.parseInt(prompt('Type a number'), 10);
    if (userNumber % 2 === 1){
        numbersArray.push(userNumber);
    }
}
while(numbersArray.length < 6);
console.log(numbersArray);