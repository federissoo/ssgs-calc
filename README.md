# 🧮 SSGS Calc

[![CI Tests](https://github.com/federissoo/ssgs-calc/actions/workflows/do-tests.yml/badge.svg)](https://github.com/federissoo/ssgs-calc/actions/workflows/do-tests.yml)
[![codecov](https://codecov.io/gh/federissoo/ssgs-calc/branch/main/graph/badge.svg)](https://codecov.io/gh/federissoo/ssgs-calc)

## Descrizione

SSGS Calc è una semplice libreria JavaScript che fornisce funzioni matematiche di base (`somma`, `sottrazione`, `moltiplicazione`, `divisione`).  
È pensata come esercizio introduttivo per l’uso di **Jest** (framework di testing) e **GitHub Actions** per l’automazione dei test e la raccolta della **code coverage**.

## Funzioni disponibili

- `sum(a, b)` → Somma due numeri
- `sub(a, b)` → Sottrae il secondo numero dal primo
- `mul(a, b)` → Moltiplica due numeri
- `div(a, b)` → Divide due numeri (gestisce la divisione per zero)

## Esecuzione dei test

```bash
npm install
npm test
