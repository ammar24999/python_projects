function make_Shirt(size="Large",text="I Love Typescript"){
    return (`the size of the shirt is ${size} and print the message on the shirt is${text}`)
    
}
let largeShirt = make_Shirt(); // Using the default values for size and text
let mediumShirt = make_Shirt("medium"); // Using the default text
let customShirt = make_Shirt("small", "Hello World"); // Using a custom size and message

console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
