var body=document.querySelector("body");
var container=document.createElement("div");
container.className="container";
body.appendChild(container);
var caja=document.createElement("div");
caja.className="caja";
container.appendChild(caja);
var elementos=new Array(6);
function pulsado(){
    this.innerHTML=parseInt(this.innerHTML)+1;
}
for(var i=0; i<elementos.length;i++){
    elementos[i]=document.createElement("div");
    caja.appendChild(elementos[i]);
    elementos[i].innerHTML=i+1;
    elementos[i].addEventListener('click',pulsado,false);
}
