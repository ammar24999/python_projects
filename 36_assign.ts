/* T-Shirt: Write a function called make_shirt() that accepts 
a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and 
the message printed on it. Call the function. */
function make_Shirt(size,text){
    return (`the size of the shirt is ${size} and print the message on th shirt is${text}`)
    
}
let shirt=make_Shirt(45,"Hello world");
console.log(shirt)