window.onload = function(){
    var numClicks=0;
    var numFichas=3;
    var numFilas=3;
    var colorc="azul";
    var contenedor=document.createElement("div");
    document.body.appendChild(contenedor);
    contenedor.style.width="700px";
    contenedor.style.height="700px";
    contenedor.classList.add("contenedor");
    var blanco= document.querySelector("#blanco");
    var negro= document.querySelector("#negro")
    var naranja= document.querySelector("#naranja")
    var purpura= document.querySelector("#purpura")

    
    document.querySelector("#iniciar").addEventListener("click",iniciarJuego,false);
    blanco.addEventListener("click",seleccionaColor,false);
    naranja.addEventListener("click",seleccionaColor,false);
    negro.addEventListener("click",seleccionaColor,false);
    purpura.addEventListener("click",seleccionaColor,false);

    function iniciarJuego(){
        numClicks=0;
        while(contenedor.children.length>0){
            contenedor.removeChild(contenedor.lastChild);
        }
        numFilas=parseInt(document.querySelector("#filas").value);
        numFichas=parseInt(document.querySelector("#fichas").value);
        if(!(numFilas>0&&numFilas<20)){
            numFilas=0;
        }
        if(!(numFichas>0&&numFichas<20)){
            numFichas=0;
        }
        for(let index = 1;index <= numFilas;index++){
            let miFila = document.createElement("div");
            miFila.style.display="table-row";
            contenedor.appendChild(miFila);
            for(let a = 1;a <= numFichas;a++){
                let miFicha = document.createElement("div");
                miFicha.classList.add("ficha");
                miFicha.innerText="+"
                miFila.appendChild(miFicha);
                miFicha.addEventListener("click",pulsaFicha,false);
            }
        }
    }

    function pulsaFicha(){
        if(colorc!="rgb(233, 196, 142)")
            this.innerHTML="&nbsp;";
        else{
            this.innerText="+";
        }
        this.style.backgroundColor=colorc;
    }
    function seleccionaColor(){
        switch(this.id){
            case "blanco": colorc="white";resetColor();this.style.boxShadow="inset -5px -5px 5px rgba(100, 100, 100, 0.459)"; break;
            case "negro": colorc="black";resetColor();this.style.boxShadow="inset 4px 3px 5px rgba(224, 220, 200, 0.459)"; break;
            case "naranja": colorc="rgb(233, 196, 142)";resetColor();this.style.boxShadow="inset -5px -5px 5px rgba(100, 100, 100, 0.459)"; break;
            case "purpura": colorc="rebeccapurple";resetColor();this.style.boxShadow="inset 4px 3px 5px rgba(204, 200, 200, 0.459)"; break;
        }
    }
    function resetColor(){
        verde.style.boxShadow="";
        rojo.style.boxShadow="";
        naranja.style.boxShadow="";
        purpura.style.boxShadow="";
    }
}