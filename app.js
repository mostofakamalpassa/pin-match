function newPin(){

    return Math.round(Math.random()*10000);
}



function getPin(){

    const pin = newPin();

    const pinTostring = pin + '';

    if(pinTostring.length == 4){
        return pin;
    }else{
        console.log('get 3 or less pin number = ', pin);
       return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(e){
    const inputPin = document.getElementById('input-pin');

    inputPin.value = getPin();

})