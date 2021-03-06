console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//loop through numbers 0 - 100
//if our number is odd print to console
//else print "Even" to the console
let rand = Math.floor(Math.random() * 100) + 1;
let userInput;

do{
    userInput = window.prompt ("Guess a number between 1 and 100!");

    if (userInput > rand){
        console.log ("Too High!")

    } 
    else if (userInput < rand)
    {

        console.log("Too Low!")
    } 
    else
    { 
        console.log (`Congrats! ${rand} was the correct answer!`);
    }

}while(userInput != rand);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
