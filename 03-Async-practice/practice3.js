function calculate(num1, num2, operationCallback){
    setTimeout(()=>{
        operationCallback(num1,num2)
    }, 5000);
}
function addition(num1, num2){
    console.log(num1 + num2);
} 
function multiplication(num1, num2){
    console.log(num1 * num2);
}
function division(num1, num2){
    console.log(num1/num2);
}
calculate(10, 5, addition);
calculate(10, 5, multiplication);
calculate(10, 5, division);