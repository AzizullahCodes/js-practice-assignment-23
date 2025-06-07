// js-practice assignment 23 
// /_____________________________________________________
// ques no 1 
// Write a JavaScript function roundToNearestInteger(num) that:

// Takes a number as input
// Returns the result of rounding the number using Math.round()
// --------- ans -------------
// let number = prompt('enter a decimal number');
//    number = Math.round(number);
//    console.log(number);
// ___________________________________________________________________
// ques no 2 
// Find the average of 5 decimal numbers, then floor the average
// -------- ans ----------
// let number1 = prompt('enter number 1');
// number1 = Number(number1);
// let number2 = prompt('enter number 2');
//   number2 = Number(number2);
// let number3 = prompt('enter number 3');
// number3 = Number(number3);
// let number4 = prompt('enter number 4');
// number4 = Number(number4);
// let number5 = prompt('enter number 5');
// number5 = Number(number5);
// let average = (number1 + number2 + number3 + number4 + number5) / 5;
//     average = Math.floor(average);
// console.log(average)

// ___________________________________________________________________________
// ques no 4 
//  Round Student Scores
// You have student scores in decimals and want to round them up for final display:
// let scores = [89.1, 72.5, 94.9, 60.3];
// ✅ Output should be: [90, 73, 95, 61]
// -------- ans ----------
// let scores = [89.1,72.5,94.9,60.3];
// for(var i = 0; i < scores.length; i++){console.log(Math.ceil(scores[i]))}
// _______________________________________________________________________________
// ques no 5 
// Take an array of numbers and count how many numbers are negative. Use Math.abs() if you want to convert them afterward.

// ✅ Example Input: [4, -5, -2, 8, -1]
// ✅ Output:
// 3 negative numbers
// Absolute values: [4, 5, 2, 8, 1]
// ====== ans ========== 
// let array = [4,-5,-2,8,-1,-46];
// let count = 0;
// for(var i = 0; i < array.length; i++){if(array[i] < 0){count = count + 1;
// }
// }
// console.log(count);
// for(var i = 0; i <array.length; i++){var absol = Math.abs(array[i]);
//     console.log(absol)
// }
// _____________________________________________________________________________
// ques no 6
// use of Math.sqrt( );
//   ========= example =========
// let enterNumber = prompt('enter a number');
//     enterNumber = Math.sqrt(enterNumber);
//     enterNumber = Math.ceil(enterNumber);
//     console.log(enterNumber);
// ________________________________________________________________________________________
// ques no 7 
//  Try with User Input (optional if you know prompt)
//  use prompt() (in the browser), ask the user to enter 3 numbers 
// and use Math.max() on them.
// ==== ans =====
// let number1 = prompt('enter number 1');
// let number2 = prompt('enter number 2');
// let number3 = prompt('enter number 3');
// let max = (number1,number2,number3);
// let maxNumber = Math.max(max);
// console.log(maxNumber)
// ______________________________________________________________________________________
// ques no 8 
// Print random day from a list
// 👉 Create an array with 7 days ("Monday", "Tuesday", ...). Show a random day.
// ========= ans ========== 
// let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// let randomList = Math.random();
//     randomList = randomList * days.length;
//     randomList = Math.floor(randomList);
// console.log(days[randomList]);
   
// _______________________________________________________________________________
// ques no 9 
// Pick a random color
// Create an array of colors. Show a random one in the console.
// ======= ans ============ 
// let colors = ['red','green','blue','yellow','green'];
// let choseColor = Math.random();
//     choseColor = choseColor * colors.length;
//     choseColor = Math.floor(choseColor);
// console.log(choseColor);
// let result = colors[choseColor];
// console.log(result)
// if(result === 'green'){console.log('cross road')}
// else if(result === 'red'){console.log('stop')}
// else if(result === 'yellow'){console.log('donot go but ready for moving')}
// else{console.log('stop watch the traffic signal')}
// ____________________________________________________________________________
// ques no 10 
// Color Changer (Random Background Color)
// 💡 What it does:
// When you open the page, the background color changes randomly.

// //  let colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "gray"];
//     let randomIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[randomIndex];
// let colors = ['red','blue','green','purple','orange','pink','yellow','gray'];
// let changeColor = Math.random()* colors.length;
//    changeColor = Math.floor(changeColor);
//    console.log(changeColor);
//    document.body.style.backgroundColor = colors[changeColor];
// ________________________________________________________________________________________
// ques no 11
// Find Max and Min in a Random Array
// Task:
// Generate an array of 10 random numbers between 1 and 100. Use Math.random() and Math.floor() to generate the numbers. Then, use Math.max() and Math.min() to find the maximum and minimum values.

