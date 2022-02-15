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

for(let keys of arrayStringScearch){

    if(keys.toLowerCase().indexOf(searchStr.toLowerCase())!= -1){

        output.push(keys);
    }
}


console.log(output);