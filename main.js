"use strict";
//           🚀 Day 41 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 121: 
// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // Logs numbers 1-4 and 6-10
}
// Question 122: 
//Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let i = 10;
while (i > 0) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i--;
}
// Question 123: 
//Create a loop that iterates through a string and stops when it finds the first vowel.
let str = "Hllo, World!";
for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        break;
    }
    console.log(str[i]);
}
