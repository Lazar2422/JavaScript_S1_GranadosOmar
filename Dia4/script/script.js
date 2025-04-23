function fetchPoke(){
    let id= document.getElementById("pokeId").value;
    let xhr = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    xhr.open('GET',url);
    xhr.onreadystatechange = (function(){
        if(this.readyState === 4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response["name"]);
            displayPoke(response);
        }
    });
    xhr.send();
    
}
function displayPoke(data){
    let pokemon = document.getElementById("showUp");
    let nombre = (data["name"].charAt(0).toUpperCase())+(data["name"].slice(1));
    console.log(nombre) ;
    pokemon.innerHTML = `${data["id"]} - ${nombre}`;
}
function minus_id(){
    console.log("Testing");
}
function plus_id(){
    console.log("Testing");
}

const input=document.getElementById("pokeId");
input.addEventListener("keydown", function (event)  {
    if(event.key==="Enter"){
        fetchPoke();
    }
});