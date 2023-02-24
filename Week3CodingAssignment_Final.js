//****Problem 1*****
//Create an array of ages with the assignment's provided values
var ages = [ 3, 9, 23, 64, 2, 8, 28, 93];

//Subtract the value of the first element in the array from the value in the last element of the array 

console.log("Subtract first element from last element - Expected output should be 90:" , ages[ages.length-1] - ages[0]);

//Add a new age (I added 40) to the array and repeat the step above to ensure it is dynamic. I used a .push() to add 40 to my array.

ages.push(40);
console.log("After adding a new age into the array, subtracted the first element from last element, expecting 37:",ages[ages.length-1] - ages[0]);

//Use a loop to iterate through the array and calculate the average age

var i, sum=0;
for(i=0; i<ages.length; i++)
{
sum = sum + ages[i];
}
console.log("My loop calculated an average age. I expected 30:",sum/ages.length);

//***Problem 2****
//Create an array called names with the assignment's provided values
var names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Use a loop to iterate through the array and calculate the average number of letters per name

sum=0;
for(i=0; i<names.length; i++)
{
sum = sum + names[i].length;
}

console.log("My loop calculates the average letters per name. My expected output is less than four: ",sum/names.length);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces

var con = names[0];
for(i=1; i<names.length; i++)
{
con = con.concat(" ",names[i]);
}
console.log("My loop's expected outcome is all the names in my array with spaces in between each: ",con);

//****Problem 3****
//Q: How do you access the last element of any array?
//A: arrayName[-1]

//****Problem 4****
//Q: How do you access the first element of any array?
//A: arrayName[0]

//****Problem 5****
//Create a new array called nameLengths and
//write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [];
for(i=0; i<names.length; i++)
{
nameLengths[i] = names[i].length;
}

//****Problem 6****
//Write a loop to iterate over the namesLength array and calculate the sum of all elements in the nameLengths array

sum=0;
for(i=0; i<nameLengths.length; i++)
{
sum = sum + nameLengths[i];
}
console.log("If my work is correct, the sum should be 23:",sum);

//****Problem 7****
//Write a function that takes two parameters, word and n, as arguments and returns the word concated to itself n number of times

function concat_n_times(word, n){
var con= word;
for(i=1; i<=n; i++)
{
con = con.concat(word);
}
return con;
}

console.log("I want to repeat the word 'Yada' three times:",concat_n_times("Yada", 2));

//****Problem 8****
//Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and last name separated by a space.

function fullName(firstName, lastName){
return firstName.concat(" ", lastName);
}

console.log("My full name is:",fullName("Denise", "Johnson"));

//****Problem 9****
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function numberGreater(arr)

{
sum=0;
for(i=0; i<arr.length; i++) {
sum = sum + arr[i];
}
if(sum > 100) {
return true;
}
else {
return false;
}
}

//****Problem 10***
//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(arrayOfNumbers){
sum=0;
for(i=0; i<arrayOfNumbers.length; i++) {
sum = sum + arrayOfNumbers[i];
}

return (sum/arrayOfNumbers.length);
}

//****Problem 11****
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array
//is greater than the average of the elements in the second array

function compare_average(a, b){
if(average(a) > average(b)) {
return true;
}
else {
return false; }
}

//****Problem 12****
//Write a function called willBuyDrink that takes a boolean isHotOutside and number moneyInPocket and returns true
//if it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket) {
if((isHotOutside) && (moneyInPocket > 10.50))
{
return true; }
else
{
return false;
}

}

var hotOutside = true;

var moneyInPocket = 49.5;

console.log("Can I buy a drink?: ",willBuyDrink(hotOutside, moneyInPocket));

//****Problem 13****
//Create a function that solves a problem

function willCarCamp(tempOutside, priceOfGas) {
    if((tempOutside > 49) && (priceOfGas < 3.99))
    {
    return true; }
    else
    {
    return false;
    }
    
    }
    
    var tempOutside = 56;
    
    var priceOfGas = 3.29;
    
    console.log("Should I go car camping this weekend?: ",willCarCamp(tempOutside, priceOfGas));








console.log("This was terrifying and exciting all at the same time!")



