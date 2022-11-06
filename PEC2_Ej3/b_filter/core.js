function onlyEven(array) {
  return newArray = array.filter(num => num%2 === 0 );
}

function onlyOneWord(array) {
  return newArray = array.filter(num => num.indexOf(" ") === -1);
}

function positiveRowsOnly(array) {
  let newArray = [];
  let posArr = [];
  for(let i = 0; i < array.length; i++){
    posArr = array[i].filter(num => num > 0);
  }
  newArray.push(posArr);
  return newArray;
}

function allSameVowels(array) {
  let vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
  let newArray = [];
  let aux2 = []
  let aux3 = []
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
    aux2.push(aux);
  }
  aux3 = aux2.filter(num => num === aux2[0][0]);
  newArray.push(aux3);
  console.log(aux2);
  return newArray;
}

array1 = allSameVowels(["racecar", "amalgam", "oligopoly", "zoom"]);
console.log(array1);

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
