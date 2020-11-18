
const buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];

/**
 *  Refactored Code below
 */

// Game operation controller
// Detect "A" key to start the game
$("body").on("keypress", (t) => {
    if(t.key === "a" && gamePattern.length == 0){
        nextSequence();
    }
})

// Play a selected audio file
const playAudio = (name) => {
    const audio = new Audio(`./sounds/${name}.mp3`)
    audio.play();
}

// Animates the randomized pattern to the user.
const animateButton = (color) => {
    $(`#${color}`).animate({opacity: 0.1}).animate({opacity: 1});
}
// Animates the press of the user.
const animatePress = (currentColor) => {
    $(`#${currentColor}`).addClass("pressed")

    setTimeout(() => {
         $(`#${currentColor}`).removeClass("pressed")
    }, 100);
}
// Generates the next random color and push to pattern array
// Animate the pattern for the user
// Generate audio for each item as it animates
const nextSequence = () => {
    let randomNumber = Math.floor((Math.random() * 4))
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);

    const audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
    $("body").on("click", () => audio.play());
    playAudio(randomChosenColor);
    gamePattern.forEach( (e) => {
        animateButton(e);
        // $(`#${e}`).on("click", () => {
        //     playAudio(e);
        // })
    })
}
// add a click listener to each of the buttons
$(".btn").click( function() {
    // Grab the correct node by it's attribute id,
    // getting it's ID
    let userChosenColour = $(this).attr("id");

    // Push the ID onto out array
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour)
    playAudio(userChosenColour);

    console.log(userClickedPattern);
})

/***
 *      pre - refactored code below
 */
// const green = new Audio("./sounds/green.mp3");
// const blue = new Audio("./sounds/blue.mp3");
// const red = new Audio("./sounds/red.mp3");
// const yellow = new Audio("./sounds/yellow.mp3");
// const wrong = new Audio("./sounds/wrong.mp3");


// const animateBox = (box) => {
//     $(`#${box}`).animate({opacity: 0.1}).animate({opacity: 1});
// }

// const animatePress = (currentColor) => {
//     $(`#${currentColor}`).addClass("pressed")

//     setTimeout(() => {
//          $(`#${currentColor}`).removeClass("pressed")
//     }, 100);

// }

// const nextSequence = () => {
//     let randomNumber = Math.floor((Math.random() * 4))
//     let randomChosenColor = buttonColors[randomNumber]
//     gamePattern.push(randomChosenColor);

//     const audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
//     $("body").on("click", () => audio.play());

//     gamePattern.forEach( (e) => {
//         animateBox(e);
//         const audio = new Audio(`./sounds/${e}.mp3`);
//         $(`#${e}`).on("click", () => {
//             audio.play();
//         })
//     })
// }

// $(".btn").click( function() {
//     // Grab the correct node by it's attribute id,
//     // getting it's ID
//     let userChosenColour = $(this).attr("id");
//     const audio = new Audio(`./sounds/${userChosenColour}.mp3`)

//     // Push the ID onto out array
//     userClickedPattern.push(userChosenColour);

//     animatePress(userChosenColour)
//     audio.play();

//     console.log(userClickedPattern);
// })


// nextSequence();



