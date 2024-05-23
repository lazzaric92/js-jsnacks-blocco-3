//todo: Crea un array di oggetti che rappresentano delle persone, 10. Ogni persona ha un nome, un cognome e un'età.
//todo: Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const users = [
    {
        nome: 'marco',
        cognome: 'rossi',
        età: 14
    },
    {
        nome: 'dr',
        cognome: 'culocane',
        età: 64
    },
    {
        nome: 'bruco',
        cognome: 'gianluco',
        età: 17
    },
    {
        nome: 'mariangiongiangela',
        cognome: 'asd',
        età: 48
    },
    {
        nome: 'fuffos',
        cognome: 'bau',
        età: 9
    },
    {
        nome: 'ermenegilda',
        cognome: 'bellicapelli',
        età: 34
    },
    {
        nome: 'ezio',
        cognome: 'auditore',
        età: 24
    },
    {
        nome: 'rogiorzo',
        cognome: 'smith',
        età: 16
    },
    {
        nome: 'nonno',
        cognome: 'laser',
        età: 80
    },
    {
        nome: 'elena',
        cognome: 'guffo',
        età: 18
    }
]

const newArray = [];

users.forEach(element => {
    if(element.età >= 18){
        newArray.push(`${element.nome} ${element.cognome} può guidare`);
    } else {
        newArray.push(`${element.nome} ${element.cognome} non può guidare`);
    }
});

console.log(newArray);