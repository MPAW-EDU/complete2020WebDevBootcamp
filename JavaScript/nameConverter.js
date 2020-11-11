
// This is the string challenge from #118

name1 = "BubBleS";
name2 = "dRacUlA"

// Main function
function standardName(x){
    firstLetter = firstLetterHelper(x.slice(0,1));
    remLetters = remLettersHelper(x.slice(1,x.length));
    console.log(firstLetter + remLetters);
}

// Helper functions
function firstLetterHelper(x){
    return x.toUpperCase();
}

function remLettersHelper(y){
    localName = y.toLowerCase();
    
    console.log(localName)
    return localName;
}

standardName(name1);
standardName(name2)