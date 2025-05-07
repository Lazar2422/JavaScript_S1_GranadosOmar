let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/tasks`

axios.get(link)
.then((Response)=>{
    console.log(Response["data"][0])
    console.log(Response["data"])
})
let link2= `https://6818a3115a4b07b9d1d019f3.mockapi.io/tasks/1`
let datos = {
    "task":"hola",
    "status": "On hold"
}
axios.put(link2,datos)
.then((response)=>{
    console.log(response["data"]["status"])
})
let link3= `https://6818a3115a4b07b9d1d019f3.mockapi.io/tasks/2` 
// axios.delete(link3)
// .then((response)=>{
//     console.log(response["data"])
// })
let daticos = {
    "status":"On hold"
}
// axios.post(link,daticos)
