/*
Write a program that calculates the ticket price based on age with the following conditions: 
Age below 12 pay a ticket price of 5, 
Age below 18 pay a ticket price of 10, 
Age below 60 pay a ticket price of 20, 
Age over 60 play a ticket price of 15.
*/

// age < 12 : price:5;
// age < 18 : price:10;
// age < 60 : price:20;
// age > 60 : price:15;

const userAge = prompt("Enter Your Age: ");

const dataVerify = /^\d+$/;

function ticketCalculate(age) {
  if (age < 12) {
    console.log(`You are under 12. Your ticket price is Rs. 5.00/-`);
  } else if (age < 18) {
    console.log(`You are under 18. Your ticket price is Rs. 10.00/-`);
  } else if (age < 60) {
    console.log(`You are under 60. Your ticket price is Rs. 20.00/-`);
  } else {
    console.log(`You are above 60. Your ticket price is Rs. 15.00/-`);
  }
}

if (dataVerify.test(userAge)) {
  ticketCalculate(userAge);
} else {
  alert("Enter Valid Number Value");
}
