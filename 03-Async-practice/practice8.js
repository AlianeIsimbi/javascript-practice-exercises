function fetchData(URL){
fetch(URL)
    .then((response)=>{
        if(!response.ok){
            throw new Error("An error has occured")
        }
        return response.json();
    })
    .then(userData=>{
        console.log('User data:', userData)
    })
    .catch(error=>{
        console.error('Error:', error)
    })
}
fetchData("https://jsonplaceholder.typicode.com/todos");