function fetch21(){
    let xhr = new XMLHttpRequest();
    
    let link= `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
    
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            displaycartasmaquina(respuesta);
            displaycartasjugador(respuesta);
           
        }
    };
    xhr.send();
    
}
fetch21();
    let cartasjugador = document.getElementById('jugador');
    function displaycartasjugador(data){
    if(data.response == "error"){
        cartasjugador.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        console.log(data["deck_id"]);
        let baraja=(data["deck_id"]);
        console.log(`https://deckofcardsapi.com/api/deck/${baraja}/shuffle/?remaining=true`)
        let cartav1= data["cards"]["0"]["value"];
        console.log(cartav1)
        let cartav2= data["cards"]["1"]["value"];
        console.log(cartav2)
        cartasjugador.innerHTML=`
        <img class="carta1" src="${data["cards"]["0"]["images"]["png"]}">
        <img class="carta2" src="${data["cards"]["1"]["images"]["png"]}">
        `
    }
}
let nombrepokeHTML = document.getElementById('maquina');

function displaycartasmaquina(data){
if(data.response == "error"){
    nombrepokeHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
}else{
    let cartav1= data["cards"]["0"]["value"];
    console.log(cartav1)
    let cartav2= data["cards"]["1"]["value"];
    console.log(cartav2)
    nombrepokeHTML.innerHTML=`
    <img class="carta1" src="${data["cards"]["0"]["images"]["png"]}">
    <img class="carta2" src="${data["cards"]["1"]["images"]["png"]}">
    `
}}

while (zzztrue){
    document.getElementById("plantarse").addEventListener("click", function () {
    zzz=false


        
    }) 

}