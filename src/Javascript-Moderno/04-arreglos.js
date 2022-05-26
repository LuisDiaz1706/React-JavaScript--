// Arreglos 

//const arr = new Array();
const arr1 =[1,2,3,4,]
//arr1.push(1)

let arr2 = arr1;
arr2.push(...arr1 ,5);

const arr3 = arr2.map( function (numero){
return numero *3; 
});



 
console.log(arr1)
console.log(arr2)
console.log(arr3)



