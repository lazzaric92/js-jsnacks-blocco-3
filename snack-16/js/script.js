//todo: Creare un oggetto palla che abbia le seguenti proprietà.
// < Nome = palla
// < Peso = 10
// todo: Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla = {
    name: 'palla',
    peso: 10
}

palla.peso = Number.parseFloat(prompt('Type the ball weight'), 10);
console.log(palla);