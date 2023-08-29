"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ["Ammar", "John", "Emma"];
function show_magicians(magiciansArray) {
    for (var i = 0; i < magiciansArray.length; i++) {
        console.log(magiciansArray[i]);
    }
}
function make_great(magiciansArray) {
    var greatMagicians = [];
    for (var i = 0; i < magiciansArray.length; i++) {
        greatMagicians.push("the Great ".concat(magiciansArray[i]));
    }
    return greatMagicians;
}
var originalMagicians = magicians.slice(); // Create a copy of the original array
var greatMagicians = make_great(originalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
