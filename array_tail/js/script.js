const numbersArray = [];
let userNumber = Number.parseInt(prompt('Type a number'), 10);

if(userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)) {
    console.log('Warning! You will be assigned a default number')
    userNumber = 15;
}

for(let i = 0; i < userNumber; i++){
    numbersArray.push(Math.floor(Math.random() * 100) + 1);
}

const loggedNumbers = Number.parseInt(prompt('How many numbers do you want to log?'), 10);

if(numbersArray.length < loggedNumbers || loggedNumbers < 0 || Number.isNaN(loggedNumbers)){
    console.log('Warning! Not enough elements in the array or invalid number'); 
} else {
    console.log(numbersArray.slice(-loggedNumbers));
}