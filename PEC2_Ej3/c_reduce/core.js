function sum(array) {
  return total = array.reduce((a, b) => a + b, 0);
}

function productAll(array) {
  let suma = [];
  for ( i = 0; i < array.length; i ++){
    suma = suma.concat(array[i]);
  }
  let total = suma.reduce((a, b) => a * b);
  return total;
}

function objectify(array) {
  return array.reduce((total, actual) => {
    const [propiedad, valor] = actual;
    return {...total, [propiedad]: valor};
  }, {});
}

function luckyNumbers(array) {
  const msg = ("Your lucky numbers are:");
  const result = array.reduce( function (prev, curr, ind, arr){
    let comma = prev.length ? ", " : " ";
    curr = arr.length === ind+1 ? "and " + curr : curr;
    return prev + comma + curr;
  }, '');
  return msg + result;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
