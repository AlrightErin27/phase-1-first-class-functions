// Write a function, factory, that takes a number as its parameter and returns another function.
// The returned function should take an array of numbers as its parameter, and return an array of those
// numbers multiplied by the number that was passed into the first function.
// In the example below, 5 is the number passed into the first function. So it returns a function that
// takes an array and multiplies all elements in it by five.

// Example
// var fives = factory(5);       // returns a function - fives
// var myArray = [1, 2, 3];
// fives(myArray);               //returns [5, 10, 15];

function factory(num) {
  return function (arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      resultArr.push(arr[i] * num);
    }
    return resultArr;
  };
}

console.log(factory(3)([5, 0, 10]));
console.log(factory(2)([5, 0, 10]));
