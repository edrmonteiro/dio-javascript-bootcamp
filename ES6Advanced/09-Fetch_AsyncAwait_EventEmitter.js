fetch('/data.json', {
    method: 'post',
    body: JSON.stringify(data)
})
.then( responseStream => {
    if (responseStream.status === 200) {
        responseStream.json()
    } else {
        throw new Error('Request error');
    }

}).then( data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

//ES7 - Async / Await
const simpleFunc = async () => {
    return 12345;
};
simpleFunc()
.then(data => {
    console.log(data);
})
.catch( err => {
    console.log(err);
});

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc1 = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch ('/data.json').then(resStream => resStream.json());
    return dataJSON;
}

const simpleFunc2 = async () => {
    const data = await Promise.all([asyncTimer(), fetch ('/data.json').then(resStream => resStream.json())]);
    return data;
}

