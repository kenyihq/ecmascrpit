// Antes de es6 se realizaba de esta forma:
function newFunction (name, age, country) {
    var name = name || 'Kenyi';
    var age = age || 27;
    var country = country || 'PE';
    console.log(name, age, country);
};


// Ahora en es6

function newFunction2 (name = 'Kenyi', age = 27, country = 'PE') {
    console.log(name, age, country);
};

// Devuelve los valores por defecto
newFunction2();
// Devuelve los valores que establecí
newFunction2('Julberht', 17, 'PE')

// Templates literals ``

// Antes de es6
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// Now
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// Antes de es6

let lorem = "Este es un text bonito \n"
+ "Esta  es un nueva linea"
console.log(lorem)

// es6
let lorem2 = `Ahora se puede hacer de esta manera
esta es un nueva linea`
console.log(lorem2)

// Antes de em6
let person = {
    'name' : 'Kenyi',
    'age' : '27',
    'country' : 'PE'
};
console.log(person.name, person.age)

// es6
let { name } = person;
console.log(name);

// Novedades de es6
let team1 = ['Kenyi', 'Axel', 'Over']
let team2 = ['Martha', 'Ariana']

let education = ['Paki', ...team1, ...team2]
console.log(education)

// Diferencia entre var y let
// Var es una variable global
// Let es una variable que no sale de su scope (local)
{
    var globalVar = 'Soy una varible global VAR';
}
{
    // LET no sale de su scope
    let globalLet = 'Soy una varible global LET';
    console.log(globalLet);
}

console.log(globalVar);

// Agregaron CONST

// De esta manera la variable a no cambia de valor
const a = 'b';



let name = 'Kenyi'
let age = 27

// Arrow function

const names = [
    { name : 'Kenyi', age : 27 },
    { name : 'Julberht', age : 17 }
]

let listOfName = names.map(item => console.log(item.name));

// Más ejemplos
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Upss');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// Modulos

//import { hello } from './module';

const hello = require('./module');

console.log(hello());

hello();

// Generators

function * helloWorld () {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
};

const generetorHello = helloWorld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);