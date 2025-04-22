function Display(data) {
    let informacionHTML = document.getElementById('pokedeximg');
    if (data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"] == undefined) {
        informacionHTML.innerHTML = `
            <img src=${data["sprites"]["front_default"]}/>
            <p><span class="-${data["id"]}" id="identifier">${data["id"]}</span> <span>-</span> ${data["name"]}</p>
            <form id="findform" name="findform">
                <input name="find" type="search" placeholder="Name or Number"/>
                <button id="prev" onclick="prev()">Prev &lt</button>
                <button id="next" onclick="next()">Next &gt</button>
            </form>
            `;
    } else {
        informacionHTML.innerHTML = `
            <img src=${data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]} />
            <p><span class="-${data["id"]}" id="identifier">${data["id"]}</span> <span>-</span> ${data["name"]}</p>
            <form id="findform" name="findform">
                <input name="find" type="search" placeholder="Name or Number"/>
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

function next() {
    const element = document.getElementById('identifier');
    let protoID = element.getAttribute('class');
    let id = parseInt(protoID.replace('-', ''));
    bringpokebyid(id + 1);
};

function prev() {
    const element = document.getElementById('identifier');
    let protoID = element.getAttribute('class');
    let id = parseInt(protoID.replace('-', ''));
    bringpokebyid(id - 1);
};

bring();