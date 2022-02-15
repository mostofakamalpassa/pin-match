const friends = ['one','two','three','four','five','six'];


function friend( array){

    if(Array.isArray(array) == false){

        console.log('plase give valid array');
        return;
    }

    for(let key of array){
        if(key.indexOf('tow') != 1){
            console.log(key);
            return;
        }
    }
}


friend(friends);
friend('hellow kamal');