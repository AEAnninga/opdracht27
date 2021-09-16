// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
};
  
ikRockArrowFunctions()

// arrow functie:
const ikRockArrowFunctions2 = () => console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions2()

// Opdracht: schrijf de onderstaande functie om naar een arrow functie op 1 regel.
const fivePlusSeven = function () {
    return 5 + 7
};
  
console.log(fivePlusSeven());

// arrow functie:
const fivePlusSevenArrow = () => 5 + 7;

console.log(fivePlusSevenArrow());

// Deel C:
const myFunction = (a, b) => a + b;

console.log(myFunction(5, 7));

// Deel D:
const myFunction2 = a => a + 5;

console.log(myFunction2(7));

// Deel E: Returnen van een object {} met parentheses ()
const createObject = () => ({greeting: "hoi"});

console.log(createObject());