// Novedades de es9

const obj = {
    name : 'Kenyi',
    age : 27,
    country : 'PE'
};

let { name, ...all } = obj;
console.log(all);

// ------------------------------
const obj = {
    name : 'Kenyi',
    age : 27
};

const obj1 = {
    ...obj,
    country : 'PE'
};

console.log(obj1);