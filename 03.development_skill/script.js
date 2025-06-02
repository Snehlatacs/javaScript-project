'use strict';
/*
const x = 23;

let z = 34;

let y = 56;

console.log(x);
console.log(y);
console.log(z);

if (x === y) {
  console.log('x and y are equal');
} else {
  console.log('x and y are not equal');
}

const calculateSum = a => a + a;
console.log();

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temps of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temps?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calTemp = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (min > temps[i]) {
      min = temps[i];
    }

    if (max < temps[i]) {
      max = temps[i];
    }
  }
  //console.log(max, min);
  return max - min;
};
const amplitude = calTemp(temps);
//console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calTempnew = (t1, t2) => {

  let temps = (t1.concat(t2));
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (min > temps[i]) {
      min = temps[i];
    }

    if (max < temps[i]) {
      max = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudenew = calTempnew([3, 5, 1], [9, 0, 5]);
console.log(amplitudenew);


const measureKelvin = function() {
  const measrement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree calsius:')),
  };

  //console.log(measrement);
  console.table(measrement);
  //console.log(measrement.value);
  // console.error(measrement.value);
  // console.warn(measrement.value);
  
  const kelvin = measrement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); 




//Using a debugger
const calTempbug = (t1, t2) => {

  let temps = (t1.concat(t2));
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];

    //debugger; //->open debugger automatically in crome.
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (min > temps[i]) {
      min = temps[i];
    }

    if (max < temps[i]) {
      max = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudebug = calTempbug([3, 5, 1], [9, 4, 5]);
console.log(amplitudebug);

*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
//- Print the statement as string containing the array's element, staring with 3 dot and ending with 3 dot and element must be like 17ºC.
//- What is days here? Days are the `indexe+1` of the element.

// 2) Breaking up into sub-problems
//- transform array into string.
//- transform each element into string with ºC.
//- add days [index+1],
//- start and end with 3 dots.

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const printForecast = (arr) => {
  let str = '... ';
  for(let i = 0; i<arr.length; i++){
     str += `${arr[i]}ºC in ${i} days ... `;
  }
  console.log(str+ '');
}

printForecast(arr1);
printForecast(arr2);