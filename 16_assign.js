var guest_list2 = ["Khurram", "Danial", "Salman"]; //guest list
console.log("Dear Ammar i am ".concat(guest_list2[2], " i am not able to join you at the dinner"));
guest_list2[2] = "Hasan"; //replacing array in a list 
console.log("Hey Mr ".concat(guest_list2[0], " today i arrange a dinner at my home please join us.")); //concatinating string
console.log("Hey Mr ".concat(guest_list2[1], " today i arrange a dinner at my home please join us."));
console.log("Hey Mr ".concat(guest_list2[2], " today i arrange a dinner at my home please join us."));
console.log("Hey Mr ".concat(guest_list2[0], ",Mr ").concat(guest_list2[1], ",Mr ").concat(guest_list2[2], " I  just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner."));
guest_list2.push("Azam");
guest_list2.splice(2, 0, "Ahsan");
console.log("Hey Mr ".concat(guest_list2[4], " today i arrange a dinner at my home please join us."));
console.log("Hey Mr ".concat(guest_list2[2], " today i arrange a dinner at my home please join us."));
console.log(guest_list2);
