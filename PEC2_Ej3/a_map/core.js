function multiplyBy10(array) {
  let newArr = [];
  for(let i = 0; i <array.length; i++){
    newArr.push(array[i]*10)
  }
  return newArr
}

function shiftRight(array) {
  ultimoElemento = array[array.length-1];
  for (let i = 0; i < 1; i++){
    array.unshift(ultimoElemento);
    array.pop();
  }
  return array;
}

function onlyVowels(array) {
  let vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
  let newArray = [];
  let aux = "";
  for(var i = 0; i < array.length; i++){
    aux = "";
    for(var k = 0; k < array[i].length; k++){
      for(var j = 0; j < vocales.length; j++){
        if(array[i][k] == vocales[j]){
          aux += array[i][k];
        }
      }
    }
    newArray.push(aux);
  }
  return newArray;
}

function doubleMatrix(array) {
  let newArray = [];
  let aux = [];
  for(let i = 0; i < array.length; i++){
    aux = [];
    for(let k = 0; k < array[i].length; k++){
      aux.push(array[i][k]*2);
    }
    newArray.push(aux);
  }
  return newArray;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
