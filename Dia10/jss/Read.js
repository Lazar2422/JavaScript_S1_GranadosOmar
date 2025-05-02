








function puthomo(identificador) {
    axios.put(`https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales/${identificador}`, {
        "Id": id,
    })
    .then((response) => {
        document.getElementById("formulario2").reset();
    })
}



document.getElementById("formulario2").addEventListener("submit", function(e) {
    e.preventDefault();
    let identificador=document.getElementById("ingresar").value;
    gethomo(identificador);
});



