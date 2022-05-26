//import heroes from "./data/heroes";
import { getHeroesByID } from "./Javascript-Moderno/08-imp-exp";
import { getHeroesByOwner } from "./Javascript-Moderno/08-imp-exp";

// const promesa = new Promise((res,rej)=>{
//         setTimeout(() => {
//             const p1 = getHeroesByID(2)
//             res(p1)
//         }, 2000);
// });


const getHeroesByIDAsy = (id) =>{
 return  new Promise((res,rej)=>{
    setTimeout(() => {
        const p1 = getHeroesByID(id)
        if(p1){
        res(p1)
        }else{
            rej(`No se encontro `)
        }
    }, 2000);
});

}

getHeroesByIDAsy(15)
.then(console.log)
.catch(console.warn);
