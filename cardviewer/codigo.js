window.onload = function(){
    document.getElementById('button1').addEventListener('click', loadLuna);
    document.getElementById('button2').addEventListener('click', loadRitual);
    /*Esta funcion carga las cartas del arquetipo Lunalight*/ 
    function loadLuna() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'luna.json', true);

        xhr.onload = function() {
            if (this.status == 200) {
                console.log("Datos obtenidos:..." + this.responseText);
                var cards = JSON.parse(this.responseText);
                console.log("Datos obtenidos despues del PARSE:..." + cards);

                var output = '<ul>';
                /*Se crea un boton para cada carta */
                for (var i in cards) {
                    output += 
                    '<li><button class="carta" value="'+i+'">' + cards[i].name + '</button></li>'
                        ;/*Se pasa el id y el json del que proviene en cada carta */
                }
                output +='</ul>';

                document.getElementById('decklist').innerHTML = output;
                /*Se añade un EventListener a cada carta para poder mostralas luego*/
                var elementsArray = document.querySelectorAll('button.carta');

                elementsArray.forEach(function(elem) {
                    elem.addEventListener('click',  function(){
                        loadCard("luna.json",elem.getAttribute('value'));
                    });
                });

            }
        }

        xhr.send();
    }
     /*Esta funcion carga las cartas del arquetipo Ritual*/ 
    function loadRitual() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'ritual.json', true);

        xhr.onload = function() {
            if (this.status == 200) {
                console.log("Datos obtenidos:..." + this.responseText);
                var cards = JSON.parse(this.responseText);
                console.log("Datos obtenidos despues del PARSE:..." + cards);

                var output = '<ul>';
                /*Se crea un boton para cada carta */
                for (var i in cards) {
                    output += 
                        '<li><button class="carta" value="'+i+'">' + cards[i].name + '</button></li>'
                        ;/*Se pasa el id y el json del que proviene en cada carta */
                }
                output +='</ul>';

                document.getElementById('decklist').innerHTML = output;
                /*Se añade un EventListener a cada carta para poder mostralas luego*/
                var elementsArray = document.querySelectorAll('button.carta');
                elementsArray.forEach(function(elem) {
                    elem.addEventListener('click', function(){
                        loadCard("ritual.json",elem.getAttribute('value'));
                    });
                    console.log("Añadiendo addEventListener");
                });
            }
        }

        xhr.send();
    }
/*Esta funcion carga las cartas individuales*/ 
function loadCard(archivo,posicion) {
    console.log("Cargando carta desde "+archivo);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', archivo, true);

    xhr.onload = function() {
        if (this.status == 200) {
            console.log("Datos de la carta obtenidos:..." + this.responseText);
            var cards = JSON.parse(this.responseText);
            console.log("Datos de la carta obtenidos despues del PARSE:..." + cards);
            document.getElementById('name').innerHTML = cards[posicion].name+'<span id="symbol"><img src="IMG/'+cards[posicion].element+'.svg"></span>';
            var output = '';
                /*Se crea un boton para cada carta */
                for (var i in cards[posicion].lrt) {
                    output += 
                        '<span class="stars"><img src="IMG/CG_Star.svg"></span>'
                        ;/*Se añade una estrella por nivel*/
                }
                /*Añadir datos a la carta*/
            document.getElementById('lrt').innerHTML=output;
            document.getElementById('pic').style.backgroundImage = "url('"+cards[posicion].img+"')";
            document.querySelector('div#description>h2').innerHTML = "["+cards[posicion].type+"/"+cards[posicion].kind+"]";
            document.querySelector('div#description>p').innerHTML = ""+cards[posicion].effect;
            document.querySelector('div#stats').innerHTML = "ATK "+cards[posicion].ATK+"/ DEF "+cards[posicion].DEF;
            if("fusion".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "#7b64b2";
            }else if("synchro".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "#d7dbe4";
            }else if("xyz".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "#25282f";
            }else if("ritual".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "#4278a7";
            }else if("normal".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "bf9b4d";
            }else if("link".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "#0077bb";
            }else if("effect".localeCompare(cards[posicion].kind)==0){
                document.getElementById('card').style.background = "#BF8737";
            }else{
                document.getElementById('card').style.background = "#767683";
            }
        }
    }
    xhr.send();
}
};