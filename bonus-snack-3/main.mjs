"use strict";

function nuovoArray(arr, min, max) {
  switch (true) {
    case !Array.isArray(arr):
    case min > max:
    case min < 0 || max > arr.length - 1:
      return error;
    default:
      return arr.filter((element, index) => index) >= min && index <= max;
  }
}

const numeri = [1, 2, 3, 4, 5, 6, 7];

let result = nuovoArray(numeri);

/* let result = nuovoArray(numeri, 2, 6); */
console.log(numeri);
console.log(result);
