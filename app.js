// TASK 1
// var userName = prompt("Write user name:");
// var phnNum = prompt("Write your phone number:");
// var email = prompt("Write your email:");
// var pass = prompt("Write your password:");
// var confirmation = prompt("Confirm your password:");


// if(userName === '' || phnNum === '' || email === '' || pass === '' || confirmation === ''){
//     alert("Please reload the page and fill in the credentials.");
// }else{
//     if(pass != confirmation){
//         alert("Please reload the page and write same password.");
//     }else{
//         alert("You are successfully registered.");
//     }
// }

// TASK 2
// var word = prompt("Write a word without space:");
// var counter = word.length;
// var not = 0;
// if (counter % 2 === 0) {
//     for (var i = 0; i < counter / 2; i++) {
//         if (word[i] == word[counter - (i + 1)]) {
//             continue;
//         } else {
//             not = 1;
//         }
//     }

//     if (not == 0) {
//         document.write('The word "' + word + '" is a palindrome, and it has an even number of characters.');
//     } else {
//         document.write('The word "' + word + '" is not a palindrome.');
//     }
// } else {
//     for (var i = 0; i < (counter / 2) - 0.5; i++) {
//         if (word[i] == word[counter - (i + 1)]) {
//             continue;
//         } else {
//             not = 1;
//         }
//     }

//     if (not == 0) {
//         document.write('The word "' + word + '" is a palindrome, and it has an odd number of characters.');
//     } else {
//         document.write('The word "' + word + '" is not a palindrome.');
//     }
// }

// TASK 3
// var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var evenArr = [];
// var oddArr = [];

// for(var i = 0; i < numberArray.length; i++){
//     if(numberArray[i] % 2 == 0){
//         evenArr.push(numberArray[i]);
//     }else{
//         oddArr.push(numberArray[i]);
//     }
// }

// document.write("<h1>Odd Numbers</h1>");
// document.write("<br />Odd numbers: " + oddArr);
// document.write("<br /><h1>Even Numbers</h1>");
// document.write("<br />Even numbers: " + evenArr);