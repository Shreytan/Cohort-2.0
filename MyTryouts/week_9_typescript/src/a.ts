// const a : number = 1000;
// console.log(a);


// function greet(firstName : string){
//     console.log(firstName);
// }

// greet("shreyansh");



// function sum(a:number,b:number):number{
//     return a+b;
// }
// console.log(sum(2,3));


// function islegal(a : number):boolean{
//     if(a>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(islegal(21));

interface User {
    firstname : string,
    lastname : string,
    age : number,
}

function islegal(user:User):boolean{
    if(user.age > 18){
        return true ;
    }
    else return false;


}

islegal({
    firstname:"Rahul",
    lastname:"Kuamr",
    age:18
})
