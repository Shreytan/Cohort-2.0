function counter(duration){
    let count = 0;
    let after = setInterval(function(){
        console.log(`hello world ${count} `);
        count ++ ;
     } , 1000);
    setTimeout(function (){
        console.log("executed");
        clearInterval(after);
    },duration);
}

counter(5000);
console.log("start this shit");