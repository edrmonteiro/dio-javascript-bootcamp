// Desmistificando as funções:
// Map, Filter e Reduce no JS
// slides.com/caiodelgado/map-filter-reduce/live

/*
for(var i = 0; i< array.length;i++){
    if (array.indexOf( array[i]) === i){
        models.push(array[i]);
    }
}

var uniqueProducts = array.filter( function (elem, i,  array){
    return array.indexOf( elem ) === i;
});
*/

// Array.prototype.filter()
// Cria um novo array com todos os elementos que passaram no teste ad função fornecida

// var newArray = arr.filter(callback[, thisArg])

const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10    
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2   
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1   
    }
]

const eMenorQueCinco = (numero) => {
    return numero < 5
}

var newPets = pets.filter( (pet) => {
    return eMenorQueCinco(pet.age)
});

var newPets1 = pets.filter( ( {age} ) => eMenorQueCinco(age));

console.log(newPets1);