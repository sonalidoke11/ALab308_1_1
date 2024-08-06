
console.log("******************************************************");
console.log("Exercise 1")
console.log("******************************************************");


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = (n1 > n4)
console.log("n1=10 is larger than n4=5 is " + isFirstLargerThanLast);


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

// Here, we put the results into a single variable 
// for convenience. 
const isValid = isFirstLargerThanLast && isDivisibleBy5 && isUnder25

// Finally, log the results.
console.log("Combined result for isValid = " +isValid);


console.log(" ");


  /* let totalDistance = 1500;

   let _30milesPerGallon = 30;
   let _28milesPerGallon = 28;
   let _23milesPerGallon = 23;

   let _55milesPerHour = 55;
   let _60milesPerHour = 60;
   let _75milesPerHour = 75;

   let fuelBudget = 175;
   let avgFuelCost = 3; 

   Formula  : var time = distance/speed*60;*/


  console.log("******************************************************");
  console.log("Exercise 2")
  console.log("******************************************************");
    // calculating total time taken with speed of 55 miles per hour
    var totalTimeWith55 = (1500/55)*60
    var totalTimeInHour55 = totalTimeWith55/60;
    //At 55 miles per hour, you get 30 miles per gallon.
    var totalGallonAt55 = (1500/30)              // gives total gallons required
    var totalCostWith55 = (totalGallonAt55*3)   // gives cost to purchase total gallon


   // calculating total time taken with speed of  60 miles per hour
    var totalTimeWith60 = (1500/60)*60
    var totalTimeInHour60 = totalTimeWith60/60;
    //At 60 miles per hour, you get 28 miles per gallon.
    var totalGallonAt60 = (1500/28)             // gives total gallons required
    var totalCostWith60 = (totalGallonAt60*3)  // gives cost to purchase total gallon


    // calculating total time taken with speed of 75 miles per hour
    var totalTimeWith75 = (1500/75)*60
    var totalTimeInHour75 = totalTimeWith75/60;
    //At 75 miles per hour, you get 23 miles per gallon.
    var totalGallonAt75 = (1500/23)            // gives total gallons required
    var totalCostWith75 = (totalGallonAt75*3)  // gives cost to purchase total gallon


console.log("Details of trip with 55miles/hr");
console.log("   1) Total Gallons required = " + totalGallonAt55 + " gallons");
console.log("   2) Total cost required = $ " + totalCostWith55 );
console.log("   3) Total time required to reach = " + totalTimeInHour55 + " hrs");

console.log(" ");

console.log("Details of trip with 60miles/hr");
console.log("   1) Total Gallons required = " + totalGallonAt60 + " gallons");
console.log("   2) Total cost required = $ " + totalCostWith60);
console.log("   3) Total time required to reach = " + totalTimeInHour60 + " hrs");

console.log(" ");

console.log("Details of trip with 75miles/hr");
console.log("   1) Total Gallons required = " + totalGallonAt75 + " gallons");
console.log("   2) Total cost required = $ " + totalCostWith75);
console.log("   3) Total time required to reach = " + totalTimeInHour75 + " hrs");

console.log("So as per given details Trip will be successful with 55 miles per hour or 60 miles per hour but NOTT with 75 miles per hour")