"use strict";
var firstName = 'Jack';
var position = 22;
var isDev = true;
// array
var cars = ['Ford', 'Alfa Romeo', 'BMW'];
// tupla
var address = ['Pine Street', 1544, 'Center'];
// enum
var Colors;
(function (Colors) {
    Colors["BLACK"] = "#000000";
    Colors["WHITE"] = "#FFFFFF";
    Colors["GRAY"] = "#888888";
})(Colors || (Colors = {}));
var color = Colors.WHITE;
// Functions
// Type return
function getName() {
    return firstName;
}
function printName() {
    console.log('My name is', getName());
}
// Type params
function printStatus(name, position) {
    return "Name: " + name + ". Position: " + position + ".";
}
printName();
console.log(printStatus(firstName, position));
// Type var = function
function sum(x, y) {
    return x + y;
}
var calc;
calc = sum;
console.log(calc(1, 1));
var newBook = {
    name: 'New Code',
    countPages: function (pages) {
        return pages * 2;
    }
};
// Union types
var houseNumber = 10;
// Throw error with never function
function error(message) {
    throw new Error(message);
}
