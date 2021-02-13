class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{
    console.log(name);
    var name = 'Eduardo';

    const myError = new CustomError({
        message:'Custom message',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
}catch(err){
     console.log('error' + err);
     console.log(err.data);
     if (err.data.type === 'Server error'){

     }
 }
 finally {
     
 }