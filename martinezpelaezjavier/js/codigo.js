//Inicializamos variables
var colorc="";
var numFilas=2;
//Creo el elemento contenedor y lo añado al documento
var contenedor=document.createElement("div");
document.body.appendChild(contenedor);
contenedor.style.width="700px";
contenedor.style.height="700px";
contenedor.classList.add("contenedor");
//Guardo como variables los divs para seleccionar color
var rojo= document.querySelector("#rojo");
var amarillo= document.querySelector("#amarillo");
var verde= document.querySelector("#verde");
var azul= document.querySelector("#azul");
//Añado EventListener a los botones del menu
document.querySelector("#iniciar").addEventListener("click",iniciarJuego,false);
rojo.addEventListener("click",seleccionaColor,false);
azul.addEventListener("click",seleccionaColor,false);
verde.addEventListener("click",seleccionaColor,false);
amarillo.addEventListener("click",seleccionaColor,false);

//Creo la funcion para iniciar el juego;
function iniciarJuego(){
    //Eliminamos el contenido del contenedor
    while(contenedor.children.length>0){
        contenedor.removeChild(contenedor.lastChild);
    }
    //Extraemos el numero de filas
    numFilas=parseInt(document.querySelector("#filas").value);
    if(!(numFilas>1&&numFilas<7)){
        numFilas=0;
    }
    //Mediante un bucle llenamos el contenedor de filas y fichas
    for(let index = 1;index <= 6;index++){
        let miFila = document.createElement("div");
        miFila.style.display="table-row";
        contenedor.appendChild(miFila);
        for(let a = 1;a <=6;a++){
            let miFicha = document.createElement("div");
            miFicha.classList.add("ficha");
            //Tenemos que añadir aqui background color y no en el css, para que la comparación en pulsaFicha funcione correctamente
            miFicha.style.backgroundColor="white";
            //Con este if, hacemos que las fichas sobrantes no se vean, pero ocupen espacio para evitar descuadres
            if(a>index||index>numFilas)
                miFicha.style.visibility="hidden";
            miFila.appendChild(miFicha);
            //Añadimos EventListener para pulsar las fichas
            miFicha.addEventListener("click",pulsaFicha,false);
        }
    }
}

//Creo la funcion que maneja el pulsado de una ficha
function pulsaFicha(){
    //Si se intenta aplicar el mismo color que tiene la ficha, esta desaparece
    if(this.style.backgroundColor==colorc)
        this.style.visibility="hidden";
    //En caso contrario, pintamos la ficha del nuevo color
    else{
        this.style.backgroundColor=colorc;
    }
}

//Creo la funcion para seleccionar el color
function seleccionaColor(){
    //Hacemos un switch segun la id del div pulsado
    switch(this.id){
        //Cada caso guarda en una variable el color, quita las sombras de seleccion de los otros divs mediante resetColor y añade una sombra de seleccion al div apropiado
        case "rojo": colorc="red";resetColor();this.style.boxShadow="inset -5px -5px 5px rgba(100, 100, 100, 0.459)"; break;
        case "verde": colorc="green";resetColor();this.style.boxShadow="inset 4px 3px 5px rgba(224, 220, 200, 0.459)"; break;
        case "amarillo": colorc="yellow";resetColor();this.style.boxShadow="inset -5px -5px 5px rgba(100, 100, 100, 0.459)"; break;
        case "azul": colorc="blue";resetColor();this.style.boxShadow="inset 4px 3px 5px rgba(224, 220, 220, 0.459)"; break;
    }
}
//Creo la funcion para eliminar las sombras de cada div
function resetColor(){
    rojo.style.boxShadow="";
    amarillo.style.boxShadow="";
    verde.style.boxShadow="";
    azul.style.boxShadow="";
}