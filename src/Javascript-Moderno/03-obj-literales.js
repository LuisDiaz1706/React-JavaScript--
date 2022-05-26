const persona = {
  nombre:"Karla",
 apellido:"Mendez",
 edad: 55,
 direcion:{
   ciudad:"obregon",
   estado:"Chihuahua",
   zip:31000,
   lat:28.6353,
   long:-106.089
 }
};

//console.table(persona);
console.log({persona});

const persona2 = {...persona};
persona2.nombre = 'Carlos'

console.log(persona2)