// interface A {
//   a: number;
// }

// interface B {
//   a: number;
// }

// let a: A = { a: 1 };
// let b: B = a;

interface Profile {
  readonly name: string;
  age?: number;
};

const profile: Profile = {
  name: 'John',
  age: 30
};

// index signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const c: A = {
  someProp: 'some value',
};

// call signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = 'some value';

// extending interfaces

interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {};

const child: Child = {
  x: 'some value',
  y: 'some value',
  z: 'some value'
}