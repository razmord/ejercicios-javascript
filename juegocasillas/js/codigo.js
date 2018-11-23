window.onload = function(){
    var numClicks=0;
    var numFichas=3;
    var numFilas=3;
    var contenedor=document.createElement("div");
    document.body.appendChild(contenedor);
    contenedor.style.width="500px";
    contenedor.style.height="500px";
    contenedor.classList.add("contenedor");
    
    document.querySelector("#iniciar").addEventListener("click",iniciarJuego,false);

    function iniciarJuego(){
        numClicks=0;
        while(contenedor.children.length>0){
            contenedor.removeChild(contenedor.lastChild);
        }
        numFilas=parseInt(document.querySelector("#filas").value);
        numFichas=parseInt(document.querySelector("#fichas").value);
        if(!(numFilas>0&&numFilas<12)){
            numFilas=0;
        }
        if(!(numFichas>0&&numFichas<12)){
            numFichas=0;
        }
        for(let index = 1;index <= numFilas;index++){
            let miFila = document.createElement("div");
            miFila.style.display="table-row";
            contenedor.appendChild(miFila);
            for(let a = 1;a <= numFichas;a++){
                let miFicha = document.createElement("div");
                miFicha.classList.add("ficha");
                miFicha.innerHTML="&nbsp;";
                miFila.appendChild(miFicha);
                miFicha.addEventListener("click",pulsaFicha,false);
            }
        }
    }

    function pulsaFicha(){
        numClicks++
        this.innerText=numClicks;
    }
}