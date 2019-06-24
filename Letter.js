
//Create Letter constructor that stores the letter for a word being guessed
function Letter(letter) {
    this.letter = letter;
    this.guess = false;

    //method checks the guessed property and returns eith and _ ot letter based on the "guessed" value
    this.displayletter = function(){
        if(this.guessed){
            return this.letter + " ";
        } else {
            return "_ ";
        };
    };

    //if the guessed letter matches the "letter" value, then we change the "guessed" value of the letter object to 'true'
    this.checkGuess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
        }
    };

};

//Export the constructor to the Word.js file
module.exports = letter;