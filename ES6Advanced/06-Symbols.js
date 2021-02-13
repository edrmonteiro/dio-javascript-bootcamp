//Symbols
//before symbol introduction on javascript there was 6 types 

//unique identifier
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello',
}

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

// Well know Symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;


const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

while (true){
    let {value, done} = it.next()
    console.log(value);
    if (done){
        break;
    }
}
console.log(it);
console.log(it.next());

for (let value of arr) {        //ES6 
    console.log(value);
}

const str = "Digital Innovation One";

for (let value of str) {
    console.log(value);
}
// console.log(str)
// var arr2 = [...str]
// console.log(arr2)

console.log(arr[Symbol.iterator]())

var obj3 = {                ///originally objects properties are not iterable, so you can use Symbol to solve this
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it1 = obj3[Symbol.iterator]();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

const arr4 = [...obj3];
console.log(arr4);