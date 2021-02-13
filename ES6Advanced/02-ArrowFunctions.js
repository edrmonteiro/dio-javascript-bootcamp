function multiply(a, b = randomNumber()){
    b = b || 1;
    return a * b;
}

console.log(multiply(5));

//lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}

console.log(randomNumber())