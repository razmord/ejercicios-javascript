var botones=document.querySelectorAll("div.botones > button");
var radio=document.querySelectorAll("input.r");
var texto=document.getElementById("text");
var aplicar=document.getElementById("apl");
var derecha=document.getElementById("derecha");
var izquierda=document.getElementById("izquierda");
var opcionA;
var opcionB;
var creadoD=document.createElement("p");
var creadoI=document.createElement("p");
var aux;
derecha.appendChild(creadoD);
izquierda.appendChild(creadoI);
aplicar.addEventListener('click', aplica, false);
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', boton, false);
}

function boton(){
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("pulsado");
    }
    this.classList.add("pulsado");
    opcionA=this.innerText;
}

function aplica(){
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            opcionB=radio[i].value;
        }
    }
    
    switch(opcionB){
    case "derecha": derecha.removeChild(creadoD); switch(opcionA){
        case "Parrafo": creadoD=document.createElement("p"); creadoD.appendChild(document.createTextNode(texto.value)); derecha.appendChild(creadoD); break;
        case "Imagen": creadoD=document.createElement("img"); creadoD.setAttribute("src", "imagenes/beast_hunter_draven.PNG"); derecha.appendChild(creadoD); break;
        case "Lista": creadoD=document.createElement("ul"); for(var i = 0;i<9;i++){aux=document.createElement("li"); aux.appendChild(document.createTextNode(i));creadoD.appendChild(aux);} derecha.appendChild(creadoD);  break;
        case "Enlace": creadoD=document.createElement("a"); creadoD.setAttribute("href", "imagenes/beast_hunter_draven.PNG"); creadoD.appendChild(document.createTextNode(texto.value)); derecha.appendChild(creadoD); break;
        case "Animacion": creadoD=document.createElement("div"); creadoD.setAttribute("class","pantalla"); aux=document.createElement("div");aux.setAttribute("id","lute"); creadoD.appendChild(aux);aux=document.createElement("div");aux.setAttribute("id","lynn"); creadoD.appendChild(aux);derecha.appendChild(creadoD); break;
        default:break;
    }break;
    case "izquierda": izquierda.removeChild(creadoI); switch(opcionA){
        case "Parrafo": creadoI=document.createElement("p"); creadoI.appendChild(document.createTextNode(texto.value)); izquierda.appendChild(creadoI); break;
        case "Imagen": creadoI=document.createElement("img"); creadoI.setAttribute("src", "imagenes/beast_hunter_draven.PNG"); izquierda.appendChild(creadoI); break;
        case "Lista": creadoI=document.createElement("ul"); for(var i = 0;i<9;i++){aux=document.createElement("li"); aux.appendChild(document.createTextNode(i));creadoI.appendChild(aux);} izquierda.appendChild(creadoI);  break;
        case "Enlace": creadoI=document.createElement("a"); creadoI.setAttribute("href", "imagenes/beast_hunter_draven.PNG"); creadoI.appendChild(document.createTextNode(texto.value)); izquierda.appendChild(creadoI); break;
        case "Animacion": creadoI=document.createElement("div"); creadoI.setAttribute("class","pantalla"); aux=document.createElement("div");aux.setAttribute("id","lute"); creadoI.appendChild(aux);aux=document.createElement("div");aux.setAttribute("id","lynn"); creadoI.appendChild(aux);izquierda.appendChild(creadoI); break;
        default:break;
    }break;

    }

}