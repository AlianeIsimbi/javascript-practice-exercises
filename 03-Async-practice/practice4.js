function filterArray(array, testCallback){
    setTimeout(()=>{
        testCallback(array)
    }, 5000);
}
function test1(array){
    let evenNumbers = array.filter(function(num) {
        return num % 2 === 0;
    })
    console.log(evenNumbers);
}
function test2(array){
    let greaterThan = array.filter(function(num) {
        return num>5;
    })
    console.log(greaterThan);
}
filterArray([1,6,7,8,9], test1);
filterArray([1,6,7,8,9], test2);