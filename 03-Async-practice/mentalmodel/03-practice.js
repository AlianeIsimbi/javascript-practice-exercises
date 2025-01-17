//Write an async function that takes multiple Promises and uses Promise.race() to return the result of the first Promise that resolves or rejects.

// function manyP (){
//     const promise1 = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             resolve("Yess")
//         }, 3000)
//     })

//     const promise2 = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             reject("nahh")
//         }, 1000)
//     })

//     const promise3 = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             resolve("Yep")
//         }, 5000)
//     })

//     return Promise.race([promise1, promise2, promise3])
// }

/*
manyP()
.then(function(value){
    console.log(value)
})
.catch(function(error){
    console.error(error)
})
*/

// async function exercise() {
//     try{
//         const hold = await manyP()
//         console.log(hold)
//     }
//     catch (error){
//         console.error(error)
//     }
// }

// exercise()

async function manyP (){
    const promise1 = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("Yess")
        }, 3000)
    })

    const promise2 = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("nahh")
        }, 1000)
    })

    const promise3 = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("Yep")
        }, 5000)
    })

    const box =  await Promise.race([promise1, promise2, promise3])
    console.log(box)
}

manyP()