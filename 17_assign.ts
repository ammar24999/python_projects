/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time 
for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, 
print a message to that person letting you know you’re sorry you can’t invite you to dinner.

• Print a message to each of the two people still on your list, 
letting you know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program. */
let guest_list3=["Khurram","Danial","Salman"]; //guest list

console.log(`Dear Ammar i am ${guest_list3[2]} not able to join you at the dinner`);

guest_list3[2]="Hasan"; //replacing array in a list 

console.log(`Hey Mr ${guest_list3[0]} today i arrange a dinner at my home please join us.`)//concatinating string
console.log(`Hey Mr ${guest_list3[1]} today i arrange a dinner at my home please join us.`)
console.log(`Hey Mr ${guest_list3[2]} today i arrange a dinner at my home please join us.`)

console.log(`Hey Mr ${guest_list3[0]},Mr ${guest_list3[1]},Mr ${guest_list3[2]} I  just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.`)

guest_list3.push("Azam");//here are add element in the end of an array
guest_list3.splice(2,0,"Ahsan");//here are add element in the middle of the array

console.log(`Hey Mr ${guest_list3[4]} today i arrange a dinner at my home please join us.`)
console.log(`Hey Mr ${guest_list3[2]} today i arrange a dinner at my home please join us.`)
console.log("I can invite only two people for dinner")

//Remove guests from my guest  list
console.log(`Hey Mr ${guest_list3[4]}I am sorry I can’t invite you to dinner`)
guest_list3.pop();
console.log(`Hey Mr ${guest_list3[3]}I am sorry I can’t invite you to dinner`)
guest_list3.pop();
console.log(`Hey Mr ${guest_list3[2]} I am sorry I can’t invite you to dinner`)
guest_list3.pop();

//Print a message to each of the two people still on my list
console.log(`Hey Mr ${guest_list3[0]} ypu are still invited.`)//concatinating string
console.log(`Hey Mr ${guest_list3[1]} ypu are still invited.`)

console.log(guest_list3)

//Remove the last two names from my list
guest_list3.pop()
guest_list3.shift()

//Print your list to make sure you actually have an empty list at the end of your program
console.log(guest_list3)
console.log("The guest list is now empty.");