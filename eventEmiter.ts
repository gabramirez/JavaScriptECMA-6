//EventTarget

//EventEmiter
const EventEmiter = require('events');
class Users extends EventEmiter {
    userLogged(data){
        setTimeout(() => {
             this.emit('User logged', data);
        }, 2000);
    }
 }




