function gethomo() {
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
        }
    });
}
gethero();

function posthero(nombre_personaje, nombre_actor, edad, ubicacion, poster, fecha_de_nacimiento, compania) {
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`;
    axios.post(link, {
        "Name": nombre_personaje,
        "Actor": nombre_actor,
        "Age": edad,
        "Location": ubicacion,
        "Poster":poster,
        "Date":fecha_de_nacimiento,
        "Company":compania,
        
    })
    .then((response) => {
        console.log(response)
        document.getElementById("formulario").reset();
    })
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre_personaje = document.getElementById("nombre_per").value;
    let nombre_actor = document.getElementById("nombre_act").value;
    let edad = document.getElementById("edad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let poster = document.getElementById("poster").value;
    let fecha_de_nacimiento = document.getElementById("nacimiento").value;
    let compania = document.getElementById("productora").value;


    posthero(nombre_personaje, nombre_actor, edad, ubicacion, poster, fecha_de_nacimiento, compania);
});
let numerito = 0;
document.getElementById("adding").addEventListener("click", function(e) {
    e.preventDefault();
    numerito++;

    let nuevo = document.getElementById("registro_trajes");

    let xd = `<div>
            <p>Nombre traje</p>
            <input id="numerito_${numerito}"type="text">
            <button type="button" class="eliminar">-</button>
    </div>`;
    for (let i=0;i<numerito;i++){
        let numero_skin = ``
        let skin_add = document.getElementById(`numerito_${i}`).value
        console.log(skin_add)
        numero_skin += `${skin_add}`
    }
    nuevo.insertAdjacentHTML("beforeend", xd); // Más eficiente que innerHTML +=
    posthero2(numero_skin)
});

function posthero2(name_skins){
    let linksito = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`
    axios.get(linksito)
    .then((response)=>{
        direccion = response["data"].length
        axios.post(linksito,{
            "Skin":[
                name_skins
            ]
    })
    })
}