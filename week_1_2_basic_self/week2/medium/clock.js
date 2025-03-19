const date = new Date();
console.log (date);

let hours = date.getHours();
console.log(hours);

let mins = date.getMinutes();
console.log(mins);

let seconds = date.getSeconds();
console.log(seconds);

function clock(h,m,s){
    
    setInterval(() => {
        s++;
        if(s == 60) {
            s= 0;
            m++;}
        if(m == 60) {
            h++;
            m = 0;}

            console.log(h,":",m,":",s);

    }, 1000);
    
}

clock(hours,mins,seconds);