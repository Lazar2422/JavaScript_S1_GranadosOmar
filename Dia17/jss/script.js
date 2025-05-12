function solicitud(paginas,animalito){

    const clientId = '2TG8SnUDrvSYhaXHhaxEuty1j909ZAaYL9PTnLMxqbefaWqaGg';
    const clientSecret = 'q2QJrpE5zuM3BD9j7mNWAmRIbEbCAYeOpCAxRlS4';
    
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
data.append('client_id', clientId);
data.append('client_secret', clientSecret);

axios.post('https://api.petfinder.com/v2/oauth2/token', data, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then(response => {
    console.log('Token:', response.data.access_token);
    let token = response.data.access_token
    axios.get(`https://api.petfinder.com/v2/animals?type=${animalito}&page=${paginas}`, {
        headers: {
            'Authorization': `Bearer ${token}`
            
        }
    })
    .then((respuesta)=>{
        console.log("https://api.petfinder.com/v2/animals?type=dog&page=0")
        console.log(respuesta.data)
        document.getElementById("mostrar").innerHTML=""
        for (let i=0; i<respuesta.data.animals.length;i++){
            let url1=("/Dia17/img/pug.jpeg")
            const imagenes = respuesta.data.animals[i].photos[0]
            console.log(imagenes)
            const muestra = document.getElementById("mostrar")
            if(imagenes!==undefined && respuesta.data.animals[i].contact.address.city==lugar){
                const imagenxd=respuesta.data.animals[i].photos[0].small
                console.log(imagenxd)
                muestra.innerHTML+=`
                </a><br>${respuesta.data.animals[i].name}<a><button>
                <img src="${imagenxd}" alt="/Dia17/img/pug.jpeg" class="imagen"></button>
                <p>${respuesta.data.animals[i].species} ~ ${respuesta.data.animals[i].breeds.primary}</p>
                <p>${respuesta.data.animals[i].age}</p>
                <p>${respuesta.data.animals[i].contact.address.city}</p>
                <p>${respuesta.data.animals[i]}</p>`
                console.log(respuesta.data.animals[i].name)
            }
            else if(imagenes==undefined && respuesta.data.animals[i].contact.address.city==lugar){ 
                muestra.innerHTML+= `
                </a><br>${respuesta.data.animals[i].name}<a><button>
                <a><button><img src="${url1}" alt="/Dia17/img/pug.jpeg" class="imagen"></button>
                <p>${respuesta.data.animals[i].species} ~ ${respuesta.data.animals[i].breeds.primary}</p>
                <p>${respuesta.data.animals[i].age}</p>
                <p>${respuesta.data.animals[i].contact.address.city}</p>
                <p>${respuesta.data.animals[i]}</p>`
                console.log(respuesta.data.animals[i].name)
            }
            
            const imagenPorDefecto = "/Dia17/img/pug.jpeg"
        }
    })
})
}
let contador = 0
document.getElementById("atras").addEventListener("click", function(e){
    e.preventDefault()
    tipo = document.getElementById("typo").value
    lugar = document.getElementById("lugar").value
    if (contador == 1){
        contador=1
    }else{
        contador=contador-1
    }
    solicitud(contador,tipo)
})
document.getElementById("adelante").addEventListener("click", function(e){
    e.preventDefault()
    tipo = document.getElementById("typo").value
    lugar = document.getElementById("lugar").value
    contador=contador+1
    solicitud(contador,tipo)
})