function Display(data) {
    let informacionHTML = document.getElementById('pokedeximg');
    if (data["sprites"]["front_default"] == undefined) {
        informacionHTML.innerHTML = `
            <img src=${data["sprites"]["front_default"]}/>
            <p><span class="-${data["id"]}" id="identifier">${data["id"]}</span> <span>-</span> ${data["name"]}</p>
            <form id="findform" name="findform">
                <input name="find" id="find" type="text" placeholder="Name or Number"/>
                <button id="prev" onclick="prev()">Prev &lt</button>
                <button id="next" onclick="next()">Next &gt</button>
            </form>
            `;
    } else {
        informacionHTML.innerHTML = `
            <img src=${data["sprites"]["other"]["showdown"]["front_default"]} />
            <p><span class="-${data["id"]}" id="identifier">${data["id"]}</span> <span>-</span> ${data["name"]}</p>
            <form id="findform" name="findform">
                <input name="find" id="find" type="text" placeholder="Name or Number"/>
                <button id="prev" onclick="prev()">Prev &lt</button>
                <button id="next" onclick="next()">Next &gt</button>
            </form>
            `;
    };
    bring();
};

function bring() {
    const form = document.getElementById('findform')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        let formData = new FormData(form);
        let link = `https://pokeapi.co/api/v2/pokemon/${formData.get('find')}`;
        xhr.open('GET', link);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let respuesta = JSON.parse(this.responseText);
                Display(respuesta);
            };
        };
        xhr.send();
    });
};

function bringpokebyid(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let respuesta = JSON.parse(xhr.responseText);
            Display(respuesta);
        }
    };
    xhr.send();
}
document.getElementById("next").addEventListener("click", function () {
    let input = document.getElementById("find");
    let value = parseInt(input.value);
    if (!isNaN(value)) {
        input.value = value + 1;
        bring();
    }
});
document.getElementById("prev").addEventListener("click", function () {
    let input = document.getElementById("find");
    let value = parseInt(input.value);
    if (!isNaN(value) && value > 1) {
        input.value = value - 1;
        bring();
    }
});
// function next(){
//     contador += 0.5;
//     document.getElementById("find").value= contador;
//     bring()
// }
// function prev(){
//     if(contador > 1){
//     contador -= 1 ;
//     document.getElementById("find").value= contador;
//     bring()
//     }
// }

bring();