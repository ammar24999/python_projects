let magicians = ["Ammar", "John", "Emma"];

function show_magicians(magiciansArray: string[]) {
  for (let i = 0; i < magiciansArray.length; i++) {
    console.log(magiciansArray[i]);
  }
}

function make_great(magiciansArray: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let i = 0; i < magiciansArray.length; i++) {
    greatMagicians.push(`the Great ${magiciansArray[i]}`);
  }
  return greatMagicians;
}

let originalMagicians = magicians.slice(); // Create a copy of the original array
let greatMagicians = make_great(originalMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("Great Magicians:");
show_magicians(greatMagicians);

export{}