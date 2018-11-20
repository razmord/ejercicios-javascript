var menu=document.querySelector("div.menu");
var main=document.querySelector("div.main");
var velo=document.querySelector("div.velo-principal");
var boton=document.querySelector("div.boton");
var texto=document.querySelector("div.boton > p");
var icono=document.querySelector("div.boton > i");
var escalas=document.querySelectorAll("div.menu > div");
var abierto=false;
boton.addEventListener('click', abreMenu,false);

function abreMenu(){
    if(abierto==false){
        boton.style.transform= "scaleY(0)"
        setTimeout(function(){
        menu.style.right="0";
        main.style.left="-300px";
        setTimeout(ponVelo, 500);
        },200);
        abierto=true;
    }
    else{
        for ( i = 0; i < escalas.length; i++ ) {
            escalas[i].style.transform= "scaleY(0)";
          }
        boton.style.transform= "scaleY(0)";
        setTimeout(function(){ menu.style.right="-400px";
        main.style.left="0";
        velo.style.display="none";
        setTimeout(aparecerBoton, 500);
        abierto=false;},300);
    }
}

function ponVelo(){
    velo.style.display="block";
    texto.innerHTML="Cerrar";
    icono.className="fas fa-arrow-alt-circle-left";
    for ( i = 0; i < escalas.length; i++ ) {
        escalas[i].style.transform= "scaleY(1)";
      }
    boton.style.transform= "scaleY(1)"
}

function aparecerBoton(){
    texto.innerHTML="Menú";
    icono.className="fas fa-arrow-alt-circle-right";
    boton.style.transform= "scaleY(1)"
}




/* setTimeout();*/