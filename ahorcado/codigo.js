var texto=document.getElementById("text"); //Selecciona el cuadro de texto
var aplicar=document.getElementById("apl"); //Selecciona el boton de aplicar
var reiniciar=document.getElementById("new"); //Selecciona el boton de reiniciar
var letrero=document.getElementById("letrero");
var c=document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var palabra=document.createElement("p");
var letras=document.createElement("p");
var ganar=document.createElement("p");
var solucion;
letrero.appendChild(palabra);
letrero.appendChild(letras);
letrero.appendChild(ganar);
aplicar.addEventListener('click', aplica, false);
reiniciar.addEventListener('click', reinicia, false);
reinicia();
function aplica(){
    var letra=texto.value[0];
    texto.value='';
    letra.toUpperCase();
    if(solucion.includes(letra)){
       var output = palabra.innerText;
       for (var i =0; i<solucion.length;i++) {
        console.log(solucion[i]+"-"+letra);
        console.log(solucion[i].toString().localeCompare(letra.toString()))
        if(!solucion[i].toString().localeCompare(letra.toString())){
            output=output.replaceAt(i*2,letra);
        }
        console.log(output);
        palabra.innerText = output;
    }
    }else if(!letras.innerText.includes(letra)){
        
        letras.appendChild(document.createTextNode(letra+' '));
        dibuja();
    }
    if(!palabra.innerText.includes("_")){
        ganar=document.createElement("p");
        ganar.appendChild(document.createTextNode("¡Has ganado!"));
        letrero.appendChild(ganar);
    }
    if(vida>=7){
        ganar=document.createElement("p");
        ganar.appendChild(document.createTextNode("¡Has perdido!"));
        letrero.appendChild(ganar);
    }

}
function reinicia(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'palabras.json', true);
   
    xhr.onload = function() {
        if (this.status == 200) {
            console.log("Datos obtenidos:..." + this.responseText);
            var respuesta = JSON.parse(this.responseText);
            console.log("Datos obtenidos despues del PARSE:..." + respuesta);
            letrero.removeChild(palabra);
            letrero.removeChild(letras);
            letrero.removeChild(ganar);
            palabra=document.createElement("p"); 
            letras=document.createElement("p"); 
            var n=Math.floor(Math.random()*10);
            solucion=respuesta[n].word;
            var hint=respuesta[n].hints;
            vida=0;
            dibuja();
            var output = '';
            var rand=[-1];
            for(var i=0; i<hint;i++){
                var x=Math.floor(Math.random()*(respuesta[n].word.length))
                if(!rand.includes(x))
                    rand[i]=x;
                else i--;
                console.log(i+": "+rand[i]);
            }
                
            /*Se crea la palabra con espacios */
            for (var i =0; i<respuesta[n].word.length;i++) {
                console.log(i+": "+rand.includes(i));
                if(rand.includes(i)){
                    output += respuesta[n].word[i]+' ' ;
                    hint--;
                }
                else output += '_ ';
            }
            palabra.appendChild(document.createTextNode(output));
            letrero.appendChild(palabra); 
            letrero.appendChild(letras);
        }
    }

    xhr.send();
    
   
    
}
function dibuja(){
    switch(vida){
    case 0:
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.moveTo(32, 339);
    ctx.lineTo(232, 339);
    ctx.stroke(); break;
    case 1:
    ctx.moveTo(82, 339);
    ctx.lineTo(82, 39);
    ctx.stroke();break;
    case 2:
    ctx.moveTo(82, 39);
    ctx.lineTo(170, 39);
    ctx.stroke();
    ctx.moveTo(170, 39);
    ctx.lineTo(170, 100);
    ctx.stroke();break;
    case 3:
    ctx.beginPath();
    ctx.arc(170, 120, 20, 0, 2 * Math.PI);
    ctx.stroke();
    break;
    case 4:
    ctx.moveTo(170, 140);
    ctx.lineTo(170, 180);
    ctx.stroke();
    break;
    case 5:
    ctx.moveTo(170, 140);
    ctx.lineTo(150, 160);
    ctx.stroke();
    ctx.moveTo(170, 140);
    ctx.lineTo(190, 160);
    ctx.stroke();break;
    case 6:
    ctx.moveTo(170, 180);
    ctx.lineTo(150, 200);
    ctx.stroke();
    ctx.moveTo(170, 180);
    ctx.lineTo(190, 200);
    ctx.stroke();
    break;
    }
    vida++;
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}