/*
Array.prototype.reduce()
Executa uma função para cada elemento retornando um único valor de retorno

 

var newArray = arr.map(callback[, valorInicial])

*/



const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 30
    },
    {
        name: 'sona',
        type: 'dog',
        age: 5,
        weight: 6
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight:2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 5
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 2,
        weight: 0.01
    },
    {
        name: 'Calu',
        type: 'Calopsita',
        age: 1,
        weight: 0.01
    }
]

/*

*/
const totalWeight = pets.reduce((total, pet) => {
    console.log(total + "-" + pet.name)
    return total + pet.weight;
}, 0)
//o 0 é o valor inicial da variável total


const totalAgeWeight = pets.reduce((total, pet) => {
    console.log(total.totalAge + "-" + total.totalWeight + "-" + pet.name)
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0})

console.log(totalAgeWeight);


const totalWeight1 = pets.reduce((total, pet) => {
    if (pet.age > 3) return total;
    return total + pet.weight;
}, 0)
console.log("totalWeight1: " + totalWeight1);


const dogs = pets.filter((pet) => {
    return pet.type === 'dog';
})

const totalWeight2 = dogs.reduce((total, pet) => {
    return total + pet.weight;
}, 0)
console.log("totalWeight2: ");
console.log(totalWeight2);


const totalWeight3 = pets.filter((pet) => {
    return pet.type === 'dog';
}).reduce((total, pet) => {
    return total + pet.weight;
}, 0)
console.log("totalWeight3: ");
console.log(totalWeight3);
