const anthem = "amar sonar bangla ami toumay Valobashi";

const userInput = 'amarDesh';
const cheackInput = 'amardesh';


// if(userInput.toLocaleLowerCase() == cheackInput.toLocaleLowerCase()){
//     console.log('Match')
// }else{
//     console.log('dose not match')
// }


const arrayStringScearch = [

    'hello kamal and jamal ',
    'laptop by now',
    'work now miya vai',
    'we are make a laptop',
    'working now my laptop'
];


let output = [];

let searchStr = 'laptop';

// for(let keys of arrayStringScearch){

//     if(keys.toLowerCase().indexOf(searchStr.toLowerCase())!= -1){

//         output.push(keys);
//     }
// }

for(let key of arrayStringScearch){

    if(key.toLocaleLowerCase().includes(searchStr.toLowerCase())){
        output.push(key);
    }
}

//console.log(output);


const word = anthem.split(' ');
// console.log(word);

const splitWithA  = anthem.split('a');
//console.log(splitWithA);


const sliceWord = anthem.slice(5,11);

// console.log(sliceWord);

const substar = anthem.substr(5,5);

console.log(substar);