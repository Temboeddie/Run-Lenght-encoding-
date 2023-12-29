const fs = require('fs');
const inText = fs.readFileSync('input.txt').toString();

let i = 0;
let n = 1;
let j = "";
const escapeSymbol = '#';

while (i < inText.length) {
    if (inText.charAt(i) === escapeSymbol){
        let count = "";
        i++; //Move past the escpae symbol

        //Read number of repeated characters

        while(!isNaN(parseInt(inText.charAt(i), 10))){
            count += inText.charAt(i);
            i++;
        }

        j += inText.charAt(i).repeat(parseInt(count));
    } else {
        //Count consecutive characters
        while(inText.charAt(i) === inText.charAt(i + n)){
            n++;
        }
        if ( n === 1 ){
            j += inText.charAt(i);
        } else{
            j += escapeSymbol + n + inText.charAt(i);
        }
    }
   
    i += n;
    n = 1;
}

fs.writeFileSync("output.txt", j);
