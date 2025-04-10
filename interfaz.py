import json

def abrirJSONr(ruta):
    dicFinal={}
    with open(f"./{ruta}.json",'r') as openFile:
        dicFinal=json.load(openFile)
    return dicFinal

def guardarJSON(ruta,dic):
    with open(f"./{ruta}.json",'w') as outFile:
        json.dump(dic,outFile)
f=True
perfil={}
while f==True:
    print("Seleccion el perfil")
    print("1 para estudiantes || 2 para trainers || 3 para coordinador || 4 para salir")
    x=int(input(": "))
    if x==1:
        ## funciones de campers
        ## funciones de campers
        ## funciones de campers
        ## funciones de campers
        rta="estudiantes"
        perfil=(abrirJSONr(rta))
        lie=True
        while lie==True:
            ## Interfaz inicio de sesion
            registro=input("1 para iniciar sesión || 2 para registrarse ")
            if registro=="1":
                perfil=abrirJSONr(rta)
                nam=input("Ingrese el usuario (nombre): ")
                id=(input("Ingrese su ID: "))
                for i in range (len(perfil[rta])):
                    nome=(perfil[rta][i]["Nombre"])
                    idn=perfil[rta][i]["ID"]
                    if (nam==nome) & (id==idn):
                        tru=True
                        z=i
                        break
                    else:
                        tru=False
                if tru==True:
                    print("Bienvenido/a ", nam)
                    while tru==True:
                        print("Presione 1 para ver tu informacion || 2 para ver tus notas || 3 para salir")
                        inf=int(input(": "))
                        if inf==1:
                            ## informacion del camper
                            ape=perfil[rta][z]["Apellido"]
                            dir=perfil[rta][z]["direccion"]
                            acu=perfil[rta][z]["acudiente"]
                            cel=perfil[rta][z]["celular"]
                            fijo=perfil[rta][z]["fijo"]
                            est=perfil[rta][z]["estado"]
                            ries=perfil[rta][z]["riesgo"]
                            rutaa=perfil[rta][z]["ruta"]
                            print("ID:",id,"Nombre:",nome,"Apellido:",ape,"Direccion:",dir,"Acudiente:",acu,"Celular:",cel,"Telefono fijo:",fijo,"Estado:",est,"Riesgo:",ries,"Ruta:",rutaa)
                        elif inf==2:
                            ## notas del camper
                            rta2="notas"
                            notas={}
                            notas=abrirJSONr(rta2)
                            for i in range (len(notas[rta2])):
                                nombrecito=notas[rta2][i]["Nombre"]
                                if nombrecito==nome:
                                    for q in range (len(notas[rta2][i][rta2])):
                                        proyec=notas[rta2][i]["notas"][q]
                                        print(proyec)
                                break
                        elif inf==3:
                            ## sale de interfaz de usuario y vuelve a seleccionar el perfil
                            tru=False
                            lie=False
            elif registro=="2":
                rta2="estudiantes"
                mostrar={}
                ru=abrirJSONr("rutas")
                mostrar=abrirJSONr(rta2)
                nombe=input("Ingrese el nombre: ")
                ape=input("Ingrese el apellido: ")
                dir=input("Ingrese la direccion: ")
                acu=input("Ingrese el nombre del acudiente: ")
                cel=input("Ingrese el telefono celular: ")
                fijo=input("Ingrese el telefono fijo: ")
                ries="Nulo"
                rutaaa=input("Ingrese la ruta a estudiar (1 Java || 2 NodeJS || 3 .Net): ")
                idd=str((len(mostrar[rta2]))+1)
                print("su ID: ",idd)
                if rutaaa=="1":
                    rutaa="Java"
                elif rutaaa=="2":
                    rutaa="NodeJS"
                elif rutaaa=="3":
                    rutaa=".Net"
                mostrar[rta2].append({"ID":idd,"Nombre":nombe,"Apellido":ape,"direccion":dir,"acudiente":acu,"celular":cel,"fijo":fijo,"estado":"Inscrito","riesgo":ries,"ruta":rutaa})
                guardarJSON("estudiantes",mostrar)
    elif x==2:
        ## funciones de trainers
        ## funciones de trainers
        ## funciones de trainers
        ## funciones de trainers
        rta="trainers"
        perfil=(abrirJSONr(rta))
        lie=True
        while lie==True:
            nam=input("Ingrese el usuario (nombre): ")
            id=(input("Ingrese su ID: "))
            for i in range (len(perfil[rta])):
                nome=str(perfil[rta][i]["Nombre"])
                idn=perfil[rta][i]["ID"]
                if (nam==nome) & (id==idn):
                    tru=True
                    z=i
                    break
                else:
                    tru=False
            if tru==True:
                print("Bienvenido ", nome)
                while tru==True:
                    print("Que te gustaria hacer?")
                    print("1 para ver tu informaicon || 2 para ver tus grupos || 3 para ver estudiantes || 4 para calificar estudiantes || 5 para salir")
                    inf=int(input(": "))
                    if inf==1:
                        ape=perfil[rta][z]["Apellido"]
                        ruta=perfil[rta][z]["Ruta"]
                        print("ID:",id,"Nombre:", nome,"Apellido:",ape,"Ruta:", ruta)
                    elif inf==3:
                        rta2="estudiantes"
                        mostrar={}
                        mostrar=abrirJSONr(rta2)
                        for i in range (len(mostrar[rta2])):
                            iddd=mostrar[rta2][i]["ID"]
                            nombre=mostrar[rta2][i]["Nombre"]
                            ape=mostrar[rta2][i]["Apellido"]
                            dir=mostrar[rta2][i]["direccion"]
                            acu=mostrar[rta2][i]["acudiente"]
                            cel=mostrar[rta2][i]["celular"]
                            fijo=mostrar[rta2][i]["fijo"]
                            est=mostrar[rta2][i]["estado"]
                            ries=mostrar[rta2][i]["riesgo"]
                            print("Estudiante ",i," ID:",iddd,"Nombre:",nombre,"Apellido:","Direccion:",dir,ape,"Acudiente:",acu,"Celular:",cel,"Telefono fijo:",fijo,"Estado:",est,"Riesgo:",ries)
                    elif inf==5:
                        tru=False
                        lie=False
                    elif inf==4:
                        rutaverificacion=abrirJSONr("estudiantes")
                        rta1="notas"
                        notas={}
                        notas=abrirJSONr(rta1)
                        estu=input("Ingrese el ID del estudiante a calificar: ")
                        for i in range(len(notas[rta1])):
                            confirmar=notas[rta1][i]["ID"]
                            if confirmar==estu:
                                s=i
                                for q in range (12):
                                    b=str(q)
                                    c=notas[rta1][i][rta1][q][b][0]["Nombre"]
                                    print("Presione ",q+1, " para calificar ",c )
                                    
                                break
                        nota=(int(input(": ")))-1
                        nota1=str(nota)
                        proyec=int(input("Nota del proyecto: "))
                        filtro=int(input("Nota del filtro: "))
                        traba=int(input("Nota del trabajos: "))
                        ## arreglar mod con pedro
                        notas[rta1][s]["notas"][nota][nota1][0]["Proyecto"]=proyec
                        notas[rta1][s]["notas"][nota][nota1][0]["Filtro"]=filtro
                        notas[rta1][s]["notas"][nota][nota1][0]["Trabajos"]=traba
                        estao=(proyec*0.6)+(filtro*0.3)+(traba*0.1)
                        for i in range(len(rutaverificacion["estudiantes"])):
                            if rutaverificacion["estudiantes"][i]["ID"]==estu:
                                veri=i
                                break
                        if estado<60:
                            rutaverificacion["estudiantes"][veri]["riesgo"]="alto"
                        notas[rta1][s]["notas"][nota][nota1][0]["Resultado"]=estao
                        guardarJSON(rta1,notas)
                        guardarJSON("estudiantes",rutaverificacion)
    elif x==3:
        ## funciones coordinador
        ## funciones coordinador
        ## funciones coordinador
        ## funciones coordinador
        ## funciones coordinador
        rta="coordinador"
        perfil=(abrirJSONr(rta))
        lie=True
        while lie==True:
            nam=input("Ingrese el usuario (nombre): ")
            id=(input("Ingrese su ID: "))
            for i in range (len(perfil[rta])):
                nome=str(perfil[rta][i]["Nombre"])
                idn=perfil[rta][i]["ID"]
                if (nam==nome) & (id==idn):
                    tru=True
                    z=i
                    break
                else:
                    tru=False
            if tru==True:
                while tru==True:
                    print("Bienvenido/a ", nome)
                    print("Que desea hacer?")
                    print("1 para ver informacion || 2 para editar informacion || 3 para añadir informacion || 4 para grupos || 5 para calificar estudiantes || 6 para modulo de reportes || 7 para salir")
                    inf=int(input(": "))
                    if inf==1:
                        print("De cual perfil quiere ver la informacion?")
                        print("1 para camper || 2 para trainers || 3 para coordinadores")
                        infor=int(input(": "))
                        if infor==1:
                            rta2="estudiantes"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            for i in range (len(mostrar[rta2])):
                                iddd=mostrar[rta2][i]["ID"]
                                nombre=mostrar[rta2][i]["Nombre"]
                                ape=mostrar[rta2][i]["Apellido"]
                                dir=mostrar[rta2][i]["direccion"]
                                acu=mostrar[rta2][i]["acudiente"]
                                cel=mostrar[rta2][i]["celular"]
                                fijo=mostrar[rta2][i]["fijo"]
                                est=mostrar[rta2][i]["estado"]
                                ries=mostrar[rta2][i]["riesgo"]
                                print("Estudiante ",i," ID:",iddd,"Nombre:",nombre,"Apellido:","Direccion:",dir,ape,"Acudiente:",acu,"Celular:",cel,"Telefono fijo:",fijo,"Estado:",est,"Riesgo:",ries)
                        if infor==2:
                            rta2="trainers"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            for i in range (len(mostrar[rta2])):
                                iddd=mostrar[rta2][i]["ID"]
                                nombre=mostrar[rta2][i]["Nombre"]
                                ape=mostrar[rta2][i]["Apellido"]
                                rutaa=mostrar[rta2][i]["Ruta"]
                                print("Trainer ",i," ID:", iddd,"Nombre:",nombre,"Apellido:",ape,"Ruta:",rutaa)
                        if infor==3:
                            rta2="coordinador"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            for i in range (len(mostrar[rta2])):
                                iddd=mostrar[rta2][i]["ID"]
                                nombre=mostrar[rta2][i]["Nombre"]
                                print("Coordinador ",i," ID:",iddd,"Nombre:",nombre)
                    elif inf==2:
                        print("De cual perfil quiere editar informacion?")
                        print("1 para camper || 2 para trainers || 3 para coordinadores")
                        infor=int(input(": "))
                        if infor==1:
                            rta2="estudiantes"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            iddd=input("Ingrese el ID del estudiante a editar: ")
                            for i in range (len(mostrar[rta2])):
                                confirmar=mostrar[rta2][i]["ID"]
                                if confirmar==iddd:
                                    nombe=input("Ingrese el nombre: ")
                                    ape=input("Ingrese el apellido: ")
                                    dir=input("Ingrese la direccion: ")
                                    acu=input("Ingrese el nombre del acudiente: ")
                                    cel=input("Ingrese el telefono celular: ")
                                    fijo=input("Ingrese el telefono fijo: ")
                                    estado=input("Ingrese el estado del estudiante: ")
                                    ries=input("Ingrese el riesgo del estudiante: ")
                                    rutaa=input("Ingrese la ruta del estudiante: ")
                                    mostrar[rta2][i]["Nombre"]=nombe
                                    mostrar[rta2][i]["Apellido"]=ape
                                    mostrar[rta2][i]["direccion"]=dir
                                    mostrar[rta2][i]["acudiente"]=acu
                                    mostrar[rta2][i]["celular"]=cel
                                    mostrar[rta2][i]["fijo"]=fijo
                                    mostrar[rta2][i]["estado"]=estado
                                    mostrar[rta2][i]["riesgo"]=ries
                                    mostrar[rta2][i]["Ruta"]=rutaa
                                    guardarJSON(rta2,mostrar)
                        elif infor==2:
                            rta2="trainers"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            iddd=input("Ingrese el ID del trainer a editar: ")
                            for i in range (len(mostrar[rta2])):
                                confirmar=mostrar[rta2][i]["ID"]
                                if confirmar==iddd:
                                    nome=input("Ingrese el nombre: ")
                                    ape=input("Ingrese el apellido: ")
                                    rutaa=input("Ingrese la ruta: ")
                                    mostrar[rta2][i]["Nombre"]=nombe
                                    mostrar[rta2][i]["Apellido"]=ape
                                    mostrar[rta2][i]["Ruta"]=rutaa
                        elif infor==3:
                            rta2="coordinador"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            iddd=input("Ingrese el ID del coordinador a editar: ")
                            for i in range (len(mostrar[rta2])):
                                confirmar=mostrar[rta2][i]["ID"]
                                if confirmar==iddd:
                                    nome=input("Ingrese el nombre: ")
                                    mostrar[rta2][i]["Nombre"]=nome
                    elif inf==3:
                        print("De cual perfil quiere añadir informacion?")
                        print("1 para camper || 2 para trainers || 3 para coordinadores")
                        infor=int(input(": "))
                        if infor==1:
                            rta2="estudiantes"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            nombe=input("Ingrese el nombre: ")
                            ape=input("Ingrese el apellido: ")
                            dir=input("Ingrese la direccion: ")
                            acu=input("Ingrese el nombre del acudiente: ")
                            cel=input("Ingrese el telefono celular: ")
                            fijo=input("Ingrese el telefono fijo: ")
                            estado="Inscrito"
                            ries="Nulo"
                            rutaaa=input("Ingrese la ruta del estudiante (1 Java || 2 NodeJS || 3 .Net) : ")
                            if rutaaa=="1":
                                rutaa="Java"
                            elif rutaaa=="2":
                                rutaa="NodeJS"
                            elif rutaaa=="3":
                                rutaa=".Net"
                            idd=str((len(mostrar[rta2]))+1)
                            mostrar[rta2].append({"ID":idd,"Nombre":nombe,"Apellido":ape,"direccion":dir,"acudiente":acu,"celular":cel,"fijo":fijo,"estado":estado,"riesgo":ries,"ruta":rutaa})
                            guardarJSON(rta2,mostrar)
                        if infor==2:
                            rta2="trainers"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            nombe=input("Ingrese el nombre: ")
                            ape=input("Ingrese el apellido: ")
                            rutaa=input("Ingrese la ruta del docente: ")
                            idd=str(len(mostrar[rta2])+1)
                            mostrar[rta2].append({"ID":idd,"Nombre":nombe,"Apellido":ape,"ruta":rutaa})
                            guardarJSON(rta2,mostrar)
                        if infor==3:
                            rta2="coordinador"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            nombe=input("Ingrese el nombre: ")
                            idd=str(len(mostrar[rta2])+1)
                            mostrar[rta2].append({"ID":idd,"Nombre":nombe})
                            guardarJSON(rta2,mostrar)
                    elif inf==4:
                        verdad=True
                        while verdad:
                            rta2="grupo"
                            mostrar={}
                            mostrar=abrirJSONr(rta2)
                            print("Presione 1 para ver la información || 2 para editar || 3 para añadir || 4 para asignar estudiantes || 5 para salir")
                            infor=int(input(": "))
                            if infor==1:
                                for i in range (len(mostrar[rta2])):
                                    salon=mostrar[rta2][i]["salon"]
                                    trainer=mostrar[rta2][i]["trainer"]
                                    horario=mostrar[rta2][i]["horario"]
                                    rutaa=mostrar[rta2][i]["ruta"]
                                    print("Grupo ",i+1," Salon:",salon,"Trainer:",trainer,"Horario:",horario,"Ruta:",rutaa)
                                    print("Estudiantes: ")
                                    for q in range(len(mostrar[rta2][i]["estudiantes"])):
                                        estu=mostrar[rta2][i]["estudiantes"][q]["Nombre"]
                                        print("Estudiante ",i+1," ",estu)
                            elif infor==2:
                                print("Ingrese el numero del grupo a editar")
                                edit=int(input(": "))
                                edic=edit-1
                                nombe=input("Ingrese el nombre del salón asignado: ")
                                trainer=input("Ingrese el nombre del trainer asigando: ")
                                horario=input("Ingrese el numero del horario asignado: ")
                                rutaa=input("Ingrese el numero de la ruta asignada: ")
                                mostrar[rta2][edic]["salon"]=nombe
                                mostrar[rta2][edic]["trainer"]=trainer
                                mostrar[rta2][edic]["horario"]=horario
                                mostrar[rta2][edic]["ruta"]=rutaa
                                guardarJSON(rta2,mostrar)
                            elif infor==3:
                                rta3="salones"
                                salo={}
                                trai=abrirJSONr("trainers")
                                salo=abrirJSONr(rta3)
                                for i in range(len(salo[rta3])):
                                    a=salo[rta3][i]["Nombre"]
                                    print(i+1," para salon",a)
                                nombe=(int(input())-1)
                                nombre=salo[rta3][nombe]["Nombre"]
                                train=input("Ingrese el id del trainer: ")
                                for i in range(len(trai["trainers"])):
                                    verificar=trai["trainers"][i]["ID"]
                                    if verificar==train:
                                        trainer=trai["trainers"][i]["Nombre"]
                                horario=input("Ingrese el numero del horario: ")
                                rutaaa=input("Ingrese el numero de la ruta: ")
                                if rutaaa=="1":
                                    rutaa="Java"
                                elif rutaaa=="2":
                                    rutaa="NodeJS"
                                elif rutaaa=="3":
                                    rutaa=".Net"
                                estudiantes=[]
                                mostrar[rta2].append({"salon":nombre,"trainer":trainer,"estudiantes":estudiantes,"horario":horario,"ruta":rutaa})
                                guardarJSON(rta2,mostrar)
                            elif infor==4:
                                sal={}
                                sal=abrirJSONr("grupo")
                                camper={}
                                camper=abrirJSONr("estudiantes")
                                ingreso=input("Ingrese el ID del estudiante a añadir")
                                for i in range(len(sal["grupo"])):
                                    for q in range(len(camper["estudiantes"])):
                                        if sal["grupo"][i]["ruta"]==camper["estudiantes"][q]["ruta"]:
                                            if (len(sal["grupo"][i]["estudiantes"]))<=33:
                                                print("Salon ", i+1, " disponible")
                                sa=(int(input("Ingrese numero del grupo")))-1
                                for i in range (len(camper["estudiantes"])):
                                    verificar=camper["estudiantes"][i]["ID"]
                                    if verificar==ingreso:
                                        nombre=camper["estudiantes"][i]["Nombre"]
                                        añadir=sal["grupo"][sa]["estudiantes"]
                                        añadir.append({"Nombre":nombre})
                                guardarJSON("grupo",sal)
                            elif infor==5:
                                verdad=False
                    elif inf==5:
                        rta1="estudiantes"
                        notas={}
                        notas=abrirJSONr(rta1)
                        rta5="notas"
                        asignar=abrirJSONr(rta5)
                        longi=len(asignar[rta5])
                        estu=input("Ingrese el ID del estudiante a calificar: ")
                        calificacion=int(input("Ingrese la calificacion del estudiantes"))
                        for i in range(len(notas[rta1])):
                            iden=notas[rta1][i]["ID"]
                            if iden==estu:
                                if calificacion>60:
                                    notas[rta1][i]["estado"]="aprobado"
                                    asignar[rta5].append({"Nombre":notas[rta1][i]["Nombre"],"ID":iden,"notas":[]})
                                    guardarJSON(rta5,asignar)
                                    asignar=abrirJSONr(rta5)
                                    longi2=len(asignar[rta5])
                                    if notas[rta1][i]["ruta"]=="Java":
                                        asignar[rta5][longi2-1][rta5].append({"0":[{"Nombre":"Intro","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"1":[{"Nombre":"Python","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"2": [{"Nombre":"HTML/CSS","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"3":[{"Nombre":"Scrum","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"4":[{"Nombre":"Git","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"5":[{"Nombre":"JavaScript","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"6":[{"Nombre":"Intro Back","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"7":[{"Nombre":"Intro BBDD","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"8":[{"Nombre":"MySQL","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"9":[{"Nombre":"Java","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"10":[{"Nombre":"PostgreSQL","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"11":[{"Nombre":"Springboot","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                    elif notas[rta1][i]["ruta"]=="NodeJS":
                                        asignar[rta5][longi2-1][rta5].append({"0":[{"Nombre":"Intro","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"1":[{"Nombre":"Python","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"2": [{"Nombre":"HTML/CSS","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"3":[{"Nombre":"Scrum","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"4":[{"Nombre":"Git","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"5":[{"Nombre":"JavaScript","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"6":[{"Nombre":"Intro Back","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"7":[{"Nombre":"Intro BBDD","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"8":[{"Nombre":"MongoDBL","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"9":[{"Nombre":"JavaScript","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"10":[{"Nombre":"MySQL","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"11":[{"Nombre":"Express","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                    elif notas[rta1][i]["ruta"]==".Net":
                                        asignar[rta5][longi2-1][rta5].append({"0":[{"Nombre":"Intro","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"1":[{"Nombre":"Python","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"2":[{"Nombre":"HTML/CSS","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"3":[{"Nombre":"Scrum","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"4":[{"Nombre":"Git","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"5":[{"Nombre":"JavaScript","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"6":[{"Nombre":"Intro Back","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"7":[{"Nombre":"Intro BBDD","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"8":[{"Nombre":"MySQL","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"9":[{"Nombre":"C#","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"10":[{"Nombre":"PostgreSQLL","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                        asignar[rta5][longi2-1][rta5].append({"11":[{"Nombre":".Net Core","Proyecto": 0,"Filtro": 0,"Trabajos": 0,"Resultado":0}]})
                                else: 
                                    notas[rta1][i]["estado"]="no aprobado"
                                    
                                break
                        guardarJSON(rta5,asignar)
                        guardarJSON(rta1,notas)
                    elif inf==6:
                        moduloestu=abrirJSONr("estudiantes")
                        modulotrainer=abrirJSONr("trainers")
                        modulogrupo=abrirJSONr("grupo")
                        print("Estudiantes Incritos: ")
                        for i in range(len(moduloestu["estudiantes"])):
                            if moduloestu["estudiantes"][i]["estado"]=="Inscrito":
                                print(moduloestu["estudiantes"][i]["Nombre"])
                        print("Estudiantes Aprobados: ")
                        for i in range(len(moduloestu["estudiantes"])):
                            if moduloestu["estudiantes"][i]["estado"]=="aprobado":
                                print(moduloestu["estudiantes"][i]["Nombre"])
                        print("Trainers trabajando en Campuslands: ")
                        for i in range(len(modulotrainer["trainers"])):
                            print(modulotrainer["trainers"][i]["Nombre"])
                        print("Campers con rendimiento bajo: ")
                        for i in range(len(moduloestu["estudiantes"])):
                            if moduloestu["estudiantes"][i]["riesgo"]=="alto":
                                print(moduloestu["estudiantes"][i]["Nombre"])
                        print("Campers y Trainer asignados a un salon: ")
                        for i in range(len(modulogrupo["grupo"])):
                            print("Grupo ",i+1)
                            print("Trainer: ", modulogrupo["grupo"][i]["trainer"])
                            print("Estudiantes: ")
                            for q in range(len(modulogrupo["grupo"][i]["estudiantes"])):
                                print(modulogrupo["grupo"][i]["estudiantes"][q]["Nombre"])
                        rta1="notas"
                        notas={}
                        notas=abrirJSONr(rta1)
                        for i in range(len(notas[rta1])):
                            print(notas[rta1][i]["Nombre"])
                            for q in range (12):
                                b=str(q)
                                print(notas[rta1][i][rta1][q][b][0]["Nombre"])
                                c=notas[rta1][i][rta1][q][b][0]["Resultado"]
                                if c<60:
                                    print("No aprobado")
                                elif c>=60:
                                    print("Aprobado")
                            print("")
                    elif inf==7:
                        tru=False
                        lie=False
    elif x==4:  
        f=False 