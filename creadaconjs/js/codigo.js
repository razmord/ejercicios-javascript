var body=document.querySelector("body");
var nav=document.createElement("nav");
body.appendChild(nav);
var div1=document.createElement("div");
nav.appendChild(div1);
var lista=document.createElement("ul");
div1.appendChild(lista);
var elelista=new Array(3);
for(var i=0; i<elelista.length;i++){
    elelista[i]=document.createElement("li");
    lista.appendChild(elelista[i]);
    switch(i){
        case 0: elelista[i].innerHTML="UNO"; elelista[i].className="UNO"; break;
        case 1: elelista[i].innerHTML="DOS"; elelista[i].className="DOS";break;
        case 2: elelista[i].innerHTML="TRES"; elelista[i].className="TRES";break;
    }
}