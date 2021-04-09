/*
Array.prototype.map()
Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de items

 

var newArray = arr.map(callback[, thisArg])

Array.prototype.map()
*/



const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 30
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
Map 
retorna um novo array com a mesma quantidade de elementos que o array inicial
*/

const petNames = pets.map((pet) => {
    return pet.name;
})
console.log(petNames);

var forEachPetNames = [];
pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})
console.log(forEachPetNames);


