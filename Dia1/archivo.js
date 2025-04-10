//##########################################################################
// DIA 1 - EJERCICIOS DE APRENDIZAJE 
//##########################################################################


//Mis primeros pasos de JavaScript

console.log ('Holiiiii');

//Datos primitivos - Numerls Enteros/ Decimales - No hay diferencia en JS
numerito1 = 1;
numerito2 = 2;
console.log(typeof numerito1);
console.log(typeof numerito2);
numerito3 = numerito1 + numerito2;

// Concatenacion general
console.log(numerito3+" "+ typeof numerito3);

//Operaciones Generales (PEMDAS)
operacion=(((((5*2)**2)+256)/5)*2);

console.log(operacion);
operacion2 = operacion%2;
console.log(operacion2);

//Boleanos
booleanito1 = true;
booleanito2 = false;
booleanito3 = false;
booleanito4 = true;
operadoresBandera =(booleanito1 && booleanito2);
console.log(operadoresBandera);

//Funcion sin parametros y sin retorno 
function mensaje() {
    console.log("Holiiiiis");    
};

mensaje();

//Funcion sin parametros pero con retorno 
function mensajesR() {
    return "Holiiiiiis con retorno";  
};

console.log(mensajesR() + "y mensajesa Adicion!!!!");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
//Funcion con parametros y sin retorno 
function suma(a,b) {
    console.log(a,b);
};

suma (5,7);                                 

//Tipo de variables (LET)

let saludar = "Holas";
saludar = "Campuslands";

// (VAR)                                                                                             

var saludar1 = "Saludo Falso";
var saludar1 = 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

// (CONST)
const contrasenaDelicada = 123456789;

// (IF - ELSE )
let booleanito2 = false;
while (booleanito2 == true) {
    console.log("Que viva el estudio!");
    booleanito2=false;
}

// (FOR "TOD LO QUE EMPIEZA - TERMINA ")

for(let i=1;i<10;i=i+1){
    console.log(i);
}

// Desarrollado por: Omar Fernando Granados Parra