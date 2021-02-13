//Destructuring assignment

//before ES6
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];


var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}
var name = obj.name;


//ES6
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple, apple2)
console.log(tomato, tomato2)

var {name} = obj;
console.log(name);

var age = obj.props.age;
var { 
    props: {
        age, 
        favoriteColors: [color1, color2]}
    } = obj;

console.log(age);
console.log(color1, color2);

function sum([a,b] = [0,0]) {
    return a +b;
}

console.log(sum([5,5]));
console.log(sum());