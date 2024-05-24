//todo: Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. Dividi in due array separati le zucchine che misurano meno o più di 20cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchini = [
    {
        varieta: 'romanesco',
        peso: 2,
        lunghezza: 15
    },
    {
        varieta: 'napoletana',
        peso: 6,
        lunghezza: 52
    },
    {
        varieta: 'trombetta',
        peso: 3.4,
        lunghezza: 24
    },
    {
        varieta: 'tonda',
        peso: 4,
        lunghezza: 22
    },
    {
        varieta: 'napoletana',
        peso: 5.5,
        lunghezza: 48
    },
    {
        varieta: 'trombetta',
        peso: 3.8,
        lunghezza: 28
    },
    {
        varieta: 'romanesco',
        peso: 2.8,
        lunghezza: 16
    },
    {
        varieta: 'napoletana',
        peso: 5.1,
        lunghezza: 40
    },
    {
        varieta: 'tonda',
        peso: 3.8,
        lunghezza: 20
    },
    {
        varieta: 'trombetta',
        peso: 3,
        lunghezza: 19
    }
]

// romanesco 15-18, tonda 20, napoletana 40-50, trombetta 20-30
let sum = 0;
zucchini.forEach(zucchina => {
    sum += zucchina.peso;
});

const longerZucchini = zucchini.filter((zucchina) => zucchina.lunghezza > 20);
const shorterZucchini = zucchini.filter((zucchina) => zucchina.lunghezza <= 20);

console.log(sum);
console.log(longerZucchini);
console.log(shorterZucchini);