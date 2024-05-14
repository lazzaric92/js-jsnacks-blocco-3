const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
fruits.push('pesca');

const result = fruits.find(ingredient => ingredient === 'cocomero');

if(result) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}