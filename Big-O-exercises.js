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
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
//O(n^2)
//Polynomial aka quadratic time 