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

   //At 55 miles per hour, you get 30 miles per gallon.
   var totalGallonAt55 = (1500/30)
   var totalCostWith55 = (totalGallonAt55*3)
   console.log("Total gallon required to travel with speed of 55 miles will be " + totalGallonAt55 + " and cost will be " + totalCostWith55 );

    //At 60 miles per hour, you get 28 miles per gallon.
    var totalGallonAt60 = (1500/28)
    var totalCostWith60 = (totalGallonAt60*3)
    console.log("Total gallon required to travel with speed of 55 miles will be " + totalGallonAt60 + " and cost will be " + totalCostWith60 );


    //At 75 miles per hour, you get 23 miles per gallon.
    var totalGallonAt75 = (1500/23)
    var totalCostWith75 = (totalGallonAt75*3)
    console.log("Total gallon required to travel with speed of 55 miles will be " + totalGallonAt75 + " and cost will be " + totalCostWith75 );


    console.log("At speed of 55 miles/hr and 60 miles/hr budget will be enough to cover fuel cost i.e  " +totalCostWith55+ " and "+ totalCostWith60  + "but at 75 miles/hr will be not possible with given budget.")

// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

console.log("How many gallons of fuel will you need for the entire trip?  With 55miles/hr " +totalGallonAt55+ " and 60 miles/hr " + totalGallonAt60);

console.log("Will your budget be enough to cover the fuel expense? Yes, with 55miles/hr and 60miles/hr but not with 75miles/hr"  )

console.log("How long will the trip take, in hours? " + totalHour + " hrs");