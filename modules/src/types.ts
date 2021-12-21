type primitiveTypes = boolean | number | string | symbol | null | undefined;
// objects can not be primitive
const myObj: object = {};

// void
const message = (name: string): void => {
    console.log(`Hello ${name}`);
}

//tuples
const address: [string, number] = ['Superstreet', 99];

// Array
const array1 = [1, 2, 3, 4, 5];
const array2: Array<number> = [1, 2, 3, 4, 5];
// enums
enum Color {
  Red,
  Green,
  Blue
};

// Any
let variable: any = 10;
variable = 'New String';
variable = true;

//type assertions
const message2 = 'Hello';
// can not use angle brackets in jsx
const endWithC = (<string>message2).endsWith('c');
const alternativeWay = (message2 as string).endsWith('c');


const email = document.getElementById('email');

if (email) {
  email.addEventListener('keyup', event => {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  );
}