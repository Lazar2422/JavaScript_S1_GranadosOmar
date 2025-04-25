function fetch21(){
    let xhr = new XMLHttpRequest();
    let link= `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            let sacar = document.getElementById(`pedir`)
            sacar.addEventListener("click", function(){
                displaycartasmaquina(respuesta);
                displaycartasjugador(respuesta);
            })
            let voltear = document.getElementById("plantarse")
            voltear.addEventListener("click", function(){
                cartav1=data["cards"]["1"]["value"]
                cartav2=data["cards"]["0"]["value"]
                cartasjugador.innerHTML=`
                <img id="carta1" class="carta1" src="${data["cards"]["1"]["images"]["png"]}">
                `
                nombrepokeHTML.innerHTML=`
                <img id="carta1" class="carta1" src="${data["cards"]["0"]["images"]["png"]}">
                `
                if (cartav1>cartav2){
                    let contador1=0
                    contador1++
                    marcador = document.getElementById(`yo`)
                    marcador.innerHTML=`
                    <p>${contador1}</p>`
                } else if (cartav1<cartav2){
                    let contador2=0
                    contador2++
                    marcador2 = document.getElementById(`oponente`)
                    marcador2.innerHTML=`
                    <p>${contador2}</p>`
                }
            })
        }
    };
    xhr.send();
}
let cartasjugador = document.getElementById('jugador');
function displaycartasjugador(data){
    if(data.response == "error"){
        cartasjugador.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        let cartav1= data["cards"]["1"]["value"];
        cartasjugador.innerHTML=`
        <img class="oculta" src="./imagenes/back.png">
        <img class="carta1" src="${data["cards"]["1"]["images"]["png"]}">
        `
    }
}
let nombrepokeHTML = document.getElementById('maquina');
function displaycartasmaquina(data){
    if(data.response == "error"){
        nombrepokeHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        let cartav2= data["cards"]["0"]["value"];
        nombrepokeHTML.innerHTML=`
        <img class="oculta" src="./imagenes/back.png">
        <img class="carta1" src="${data["cards"]["0"]["images"]["png"]}">
        `
    }}
fetch21();