// Expected Output:
// A list of the 10 numbers, followed by:
// Max number is: XX  
// Min number is: XX
// let randomNumber1 = Math.floor(Math.random()*100)+1;

// let randomNumber2 = Math.floor(Math.random()*100)+1;

// let randomNumber3 = Math.floor(Math.random()*100)+1;

// let randomNumber4 = Math.floor(Math.random()*100)+1;

// let randomNumber5 = Math.floor(Math.random()*100)+1;

// let randomNumber6 = Math.floor(Math.random()*100)+1;

// let randomNumber7 = Math.floor(Math.random()*100)+1;

// let randomNumber8 = Math.floor(Math.random()*100)+1;

// let randomNumber9 = Math.floor(Math.random()*100)+1;

// let randomNumber10 = Math.floor(Math.random()*100)+1;

// let array = [randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5,randomNumber6,randomNumber7,randomNumber8,randomNumber9,randomNumber10];
// console.log(array);
// let maximum = Math.max(...array);
// console.log(maximum);
// let array2 = [randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5,randomNumber6,randomNumber7,randomNumber8,randomNumber9,randomNumber10];
// let minimum = Math.min(...array2);
// console.log(minimum)
// ____________________________________________________________________________
// ques no 12 
//  Multiplication Table with Nested Loops
// Task:
// Use nested for loops to print a multiplication table from 1 to 10.

// Expected Output:
// 1 x 1 = 1  
// 1 x 2 = 2  
// ...  
// 10 x 10 = 100
// ========== ans ==========

for (let i = 1; i <= 10; i++) {
    let rowOutput = "";

    for (let j = 1; j <= 10; j++) {
    
        let product = i * j;
        rowOutput += `${i} x ${j} = ${product}  `;
    }

    console.log(rowOutput);
}
// ____________________________________________________________________________________
// ques no 12 
// Task:
// Create a string variable with some mixed-case letters (e.g., "JaVaScRiPt").
// Use logic to convert each character to either uppercase or lowercase.
// Expected Output:
// Show the original string and the new string in lowercase and uppercase.
// Original: JaVaScRiPt  
// Lowercase: javascript  
// Uppercase: JAVASCRIPT
// // ===== ans ======== 
// let string = "JaVaScRiPt";
// console.log(string);
//     string = string.toUpperCase();
//     console.log(string);
//     string = string.toLowerCase();
//     console.log(string)
// ______________________________________________________________________________________
// ques no 13 
// Ask the user for their name using prompt() and display it in uppercase using alert().
// === ans ====
// let enterName = prompt('enter your name');
//     enterName = enterName.toUpperCase();
//     console.log(enterName);
// ______________________________________________________________________________________
// ques no 14 
// Ask the user to enter a sentence and show it fully in uppercase.
// ------ ans --------
// let enterSentence = prompt('ente a sentence');
//     enterSentence = enterSentence.toUpperCase();
//     console.log(enterSentence);
// __________________________________________________________________________________
// ques no 15 
// Create a variable called word and assign it the value "JavaScript".
// Print the first, fifth, and last characters using charAt().
// ====== ans ========= 
// let variab = 'JavaScript';
// let firstCharacter = variab.charAt();
// console.log(firstCharacter);
// let fifthCharacter = variab.charAt(4);
// console.log(fifthCharacter);
// let lastCharacter = variab.charAt(variab.length-1);
// console.log(lastCharacter)
// ____________________________________________________________________________
// ques no 16 
// extract last character of string 
// ====== ans ========= 
// let word = 'lovelydog';
//         let lastCharacter = word.charAt(word.length-1);
//         console.log(lastCharacter);
// ______________________________________________________________________
// ques no 17 
// Make a new string with your own name.
// Print:
// The second letter
// The fourth letter
// The last letter
// ======= ans ======== 
// let str = 'Azizullah';
// let secodLetter = str[1];
// console.log(secodLetter);
// let fourthLetter = str[3];
// console.log(fourthLetter);
// let lastLetter = str[str.length - 1];
// console.log(lastLetter);
// ________________________________________________________________
// ques no 18
// Ask the user to enter two numbers.
// Add them and show the result.
//  ====== ans ======= 
// let enter1Number = prompt('enter first number');  
//     enter1Number = Number(enter1Number)
//     let enter2Number = prompt('enter second number');
//         enter2Number = Number(enter2Number);
//     let addition = enter1Number + enter2Number;
//     console.log(addition);
let number = '34';
console.log(typeof number);
 number = +number;
 console.log(typeof number);
