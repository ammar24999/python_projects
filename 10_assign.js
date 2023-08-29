// Program: T-Shirt
// Author: [Your Name]
// Date: [10/08/23]
// Description: This program defines a function to create custom T-shirts with size and message,
// and it demonstrates creating both large and medium shirts with default messages.
function make_Shirt(large_shirt, medium_shirt, size, text) {
    if (large_shirt && medium_shirt) {
        console.log("".concat(large_shirt, " && ").concat(medium_shirt, " \"i like type script\""));
    }
    return "".concat(size, " and ").concat(text);
}
var shirt = make_Shirt("large shirt", "medium shirt", 45, "Hello world");
console.log(shirt);
