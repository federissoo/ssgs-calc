export function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

export function div(a, b) {
    if (b === 0) {
        return 'Errore: Divisione per zero non consentita';
    }
    return a / b;
}