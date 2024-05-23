//todo: Crea un array di oggetti che rappresentano delle persone, 10. Ogni persona ha un nome, un cognome e un'eta.
//todo: Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const users = [
    {
        nome: 'marco',
        cognome: 'rossi',
        eta: 14
    },
    {
        nome: 'dr',
        cognome: 'culocane',
        eta: 64
    },
    {
        nome: 'bruco',
        cognome: 'gianluco',
        eta: 17
    },
    {
        nome: 'mariangiongiangela',
        cognome: 'asd',
        eta: 48
    },
    {
        nome: 'fuffos',
        cognome: 'bau',
        eta: 9
    },
    {
        nome: 'ermenegilda',
        cognome: 'bellicapelli',
        eta: 34
    },
    {
        nome: 'ezio',
        cognome: 'auditore',
        eta: 24
    },
    {
        nome: 'rogiorzo',
        cognome: 'smith',
        eta: 16
    },
    {
        nome: 'nonno',
        cognome: 'laser',
        eta: 80
    },
    {
        nome: 'elena',
        cognome: 'guffo',
        eta: 18
    }
]


const newArray = [];

users.forEach(element => {
    if(element.eta >= 18){
        newArray.push(`${element.nome} ${element.cognome} può guidare`);
    } else {
        newArray.push(`${element.nome} ${element.cognome} non può guidare`);
    }
});

/*
const newArray = users.map((persona) => {
    return `${persona.nome} ${persona.cognome} ${(persona.eta >= 18) ? "può guidare" : "non può guidare"}`;
})
*/

console.log(newArray);

