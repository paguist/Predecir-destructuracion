// Problema 1------------------------------------------------------------------
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [ randomCar ] = cars;
const [ ,otherRandomCar ] = cars;

console.log(randomCar); // Salida esperada: 'Tesla'
console.log(otherRandomCar); // Salida esperada: 'Mercedes'
// No hay errores en este código.
// Desestructuración correcta.


// Problema 2------------------------------------------------------------------
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { name: otherName } = employee;

console.log(name); // Error: name is not defined
console.log(otherName);// Salida esperada: 'Elon'


// Problema 3------------------------------------------------------------------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const { password: hashedPassword } = person;


console.log(password);// Salida esperada: '12345'
console.log(hashedPassword);// Salida esperada: undefined

// hashedPassword será undefined porque la falta la propiedad password en el objeto person.

// Problema 4---------------------------------------------------------------------------------------------

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];

const [, first] = numbers; // Desestructuración para asignar el segundo elemento del array a 'first'

const [,,, second] = numbers; // Desestructuración para asignar el cuarto elemento del array a 'second'

const [,,,,,,,, third] = numbers; // Desestructuración para asignar el noveno elemento del array a 'third'

console.log(first == second); // Salida esperada: false

console.log(first == third); // Salida esperada: true


// Problema 5---------------------------------------------------------------------------------------------

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};

const { key } = lastTest; // Desestructuración para asignar el valor de lastTest.key a la variable 'key'

const { secondKey } = lastTest; // Desestructuración para asignar el valor de lastTest.secondKey a la variable 'secondKey'

const [ , willThisWork] = secondKey; // Desestructuración para asignar el segundo elemento de lastTest.secondKey a 'willThisWork'

console.log(key); // Salida esperada: 'value'

console.log(secondKey); // Salida esperada: [1, 5, 1, 8, 3, 3]

console.log(secondKey[0]); // Salida esperada: 1

console.log(willThisWork); // Salida esperada: 5

