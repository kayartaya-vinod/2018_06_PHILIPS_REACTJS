console.log('from inside of ex01.js...');

let fname = 'Vinod', lname = 'Kumar', gender = 'Male';

let fullname = `${gender==='Male'?'Mr.':'Ms.'} ${fname} ${lname}`;
console.log('Fullname is %s', fullname);

function hello() {
    console.log('Hello, world!');
}

export function welcome() {
    console.log('Welcome to Reactjs');
}

export const AUTHOR = 'K Vinod Kumar';

export default hello;