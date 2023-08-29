/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner. */
let guest_list19=["Khurram","Danial","Salman"]; //guest list
console.log(`Dear Ammar i am ${guest_list19[2]} i am not able to join you at the dinner`);
guest_list19[2]="Hasan"; //replacing array in a list 
console.log(`Hey Mr ${guest_list19[0]} today i arrange a dinner at my home please join us.`)//concatinating string
console.log(`Hey Mr ${guest_list19[1]} today i arrange a dinner at my home please join us.`)
console.log(`Hey Mr ${guest_list19[2]} today i arrange a dinner at my home please join us.`)
console.log(`Hey Mr ${guest_list19[0]},Mr ${guest_list19[1]},Mr ${guest_list19[2]} I  just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.`)
guest_list19.push("Azam");//here are add element in the end of an array
guest_list19.splice(2,0,"Ahsan");//here are add element in the middle of the array
console.log(`Hey Mr ${guest_list19[4]} today i arrange a dinner at my home please join us.`)
console.log(`Hey Mr ${guest_list19[2]} today i arrange a dinner at my home please join us.`)
console.log(`Total ${guest_list19.length} guest invited at dinner table`)