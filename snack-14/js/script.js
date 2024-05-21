//todo: Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userSeconds = Number.parseInt(prompt('Type the number of seconds of your timer') ,10);
if(userSeconds < 0 || userSeconds > 30 || Number.isNaN(userSeconds)){
    userSeconds = 10;
    console.log('Given default timer: ' + userSeconds + 's');
}

const userTimer = setInterval(function(){
    userSeconds--;
    console.log(userSeconds);
    if(userSeconds <= 0){
        clearInterval(userTimer);
        alert('Time is over!');
    }
}, 1000);

