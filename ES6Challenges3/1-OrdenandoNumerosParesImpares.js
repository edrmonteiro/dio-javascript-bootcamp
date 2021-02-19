/*
Ordenando Números Pares e Ímpares

*/

let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
  let number = parseInt(gets());
  if (number % 2 == 0){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}
pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

for(let i = 0; i < pares.length;i++){
  console.log(pares[i])
}
for(let i = 0; i < impares.length;i++){
  console.log(impares[i])
}