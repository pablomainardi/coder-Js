
// BOTONES DE NAVEGACION ENTRE PORTADA/ETAPA1/ETAPA2 **  
let carta1  = {};
let carta2  = {};
let carta3  = {};
let carta4  = {};
let carta5  = {};
let carta6  = {};
reseteo();

const btnIrEtapa1 = document.getElementById("btn-portada-inicio");
const btnIrPortada = document.getElementById("btnaportada");
const btnIrEtapa2 = document.getElementById("irbatalla");
const btnVolverInicio = document.getElementById("volverinicio");
// FONDO PARA LA PORTADA **
const portada = document.getElementById("container-box");
// FONDO ETAPA 1 **
const etapa1 = document.getElementById("flex-1");
// FONDO ETAPA 2 **
const etapa2 = document.getElementById("flex-2");
//

const sonidoSeleccion = new Audio("../../games/cardjsbattle/sound2.wav");
const sonidoEtapas = new Audio("../../games/cardjsbattle/sound5.wav");
const sonidoPerdiste = new Audio("../../games/cardjsbattle/sound3.wav");
const sonidoGanaste = new Audio("../../games/cardjsbattle/sound.wav");
const sonidoRandom = new Audio("../../games/cardjsbattle/sound4.wav");

let miVidaTotal = document.querySelector("#miVidTotal");
let vidaTotalRival = document.querySelector("#vidTotalRival");

// SALTANDO ENTRE PORTADA/ETAPA1/ETAPA2 ****
// IR A ETAPA UNO - BTN INICIAR **
function irEtapa1() {
    btnIrEtapa1.style.display = "none";
    etapa1.style.display = "flex";

};

btnIrEtapa1.addEventListener("click", () => {
    irEtapa1();

    miCartaPresentacion();
    mostrarNombres();
    sonidoEtapas.play();
});
// VOLVER A PORTADA - BTN VOLVER A PORTADA **
function irPortada() {
    etapa1.style.display = "none";
    etapa2.style.display = "none";
    btnIrEtapa1.style.display = "flex";
}

btnIrPortada.addEventListener("click", () => {
    irPortada();
    sonidoEtapas.play();
});

// IR A ETAPA 2 - BTN IR A BATALLA **
function irEtapa2() {
    etapa1.style.display = "none";
    etapa2.style.display = "flex";
    btnIrEtapa1.style.display = "none";
    //miVidaTotal.innerHTML = miCarta.vida;
    //vidaTotalRival.innerHTML = cartaRival.vida;
    cartasElegida();
    misHabilidadesVivo(miCarta);

};

btnIrEtapa2.addEventListener("click", () => {
    
    miCartaPresentacion();
    irEtapa2();
    sonidoEtapas.play();
    
    
});


// VOLVER A INICIO - BTN VOLVERINICIO **
function volverInicio() {
    reseteo();
    etapa2.style.display = "none";
    etapa1.style.display = "flex";



}

btnVolverInicio.addEventListener("click", () => {
    volverInicio();
    sonidoEtapas.play();
});



// CREACION DE OBJETOS - CARTAS ********

//defensa();



function reseteo() {
    class Monstruos {
        constructor(nombre, vida, ataque, velocidad, defensa, clase, img) {
            this.nombre = nombre;
            this.vida = vida;
            this.ataque = ataque;
            this.velocidad = velocidad;
            this.defensa = defensa;
            this.clase = clase;
            this.img = img
        }
    
    
    };

    carta1 = new Monstruos("Enrique", 100, 50, 60, 40, "Ataque", '<img width="120px" src="./cardjsbattle/carta1.jpg" alt="imagen carta 1">');
     carta2 = new Monstruos("Lidia", 80, 70, 70, 50, "Defensa", '<img width="120px" src="./cardjsbattle/carta2.jpg" alt="imagen carta 2">');
     carta3 = new Monstruos("Mario", 120, 40, 50, 60, "Defensa", '<img width="120px" src="./cardjsbattle/carta3.jpg" alt="imagen carta 3">');
     carta4 = new Monstruos("Eusevio", 90, 60, 40, 50, "Ataque", '<img width="120px" src="./cardjsbattle/carta4.jpg" alt="imagen carta 4">');
     carta5 = new Monstruos("Marcela", 110, 70, 60, 70, "Defensa", '<img width="120px" src="./cardjsbattle/carta5.jpg" alt="imagen carta 5">');
     carta6 = new Monstruos("Monica", 70, 80, 50, 50, "Ataque", '<img width="120px" src="./cardjsbattle/carta6.jpg" alt="imagen carta 6">');
 

}
const mazo = [carta1, carta2, carta3, carta4, carta5, carta6];

