const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('User logged', data => {
    console.log(data);
});
emitter.emit('User logged', { user: 'Eduardo Monteiro'});

class Users extends EventEmitter {
    userLogged(data) {
        //console.log('0');
        this.emit('User Logged', data);
    }
}
const users = new Users();
users.on('User logged', data => {
    console.log('4');
    console.log(data);
});
users.once('User logged', data => {
    console.log(data);
});

users.userLogged( {user: 'Ribeiro'})
users.userLogged( {user: ' Monteiro'})