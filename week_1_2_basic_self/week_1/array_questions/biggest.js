//creating the arrray
let array = [] ; 
for(let i = 0 ;i <1000 ; i++){
    array.push(i);
}
// for(let i = 0 ;i<array.length; i++){
//     if(array[i]%2 == 0){
//         console.log(i);
//     }
// }

// after array is created 

let big = -Infinity;
for(let i  = 0;i<array.length ; i++){
    if(array[i] > big){
        big = array[i];
    }
}

console.log(big);