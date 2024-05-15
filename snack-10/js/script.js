//todo: Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let arrayA = [3, 5, 14, ];
let arrayB = [64, 24, 54, 13, 22,];

let index = 0; 
while(arrayA.length < arrayB.length){
    arrayA.push(0);
}

console.log(arrayA, arrayB);