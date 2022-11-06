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
/*    ++++++ VERSIÓN FINAL / PARALELA ++++++
async function getUsers(users, { key, value}){ 
  try{
    const usuarios = await findOne(users, { key, value}); 
      console.log(`user: ${usuarios.name}`) 
  } catch (error){ 
  }
};

console.log('findOne success');
console.log('findOne error');
getUsers(users, { key: 'name', value: 'Carlos' });
getUsers(users, { key: 'name', value: 'Fermin' });*/

// ++++++ VERSION ANTIGUA / SECUENCIAL ++++++
async function getUsers(){ 
  try{
    const usuarios = await findOne(users, { key: 'name', value: 'Carlos' }); 
      console.log(`user: ${usuarios.name}`);
    const usuarios2 = await findOne(users, { key: 'name', value: 'Fermin' }); 
      console.log(`user: ${usuarios2.name}`);
  } catch (error){ 
    console.error(error)
  }
};

console.log('findOne success');
console.log('findOne error');
getUsers();

/* 
Respuesta a la parte d) del ejercicio:

En la versión final del ejercicio anterior ya se ha corregido que el codigo no se ejecute secuencialemente sino en paralelo. En
este archivo se ha reconstruido la versión secuencial (versión antigua), como ejemplo. Para hacer que la llamada a la función findOne
se ejecutara en paralelo, se ha llamado dos vezes la función getUsers y se le han pasado por parametro los valores a buscar en el array.
Dentro de la función getUsers solo se llama una vez a la funcion findOne pasando por parametro los valores de los parametros getUsers.
Haciendo dos llamadas de getUsers y una de findOne y no a la inversa corrigue la secuencialidad. Esto se debe por el await en la función
findOne, que bloquea la ejecución del codigo dentro de ese bloque hasta recibir respuesta de la promesa, cosa que no pasa si se llama otra
vez a la función get users con la otra consulta. Await bloquea el codigo dentro del mismo bloque pero permite la ejecución paralela de otros
bloques de codigo.

*/

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
