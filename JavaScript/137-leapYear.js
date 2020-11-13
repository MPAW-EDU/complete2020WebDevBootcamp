

function isLeap(year) {
    const checkYear = year%4===0||(year/400)%2===0&&(year/100)%2!==0?false:true;
    return checkYear?"Not leap year.":"Leap year.";

}

console.log(isLeap(2400))
console.log(isLeap(1989))