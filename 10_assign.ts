// Program: T-Shirt
// Author: [Your Name]
// Date: [10/08/23]
// Description: This program defines a function to create custom T-shirts with size and message,
// and it demonstrates creating both large and medium shirts with default messages.

function make_Shirt(large_shirt: string, medium_shirt: string, size: number, text: string): string {
    if (large_shirt && medium_shirt) {
        console.log(`${large_shirt} && ${medium_shirt} "i like type script"`);
    }
    return `${size} and ${text}`;
}

let shirt = make_Shirt("large shirt", "medium shirt", 45, "Hello world");
console.log(shirt);
