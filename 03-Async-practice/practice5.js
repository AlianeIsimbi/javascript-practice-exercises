let success = false;
const promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        if(success === true){
            resolve("Success");
        }else{
            reject("Failure");
        }
    }, 5000)
})
promise
    .then((value)=>{
    console.log(value);
})
    .catch((error)=>{
    console.log(error);
})