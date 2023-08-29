function make_Shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    return ("the size of the shirt is ".concat(size, " and print the message on th shirt is").concat(text));
}
var largeShirt = make_Shirt(); // Using the default values for size and text
var mediumShirt = make_Shirt("medium"); // Using the default text
var customShirt = make_Shirt("small", "Custom message"); // Using a custom size and message
console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
