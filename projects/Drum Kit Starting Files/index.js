
const drums = document.querySelectorAll(".drum");
// const tom1 = new Audio('./sounds/tom-1.mp3');
// function handleClick() {
//     tom1.play();
// }

// Front-load audio files into class constructs



drums.forEach(e => e.addEventListener("click", () => {

    const buttonInnerHtml = e.innerHTML;

    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);

}))

document.addEventListener("keypress", (e) => {

    let keyPressed = e.key;

    makeSound(keyPressed);

    buttonAnimation(keyPressed);

})

function makeSound(key){
    switch (key) {
        case "w":
            const tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            const tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            const snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            const crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            const kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("."+ currentKey)
    activeButton.classList.add("pressed");

    setTimeout(()=>{activeButton.classList.remove("pressed");}, 100);
}


/***
 * Instructor Solution, Angela Yu
 */
/*
 const numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for (let i = 0; i < numberOfDrumButtons; i++){
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
        case "w":
            const tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            const tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            const snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            const crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            const kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default:
            console.log(buttonInnerHTML)
            break;
    }
     })
 }
 */