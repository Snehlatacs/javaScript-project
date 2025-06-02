/*
//Strict mode is a special mode that we can activate in javascript, which makes it easier for us to write secure javascript code
// And only we have to do to activate strict mode is to write string at the begining of the script-->
// If we write any code before this then strict mode will not be activated, comments are allowed because javascript ignore them but no code
// We can also activate strict mode only for a specific function or a specific block but its not giving any point 
// So its good practice to write at the begininig to write more secure code.
// Strict mode makes it easier for us developer to avoid accidental errors so basically it avoids us to introduce bugs into our code.
// Strict mode forbids us to do certain things and second it creates visible errors in the developer console, where in other situation javascript would just fail silently.
// Strict mode intorduce a short list of variable name that are reserverd for features that might be added to the language a bit latter [example interface, private, if...]
'use strict'; //comment it to check the error or changes in console

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive!!");

//Fuction: It's a little bit like a variable but for whole chunks of code.
// A variable holds a value but a function can hold one or mode complete lines code.
// Conclusion: Function allow us to write nore maintainable codebecause with function we can create reusable chunks of code instead of manually write the same code over and over again.
// console.log() is also a function but its not our own function its a builtin function.
function logger() {
    console.log("I'm Sneh");
}

logger()//calling, running, invoking function

//with parameter---
function  fruitProcessor(apple, orange){
    //console.log(apple,orange)
    const juice = `Juice with ${apple} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(9, 7);
console.log(appleOrangeJuice);

//function declaration vs expressions

//const age1 = calcAge1(1998); //in function decleration if we call function before it work fine. It heppend because of Hosting.

function calcAge1(birthYear){
    return 2025-birthYear;
}

const age1 = calcAge1(1998);

//Anonymus function
//in javascript function is just a value 
//below example shows that calcAge2 store the function which is actually a expression and stored as value.

//const age2 = calcAge2(1998); // in function expression if we call function before then it gives error [Cannot access 'calcAge2' before initialization]

const calcAge2 = function (birthYear){
    return 2035 - birthYear;
}

const age2 = calcAge2(1998);
console.log(age1, age2);


//Arrow function:Special form of function expression that is shorter and therefore faster to write
//the value that we calculated was return automatically without us writing the keyword return and also didn't need any paranthesis
//it get liitle bit complex when we add more parameters or more code
const calcAge3 = birthYear => 2025-birthYear;
const age3 = calcAge3(1998);
console.log(age3);

//multiple line code need return keyword
const yearsUntilRetirement = birthYear => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1972));



//multiple parameter then we need wrap into the paranthesis
const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1972,'Surendra'));


//function calling another functions:Data Flow 

function cutFruitProcessor(fruite){
    return fruite*4;
}

function  fruitProcessor(apple, orange){
    const applePieces = cutFruitProcessor(apple);
    const orangePieces = cutFruitProcessor(orange);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const appleJuice = fruitProcessor(5,9);
console.log(appleJuice);


const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1972,'Surendra'));
*/

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


const calcAvg = (a, b, c) => (a+b+c)/3;

let koalasScore = calcAvg(65, 54, 49);
let dolphinsScore = calcAvg(44, 23, 71);

const checkWinner = function(koalasAvg, dolphinAvg){
    if(koalasAvg>=2*dolphinAvg)
    {
        console.log("Koalas win "+`${koalasAvg} vs. ${dolphinAvg}`);
    }
    else if(koalasAvg*2<=dolphinAvg)
    {
        console.log("Dolphins win "+`${dolphinAvg} vs. ${koalasAvg}`);
    }
    else{
        console.log("No one Wins...");
    }
}

checkWinner(koalasScore, dolphinsScore);

koalasScore = calcAvg(23, 34, 27);
dolphinsScore = calcAvg(85, 54, 41);

checkWinner(koalasScore, dolphinsScore);



// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');//add in front
console.log(friends);

// Remove elements
friends.pop(); // Last item removed
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First item removed
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀



const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(totals);


//object....

const jonas = {
firstName: 'Snehlata',
lastName: 'Prajapati',
birthYear: 1999,
job: 'Software-Engineer',
friends: ['Anshu', 'Stuti', 'Shivangi'],
hasDrivingLicense: true,

// calcAge: function(birthYeah){ //function expression thats why we use :
//     return 2025-birthYeah;
// }

calcAge: function(){ //function expression thats why we use :
    console.log(this);
    return 2025-this.birthYear;
}
};

//console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[1]}`);

console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1998));

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 22, 295, 440, 10, 110, 176, 555, 44];
const tips = [];
const totals = [];

for (let i = 0; i < bills.lengthl; i++) {
  tips = calcTip(bills[i]);
  totals = bills[i] + tips[i];
}
