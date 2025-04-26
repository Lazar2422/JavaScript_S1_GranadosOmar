function fetch21() {
	let xhr = new XMLHttpRequest();
	let link = `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
	xhr.open('GET', link, true);
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			let respuesta = JSON.parse(this.responseText);
			console.log(respuesta);

			let sacar = document.getElementById(`pedir`);
			sacar.addEventListener("click", function () {
				displaycartasmaquina(respuesta);
				displaycartasjugador(respuesta);
			});

			let voltear = document.getElementById("plantarse");
			voltear.addEventListener("click", function () {
				let cartaJugador = respuesta.cards[1];
				let cartaMaquina = respuesta.cards[0];

				cartasjugador.innerHTML = `<img class="carta1" src="${cartaJugador.images.png}">`;
				nombrepokeHTML.innerHTML = `<img class="carta1" src="${cartaMaquina.images.png}">`;

				let valor1 = obtenerValorCarta(cartaJugador.value);
				let valor2 = obtenerValorCarta(cartaMaquina.value);

				if (valor1 > valor2) {
					marcador.innerHTML = `<p>${++contador1}</p>`;
				} else if (valor2 > valor1) {
					marcador2.innerHTML = `<p>${++contador2}</p>`;
				}
			});
		}
	};
	xhr.send();
}

let cartasjugador = document.getElementById('jugador');
let nombrepokeHTML = document.getElementById('maquina');
let marcador = document.getElementById('yo');
let marcador2 = document.getElementById('oponente');
let contador1 = 0;
let contador2 = 0;

function displaycartasjugador(data) {
	if (data.response == "error") {
		cartasjugador.innerHTML = `<p>Esto no funcionó 😢</p>`;
	} else {
		cartasjugador.innerHTML = `<img class="oculta" src="./img/back.png">`;
	}
}

function displaycartasmaquina(data) {
	if (data.response == "error") {
		nombrepokeHTML.innerHTML = `<p>Esto no funcionó 😢</p>`;
	} else {
		nombrepokeHTML.innerHTML = `<img class="oculta" src="./img/back.png">`;
	}
}

function obtenerValorCarta(valor) {
	if (!isNaN(valor)) return parseInt(valor);
	if (valor === "ACE") return 11;
	return 10;
}

fetch21();