function puthomo(name, age, sex, ets,identificador) {
    axios.put(`https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales/${identificador}`, {
        "Name": name,
        "Edad": age,
        "Sexo": sex,
        "N_ets": ets,
    })
    .then((response) => {
        document.getElementById("formulario").reset();
    })
}
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    let identificador=document.getElementById("identificador").value;
    let nombre = document.getElementById("name").value;
    let age = document.getElementById("edad").value;
    let sex = document.getElementById("sex").value;
    let ets = document.getElementById("ets").value;

    puthomo(nombre, age, sex, ets,identificador);
});



