let max = prompt("Enter maximum rage you want: ");

let random = Math.floor(Math.random()*max + 1);

let guess = prompt("Guess the number: ");

while(true){
    if(guess=='quit'){
        console.error('Game Over');
        break;
    }

    if(guess == random){
        console.log("Conrats!, You win the game!");
        break;
    }else{
        guess = prompt("Your guess is wrong, Please try again: ");
    }
}
