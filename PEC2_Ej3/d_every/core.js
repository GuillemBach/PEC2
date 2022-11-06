// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(num => num%2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  function type(element, index, array) {
    return typeof element == typeof array[0];
  }
  return input.every(type);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  let suma = [];
  for (i = 0; i < input.length; i++){
    suma = suma.concat(input[i]);
  }
  function type(element, index, array) {
    return typeof element === typeof array[0]
    && (res = suma.every(num => num > 0)) === true;
  }
  return input.every(type);
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  let vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
  let aux2 = []
  let aux = "";
  for(var i = 0; i < input.length; i++){
    aux = "";
    for(var k = 0; k < input[i].length; k++){
      for(var j = 0; j < vocales.length; j++){
        if(input[i][k] == vocales[j]){
          aux += input[i][k];
        }
      }
    }
    aux2.push(aux);
  }
  function type(element, index, array) {
    return typeof element === typeof array[0]
    && (res = aux2.every(num => num === num[0])) === true;
  }
  return input.every(type);
}

array1 = allSameVowels(["amalgam", "zoom"]);
console.log(array1);

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
