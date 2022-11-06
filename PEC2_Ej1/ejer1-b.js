const findOne = (list, { key, value }) => {  //Se eliminaron como parametros la funciones callback onSuccess i onError.
  return new Promise((resolve, reject) => { //La función findOne retorna la promesa para poderla consumir en el codigo principal.
    // Se crea la promesa con el constructor (new Promise) y se le pasa una función con los parametros 'resolve' y 'reject' para 
    // indicarle a esta que se resolvio o se rechazo.
    setTimeout(() => { 
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject(new Error('ERROR: Element Not Found')); //Con el operador condicional y llamando los parametros 'resolve'
      // y 'reject' le indicamos a la promesa su estado y se ejecuta la funcion .then o .catch.
    }, 2000); 
  });
};

const users = [ 
  { 
    name: 'Carlos', 
    rol: 'Teacher' 
  },
  { 
    name: 'Ana', 
    rol: 'Boss' 
  }
];

console.log('findOne success'); 
findOne(users, { key: 'name', value: 'Carlos' })
  .then(element  => console.log(`user: ${element.name}`)) //Se ejecuta la funcion .then si la promesa se resuelve.
  .catch(error => console.error(error)); //Se ejecuta la funcion .catch si la promesa es rechazada.

console.log('findOne error'); 
findOne(users, { key: 'name', value: 'Fermin' })
  .then(element  => console.log(`user: ${element.name}`)) 
  .catch(error => console.error(error)); 

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
