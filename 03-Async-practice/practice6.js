function displayString(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(`It worked!`)
    }, 2000)
    })
}
async function trial(){
    const result = await displayString();
    console.log(result);
}
trial();