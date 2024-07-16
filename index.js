"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question#02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log(`“Hello ${personName}, would you like to learn some Python today?”`);
// Question#03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName = "Fayyaz Alam";
console.log(`${myName.toLowerCase()}`);
console.log(`${myName.toUpperCase()}`);
console.log(`${myName}`);
/*Question#04: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
let quote = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”";
let author = "Albert Einstein";
console.log(`Quote: ${quote}`);
console.log(`Author: ${author}`);
//Question#05: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Enistein";
let quote2 = "A person who never made a mistake never tried anything new.";
let message = `${famous_person} once said, "${quote2}"`;
console.log(message);
//Question#06: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName1 = "\t John Doe \n";
// Print name with whitespace
console.log(`Name with whitespace: "${personName1}"`);
// Strip whitespace from name
let strippedName = personName1.trim();
// Print stripped name
console.log(`Stripped Name: "${strippedName}"`);
//Question#07: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let addition1 = 5;
let addition2 = 3;
console.log("5 + 3 =", addition1 + addition2); //8
let subtraction1 = 12;
let subtraction2 = 4;
console.log("12 - 4 =", subtraction1 - subtraction2); //8
let multiplication1 = 2;
let multiplication2 = 4;
console.log("2 * 4 =", multiplication1 * multiplication2); //8
let division1 = 16;
let division2 = 2;
console.log("16 / 2 =", division1 / division2); //8
/*Question#08: You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log(`${4 + 4}`); //Addition.
console.log(`${10 - 2}`); //Subtraction.
console.log(`${4 * 2}`); //Multiplication.
console.log(`${16 / 2}`); //Division.
//Question#09: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let myNumber = 3;
let message1 = `"My favourite number is ${myNumber}"`;
console.log(message1);
let myData = {
    name: "Fayyaz Alam",
    cnic: "42401-7237698-1",
    email: "alamfayyaz439@gmail.com",
    mobileNo: 923043647520
};
console.log(myData.name); //output only name: Fayyaz Alam
console.log(myData.email); // output only email: alamfayyaz439@gmail.com
console.log(myData); // output variable store myData complete info...
//Question#11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsNames = ["Hassam", "Amir", "Moin"];
console.log(friendsNames[0]);
console.log(friendsNames[1]);
console.log(friendsNames[2]);
//Question#12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friendsNames5 = ["Hassam", "Amir", "Moin"];
for (let i = 0; i < friendsNames.length; i++) {
    console.log(`Hello, ${friendsNames[i]} How are you?`);
}
;
//Question#13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Honda motorcycle", "Tesla car", "Yamaha bike"];
for (let i = 0; i < transportation.length; i++) {
    if (transportation[i] === "Honda motorcycle") {
        console.log("I would like to own a Honda motorcycle.");
    }
    else if (transportation[i] === "Tesla car") {
        console.log("I would like to own a Tesla car.");
    }
    else if (transportation[i] === "Yamaha bike") {
        console.log("I would like to own a Yamaha bike.");
    }
    else {
        console.log("I would like to own this transportation."); // Default message if none of the above conditions match
    }
}
;
//Question#14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let GuestList = ["Sami", "Amir", "Naseer"];
console.log(`Dear ${GuestList[0]}, you are invited to dinner.`);
console.log(`Dear ${GuestList[1]}, you are invited to dinner.`);
console.log(`Dear ${GuestList[2]}, you are invited to dinner.`);
// //Question# 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let GuestList1 = ["Sami", "Amir", "Naseer"];
console.log(GuestList1);
let unableGuest = GuestList1.splice(0, 1)[0];
console.log(`${unableGuest} can't make it to dinner.`);
GuestList1.push("Sonu");
console.log(GuestList1);
for (let i = 0; i < GuestList1.length; i++) {
    console.log(`Dear ${GuestList1[i]}, you are invited to dinner.`);
}
;
// //Question#16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Sami", "Amir", "Naseer"];
console.log(guestList);
let UnableGuest = guestList.splice(0, 1)[0];
console.log(`${UnableGuest} can't make it to dinner.`);
guestList.push("Sonu");
console.log(guestList);
console.log("Update News: I found a bigger dinner table!");
guestList.unshift("Ali Haider");
guestList.splice(Math.floor(guestList.length / 2), 0, "sami");
guestList.push("Fayyaz");
console.log(guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner.`);
}
;
// //Question#17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let newguestList = ['Ali Haider', 'Amir', 'sami', 'Naseer', 'Sonu', 'Fayyaz'];
//Print message
console.log("The new dinner table won't arrive, so I can invite only two people for dinner.");
//Remove guest from the list.
while (newguestList.length > 2) {
    let removedGuest = newguestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Im sorry, ${removedGuest}, I can't invite you to dinner`);
    }
}
;
console.log(newguestList);
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
let index = 0;
while (index < newguestList.length) {
    console.log(`Dear ${newguestList[index]}, you are still invited to dinner.`);
    index++;
}
//remove last two names
newguestList.pop();
newguestList.pop();
//print empty list...
console.log(newguestList);
// //Question#18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let visitPlaces = ["Paris", "Turkey", "Kahsmir", "Switzerland", "London"];
console.log("original order:", visitPlaces);
// • Print your array in alphabetical order without modifying the actual list
console.log("Alphbetaical order:", visitPlaces.slice().sort());
// • Show that your array is still in its original order by printing it.
console.log("original order:", visitPlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", visitPlaces.slice().sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order by printing it again:", visitPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
visitPlaces.reverse();
console.log("Reverse the order is:", visitPlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
visitPlaces.reverse();
console.log("Reverse the order list again:", visitPlaces);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("stored in alphabetical order:", visitPlaces.slice().sort());
//Question#19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let DinnerGuest = ["Sami", "Amir", "Naseer"];
console.log(`Dear ${DinnerGuest[0]}, you are invited to dinner.`);
console.log(`Dear ${DinnerGuest[1]}, you are invited to dinner.`);
console.log(`Dear ${DinnerGuest[2]}, you are invited to dinner.`);
//Guest list count...
let lengthGuest = DinnerGuest.length;
console.log(`We are invited total ${lengthGuest} guests`);
//Message indicating the number of people you are inviting to dinner.
let numberOfGuests = DinnerGuest.length;
console.log(`We are inviting ${numberOfGuests} people to dinner.`);
// Question#20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countriesName = ["Pakistan", "Turkey", "Iran", "Dubai", "England"];
console.log(`Countries Name is: => ${countriesName}`);
;
let mypersonalData = {
    Name: "Fayyaz Alam",
    Age: 21,
    Qualification: "B.COM",
    Email: "alamfayyaz439@gmail.com"
};
console.log(mypersonalData);
//Question#22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let errorArray = ["saqib", "Ali", "Hamza"];
console.log(errorArray[2]);
// Trying to access an index that doesn't exist (intentional error)
console.log(errorArray[3]); // Accessing index 3, which doesn't exist in this array.
// Question#23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let six = 6;
let ten = 10;
//Test 01
console.log("Test 01: ten is equal to 10");
console.log(ten == 10);
//Test 02
console.log("Test 02: six is not equal to 10");
console.log(six !== 10);
//Test 03
console.log("Test 03: six is equal to 06");
console.log(six == 6);
//Test 04
console.log("Test 04: six is not greater than 10");
console.log(six < 10);
//Test 05
console.log("Test 05: ten is greater than 6");
console.log(ten > 6);
//Test 06
console.log("Test 06: six is equal to 10");
console.log(six == 10);
//Test 07
console.log("Test 07: 10 is eaual to 6");
console.log(ten == 6);
//Test 08
console.log("Test 08: ten is equal to 10 && six is greater than 10");
console.log(ten == 10 && six > 10);
//Test 09
console.log("Test 09: ten is not greater than 6");
console.log(ten < 6);
//Test 10
console.log("Test 10: ten is greater than 10");
console.log(ten > 10);
// //Question#24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array 
//Create a varibale
let mango = "mango";
//Tests for equality
console.log("mango is equal to mango");
console.log(mango == "mango");
//Tests for inequality
console.log("mango is not equal to mango");
console.log(mango !== "mango");
//Tests using the lower case function
let uppercaseFruit = "APPLE";
//Equal to
console.log("UPPERCASE APPLE is converting to lowercase apple is equal to apple");
console.log(uppercaseFruit.toLowerCase() == "apple");
//Not equal to
console.log("UPPERCASE APPLE is converting to lowercase apple is equal to apple");
console.log(uppercaseFruit.toLowerCase() !== "apple");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let nine = 9;
let eight = 8;
//Equal to
console.log("nine is equal to 9");
console.log(nine == 9);
//Not equal to
console.log("nine is not equal to 8");
console.log(nine == 8);
//Greater than 
console.log("nine is grater than 8");
console.log(nine > 8);
//Less than
console.log("nine is less than 8");
console.log(nine < 8);
//Greater than or equal to
console.log("nine is greater than or equal to 8");
console.log(nine >= 8);
//Less than or equal to
console.log("nine is less than or equal to 8");
console.log(nine <= 8);
//Tests using "and" and "or" operators
//Using "and" &&
console.log("nine is greater to 8 and nine is not equal to 8");
console.log(nine > 8 && nine != 8);
console.log("nine is less than equal to 8 and nine is not equal to 8");
console.log(nine <= 8 && nine != 8);
//Using "or" ||
console.log("eight is less than to 9 or nine is greater than is equal to 8");
console.log(eight < 9 || nine >= 8);
console.log("eight is greater than to 9 or nine is less than is equal to 8");
console.log(eight > 9 || nine <= 8);
// Test whether an item is in a array
let fruits = ["apple", "banana", "mango", "graps", "orange"];
console.log("orange is include my fruit array");
console.log(fruits.includes("orange"));
//Test whether an item is not in a array
console.log("orange is not include my fruit array");
console.log(fruits.includes("peach"));
// //Question#25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color = "Red";
if (alien_color === "Red") {
    console.log("The player just earned 5 points");
}
;
if (alien_color === "Green") {
    console.log("Alien_color is not blue");
}
;
// //Question#26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//1st Version...
let alienColor = "Green";
if (alienColor === "Green") {
    console.log("alien color is green, the player just earned 5 points for shooting the alien. ");
}
else {
    console.log("alien color is not green, the player just earned 10 points.");
}
;
//2nd Version...
let alienColor1 = "Yellow";
if (alienColor1 == "Green") {
    console.log("alien color is green, the player just earned 5 points for shooting the alien. ");
}
else {
    console.log("alien color is not green, the player just earned 10 points.");
}
;
// //Question#27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//First Version
let AlienColor = "Yellow";
if (AlienColor === "Yellow") {
    console.log("First Version: AlienColor is Yellow, the player earned 5 points.");
}
else if (AlienColor === "Red") {
    console.log("First Version: AlienColor is Red, the player earned 10 points.");
}
else if (AlienColor === "Green") {
    console.log("First Version: AlienClor is Green, the player earned 15 points.");
}
;
//Second Version
let AlienColor1 = "Red";
if (AlienColor1 === "Yellow") {
    console.log("Second Version: AlienColor is Yellow, the player earned 5 points.");
}
else if (AlienColor1 === "Red") {
    console.log("Second Version: AlienColor is Red, the player earned 10 points.");
}
else if (AlienColor1 === "Green") {
    console.log("Second Version: AlienClor is Green, the player earned 15 points.");
}
;
//Third Version
let AlienColor2 = "Green";
if (AlienColor2 === "Yellow") {
    console.log("Third Version: AlienColor is Yellow, the player earned 5 points.");
}
else if (AlienColor2 === "Red") {
    console.log("Third Version: AlienColor is Red, the player earned 10 points.");
}
else if (AlienColor2 === "Green") {
    console.log("Third Version: AlienClor is Green, the player earned 15 points.");
}
;
// //Question#28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 30;
//If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
//If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 65) {
    console.log("The person is an elder.");
}
// //Question#29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let FavoriteFruits = ["Mango", "Apple", "Banana"];
if (FavoriteFruits.includes("Mango")) {
    console.log("I really like Mango");
}
if (FavoriteFruits.includes("Banana")) {
    console.log("I really like Banana");
}
if (FavoriteFruits.includes("Orange")) {
    console.log("I really like Orange");
}
if (FavoriteFruits.includes("Apple")) {
    console.log("I really like Apple");
}
if (FavoriteFruits.includes("Peach")) {
    console.log("I really like Peach");
}
//Question#30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames = ["saqib", "Hassam", "Amir", "Admin", "Ali"];
if (userNames.length > 0) {
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i] === "Admin") {
            console.log(`Hellow ${userNames[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
// Question#31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames1 = ["saqib", "Hassam", "Amir", "Admin", "Ali"];
if (userNames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < userNames1.length; i++) {
        if (userNames1[i] === "Admin") {
            console.log(`Hellow ${userNames1[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userNames1[i]}, thank you for logging in again.`);
        }
    }
    ;
}
;
// //Question#32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUsers = ["Hassam", "Saqib", "Sami", "Amir", "Moin", "Ali"];
let new_users = ["salman", "Saima", "naseer", "Amir", "ali", "junaid"];
let current_users_lower = currentUsers.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    let newUser = new_users[i].toLowerCase(); // Convert new username to lowercase for case insensitive comparison
    if (current_users_lower.includes(newUser)) {
        console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Username '${new_users[i]}' is available.`);
    }
}
;
// //Question#33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let newNmuber of numbers) {
    let ordinalEnd;
    if (newNmuber === 1) {
        ordinalEnd = "st";
    }
    else if (newNmuber === 2) {
        ordinalEnd = "nd";
    }
    else if (newNmuber === 3) {
        ordinalEnd = "rd";
    }
    else {
        ordinalEnd = "th";
    }
    console.log(`${newNmuber}${ordinalEnd}`);
}
;
// //Question#34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza = ["Tikka", "Fagita", "Malai Boti", "BBQ"];
for (let myPizza of pizza) {
    console.log(`I Like ${myPizza} pizza`);
}
console.log("I Like Pizza");
//Question#35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let petAnimals = ["Cat", "Dog", "Rabbit"];
for (let myAnimal of petAnimals) {
    console.log(`A ${myAnimal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
//Question#36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, shirtMessage) {
    console.log(`The shirt size is ${size} and the message on it is: "${shirtMessage}"`);
}
;
make_shirt("Medium", "I love TypeScript!");
//Question#37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", printMessage = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message on it is: "${printMessage}"`);
}
;
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I Love Javascript Coding");
//Question#38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
describe_city("Karachi");
describe_city("Islamabad");
describe_city("New Yort", "USA");
// //Question#39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city},${country}`;
}
;
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Tokyo", "Japan"));
//Question#40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle, tracks) {
    let album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
console.log(make_album("Saqib", "Album1"));
console.log(make_album("Hassam", "Album2"));
console.log(make_album("Ali", "Album3"));
console.log(make_album("Moin", "Album4", 55));
//Question#41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians_names = ["Umer", "Ubaid", "Sajad", "Virat"];
function show_magicians(magician) {
    magician.forEach(magiName => console.log(magiName));
}
show_magicians(magicians_names);
//Question#42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians1(magician) {
    magician.forEach(magiName => console.log(magiName));
}
;
function make_great(magicians) {
    return magicians.map(name1 => `The Great ${name1}`);
}
;
let magicians_names1 = ["Umer", "Ubaid", "Sajad", "Virat"];
let newMagicians = make_great(magicians_names1);
show_magicians1(newMagicians);
//Question#43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians2(magician) {
    magician.forEach(magiName => console.log(magiName));
}
;
function make_great1(magicians) {
    return magicians.map(name1 => `The Great ${name1}`);
}
;
let magicians_names2 = ["Umer", "Ubaid", "Sajad", "Virat"];
let copy_magicians_name2 = magicians_names2.slice();
let copy_great_magicians = make_great1(copy_magicians_name2);
console.log("\nOriginal Array\n");
show_magicians2(magicians_names2);
console.log("\Copied Array\n");
show_magicians2(copy_great_magicians);
//Question#44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("\nYour sandwich is ready!\n");
}
// Call the function three times with different number of arguments each time
make_sandwich("Chicken", "Lettuce", "Tomato");
make_sandwich("Turkey", "Cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");
//Question#45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function store_car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model,
        ...options.reduce((acc, option) => ({ ...acc, ...option }), {})
    };
    return car;
}
let car1 = store_car_info("Toyota", "Corolla", { color: "red" }, { feature: "sunroof" });
let car2 = store_car_info("Tesla", "Model S", { color: "blue" }, { autopilot: "true" });
console.log(car1);
console.log(car2);
