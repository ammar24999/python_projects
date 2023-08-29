/* Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name 
of each magician in the array.

*/
let magicians = ["Ammar", "John", "Emma"];

function show_magicians() {
  for (let i = 0; i < magicians.length; i++) {
    console.log("Great",magicians[i])
  }
}
show_magicians();
export{}