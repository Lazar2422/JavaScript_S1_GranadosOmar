function gethomo() {
    let link = `https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
        }
    });
}
gethomo();

function posthomo(name, age, sex, ets) {
    let link = `https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Homosexuales`;
    axios.post(link, {
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

    let nombre = document.getElementById("name").value;
    let age = document.getElementById("edad").value;
    let sex = document.getElementById("sex").value;
    let ets = document.getElementById("ets").value;

    posthomo(nombre, age, sex, ets);
});
