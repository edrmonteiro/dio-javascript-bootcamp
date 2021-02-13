//classic function
function log(value) {
 console.log(value);
;}

var log1 = function(value) {
    console.log(value);
};

log('test');
log1('test');

//Arrow functions   =>
var sum = (a, b) => a + b;

var sum1 = (a, b) => {
    var x = 10;
    return a + b
};

console.log(sum(2, 3));

var pot = a => a * a;

var func1 = (...a) => a;

var obj = {
    test: 1
}
var creatObj = () => ({ test:12});


function Car() {
    this.foo = 'bar';
}

var Car1 = () => {
    this.foo = 'bar';
}

console.log(new Car());
console.log(Car1());


var obj2 = {
    showContext: function showContext(){
        this.log(this);
        setTimeout(function() {
            console.log(this);
        }, 1000);
        setTimeout(function() {
            console.log(this);
        }.bind(this), 1000);        
    },
    log: function log(value){
        console.log(value)
    }
}

obj2.showContext();

