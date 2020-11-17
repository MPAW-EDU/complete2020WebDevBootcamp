
const buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];

const green = new Audio("./sounds/green.mp3");
const blue = new Audio("./sounds/blue.mp3");
const red = new Audio("./sounds/red.mp3");
const yellow = new Audio("./sounds/yellow.mp3");
const wrong = new Audio("./sounds/wrong.mp3");


const animateBox = (box) => {
    $(`#${box}`).animate({opacity: 0.1}).animate({opacity: 1});
}

const nextSequence = () => {
    let randomNumber = Math.floor((Math.random() * 4))
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);

    const audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
    $("body").on("click", () => audio.play());

    gamePattern.forEach( (e) => {
        animateBox(e);
        const audio = new Audio("./sounds/" + e + ".mp3");
        $("#"+e).on("click", () => {
            audio.play();
        })
    })
}

nextSequence();



