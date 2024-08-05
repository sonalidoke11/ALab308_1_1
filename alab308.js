// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = (n1 > n4)
console.log("n1=10 is larger than n4=5" + isFirstLargerThanLast);


// Check if all numbers are divisible by 5. Cache the result in a variable.
// Here, we use modulus to check if it is divisible by 5.
// Since % 5 is 0 it is divisible by 5
// const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
const isDivisibleBy5 = (n1 % 5) == 0 && (n2 % 5) == 0 && (n3 % 5) == 0 && (n4 % 5) == 0;
console.log("if all numbers are divisible by 5. Cache the result in a variable = " + isDivisibleBy5);


// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const firstSubtract = (n2-n1)
console.log("Subtract the first number from the second number = " + firstSubtract);
const multiplyResult = (firstSubtract*n3)
console.log("Multiply the result by the third number = " + multiplyResult);
const finalRemainder =(multiplyResult % n4)
console.log("the remainder of dividing the result by the fourth number = " + finalRemainder);


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)" + isUnder25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. 
const isValid = isFirstLargerThanLast && isDivisibleBy5 && isUnder25

// Finally, log the results.
console.log(isValid);




/**
 * Part 2: Practical Math
 * var speed = 40;
    var time = distance/speed*60;
   return time;
 */


   let totalDistance = 1500;

   let _30milesPerGallon = 30;
   let _28milesPerGallon = 28;
   let _23milesPerGallon = 23;

   let _55milesPerHour = 55;
   let _60milesPerHour = 60;
   let _75milesPerHour = 75;

   let fuelBudget = 175;
   let avgFuelCost = 3;

   //var time = distance/speed*60;
   var totalTime = (1500/55)*60
   console.log(totalTime);

   var totalHour = totalTime/60;
   console.log("Total time taken to travel 1500 miles in hour is " + totalHour );