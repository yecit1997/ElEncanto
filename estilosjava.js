
var confianza, equipo, dialogo, convivencia;

function comenzar(){
    confianza=document.getElementById("confianza");
    confianza.addEventListener("click",Mconfianza,false);

    equipo=document.getElementById("equipo");
    equipo.addEventListener("click",Mequipo,false);

    dialogo=document.getElementById("dialogo");
    dialogo.addEventListener("click",Mdialogo,false);

    convivencia=document.getElementById("convivencia");
    convivencia.addEventListener("click",Mconvivencia,false);

    
}

function Mconfianza(){

    

    window.open("https://yecit1997.github.io/confianza/")

    
}

function Mequipo(){
    window.open("http://127.0.0.1:5500/equipo.html");
}

function Mdialogo(){
    window.open("http://127.0.0.1:5500/dialogo.html")
}

function Mconvivencia(){
    window.open("http://127.0.0.1:5500/convivencia.html")
}

window.onload=comenzar;