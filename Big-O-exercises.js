'use strict';

//EVEN OR ODD

function isEven(value) {
  if (value % 2 == 0) {
    return true; //O(1)
  } else return false; //O(1)
}

//Overall EVEN OR ODD has O(1) or constant complexity

//ARE YOU HERE
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
//O(n^2)
//Polynomial aka quadratic time

//DOUBLER

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2; //O(n)
  }
  return array;
}

//O(n) or Linear complexity

//NAIVE SEARCH
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
//O(n) linear time

//Creating pairs

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

//O(n^2) or polynomial complexity

//FIBONACCI ITERATIVE VERSION
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
//O(n) linear time

//AN EFFICIENT SEARCH

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//O(log n) ir Logarithmic

//FIND RANDOM ELEMENT
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//O(1) constant time

//IS IT PRIME

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

//O(n) or Linear

//RECURSIVE EXERCISES

//COUNTING SHEEP  O(n) Linear

//ARRAY DOUBLE O(n) Linear

//REVERSE STRING O(n) Linear

//TRIANGULAR NUMBER O(n) Linear

//STRING SPLITTER O(n) Linear

//BINARY REPRESENTATION O(n) Linear

//FACTORIAL O(n) Linear

//FIBONACCI O(n) Linear

//ANAGRAMS O(n) Linear

//ANIMAL HEIRARCHY O(n^2) Polynomial

//ORGANIZATIONAL CHART O(n^2) Polynomial

//ITERATIVE EXERCISES

//COUNTING SHEEP O(n) Linear

//DOUBLING ARRAY O(n) Linear

//REVERSE STRING O(n) Linear

//TRIANGULAR NUMBER O(n) Linear

//STRING SPLITTER O(n) Linear

//BINARY REPRESENTATION O(n) Linear

//FACTORIAL O(n) Linear

//FIBONACCI O(n) Linear
