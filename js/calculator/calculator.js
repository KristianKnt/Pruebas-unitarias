const add = function (a, b) {
  return a + b;
}
const subtract = function (a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    return Infinity;
  }
  // ó
  if (a === 0) {
    return 0;
  }
  /* if (b===0){
    throw new Error("No se puede dividir entre cero");
  } */

  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = { add: add, subtract: subtract, divide: divide, multiply: multiply };