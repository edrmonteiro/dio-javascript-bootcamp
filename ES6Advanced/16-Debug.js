//console
console.log('black text');
console.warn('Yellow text with alert');
console.error('Red error text')

console.trace();    //shows position
debugger

console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);

console.table(['Eduardo Monteiro', 'Digital Innovation One']);
console.log('%c styled log', 'color: blue; font-size:40px');
console.assert( 1 === 2, 'Ops')