//ETAPA 1 -- ** ELECCION DE CARTA******** */

const imgCarta1 = document.querySelector("#f1-i1-img1");
const imgCarta2 = document.querySelector("#f1-i1-img2");
const imgCarta3 = document.querySelector("#f1-i1-img3");
const imgCarta4 = document.querySelector("#f1-i1-img4");
const imgCarta5 = document.querySelector("#f1-i1-img5");
const imgCarta6 = document.querySelector("#f1-i1-img6");

const imgCartas = [imgCarta1, imgCarta2, imgCarta3, imgCarta4, imgCarta5, imgCarta6];


function mostrarNombres() {
    for (nombre of mazo) {
        console.log(nombre)
    }
}

// ETAPA 1 -- SELECCIONAR CARTA Y MOSTRAR HABILIDADES



function miCartaPresentacion() {
    let miCarta = Object.assign({}, carta1);
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta1.img;
    document.querySelector("#nombrecarta").innerHTML = carta1.nombre;

    mostrarHab(miCarta);

}

function mostrarHab(i) {
    document.querySelector("#skillVida").innerHTML = "VIDA............." + i.vida;
    document.querySelector("#skillAtaque").innerHTML = "ATAQUE..........." + i.ataque;
    document.querySelector("#skillVelocidad").innerHTML = "VELOCIDAD......." + i.velocidad;
    document.querySelector("#skillDefensa").innerHTML = "DEFENSA........." + i.defensa;
    document.querySelector("#skillClase").innerHTML = "CLASE........." + i.clase;
}





// VER COMO ACTIVAR OTRA VEZ BLUR CUANDO CLICKEA OTRA CARTA

imgCarta1.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta1.img;
    document.querySelector("#nombrecarta").innerHTML = carta1.nombre;
    miCarta = carta1;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta2.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta2.img;
    document.querySelector("#nombrecarta").innerHTML = carta2.nombre;
    miCarta = carta2;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta3.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta3.img;
    document.querySelector("#nombrecarta").innerHTML = carta3.nombre;
    miCarta = carta3;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta4.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta4.img;
    document.querySelector("#nombrecarta").innerHTML = carta4.nombre;
    miCarta = carta4;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta5.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta5.img;
    document.querySelector("#nombrecarta").innerHTML = carta5.nombre;
    miCarta = carta5;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta6.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta6.img;
    document.querySelector("#nombrecarta").innerHTML = carta6.nombre;
    miCarta = carta6;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})



// ETAPA 2 ********************************************

/*local vs visitante roundi/mg */

const divLocal = document.querySelector("#f2-i5-col1");
const divRival = document.querySelector("#f2-i5-col3");





// mi carta exhibida
function cartasElegida() {
    divLocal.innerHTML = miCarta.img;
    divLocal.innerHTML += miCarta.nombre;
    miVidaTotal.innerHTML = miCarta.vida

}

//

let indiceRandom = undefined;


function indiceCrearRandom() {

    indiceRandom = Math.floor((Math.random() * 6));
    cartaRival = Object.assign({},mazo[indiceRandom]);

}

// seleccionando carta rival
function randomRivalSel() {
    reseteo();
    sonidoRandom.play();
    indiceCrearRandom();
    divRival.innerHTML = cartaRival.img;
    divRival.innerHTML += cartaRival.nombre;
    habilidadesVivoRival(cartaRival);
    vidaTotalRival.innerHTML = cartaRival.vida;
    iniciarBatalla.addEventListener("click", batallaIniciada);

}

divRival.addEventListener("click", () => {

    randomRivalSel();
    console.log(cartaRival);

});



const cambiarRival = document.querySelector("#cambiarRival");
cambiarRival.addEventListener("click", randomRivalSel);

/*******PREPARAR BATALLA********/
// ***** miCarta ***** cartaRival ******
//let suCarta = Object.assign({}, cartaRival);

const btnAta1 = document.querySelector("#btn-ata-1");
const btnAta2 = document.querySelector("#btn-ata-2");
const btnAta3 = document.querySelector("#btn-ata-3");

