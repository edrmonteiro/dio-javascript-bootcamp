//Enhanced Object Literals

//classic
var prop2 = 'prop2';
var obj = {
    item1: 'prop1',
    item2: prop2,
    method: function (){
        console.groupCollapsed('method1')
    }
}

console.log(obj);

//ES6
function method1(){
    console.log('method called');
}
var prop3 = 'prop2';
var obj1 = {
    prop3,
    method1,
    sum(a, b) {
        return a + b;
    }
}

console.log(obj1);

obj1.method1()
console.log(obj1.sum(2,4));
obj.method()

//before ES6
var propName = 'test';
var obj4 = {};
obj4[propName + 'concat'] = 'prop value';
console.log(obj4)

//ES6
var propName = 'test';
var obj5 = {
    [propName + 'concat']: 'prop value'
};
console.log(obj4)
console.log(obj5)




