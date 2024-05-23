//todo: Crea un array composto da 15 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//todo: Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.

const cars = [
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'benzina'
    },
    {
        marca: 'lancia',
        modello: 'ypsilon',
        alimentazione: 'benzina'
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'diesel'
    },
    {
        marca: 'dacia',
        modello: 'stepway',
        alimentazione: 'gpl'
    },
    {
        marca: 'subaru',
        modello: 'baracca-modello-a-banana',
        alimentazione: 'metano'
    },
    {
        marca: 'bentley',
        modello: 'hybrid',
        alimentazione: 'elettrica'
    },
    {
        marca: 'chevrolet',
        modello: 'impala',
        alimentazione: 'benzina'
    },
    {
        marca: 'dacia',
        modello: 'duster',
        alimentazione: 'metano'
    },
    {
        marca: 'renault',
        modello: 'hybrid',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'mini',
        modello: 'cooper',
        alimentazione: 'elettrica'
    },
    {
        marca: 'mercedes',
        modello: 'benz',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'uno',
        alimentazione: 'metano'
    },
    {
        marca: 'bmw',
        modello: 'i5',
        alimentazione: 'elettrica'
    },
    {
        marca: 'volkswagen',
        modello: 'polo',
        alimentazione: 'diesel'
    }
]

const gasCars = cars.filter((element) => {
    if(element.alimentazione === 'benzina'){
        return true;
    }
});


const dieselCars = cars.filter((element) => {
    if(element.alimentazione === 'diesel'){
        return true;
    }
});

const otherCars = cars.filter((element) => {
    if(!(element.alimentazione === 'diesel') && !(element.alimentazione === 'benzina')){
        return true;
    }
});

console.log(gasCars);
console.log(dieselCars);
console.log(otherCars);