function timer(count){
    console.log("hello world")
    console.log(count);
    setTimeout(()=>{
        timer(count+1)},5000);
}

timer(5);