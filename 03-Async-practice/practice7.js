function addition(num1, num2){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num1 + num2)
        }, 1000);
    });
}
function multiplication(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num * 2)
        }, 1000);
    });
}
function subtraction(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num - 5)
        }, 1000);
    });
}
async function performOperations(num1, num2){
    const sum = await addition(num1, num2);
    console.log(`Sum: ${sum}`);
    const product = await multiplication(sum);
    console.log(`Product: ${product}`);
    const difference = await subtraction(product);
    console.log(`The final result when we subtract 5 is ${difference}`);
}
performOperations(10, 5);