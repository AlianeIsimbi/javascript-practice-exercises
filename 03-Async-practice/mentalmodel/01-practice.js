function fetchToDo(URL){
    fetch(URL)
    .then((response)=>{
        if (!response.ok){
            throw new Error("Failed to fetch!!");
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.error(error);
    })
}
fetchToDo("https://jsonplaceholder.typicode.com/todos/1")