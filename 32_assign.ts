/*Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. 
Make sure one or two of the new usernames are also in the 
current_users list.

• Loop through the new_users list to see if each new username has 
already been used. If it has, 
print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the 
username is available.

• Make sure your comparison is case insensitive. 
If 'John' has been used, 'JOHN' should not be accepted. */
let current_users=["admin","eric","jhon","farooq","salman"];
let new_users=["hasan","Admin","eric","jhon","Farooq","sameer"];
let current_user=current_users.map(user => user.toLowerCase());
let new_user=new_users.map(user => user.toLowerCase());
for (let i=0 ;i<new_user.length;i++){
    
    if (current_user.includes(new_user[i]))
    console.log(`Username "${new_users[i]}" is already taken. Please enter a new name.`);
    else{
        console.log(`Username "${new_users[i]}" is available.`);
    }    
    }