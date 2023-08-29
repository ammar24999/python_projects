/* Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas! */
var favorite_fruits = ["bananas", "orange", "grapes", "bananas"];
if (favorite_fruits.indexOf("bananas") !== -1) {
    console.log("I realy like bananas");
}
if ((favorite_fruits.indexOf("orange") !== -1)) {
    console.log("I realy like orange");
}
if (favorite_fruits.indexOf("grapes") !== -1) {
    console.log("I realy like grapes");
}
if (favorite_fruits.indexOf("apples") !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf("strwberies") !== -1) {
    console.log("You really like strawberries!");
}
const ourArray = [];
let i = 5;

while (i > -1) {
  ourArray.push(i);
  i--;
}
console.log(ourArray)

   // Setup
const myArray = [];

   // Only change code below this line
   let current_users=["admin","eric","jhon","farooq","salman"];
   let new_users=["hasan","admi","eri","jhon","faroo","sameer"];
   
   for (let i=0 ;i<current_users.length;i++){
       for (j=0 ; j<new_users.length;j++){
           if (i===j){
            console.log(`"alreadry taken ${current_users[i]} need to enter new name"`)
           }
        else{
            console.log(`"username is available"`)
        }
       }}
   