"use strict";
// objects can not be primitive
const myObj = {};
// void
const message = (name) => {
    console.log(`Hello ${name}`);
};
//tuples
const address = ['Superstreet', 99];
// Array
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// Any
let variable = 10;
variable = 'New String';
variable = true;
//type assertions
const message2 = 'Hello';
// can not use angle brackets in jsx
const endWithC = message2.endsWith('c');
const alternativeWay = message2.endsWith('c');
const email = document.getElementById('email');
if (email) {
    email.addEventListener('keyup', event => {
        const input = event.target;
        console.log(input.value);
    });
}
