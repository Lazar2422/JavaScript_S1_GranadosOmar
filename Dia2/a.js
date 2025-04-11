//###############################
// Ejercicio Dia2 JavaScript
//###############################
function abrirJSONr(ruta) {
    return fetch(`./${ruta}.json`)
      .then(response => {
        return response.json();
      });
}


function guardarJSON(ruta, dic) {
  fs.writeFileSync(`./${ruta}.json`, JSON.stringify(dic, null, 2));
}
let booleano=true;
let perfil={};
while (booleano==true){
    let seleccion=prompt("Seleccione el perfil \n1 para estudiantes || 2 para trainers || 3 para coordinador || 4 para salir: ");
    if (seleccion==1){
        ruta="estudiantes";
        perfil=(abrirJSONr(ruta));
        let booleano2=true;
        while (booleano2==true){
            let registro=prompt("1 para iniciar sesión || 2 para registrarse")
            if (registro=="1"){
                let nombre=prompt("Ingrese el usuario (nombre): ");
                let id=prompt("Ingrese su ID: ");
                let booleano3=true;
                let iterador=0;
                Object.keys(perfil).forEach(ruta=> {
                    for (let i=0; i < perfil[ruta].length; i++){
                        if (perfil[ruta][i]["Nombre"]==nombre && perfil[ruta][i]["ID"]==id){
                            booleano3=true;
                            iterador=(i)
                            break;
                        }
                        else{
                            booleano3=false;
                        }
                    }
                })
                if (booleano3==true){
                    alert()
                    while (booleano3==true){  
                        let eleccion=prompt("Bienvenido/a "+nombre+" Presione 1 para ver tu información || 2 para ver tus notas || 3 para salir : ");
                        if (eleccion=="1"){
                            alert("Nombre: "+perfil[ruta][iterador]["Nombre"],"\n ID: "+perfil[ruta][iterador]["ID"],"\nApellido: "+perfil[ruta][iterador]["Apellido"],"\nDirección: "+perfil[ruta][iterador]["dirección"],"\nTeléfono: "+perfil[ruta][iterador]["celular"],"\nTeléfono fijo: "+perfil[ruta][iterador]["fijo"],"\nEstado: "+perfil[ruta][iterador]["estado"],"\nRiesgo: "+perfil[ruta][iterador]["riesgo"],"\nRuta: "+perfil[ruta][iterador]["ruta"])
            
                        }
                        else if (eleccion=="2"){
                            let ruta2="notas"
                            let notas=abrirJSONr(ruta2);
                            for (let i=0; i < notas.length; i++){
                                let iterador2=String(i);
                                if (nombre==notas[ruta2][i]["Nombre"]){
                                    for (let q=0; q < notas[ruta2][i][ruta2][i][iterador2];q++){
                                        alert("Nombre: "+notas[ruta2][i][ruta2][i][iterador2]["Nombre"]+" Proyecto: "+notas[ruta2][i][ruta2][i][iterador2]["Proyecto"]+" Filtro: "+notas[ruta2][i][ruta2][i][iterador2]["Filtro"]+" Trabajos: "+notas[ruta2][i][ruta2][i][iterador2]["Trabajos"]+" Resultado: "+notas[ruta2][i][ruta2][i][iterador2]["Resultado"]);
                                    }
                                }
                            }
                        }
                        else if (eleccion=="3"){
                            booleano3=false;
                            booleano2=false;
                    }
                }
                }
            }
            else if (registro=="2"){
                let nombre=prompt("Ingrese el usuario (nombre): ");
                let id=prompt("Ingrese su ID: ");
                let apellido=prompt("Ingrese su apellido: ");
                let direccion=prompt("Ingrese su dirección: ");
                let celular=prompt("Ingrese su celular: ");
                let fijo=prompt("Ingrese su teléfono fijo: ");
                let riesgo="Nulo";
                let rutita=prompt("Ingrese la ruta a estudiar (1 Java || 2 NodeJS || 3 .Net): ");
                if (rutita=="1"){
                    rutita2="Java";
                }
                else if (rutita=="2"){
                    rutita2="NodeJS";
                }
                else if (rutita=="3"){
                    rutita2=".Net";
                }
                perfil[ruta].push({"Nombre":nombre,"ID":id,"Apellido":apellido,"dirección":direccion,"celular":celular,"fijo":fijo,"estado":"Inscrito","riesgo":riesgo,"ruta":rutita2});
            }
            guardarJSON(ruta,perfil)
        }
    }
    else if(seleccion==2){
        ruta="trainers";
        perfil=(abrirJSONr(ruta));
        let booleano2=true;
        while (booleano2==true){
            nombre=prompt("Ingrese el usuario (nombre): ");
            id=prompt("Ingrese su ID: ");
            let booleano3=true;
            let iterador=0;
            Object.keys(perfil).forEach(ruta=> {
                for (let i=0; i < perfil[ruta].length; i++){
                    if (perfil[ruta][i]["Nombre"]==nombre && perfil[ruta][i]["ID"]==id){
                        booleano3=true;
                        iterador=(i)
                        break;
                    }
                    else{
                        booleano3=false;
                    }
                }
            })
            if (booleano3==true){
                while (booleano3==true){
                    let eleccion=prompt("Bienvenido/a "+nombre+" Presione 1 para ver su información || 2 para ver tus grupos || 3 para ver estudiantes || 4 para calificar estudiantes || 5 para salir : ");
                    if (eleccion=="1"){
                        alert("Nombre: "+perfil[ruta][iterador]["Nombre"])
                        alert("ID: "+perfil[ruta][iterador]["ID"])
                        alert("Apellido: "+perfil[ruta][iterador]["Apellido"])
                        alert("Ruta: "+perfil[ruta][iterador]["ruta"])
                    }
                    else if (eleccion=="2"){
                        let ruta3="grupo";
                        let grupo=abrirJSONr(ruta3);
                        for (let i=0; i < grupo[ruta3].length; i++){
                            if (perfil[ruta2][iterador]["Nombre"]==grupo[ruta3][i]["trainer"]){
                                alert("Grupo #"+(i+1))
                            }
                        }
                    }
                    else if(eleccion=="3"){
                        let ruta3="estudiantes";
                        let estudiantes=abrirJSONr(ruta3);
                        for (let i = 0; i < estudiantes[ruta3].length; i++){
                            alert("Estudiante "+ (i+1), " ID: "+estudiantes[ruta3][i]["ID"], " Nombre: "+estudiantes[ruta3][i]["Nombre"]," Apellido: ", estudiantes[ruta3][i]["Apellido"]," Direccion: ",estudiantes[ruta3][i]["direccion"]," Acudiente: ",estudiantes[ruta3][i]["acudiente"]," Telefono: "+estudiantes[ruta3][i]["celular"]," Telefono fijo: ", estudiantes[ruta3][i]["fijo"], " Estado: ", estudiantes[ruta3][i]["estado"], " Riesgo: ", estudiantes[ruta3][i]["riesgo"])
                        }
                    }
                    else if(eleccion=="4"){
                        let ruta3="notas";
                        let notas=abrirJSONr(ruta3);
                        let estudiante=prompt("Ingrese el ID del estudiante a calificar: ")
                        let iterador=0;
                        for (let i = 0; i < notas[ruta3].length; i++){
                            if (estudiante==notas[ruta3][i]["ID"]){
                                iterador=i;
                                for (let q=0; q < notas[ruta3][i]["notas"].length; q++)
                                    p=String(q);
                                    alert("Presione ",i, " Para calificar ", notas[ruta3][i]["notas"][q][p]["Nombre"])
                            }
                        }
                        let calificar=prompt(": ")
                        let notaproyect=prompt("Nota del proyecto: ")
                        let notafiltro=prompt("Nota del filtro: ")
                        let notatraba=prompt("Nota de trabajos: ")
                        notas[ruta3][iterador]["notas"][calificar][calificar][0]["Proyecto"] = notaproyect;
                        notas[ruta3][iterador]["notas"][calificar][calificar][0]["Filtro"] = notafiltro;
                        notas[ruta3][iterador]["notas"][calificar][calificar][0]["Trabajos"] = notatraba;
                        let nuevoestado=(notaproyect*0.6)+(notafiltro*0.3)+(notatraba*0.1)
                        let ruta4="estudiantes";
                        let verificacion=abrirJSONr(ruta4);
                        for (let i =0; i < verificacion[ruta4].length;i++){
                            if (verificacion[ruta4][i]["ID"]==estudiante){
                                veri=i;
                                break
                            }
                        }
                        if (nuevoestado<60){
                            verificacion[ruta4][veri]["riesgo"]="alto";
                        }
                        estudiante[ruta3][iterador]["notas"][calificar][calificar]["Resultado"]=nuevoestado;
                        guardarJSON(ruta3,estudiante)
                        guardarJSON(ruta4,verificacion)
                    }
                    else if (eleccion=="5"){
                        booleano3=false;
                        booleano2=false;
                    }
                }
            }
        }
    }
    else if(seleccion==3){
        let ruta="coordinador"
        let perfil=(abrirJSONr(ruta));
        let booleano2=true;
        while (booleano2==true){
            let nombre=prompt("Ingrese el usuario (nombre): ")
            let id=prompt("Ingrese su ID: ")
            let booleano3=true;
            let iterador=0;
            for (let i=0; i<perfil[ruta].length;i++){
                if (perfil[ruta][i]["Nombre"]==nombre && perfil[ruta][i]["ID"]==id){
                    booleano3=true;
                    iterador=i;
                    break
                } else booleano3=false
            }
            if (booleano3==true){
                while (booleano3==true){
                    alert("Bienvenido/a ", nombre);
                    let eleccion=prompt("1 para ver informacion || 2 para editar informacion || 3 para añadir informacion || 4 para grupos || 5 para calificar estudiantes || 6 para modulo de reportes || 7 para salir")
                    if (eleccion==1){
                        let eleccion2=prompt("De cual perfil quiere ver la información? (1 para camper || 2 para trainers || 3 para coordinadores)")
                        if (eleccion2==1){
                            let ruta2="estudiantes"
                            let estudiantes=abrirJSONr(ruta2)
                            for (let i = 0; i < estudiantes[ruta2].length; i++){
                                alert("Estudiante "+ (i+1), " ID: "+estudiantes[ruta2][i]["ID"], " Nombre: "+estudiantes[ruta2][i]["Nombre"]," Apellido: ", estudiantes[ruta2][i]["Apellido"]," Direccion: ",estudiantes[ruta2][i]["direccion"]," Acudiente: ",estudiantes[ruta2][i]["acudiente"]," Telefono: "+estudiantes[ruta2][i]["celular"]," Telefono fijo: ", estudiantes[ruta2][i]["fijo"], " Estado: ", estudiantes[ruta2][i]["estado"], " Riesgo: ", estudiantes[ruta2][i]["riesgo"])
                            }
                        }
                        else if (eleccion2==2){
                            let ruta2="trainers"
                            let trainers=abrirJSONr(ruta2)
                            for (let i=0;i<trainers[ruta2].length;i++){
                                alert("Trainer ",(i+1)," ID: ", trainers[ruta2][i]["ID"], " Nombre: ",trainers[ruta2][i]["Nombre"], " Apellido: ", trainers[ruta2][i]["Apellido"], " Ruta: ", trainers[ruta2][i]["Ruta"])
                            }
                        }
                        else if(eleccion2==3){
                            let ruta2="coordinador";
                            let coordinador=abrirJSONr(ruta2);
                            for (let i=0;i<coordinador[ruta2].length;i++){
                                alert("Coordinador ", (i+1), " ID: ", coordinador[ruta2][i]["ID"], " Nombre: ", coordinador[ruta2][i]["Nombre"])
                            }
                        }
                    }
                    else if(eleccion==2){
                        let eleccion2=prompt("1 para camper || 2 para trainers || 3 para coordinadores : ")
                        if (eleccion2){
                            let ruta2="estudiantes"
                            let estudiantes=abrirJSONr(ruta2)
                            let modificar=prompt("Ingrese el ID del estudiante a editar: ")
                            for (let i=0;i<estudiantes[ruta2].length;i++){
                                if (estudiantes[ruta2][i]["ID"]==modificar){
                                    estudiantes[ruta2][i]["Nombre"]= prompt("Ingresa el nombre: ")
                                    estudiantes[ruta2][i]["Apellido"]= prompt("Ingresa el apellido: ")
                                    estudiantes[ruta2][i]["direccion"]= prompt("Ingresa la direccion: ")
                                    estudiantes[ruta2][i]["acudiente"]=prompt("Ingrese el nombre del acudiente: ")
                                    estudiantes[ruta2][i]["celular"]=prompt("Ingrese el telefono celular: ")
                                    estudiantes[ruta2][i]["fijo"]=prompt("Ingrese el telefono fijo: ")
                                    estudiantes[ruta2][i]["estado"]=prompt("Ingrese el estado del camper: ")
                                    estudiantes[ruta2][i]["riesgo"]=prompt("Ingrese el riesgo del camper: ")
                                    estudiantes[ruta2][i]["Ruta"]=prompt("Ingrese la ruta del camper: ")
                                    guardarJSON(ruta2,estudiantes)
                                }
                            }
                        }
                        else if(eleccion2==2){
                            let ruta2="trainers"
                            let trainers=abrirJSONr(ruta2)
                            let modificar=prompt("Ingrese el ID del trainer a modificar: ")
                            for (let i=0;i<trainers[ruta2].length;i++){
                                if (trainers[ruta2][i]["ID"]==modificar){
                                    trainers[ruta2][i]["Nombre"]=prompt("Ingrese el nombre: ")
                                    trainers[ruta2][i]["Apellido"]=prompt("Ingrese el apellido: ")
                                    trainers[ruta2][i]["Ruta"]=prompt("Ingrese la ruta: ")
                                    guardarJSON(ruta2,trainers)
                                }
                            }
                        }
                        else if(eleccion2==3){
                            let ruta2="coordinador"
                            let coordinador=abrirJSONr(ruta2)
                            let modificar=prompt("Ingrese el ID del coordinador a editar: ")
                            for (let i=0; i<coordinador[ruta2].length;i++){
                                if (coordinador[ruta2][i]["ID"]==modificar){
                                    coordinador[ruta2][i]["Nombre"]=prompt("Ingrese el nombre: ")
                                }
                            }
                        }
                    }
                    else if(eleccion==3){
                        let eleccion2=prompt("1 para camper || 2 para trainers || 3 para coordinadores : ")
                        if (eleccion2==1){
                            let ruta2="estudiantes";
                            let estudiantes=abrirJSONr(ruta2);
                            const rutita={
                                "1":"Java",
                                "2":"NodeJS",
                                "3":".Net"
                            }
                            let id=estudiantes[ruta2].length
                            estudiantes[ruta2].push({"ID":id,"Nombre":prompt("Ingrese el nombre: "),"Apellido":prompt("Ingrese el apellido: "),"direccion":prompt("Ingrese la direccion: "),"acudiente":prompt("Ingrese el nombre del acudiente: "), "celular":prompt("Ingrese el telefono celular: "),"fijo":prompt("Ingrese el telefono fijo: "), "estado":"Inscrito","ruta":rutita[prompt("Ruta (1-Java || 2-NodeJS || 3-.Net)")]})
                            guardarJSON(ruta2,estudiantes)
                        }
                        else if(eleccion2==2){
                            let ruta2="trainers";
                            let trainers=abrirJSONr(ruta2);
                            let id=trainers[ruta2].length
                            trainers[ruta2].push({"ID":id,"Nombre":prompt("Ingrese el nombre: "),"Apellido":prompt("Ingrese el apellido: "),"Ruta":prompt("Ingrese la ruta: ")})
                            guardarJSON(ruta2,trainers)
                        }
                        else if(eleccion2==3){
                            let ruta2="coordinador"
                            let coordinador=abrirJSONr(ruta2)
                            id=coordinador[ruta2].length
                            coordinador[ruta2].push({"ID":id,"Nombre":prompt("Ingrese el nombre: ")})
                            guardarJSON(ruta2,coordinador)
                        }
                    }
                    else if(eleccion==4){
                        let ruta2="grupo"
                        let grupo=abrirJSONr(ruta2)
                        let opcion2=prompt("Presione 1 para ver la información || 2 para editar || 3 para añadir || 4 para asignar estudiantes || 5 para salir")
                        if (opcion2==1){
                            for (let i=0;i<grupo[ruta2].length;i++){
                                alert("Grupo ",(i+1), " Salón: ", grupo[ruta2][i]["salon"], " Trainer: ", grupo[ruta2][i]["trainer"]," Horario: ",grupo[ruta2][i]["horario"]," Ruta: ",grupo[ruta2][i]["ruta"])
                                for (let q=0;q<grupo[ruta2][i]["estudiantes"];q++){
                                    alert("Estudiante ", (i+1), " ", grupo[ruta2][i]["estudiantes"][q])
                                }
                            }
                        }
                        else if(opcion2==2){
                            let editar=prompt(("Ingrese el numero del grupo a editar: ")-1)
                            let rutita={
                                "1":"Java",
                                "2":"NodeJS",
                                "3":".Net"
                            }
                            grupo[ruta2][editar]["salon"]=prompt("Ingrese el nombre del salón asigando: ")
                            grupo[ruta2][editar]["trainer"]=prompt("ngrese el nombre del trainer asignado: ")
                            grupo[ruta2][editar]["horario"]=prompt("Ingrese el numero del horario asignado: ")
                            grupo[ruta2][editar]["ruta"]=editar[prompt("Ingrese el numero de la ruta asignada: ")]
                        }
                        else if(opcion2==3){
                            let ruta3="salones"
                            let salon=abrirJSONr(ruta3)
                            let trainer=abrirJSONr("trainers")
                            for (let i=0;i<salon[ruta3].length;i++){
                                alert((i+1), " para salon ", salon[ruta3][i]["Nombre"])
                            }
                            let nombresalon=prompt((": ")-1)
                            let nombresalon2=salon[ruta3][nombresalon]["Nombre"]
                            let train=prompt("Ingrese el ID del trainer: ")
                            let train2=""
                            for (let i=0; i<trainer["trainer"];i++){
                                if (trainer["trainers"][i]["ID"]==train){
                                    train2=trainer["trainers"][i]["Nombre"]
                                    break
                                }
                            }
                            let rutita={
                                "1":"Java",
                                "2":"NodeJS",
                                "3":".Net"
                            }
                            grupo[ruta2].push({"salon":nombresalon2,"trainer":train2,"estudiatnes":[],"horario":prompt("Ingrese el numero del horario: "), "ruta":rutita[prompt("Ingrese el numero de la ruta")]})
                            guardarJSON(ruta2,grupo)
                        }
                        else if(opcion2==4){
                            let camper=abrirJSONr("estudiantes")
                            let ingreso=prompt("Ingrese el ID del estudiante a añadir: ")
                            for (let i=0;i<grupo[ruta2].length;i++){
                                for (let q=0;q<camper["estudiantes"].length;q++){
                                    if (grupo[ruta2][i]["ruta"]==camper["estudiantes"][q]["ruta"]){
                                        if (grupo[ruta2][i]["estudiates"].length<33){
                                            alert("Salon ",(i+1)," disponible")
                                        }
                                    }
                                }
                            }
                            let numerosalon=prompt(("Ingrese el numero del grupo")-1)
                            for (let i=0;i<camper["estudiantes"].length;i++){
                                if (camper["estudiantes"][i]["ID"]==ingreso){
                                    grupo[ruta2][numerosalon]["estudiantes"].push({"Nombre":camper["estudiantes"][i]["Nombre"]})
                                }
                            }
                            // space guardarjson
                        }
                        else if(opcion2==5){
                            booleano3=false;
                            booleano2=false;
                        }
                    }
                    else if(eleccion==5){
                        let ruta2="estudiantes"
                        let estudiantes=abrirJSONr(ruta2)
                        let ruta3="notas"
                        let notas=abrirJSONr(ruta3)
                        let estudiante=prompt("Ingrese el ID del estudiante a calificar: ")
                        for (let i = 0; i < notas[ruta3].length; i++){
                            if (estudiante==notas[ruta3][i]["ID"]){
                                let calificar=prompt("Ingrese la calificación del estudiante")
                                if (calificar>60){
                                    estudiantes[ruta2][i]["estado"]="Aprobado"
                                    notas[ruta3].push({"Nombre":estudiantes[ruta2][i]["Nombre"],"ID":estudiantes[ruta2][i]["ID"],"notas":[]})
                                    // espacio guardarjson
                                    let longitud=notas[ruta3].length-1
                                    if (estudiantes[ruta2][i]["ruta"]=="Java"){
                                        notas[ruta3][longitud][ruta3].push({ "0": [{ Nombre: "Intro", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "1": [{ Nombre: "Python", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "2": [{ Nombre: "HTML/CSS", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "3": [{ Nombre: "Scrum", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "4": [{ Nombre: "Git", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "5": [{ Nombre: "JavaScript", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "6": [{ Nombre: "Intro Back", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "7": [{ Nombre: "Intro BBDD", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "8": [{ Nombre: "MySQL", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "9": [{ Nombre: "Java", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "10": [{ Nombre: "PostgreSQL", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "11": [{ Nombre: "Springboot", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                    } else if (notas[rta1][i]["ruta"] === "NodeJS") {
                                        notas[ruta3][longitud][ruta3].push({ "0": [{ Nombre: "Intro", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "1": [{ Nombre: "Python", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "2": [{ Nombre: "HTML/CSS", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "3": [{ Nombre: "Scrum", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "4": [{ Nombre: "Git", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "5": [{ Nombre: "JavaScript", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "6": [{ Nombre: "Intro Back", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "7": [{ Nombre: "Intro BBDD", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "8": [{ Nombre: "MongoDBL", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "9": [{ Nombre: "JavaScript", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "10": [{ Nombre: "MySQL", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "11": [{ Nombre: "Express", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                    } 
                                    else if (notas[rta1][i]["ruta"] === ".Net") {
                                        notas[ruta3][longitud][ruta3].push({ "0": [{ Nombre: "Intro", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "1": [{ Nombre: "Python", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "2": [{ Nombre: "HTML/CSS", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "3": [{ Nombre: "Scrum", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "4": [{ Nombre: "Git", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "5": [{ Nombre: "JavaScript", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "6": [{ Nombre: "Intro Back", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "7": [{ Nombre: "Intro BBDD", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "8": [{ Nombre: "MySQL", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "9": [{ Nombre: "C#", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "10": [{ Nombre: "PostgreSQLL", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                        notas[ruta3][longitud][ruta3].push({ "11": [{ Nombre: ".Net Core", Proyecto: 0, Filtro: 0, Trabajos: 0, Resultado: 0 }] });
                                    }
                                    // space guardarjson
                                }
                                else {
                                    estudiantes[ruta2][i]["estado"]="no aprobado"
                                }

                            }
                        }
                        // guardarjson
                    }
                    else if(eleccion==6){
                        let estudiantes=abrirJSONr("estudiantes")
                        let trainers=abrirJSONr("trainers")
                        let grupos=abrirJSONr("grupo")
                        alert("Estudiantes inscritos: ")
                        for (let i=0;i<estudiantes["estudiantes"].length;i++){
                            if (estudiantes["estudiantes"][i]["estado"]=="Incrito"){
                                alert(estudiantes["estudiantes"][i]["Nombre"])
                            }
                        }
                        alert("Estudiantes aprobados: ")
                        for (let i=0;i<estudiantes["estudiantes"].length;i++){
                            if (estudiantes["estudiantes"][i]["estado"]=="Aprobado"){
                                alert(estudiantes["estudiantes"][i]["Nombre"])
                            }
                        }
                        alert("Trainers: ")
                        for (let i=0;i<trainers["trainers"].length;i++){
                            alert(trainers["trainers"][i]["Nombre"])
                        }
                        alert("Campers con rendimiento bajo: ")
                        for (let i=0;i<estudiantes["estudiantes"].length;i++){
                            if (estudiantes["estudiantes"][i]["riesgo"]=="alto"){
                                alert(estudiantes["estudiantes"][i]["Nombre"])
                            }
                        }
                        alert("Campers y Trainer asignados a un salon: ")
                        for (let i=0;i<grupos["grupo"].length;i++){
                            alert("Grupo ",(i+1), " Salón: ", grupos["grupo"][i]["salon"], " Trainer: ", grupos["grupo"][i]["trainer"])
                            for (let q=0;q<grupos["grupo"][i]["estudiantes"];q++){
                                alert("Estudiante ", (i+1), " ", grupos["grupo"][i]["estudiantes"][q])
                            }
                        }
                        let notas=abrirJSONr("notas")
                        alert("Notas de los estudiantes: ")
                        for (let i=0; i<notas["notas"].length;i++){
                            alert(estudiantes["estudiantes"][i]["Nombre"])
                            for (let q=0;q<notas["notas"][i]["notas"];q++){
                                alert("Nombre: ",notas["notas"][i]["nota"][q][q][0]["Nombre"],"\nProyecto: ", notas["notas"][i]["notas"][q][q][0]["Proyecto"], "\n Filtro: ", notas["notas"][i]["notas"][q][q][0]["Filtro"], "\n Trabajos: ", notas["notas"][i]["notas"][q][q][0]["Trabajos"], "\n Resultado: ", notas["notas"][i]["notas"][q][q][0]["Resultado"])
                            }
                        }
                    }
                    else if(eleccion==7){
                        booleano3=false;
                        booleano2=false;
                    }
                }
            }
        }
    }
    else if(seleccion==4){
        booleano=false;
    }
}
// programa realizado por: Omar Fernando Granados Parra TI: 1100957346