//grant access to the Letter.js file
let letter = require("./Letter.js");

//create the word constuctor
let Word = function(word){

    //each word constructor creates an array of Letter objects for each letter in the word. 
    this.letterArr = [];

    for (let i = 0; i < word.length; i++){
        if(word.charAt(i) === " "){
            this.letterArr.push(" ");
        } else {
            this.letterArr.push(new Letter(word.charAt(i)));
        };
    };


}

