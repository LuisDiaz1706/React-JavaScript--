//import { owners } from "./data/heroes"
import heroes, {owners} from '../data/heroes'
console.log(owners)
//console.log(heroes)


export const  getHeroesByID = (id)=>{
    return heroes.find((e) => e.id === id);
}

console.log(getHeroesByID(5))


export const getHeroesByOwner = (owner) =>{
    return heroes.filter((e) => e.owner === owner);
}

console.log(getHeroesByOwner('DC')) 