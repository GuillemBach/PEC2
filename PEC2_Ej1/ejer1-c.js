const findOne = async (list, { key, value }) => { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject(new Error('ERROR: Element Not Found'));
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

async function getUsers(users, { key, value}){ //Se define una nueva función async para poder utilizar el await.
  try{//Parte del código que se intenta ejecutar primero. Si dentro de este bloque alguna sentencia o función lanza una excepción, se ejecuta catch.
    const usuarios = await findOne(users, { key, value}); //Se implementa await, como substituto de .then, que nos permite acceder directamente a los valores que devuelve la funcion que son promesas.
      console.log(`user: ${usuarios.name}`) // Se imprime el valor que devuelve la promesa si esta se resuelve.
  } catch (error){ // Parte catch del bloque try/catch para el manejo de errores con promesas. Se ejecuta si en try se lanza una excepción.
    console.error(error); //Se imprime el error recibido de la promesa.
  }
};

console.log('findOne success');
console.log('findOne error');
// Llamadas a la función getUsers() pasando por parametro los parametros a comprobar en findOne.
getUsers(users, { key: 'name', value: 'Carlos' });
getUsers(users, { key: 'name', value: 'Fermin' });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
