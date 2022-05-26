const nombre = 'Luis'
const apellido = 'Diaz'

 const nombreCompleto = `Hola ${nombre} ${apellido}`

 console.log(nombreCompleto)

 const getSaludar = (nombre) =>{
        return 'HOLA' + nombre;
 }

 console.log(`Este es un texto ${getSaludar(nombre)}`)