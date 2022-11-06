// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(elem => elem > 10);
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(elem => elem.length > 10);
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  let suma = [];
  for (i = 0; i < input.length; i++){
    suma = suma.concat(input[i]);
  }
  return suma.some(elem => elem === true);
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  const word = "Lost"
  return input.some(elem => elem.includes(word) === true);
};

array1 = lostCarcosa([
  "Strange is the night where black stars rise,",
  "And strange moons circle through the skies,",
  "But stranger still is",
  "Lost Carcosa."
]);
console.log(array1);

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
