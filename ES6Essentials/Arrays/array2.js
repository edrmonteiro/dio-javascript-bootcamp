const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();
console.log(removedItem);

console.log(arr);
arr.push('uva');
console.log(arr);
const arrLength = arr.unshift('acerola');
console.log(arr);
console.log(arrLength);

arr.shift();
console.log(arr);

const salgados = ['coxinha', 'quibe', 'empada'];

const alimentos = arr.concat(salgados);
console.log(alimentos);
console.log(alimentos.slice(1,2));
console.log(alimentos.slice(2));
console.log(alimentos.slice(-2));


alimentos.splice(1, 1, 'first', 'second')
console.log(alimentos);
