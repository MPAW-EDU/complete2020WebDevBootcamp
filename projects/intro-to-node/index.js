
const superheroes = require("superheroes");
const supervillains = require("supervillains");

let mySuperHeroName = superheroes.random()
let mySuperVillainName = supervillains.random();

console.log(`Good: ${mySuperHeroName}, Bad: ${mySuperVillainName}`);

