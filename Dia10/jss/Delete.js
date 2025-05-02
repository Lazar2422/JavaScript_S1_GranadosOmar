


function deletehomo(identificador) {
    axios.delete(`https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales/${identificador}`)
    .then((response) => {
        document.getElementById("formulario").reset();
    })
    axios.get(`https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales`)
    .then((response) =>{
        for (let i=0; i<(response["data"]).length;i++){
            response["data"][i]["Id"]=String(i+1)
            console.log(response["data"][i]["Id"])
        }
    })
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    let identificador=document.getElementById("name").value;

    deletehomo(identificador);
});

axios.get(`https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales/`)
.then((response) =>{
    for (let i=0; i<(response["data"]).length;i++){
        console.log(9)
        response["data"][i]["Id"]=String(i+1)
        console.log(response["data"][i]["Id"])
        axios.put(response["data"][i],{
            "Id":String(i+1)
        })
        console.log(response["data"][i]["Id"])
    }
})

