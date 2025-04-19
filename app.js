import { createInterface } from 'readline';
import { sum, sub, mul, div } from './math.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const salutiDivertenti = [
    "Arrivederci, genio della matematica!",
    "Ciao ciao, calcolatore umano!",
    "Alla prossima, Einstein!",
    "Addio, campione!",
    "Torna presto, cervellone!"
];

console.log('Benvenuto!\n');

function chiediOperazione() {
    rl.question('Scegli l\'operazione (somma, sottrai, moltiplica, dividi): ', (operazione) => {
        if (['somma', 'sottrai', 'moltiplica', 'dividi'].includes(operazione)) {
            chiediNumero1(operazione);
        } else {
            console.log('Operazione non valida! Riprova.');
            chiediOperazione();
        }
    });
}

function chiediNumero1(operazione) {
    rl.question('Inserisci il primo numero: ', (num1) => {
        num1 = parseFloat(num1);
        if (!isNaN(num1)) {
            chiediNumero2(operazione, num1);
        } else {
            console.log('Numero non valido! Riprova.');
            chiediNumero1(operazione);
        }
    });
}

function chiediNumero2(operazione, num1) {
    rl.question('Inserisci il secondo numero: ', (num2) => {
        num2 = parseFloat(num2);
        if (!isNaN(num2)) {
            calcolaRisultato(operazione, num1, num2);
        } else {
            console.log('Numero non valido! Riprova.');
            chiediNumero2(operazione, num1);
        }
    });
}

function calcolaRisultato(operazione, num1, num2) {
    let risultato;
    switch (operazione) {
        case 'somma':
            risultato = sum(num1, num2);
            break;
        case 'sottrai':
            risultato = sub(num1, num2);
            break;
        case 'moltiplica':
            risultato = mul(num1, num2);
            break;
        case 'dividi':
            risultato = div(num1, num2);
            break;
    }
    console.log(`Risultato: ${risultato}`);
    chiediNuovaOperazione();
}

function chiediNuovaOperazione() {
    rl.question('Vuoi eseguire un\'altra operazione? (sì/no): ', (risposta) => {
        if (risposta.toLowerCase() === 'sì' || risposta.toLowerCase() === 'si') {
            chiediOperazione();
        } else {
            const saluto = salutiDivertenti[Math.floor(Math.random() * salutiDivertenti.length)];
            console.log(saluto);
            rl.close();
        }
    });
}

chiediOperazione();