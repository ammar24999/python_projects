/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array  */
var car = "axis";
var num = 23;
var num1 = 35;
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests? I predict (".concat(num == 23, ") True ."));
console.log("Numerical tests? I predict (".concat(num != 23, ") True ."));
console.log("Numerical tests? I predict (".concat(num > 23, ") False ."));
console.log("Numerical tests? I predict (".concat(num < 23, ") False ."));
console.log("Numerical tests? I predict (".concat(num >= 23, ") True ."));
console.log("Numerical tests? I predict (".concat(num <= 23, ") True     ."));
//Tests using "and" and "or" operators
console.log("Tests using \"and\" operators? I predict (".concat(num == 23 || car != "axis", ") True."));
console.log("Tests using \"and\" operators? I predict (".concat(num !== 23 || car != "City", ") True."));
console.log("Tests using \"and\" operators? I predict (".concat(num > 20 || car == "City", ") True."));
console.log("Tests using \"and\" operators? I predict (".concat(num <= 20 || car != "axis", ") False."));
//and
console.log("Tests using \"or\" operators? I predict (".concat(num == 23 && car != "axis", ") True."));
console.log("Tests using \"or\" operators? I predict (".concat(num !== 23 && car != "City", ") True."));
console.log("Tests using \"or\" operators? I predict (".concat(num > 20 && car == "City", ") True."));
console.log("Tests using \"or\" operators? I predict (".concat(num <= 20 && car != "axis", ") False."));
//• Test whether an item is not in a array
console.log("Is car INCLUDES 'a'? I predict (".concat(car.includes("a"), ") False."));
console.log("Is car === 'axis'? I predict (".concat(car.includes("a"), ") False."));
console.log("Is car === 'axis'? I predict (".concat(car === "axis", ") True."));
console.log("Is car !== 'axis'? I predict (".concat(car !== "axis", ") Fasle ."));
console.log("Is car  != 'axis'? I predict( ".concat(car != "City", ") True."));
console.log("Is car  != 'axis'? I predict( ".concat(car != "axis", ") False."));
console.log("Is car === 'axis'? I predict (".concat(car.length === 5, " false) ."));
console.log("Is car  > 'axis'? I predict (".concat(car.length > 5, " ) False."));
console.log("Is car  < 'axis'? I predict (".concat(car.length < 5, ") True."));
console.log("Is car === 'axis'? I predict (".concat(car.substring(car.length - 2) === ("is"), ") True."));
