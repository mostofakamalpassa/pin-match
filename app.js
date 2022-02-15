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

document.getElementById('key-match').addEventListener('click', function(e){
const buttonNumber = e.target.innerText;
    const inputNumbers = document.getElementById('input-numbers');

    if(!isNaN(buttonNumber)){
        const priviusNumber = inputNumbers.value;
        const newNumbers = priviusNumber + buttonNumber;
    
        inputNumbers.value = newNumbers;
    }

    if(buttonNumber.toLowerCase() == 'c'){
        inputNumbers.value = '';
    }
    if(buttonNumber.toLowerCase() == '<'){
        let convertToArray =  Array.from(  inputNumbers.value);

        convertToArray.pop();
    
        inputNumbers.value =   convertToArray.join('');
        
        
    }
   
})

document.getElementById('submit-pin').addEventListener('click', function(e){
    const inputNumber = document.getElementById('input-numbers');
    const generatePin = document.getElementById('input-pin');

    const inputNumberParese = parseInt(inputNumber.value);
    const generateParse = parseInt(generatePin.value);

    if(inputNumberParese === generateParse){
      const success =   document.getElementById('success');
        success.style.display ='block';
        console.log('matech pin ', generateParse);
        setTimeout(function(){
            success.style.display = 'none';
        },2000)
    }else{
        const errorMessage = document.getElementById('error');

        errorMessage.style.display ='block';

        setTimeout(function(e){
            errorMessage.style.display = 'none';
        }, 2000);
        console.log('not match pin ')
    }
    
    
})