const btnDef1 = document.querySelector("#btn-def-1");
const btnDef2 = document.querySelector("#btn-def-2");
const btnDef3 = document.querySelector("#btn-def-3");



const miAtaqueTotal = document.querySelector("#miAtaTotal");
const miDefensaTotal = document.querySelector("#miDefTotal");

// ATAQUE TOTAL Y DEFENSA TOTAL, DE LA ELECCION
let miAtaque = null;
let miDefensa = null;

let ataqueRival = null;
let defensaRival = null;

//mostrar Habilidades en vivo
function misHabilidadesVivo(i) {
    document.querySelector("#miSkillVida").innerHTML = "VIDA_______" + i.vida;
    document.querySelector("#miSkillAtaque").innerHTML = "ATAQUE_______" + i.ataque;
    document.querySelector("#miSkillVelocidad").innerHTML = "VELOCIDAD____" + i.velocidad;
    document.querySelector("#miSkillDefensa").innerHTML = "DEFENSA______" + i.defensa;
    document.querySelector("#miSkillClase").innerHTML = "CLASE________" + i.clase;
}

function habilidadesVivoRival(i) {
    document.querySelector("#rivalSkillVida").innerHTML = "VIDA_______" + i.vida;
    document.querySelector("#rivalSkillAtaque").innerHTML = "ATAQUE_______" + i.ataque;
    document.querySelector("#rivalSkillVelocidad").innerHTML = "VELOCIDAD____" + i.velocidad;
    document.querySelector("#rivalSkillDefensa").innerHTML = "DEFENSA______" + i.defensa;
    document.querySelector("#rivalSkillClase").innerHTML = "CLASE________" + i.clase;
}



// rivalDefRes = undefined;
// rivalAtaRes = undefined;

let indiceRandomRival = undefined;

function indiceRandomRivalSel() {

    indiceRandomRival = Math.floor((Math.random() * 6) + 1);

}


function randomAtaqueRival() {

    indiceRandomRivalSel();

    switch (indiceRandomRival) {
        case 1:
            ataque1(cartaRival);
            break;
        case 2:
            ataque2(cartaRival);
            break;
        case 3:
            ataque3(cartaRival);
            break;
        case 4:
            defensa1(cartaRival);
            break;
        case 5:
            defensa2(cartaRival);
            break;
        case 6:
            defensa3(cartaRival);
            break;
    }
    console.log(indiceRandomRival);
    console.log(ataqueRival + "...Ataque Rival");
    console.log(defensaRival + "...Defensa Rival");
    document.querySelector("#ataTotalRival").innerHTML = ataqueRival;
    document.querySelector("#defTotalRival").innerHTML = defensaRival;
}


//randomDefensaRival();

function ataque1(paraQuien) {
    if (paraQuien === miCarta) {
        miAtaque = (paraQuien.ataque + paraQuien.velocidad);
        miDefensa = paraQuien.defensa;
    } else{
        ataqueRival = (paraQuien.ataque + paraQuien.velocidad);
        defensaRival = paraQuien.defensa;
    }
}

function ataque2(paraQuien) {
    if (paraQuien === miCarta) {
        miAtaque = (paraQuien.ataque + (paraQuien.velocidad / 2));
        miDefensa = (paraQuien.defensa + (paraQuien.velocidad / 2));
    } else{
        ataqueRival = (paraQuien.ataque + (paraQuien.velocidad / 2));
        defensaRival = (paraQuien.defensa + (paraQuien.velocidad / 2));
    }
}

function ataque3(paraQuien) {

    if (paraQuien === miCarta) {
        miAtaque = (paraQuien.ataque + paraQuien.velocidad + (paraQuien.defensa / 2));
        miDefensa = paraQuien.defensa / 2;
    } else{
        ataqueRival = (paraQuien.ataque + paraQuien.velocidad + (paraQuien.defensa / 2));
        defensaRival = paraQuien.defensa / 2;
    }
}

function defensa1(paraQuien) {
    if (paraQuien === miCarta) {
        miDefensa = paraQuien.defensa + paraQuien.velocidad;
        miAtaque = paraQuien.ataque;
    } else{
        defensaRival = paraQuien.defensa + paraQuien.velocidad;
        ataqueRival = paraQuien.ataque;
    }
}

function defensa2(paraQuien) {
    if (paraQuien === miCarta) {
        miDefensa = (paraQuien.defensa + (paraQuien.velocidad / 2));
        miAtaque = (paraQuien.ataque + (paraQuien.velocidad / 2));
    } else{
        defensaRival = (paraQuien.defensa + (paraQuien.velocidad / 2));
        ataqueRival = (paraQuien.ataque + (paraQuien.velocidad / 2));
    }
}

