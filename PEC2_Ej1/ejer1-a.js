const findOne = (list, { key, value }, { onSuccess, onError }) => { //Se define la funcion findOne y sus parámetros entre '=' y '=>'. Estos parámetros son:
                                                                    //el array users, llave y valor de un objeto, funciones callback onSuccess y onError.
  setTimeout(() => { // Método que permite ejecutar un código tras pasar un tiempo determinado, en este caso la función flecha tras pasar 2 segundos.
    const element = list.find(element => element[key] === value);// Metodo find(), devuelve el valor del primer elemento del array que cumple la funcion.
    // En este caso devuelve el valor de la propiedad del elemento que coincida el nombre de la propiedad y su valor pasados como argumentos en la funcion findOne().
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }); // Uso de operador condicional. Si 'element' tiene valor
    // se llama la funcion callback onSuccess (pasando el valor de 'element' como parametro), si tiene 'element' el valor 'undefined' se llama la función onError (pasando el 'msg' como parametro).
  }, 2000); //Tiempo especificado de espera antes de ejecutarse la función flecha dentro del método setTimeout.
};

const onSuccess = ({ name }) => console.log(`user: ${name}`); // funcion callback que se le pasa por parámetro el valor de la propiedad name e imprimirlo por pantalla.
const onError = ({ msg }) => console.log(msg); // funcion callback que se le pasa por parámetro el mensaje de error y lo muestra por pamntalla.

const users = [ //Creación/definición del array de objetos users.
  { // Primer objeto/elemento del array users
    name: 'Carlos', // Nombre de la propiedad y su valor de un objeto.
    rol: 'Teacher' // Nombre de la propiedad y su valor de un objeto.
  },
  { // Segundo objeto/elemento del array users
    name: 'Ana', // Nombre de la propiedad y su valor de un objeto.
    rol: 'Boss' // Nombre de la propiedad y su valor de un objeto.
  }
];

console.log('findOne success'); // Imprime por pantalla 'findOne success'
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }); // Se llama a la función findOne y se le pasa una serie de argumentos.

console.log('findOne error'); // Imprime por pantalla 'findOne error'
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }); // Se llama a la función findOne y se le pasa una serie de argumentos.

/* RESULTADO POR PANTALLA AL EJECUTAR EL CODIGO:
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
