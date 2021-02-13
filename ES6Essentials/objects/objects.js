'use strict';
function Animal(paw){
  this.paw = paw;
}


function Dog(age) {
  Animal.call(this, 4);
  this.age = age;
}

let pug = new Dog(3);

console.log("dog:");
console.log(pug);
console.log(pug);

function dog1 (){};
dog1.prototype.movement = function(){};
const c = new dog1();
console.log(c.__proto__);