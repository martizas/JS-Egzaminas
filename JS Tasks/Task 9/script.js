/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict';

class Movie {
    constructor(titleInp, directorInp, budgetInp) {
        this.title = titleInp;
        this.director = directorInp;
        this.budget = budgetInp;
    }
    wasExpensive() {
        return this.budget > 100000000;
    }
}


const bembilendas = new Movie('bembilandas', 'zvairys miegalius', 500000000);
const reksnys = new Movie('reksnys', 'vaflis vaflenijus', 24000)
console.log(bembilendas.wasExpensive());
console.log(reksnys.wasExpensive());