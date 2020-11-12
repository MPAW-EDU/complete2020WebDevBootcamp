



// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// function bmiCalculator(weight, height){
//     return (Math.round(weight / (height ** 2)))
// }

// console.log(bmiCalculator(65, 1.8))

function bmiCalculator (weight, height) {
    const bmi = weight / Math.pow(height, 2);
    let interpretation;
    console.log(bmi)
    if(bmi > 24.9){
        interpretation = `Your BMI is ${bmi}, so you are overweight.`
    } else if(bmi > 18.5 && bmi < 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`
    } else {
        interpretation = `Your BMI is ${bmi}, so you are underweight.`
    }
    console.log(interpretation)
    return interpretation;
}

console.log(bmiCalculator(80,2))