var menu=document.querySelector("div.menu");
var main=document.querySelector("div.main");
var velo=document.querySelector("div.velo-principal");
var boton=document.querySelector("div.boton");
var texto=document.querySelector("div.boton > p");
var icono=document.querySelector("div.boton > i");
var abierto=false;
boton.addEventListener('click', abreMenu,false);

function abreMenu(){
    if(abierto==false){
        menu.style.right="0";
        main.style.left="-300px";
        abierto=true;
    }
    else{
        menu.style.right="-400px";
        main.style.left="0";
        abierto=false;
    }
}







/* setTimeout();*/