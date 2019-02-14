window.onload = function() {

    // DIV mapa para colocar mapa
    const mapa = document.querySelector(".mapa");
    // Manejador de evento mapa
    document.querySelector('#btnAccion').addEventListener('click', loadCafeterias);

    // Cargar Cafeterias. Declaración de objetos AJAX
    function loadCafeterias() {
        // Variables
        let cadenaHTML = "";
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'bares-cafes.json', true);

        xhr.send();

        let contenedorMapa = mapa;
        if (contenedorMapa.style.height == "300px") {
            contenedorMapa.style.height = "0";
            return;
        } else {
            contenedorMapa.style.height = "300px";
        }

        xhr.onload = function() {
            if (this.status == 200) {
                console.log("Datos obtenidos:..." + this.responseText);
                let cafes = JSON.parse(this.responseText);
                for (let i in cafes['directorios']['directorio']){
                    console.log(cafes['directorios']['directorio'][i]['identificador']);
                }
                /*
                for (let alumno in alumnos.directorios.directorio) {
                    // Construimos un string template con formato HTML
                    cadenaHTML = `
                    <div class="alumno">
                        <div class="detalle-alumno">
                        <div class="info">
                            <h4>${alumnos.directorios.directorio[alumno].identificador} ${alumnos.directorios.directorio[alumno].nombre}</h4>
                            <span class="accion-mapa" data-id="${alumnos.directorios.directorio[alumno].identificador}" data-coord="${alumnos.directorios.directorio[alumno].localizacion}"><i class="fas fa-map"></i></span>
                            <div class="wrapper">
                                <div class="info-alumno">
                                    <span><b>Email:</b>  ${alumnos.directorios.directorio[alumno].url}</span>
                                    <span><b>Dirección:</b>  ${alumnos.directorios.directorio[alumno].direccion}</span>
                                </div>
                            </div>
                        </div>
                        </div>      
                        <div class="mapa" id="mapa${alumnos.directorios.directorio[alumno].identificador}"></div>
                        
                    </div>
                    
                    `;
                    //Se añade contenido a la página para encontrarlo en DOM
                    infoAlumnos.innerHTML += cadenaHTML;
                }*/
            }

            //Creación mapa ante acción del usuario en accion-mapa. Atributos -data-id y -data-coord

          function crearMapa() {

                // Obtenemos id y coordenadas desde atributos
                var dataid = $(this).attr("data-id");
                var datacoord = $(this).attr("data-coord");

                // Establecemos alto de contenedor para el mapa
                let contenedorMapa = mapa;
                if (contenedorMapa.style.height == "300px") {
                    contenedorMapa.style.height = "0";
                    return;
                } else {
                    contenedorMapa.style.height = "300px";
                }
                // Separamos valores de localizacion
                var coord = datacoord.split(" ");
                var latitud = parseFloat(coord[0]);
                var longitud = parseFloat(coord[1]);

                // Creamos objeto localización para el mapa
                var localizacion = { lat: latitud, lng: longitud };

                /** Google Maps **/
                /** ================================ **/
                // Creamos el mapa y lo asignamos al div mapaid
                // let map = new google.maps.Map(document.getElementById(mapaid), {
                //     zoom: 18,
                //     center: localizacion
                // });
                // var marker = new google.maps.Marker({
                //     position: localizacion,
                //     map: map
                // });

                /** Bing Maps **/
                /** ================================ **/
               /* let map = new Microsoft.Maps.Map(document.getElementById(mapaid), {
                    credentials: 'YourKey',
                    center: new Microsoft.Maps.Location(latitud, longitud),
                    mapTypeId: Microsoft.Maps.MapTypeId.street,
                    zoom: 16
                });

                var center = map.getCenter();

                //Create Pushpin personalizado
                var pin = new Microsoft.Maps.Pushpin(center, {
                    title: "",
                    subTitle: "",
                    text: dataid,
                    color: "green"
                });

                // //Add the pushpin to the map
                // map.entities.push(pin);
                */
                /** Leaflet  Maps **/
                /** ================================ **/

                let mymap = L.map(mapaid).setView([latitud, longitud], 18);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 25,
                     attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(mymap);
                 L.marker([latitud, longitud]).addTo(mymap)
                     .bindPopup("<b>Hola a todos!</b><br />Esta es mi dirección.").openPopup();

                /** MapBox  Maps **/
                /** ================================ **/

                // mapboxgl.accessToken = 'YourToken';
                // var map = new mapboxgl.Map({
                //     container: mapaid,
                //     center: [longitud, latitud],
                //     zoom: 16,
                //     style: 'mapbox://styles/mapbox/navigation-guidance-day-v2',
                //     // style: 'mapbox://styles/mapbox/light-v9',
                //     pitch: 45,
                // });

                /*===============================================*/
                // The 'building' layer in the mapbox-streets vector source contains building-height
                // data from OpenStreetMap.
                // map.on('load', function() {
                //     // Insert the layer beneath any symbol layer.
                //     var layers = map.getStyle().layers;

                //     var labelLayerId;
                //     for (var i = 0; i < layers.length; i++) {
                //         if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                //             labelLayerId = layers[i].id;
                //             break;
                //         }
                //     }

                //     map.addLayer({
                //         'id': '3d-buildings',
                //         'source': 'composite',
                //         'source-layer': 'building',
                //         'filter': ['==', 'extrude', 'true'],
                //         'type': 'fill-extrusion',
                //         'minzoom': 15,
                //         'paint': {
                //             'fill-extrusion-color': '#aaa',

                //             // use an 'interpolate' expression to add a smooth transition effect to the
                //             // buildings as the user zooms in
                //             'fill-extrusion-height': [
                //                 "interpolate", ["linear"],
                //                 ["zoom"],
                //                 15, 0,
                //                 15.05, ["get", "height"]
                //             ],
                //             'fill-extrusion-base': [
                //                 "interpolate", ["linear"],
                //                 ["zoom"],
                //                 15, 0,
                //                 15.05, ["get", "min_height"]
                //             ],
                //             'fill-extrusion-opacity': .6
                //         }
                //     }, labelLayerId);
                // });
                /*===============================================*/

            }
        }

    }
}