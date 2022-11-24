let bola, posXinicial, posYinicial, direccionX, direccionY, velocidadX, velocidadY, radio;
let posXpalaIzq, posYpalaIzq, posXpalaDer, posYpalaDer, velocidadP;
let tocadoD = 0, tocadoI = 0;
let palaIzq, palaDer;
let svg;
let tecla = 0;


window.onload = () =>{  
    palaIzq = document.getElementById("palaIzq");
    palaDer = document.getElementById("palaDer");
    svg = document.getElementById("svg");
    bola = document.getElementById("bola");
    posXinicial = 400;
    posYinicial = 200;
    posXpalaIzq= 20;
    posYpalaIzq = 100;
    posXpalaDer = 780;
    posYpalaDer = 100;
    velocidadP = 10;
    direccionX = 1;
    direccionY = 1;
    velocidadX = 4;
    velocidadY = 2;
    radio = bola.getAttribute("r");

    tocadoI = document.getElementById("tocadoI");
    tocadoD = document.getElementById("tocadoD");
    
    setInterval(dibujaEscenario,10);

    window.addEventListener("keydown", (event) => {

        if(event.key == "w"){
            tecla = 1;
        }    
        if(event.key == "s"){
                tecla = 2;
        }
        
        if(event.key == "ArrowUp"){
            tecla = 3;
        }
        if(event.key == "ArrowDown"){
            tecla = 4;
        }
    });
    window.addEventListener("keyup", () => {
        tecla = 0;
    });
    setTimeout(bucleTecla, 10);
}

function bucleTecla() {
    if(tecla == 1 && posYpalaIzq > 0){
        posYpalaIzq -= velocidadP;
        palaIzq.setAttribute("y",posYpalaIzq);
    }

   if(tecla == 2 && posYpalaIzq < 330){
        posYpalaIzq += velocidadP;
        palaIzq.setAttribute("y", posYpalaIzq);
    }
    if(tecla == 3 && posYpalaDer > 0){
        posYpalaDer -= velocidadP;
        palaDer.setAttribute("y", posYpalaDer);
    }
    if(tecla == 4 && posYpalaDer < 330){
        posYpalaDer += velocidadP;
        palaDer.setAttribute("y", posYpalaDer);
    }
     
    setTimeout(bucleTecla, 10);
}  


function tocado(lado){
    let num;

    if(lado == "izq")
    {
        num = parseInt(tocadoI.textContent);
        num++;
        tocadoI.textContent = num;
        posXinicial = 400;
        posYinicial = 200;
    }
    if(lado == "der")
    {
        num = parseInt(tocadoD.textContent);
        num++;
        tocadoD.textContent = num;
        posXinicial = 400;
        posYinicial = 200;
    }
}




function dibujaEscenario()
{
    let cY = posYinicial - 2.5;

   if(posXinicial < (0 + radio) || posXinicial > (800 - radio)){
        direccionX *= -1;
        if(posXinicial < (0 + radio))
            tocado("izq");
        if(posXinicial > (800 - radio))
            tocado("der");
   }
    
    if(posYinicial < (0 + radio) || posYinicial > (400 - radio)){
        direccionY *= -1;
    }

    if(posXinicial <= posXpalaIzq && (cY >= posYpalaIzq && cY <= (posYpalaIzq + 70)))
        direccionX *= -1;
    if(posXinicial >= posXpalaDer && (cY >= posYpalaDer && cY <= (posYpalaDer + 70)))
        direccionX *= -1;

    posXinicial += direccionX * velocidadX;
    bola.setAttribute("cx", posXinicial);

    posYinicial += direccionY * velocidadY;
    bola.setAttribute("cy", posYinicial);
}



