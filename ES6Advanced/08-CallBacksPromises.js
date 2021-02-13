//before ES6
function doSomething(callback) {
    //callback('First data');
    setTimeout(function(){
        callback('First data');
    }, 1000);
}
function doOtherThing(callback) {
    //callback('Second data');
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}

function doAll() {
    try{
        doSomething(function(data){
            var processData = data.split('');
            try {
                doOtherThing(function(data2) {
                    var processData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processData, processData2)
                        }, 1000);
    
                    }
                    catch(err){
                        //handle error
                    }
                });
            }
            catch(err ){
                //handle error
            }
        });
    }
    catch(err ){
        //handle error
    }
}
//doAll();


//using Promises
//promises status:
// Pending
// Fulfilled
// Reject

const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve('First data');
        }, 1000);   
    });
const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error("Something wrong");
        setTimeout(function(){
            resolve('Second data');
        }, 1000);
    });

//execute in sequence 
doSomethingPromise()
    .then(data => { 
        console.log(data.split('')); 
        return doOtherThingPromise(); 
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log(error));


//executing both at the same time
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''))
    console.log(data[1].split(''))
}).catch(err => {});

//executing the faster
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data.split(''))
}).catch(err => {});