

// make a function to generate a random number between 1 and 6.
const rollDie = () => {
    return Math.floor((Math.random() * 6) + 1)
}

// Create an array to hold the die values
let Dice = [];

/*
    use a while loop to push two random
    digits into the array.
*/
while(Dice.length < 2){
    Dice.push(rollDie());
}

document.getElementsByTagName("img")[0].setAttribute("src", `./images/dice${Dice[0]}.png`);

document.getElementsByTagName("img")[1].setAttribute("src", `./images/dice${Dice[1]}.png`);

if ( Dice[0] > Dice[1]) {
    document.querySelector("#winner").innerHTML = "<p><img src='../../node_modules/@fortawesome/fontawesome-free/svgs/regular/flag.svg' alt='' style='width: 50px; margin-right: 20px;'>PLAYER 1 WINS!</p>";
} else if (Dice[0] < Dice[1]) {
    document.querySelector('#winner').innerHTML = "<p>PLAYER 2 WINS!<img src='../../node_modules/@fortawesome/fontawesome-free/svgs/regular/flag.svg' alt='' style='width: 50px; margin-left: 20px;'></p>";
} else {
    document.querySelector('#winner').innerHTML = "<p><img src='../../node_modules/@fortawesome/fontawesome-free/svgs/regular/flag.svg' alt='' style='width: 50px; margin-right: 20px;'>TIE!<img src='../../node_modules/@fortawesome/fontawesome-free/svgs/regular/flag.svg' alt='' style='width: 50px; margin-left: 20px;'></p>";
}