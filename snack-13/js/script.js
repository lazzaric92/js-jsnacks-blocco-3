//todo: Scrivi una funzione che dato un numero inverta le sue cifre
// // 1234 -> 4321


//--> funzione che inverte le cifre di un numero
function getInvertedNumber (number) {
    const newNumber = number.toString();
    let invertedNumber = '';
    // ? ciclo for che
    for (let index = 0; index < newNumber.length; index++){
        // ? sostituisca al carattere(index) il carattere('numero'.length -1 - index)
        invertedNumber += newNumber.charAt(newNumber.length - 1 - index);
    }
    return Number.parseInt(invertedNumber, 10);
}