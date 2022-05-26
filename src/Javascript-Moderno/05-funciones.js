///funciones

// function saludar(nombre){
//     return `Hola ${nombre}`
// }


const Saludar = (nombre)=> `Hola,${nombre}`;

console.log(Saludar('Luis'))


const getUser =()=>  ({
        id:`Pedro`,
        username:`pedro69`,
    });


const getUsuarioActivo = (nombre) => ({
   id:'abc123',
   username: nombre
 });
  

  
  const usuarioActivo = getUsuarioActivo('tenchinjan');
  
 console.log(usuarioActivo);
