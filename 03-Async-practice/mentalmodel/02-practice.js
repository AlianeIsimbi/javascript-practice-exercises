function displayNumber(num){
    const displayInterval = setInterval(()=>{
        console.log(num);
    }, 2000);
    setTimeout(()=>{
        clearInterval(displayInterval);
    }, 5000);
}
displayNumber(5);