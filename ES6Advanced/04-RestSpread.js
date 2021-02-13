//rest Spread
function sum(a, b){
    return a + b;
}

console.log(sum(5, 5));

//before ES6
function sum1(a, b){
    console.log(arguments);
    var value = 0;
    for(var i =0;i < arguments.length; i++){
        value += arguments[i]
    }
    return value;
}
console.log(sum1(5, 5, 5, 2, 3));

// ES6 REST operator ...
function sum2(... args){
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum2(5, 5, 5, 2, 3));

const sum3 =(a, b, ...rest) => {
    console.log(a, b, rest)

}
console.log(sum3(5, 5, 5, 2, 3));

//spread operator

const multiply =(...args) => args.reduce((acc, value) => acc * value, 1);
console.log(multiply(5, 5, 5, 2, 3));

const other =(...rest) => {
    return multiply(...rest)
}
console.log(other(5, 5, 5, 2, 3));

//spread can be used in strings , arrays, objects, objects iterable

const  str = 'Digital Innovation One'; 
const arr = [1,2,3,4];

function logArgs(...args){
    console.log(args);
}
logArgs(...str);
logArgs(...arr);

const arr2 = [5, 6, 7].concat(arr);
console.log(arr2);

const arr3 = [...arr, 5, 6, 7];
console.log(arr3);

const arr4 = [...arr2, ...arr3, 9];
console.log(arr4);

const obj = {
    test:123
}

const obj2 = {
    ...obj,
    test2: 'hello',
    test: 321
}
console.log(obj2);