function defensa3(paraQuien) {
    if (paraQuien === miCarta) {
        miDefensa = (paraQuien.defensa + paraQuien.velocidad + (paraQuien.ataque / 2));
        miAtaque = paraQuien.ataque / 2;
    } else{
        defensaRival = (paraQuien.defensa + paraQuien.velocidad + (paraQuien.ataque / 2));
        ataqueRival = paraQuien.ataque / 2;
    }
}

//ATAQUE SELECCION **
btnAta1.addEventListener("click", () => {
    btnAta1.classList.add("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    ataque1(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;

})

btnAta2.addEventListener("click", () => {
    btnAta2.classList.add("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    ataque2(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;

})

btnAta3.addEventListener("click", () => {
    btnAta3.classList.add("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    ataque3(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;

})

//DEFENSA SELECCION **

btnDef1.addEventListener("click", () => {
    btnDef1.classList.add("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    defensa1(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;


})

btnDef2.addEventListener("click", () => {
    btnDef2.classList.add("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    defensa2(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

btnDef3.addEventListener("click", () => {
    btnDef3.classList.add("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    defensa3(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;

})

// APARTIR DE ACA *****************************
// COMANZAR / INICIAR BATALLA


const iniciarBatalla = document.querySelector("#iniciarbatalla");


/// veeeeeeeeeeeeeeeeeeeeeeer





const midRight = document.querySelector("#right-mid");
const midLeft = document.querySelector("#left-mid");
const midRight2 = document.querySelector("#right-mid-2");
const midLeft2 = document.querySelector("#left-mid-2");
//let miAtaRes;
//let miDefRes;

function batallaIniciada() {
 //   miAtaRes = 0;
  //  miDefRes = 0;
 //   rivalAtaRes = 0;
  //  rivalDefRes = 0;
    
    resultado();
}





function resultado() {
 //   miAtaRes = miAtaque - defensaRival;//poner ataque total rival
 //   miDefRes = miDefensa - ataqueRival;
   // rivalAtaRes = ataqueRival - miDefensa;
 //   rivalDefRes = defensaRival - miAtaque;
 let boxRival = document.querySelector("#f2-i6-col3");
 let boxLocal = document.querySelector("#f2-i6-col1");
 randomAtaqueRival();
    if ((miCarta.vida < 0) || (cartaRival.vida < 0)) {
        
        iniciarBatalla.removeEventListener("click", batallaIniciada);
      
        iniciarBatalla.style.width = "150px";
        if (miCarta.vida > cartaRival.vida){
            iniciarBatalla.innerHTML = "- GANASTE -"
            iniciarBatalla.style.backgroundColor = "green";
        }else{
            iniciarBatalla.innerHTML = "- PERDISTE -"
            iniciarBatalla.style.backgroundColor = "red";
        }


    } else {
       
        if (miAtaque > defensaRival) {
            vidaDescAta = miAtaque - defensaRival;
            cartaRival.vida -= vidaDescAta;
            midLeft.innerHTML = "ATAQUE EXITOSO, TE QUITE " + vidaDescAta + " PUNTOS DE VIDA";
        } else {
            vidaDescAta = defensaRival - miAtaque;
            miCarta.vida -= vidaDescAta;
            midLeft2.innerHTML = "ATAQUE DEFECTUOSO, ME QUITASTE " + vidaDescAta + " PUNTOS DE VIDA";
        }

        if (miDefensa > ataqueRival) {
            vidaDescDef = miDefensa - ataqueRival;
            cartaRival.vida -= vidaDescDef;
            midRight.innerHTML = "Defensa exitosa, te quite " + miDefensa + " PUNTOS DE VIDA";

        } else {
            vidaDescDef = ataqueRival - miCarta.vida;
            miCarta.vida -= vidaDescDef;
            midRight2.innerHTML = "Defensa defectuosa, me quitaste " + miDefensa + " PUNTOS DE VIDA";

        }
    }

    vidaTotalRival.innerHTML = cartaRival.vida;
    miVidaTotal.innerHTML = miCarta.vida;
    //  document.querySelector("#mivida") = "Mi Vida = " + miCarta.vida;
    // document.querySelector("#vidarival") = "Vida Rival = " + cartaRival.vida;
}

