const isOdd = (number, cb) => {
    let message;

    if(isNaN(number)){
        message = `El paràmetre introduit no és un número`;
    }else if( number%2==0){
        message = `El número ${number} és parell`;
    }else{
        message = `El número ${number} és imparell`;
    }
    cb(message);
}

function printMessage(message){
    console.log(message);
}

isOdd(Math.floor(Math.random()*10), printMessage);