"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified */
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ["Ammar", "John", "Emma"];
function show_magicians() {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great" + (magicians[i]);
    }
}
function make_great() {
    console.log(magicians);
}
show_magicians();
make_great();
