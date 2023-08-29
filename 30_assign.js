/* Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array,
and print a greeting to each user:5
• If the username is 'admin', print a special greeting, such as Hello admin,
would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric,
thank you for logging in again */
var Hello_Admin = ["admin", "eric", "jhon", "farooq", "salman"];
for (var i = 0; i < 5; i++) {
    if (Hello_Admin[i] === "admin") {
        console.log("Hello ".concat(Hello_Admin[i], ", \n        would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(Hello_Admin[i]));
    }
}
