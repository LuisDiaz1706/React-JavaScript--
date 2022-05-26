///Desestructuracion Arreglo 

const personajes=['Leonard','Sheldon','Howard'];



const [,p2] = personajes;
const [, , p3] = personajes;
console.log(p2)
console.log(p3)


const retornaArreglo = () =>{
    return ['ABC',123]
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros)

////////////////

const UseState = (valor) =>{
    return [valor,()=>{console.log('Hola Mundo')}]
}

const [nombre,Setnombre] = UseState('Howard')

console.log(nombre)
Setnombre();