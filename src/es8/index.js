// Novedades de es8

// Object entries
const data = {
    frontend : 'Kenyi',
    backend : 'Julberht',
    design : 'TutankaDev'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values

const data = {
    frontend : 'Kenyi',
    backend : 'Julberht',
    design : 'TutankaDev'
}

const values = Object.values(data);
console.log(values);

// Pading

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ------'));

// Async y await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Hello world'), 3000)
            : reject (new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
       const hello = await helloWorld();
       console.log(hello);   
    } catch (error) {
        console.log('Eror 404');
    }
};

anotherFunction();