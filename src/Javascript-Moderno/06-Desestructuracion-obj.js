///Desestructuracion 


const persona = {
      nombre:"Karla",
     apellido:"Mendez",
     clave:"Esposa",
      edad: 55,
      direcion:{
       ciudad:"obregon",
      // estado:"Chihuahua"

      }
    };

    // const{nombre,edad} = persona

    // console.log(nombre, edad)


    const Usecontext  = ({clave,nombre,edad,ciudad='Juarez'})=>{

      //  console.log(nombre,edad,ciudad)
        return{
            nombreclave:clave,
             anios:edad,
             locmun:
             {
                localidad:"Ahumada",
                municipio: "Delicias",
            }
        }
    }

    const {nombreclave,anios,locmun:{localidad,municipio} } = Usecontext (persona);
    console.log(nombreclave,anios)
    console.log(localidad,municipio)