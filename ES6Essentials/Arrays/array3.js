// const arr = [ 1, 2, 3, 4, 5];

// arr.forEach((value, index) => {
//     console.log(`${index}: ${value}`);
// })

// const test = arr.map((value, index) => `${value} - ${index}`);
// console.log(test);

//const arr2 = [1, 2, [3, [4, 5]]];
const arr2 = [1, 2, 3, 4];
console.log(arr2);

//arr2.flat(1);
// console.log(arr2);

// arr2.flatMap(value => [value * 2]);
// console.log(arr2);

//const arrIterator = arr2.keys();
const arrIterator = arr2.entries();
arrIterator.next();
console.log(arrIterator);

const findGreater = arr2.find(value => value > 2);
console.log(findGreater);



var findIndex = arr2.indexOf(2);
console.log(findIndex);

findIndex = arr2.lastIndexOf(2);
console.log(findIndex);


console.log(arr2.includes(1));
console.log(arr2.some(value => value % 2 === 0));
console.log(arr2.some(value => value >= 3));
console.log(arr2.every(value => value >= 3));
console.log(arr2.sort((current, next) => current.grade - next.grade));

