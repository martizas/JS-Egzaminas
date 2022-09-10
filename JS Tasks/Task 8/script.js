/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict';

function Calculator() {
    this.sum = function (a, b) {
        return a + b };
    this.subtraction = function (a, b) { 
        return a - b };
    this.multiplication = function (a, b) {
        return a * b };
    this.division = function (a, b) {
        return a / b };
}


const test = new Calculator();
console.log('test.sum(8, 5) ===', test.sum(8, 5));
console.log('test.subtraction(6, 5) ===', test.subtraction(6, 5));
console.log('test.multiplication(10, 5) ===', test.multiplication(10, 5));
console.log('test.division(10, 5) ===', test.division(10, 5));
