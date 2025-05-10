"use strict";
// const a : number = 1000;
// console.log(a);
function islegal(user) {
    if (user.age > 18) {
        return true;
    }
    else
        return false;
}
islegal({
    firstname: "Rahul",
    lastname: "Kuamr",
    age: 18
});
