# SSGS Calc

[![CI Tests](https://github.com/federissoo/ssgs-calc/actions/workflows/do-tests.yml/badge.svg)](https://github.com/federissoo/ssgs-calc/actions/workflows/do-tests.yml)
[![codecov](https://codecov.io/gh/federissoo/ssgs-calc/branch/main/graph/badge.svg)](https://codecov.io/gh/federissoo/ssgs-calc)

## Descrizione

SSGS Calc è un esercizio Node.js che fornisce funzioni matematiche di base (`somma`, `sottrazione`, `moltiplicazione`, `divisione`).  
È pensata come esercizio introduttivo per l'uso di **Jest** e **GitHub Actions** per l'automazione dei test e la raccolta della **code coverage**.

## Prerequisiti

- Node.js versione 14.x o superiore
- npm versione 6.x o superiore

## Funzioni disponibili

- `sum(a, b)` → Somma due numeri
- `sub(a, b)` → Sottrae il secondo numero dal primo
- `mul(a, b)` → Moltiplica due numeri
- `div(a, b)` → Divide due numeri (gestisce la divisione per zero)

## Installazione

```bash
git clone https://github.com/federissoo/ssgs-calc.git
cd ssgs-calc
npm install
```

## Utilizzo

Per utilizzare la calcolatrice da riga di comando interattiva:

```bash
node src/app.js
```

## Test e Code Coverage

Il progetto è configurato per raggiungere il 100% di code coverage. Per eseguire i test e generare il report di coverage:

```bash
npm test
```

Il report di coverage sarà disponibile nella cartella `coverage/` e mostrerà informazioni dettagliate sulle parti di codice testate.

## Integrazione Codecov

Questo progetto utilizza [Codecov](https://codecov.io/) per l'analisi e la visualizzazione della code coverage. Il badge all'inizio di questo README mostra la percentuale attuale di coverage del progetto.

## Pipeline CI/CD con GitHub Actions

Il progetto è configurato con una pipeline di integrazione continua utilizzando GitHub Actions:

- **Trigger**: La pipeline viene eseguita automaticamente ad ogni push e pull request verso il main del repository
- **Passaggi principali**:
  1. Setup dell'ambiente Node.js
  2. Installazione delle dipendenze
  3. Esecuzione dei test con generazione del report di coverage
  4. Upload dei risultati di coverage a Codecov

Puoi visualizzare i dettagli della configurazione nel file `.github/workflows/do-tests.yml`.

## Badge di Stato

- **CI Tests**: Mostra lo stato dell'ultima esecuzione della pipeline di test (passa/fallisce)
- **Codecov**: Mostra la percentuale attuale di code coverage del progetto