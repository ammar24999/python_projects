/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = "axis";
console.log("Is car  == 'axis'? I predict (".concat(car == "axis", ") True ."));
console.log("Is car !== 'axis'? I predict (".concat(car !== "City", ") True."));
console.log("Is car === 'axis'? I predict (".concat(car === "City", ") False."));
console.log("Is car === 'axis'? I predict (".concat(car === "axis", ") True."));
console.log("Is car !== 'axis'? I predict (".concat(car !== "axis", ") Fasle ."));
console.log("Is car  != 'axis'? I predict( ".concat(car != "City", ") True."));
console.log("Is car  != 'axis'? I predict( ".concat(car != "axis", ") False."));
console.log("Is car === 'axis'? I predict (".concat(car.length === 5, " false) ."));
console.log("Is car  > 'axis'? I predict (".concat(car.length > 5, " ) False."));
console.log("Is car  < 'axis'? I predict (".concat(car.length < 5, ") True."));
console.log("Is car === 'axis'? I predict (".concat(car.substring(car.length - 2) === ("is"), ") True."));
