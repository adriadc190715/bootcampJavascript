let puntosPartida: number = 0;

type Estado = 
| "SIGUE_JUGANDO"
| "GAME_OVER_TE_HAS_PASADO"
| "WINER_HAS_GANADO";


const muestraPuntuacion = () => {

    const elementoPuntuacion = document.getElementById("puntuacion");
    const textoPuntosTotales = "Puntos totales: ";
    if (elementoPuntuacion){
        elementoPuntuacion.innerHTML= `${textoPuntosTotales} ${puntosPartida}`;
    }else {
     console.error("elementoPuntuacion: No se ha encontrado el id puntuacion");
    }

};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const muestraMensajeComprobacion = (puntosPartida: number, estado:Estado) => {
    let mensaje :string = "";
    switch (estado) {
    case "SIGUE_JUGANDO":
    mensaje = `${puntosPartida} no has llegado, prueba otra vez`;
    break;
    case "GAME_OVER_TE_HAS_PASADO":
    mensaje = `¡GAME OVER! Te pasaste ${puntosPartida} SE ACABO EL JUEGO`;
    break;
    case "WINER_HAS_GANADO":
    mensaje = `El número ${puntosPartida} has acertado `;;
    break;
    default:
    mensaje = "No se que ha pasado, pero no deberías estar aquí";
    break;
    }

    const elementoResultado=document.getElementById("resultado");
     if (elementoResultado){
        elementoResultado.innerHTML = mensaje;
     }else {
        console.error(
            "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
        );

        }

    };


    const gestionarGameover = (estado: Estado) => {
        const btnDameCarta = document.getElementById("btnDameCarta");
        const btnMePlanto = document.getElementById("btnMePlanto");
        const btnNuevaPartida = document.getElementById("btnNuevaPartida");
    
        if (estado === "GAME_OVER_TE_HAS_PASADO" || estado === "WINER_HAS_GANADO" ) {
            if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
                btnDameCarta.disabled = true;
            }
            if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
                btnMePlanto.disabled = true;
            }
            if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
                btnNuevaPartida.classList.remove("hidden");
                btnNuevaPartida.style.display = "inline-block";
            }
        }
    };

function dameCarta() {
    const cartaAleatoria = Math.floor(Math.random() * 11);

    console.log(cartaAleatoria);

    if (cartaAleatoria===0){
        return cartaAleatoria + 1;
    }

    if (cartaAleatoria > 7) {
        return cartaAleatoria + 2;
        
    }
    return cartaAleatoria;
}

function valoresPuntos (carta:number): number {
    const valorCarta : number= 
              carta <=7 ? carta :0.5 ;

              return valorCarta;
    }
   

const mostrarCarta = (carta: number): void => {
    let nombreImagen: string;

    switch (carta) {
        case 1:
            nombreImagen = "copas/1_as-copas.jpg";
            break;
        case 2:
            nombreImagen = "copas/2_dos-copas.jpg";
            break;
        case 3:
            nombreImagen = "copas/3_tres-copas.jpg";
            break;
        case 4:
            nombreImagen = "copas/4_cuatro-copas.jpg";
            break;
        case 5:
            nombreImagen = "copas/5_cinco-copas.jpg";
            break;
        case 6:
            nombreImagen = "copas/6_seis-copas.jpg";
            break;
        case 7:
            nombreImagen = "copas/7_siete-copas.jpg";
            break;
        case 10:
            nombreImagen = "copas/10_sota-copas.jpg";
            break;
        case 11:
            nombreImagen = "copas/11_caballo-copas.jpg";
            break;
        case 12:
            nombreImagen = "copas/12_rey-copas.jpg";
            break;
        default:
           nombreImagen = "back.jpg";
            break;
    }
  

    const imagenCarta = document.getElementById("cartaMostrada");
    if (imagenCarta!== null && imagenCarta instanceof HTMLImageElement) {
        imagenCarta.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/${nombreImagen}`;
    }
};
const comprobarSuma = (suma: number): Estado => {
    if (suma < 7.5) {
        return "SIGUE_JUGANDO";
    } else if (suma === 7.5) {
        return "WINER_HAS_GANADO";
    } else {
        return "GAME_OVER_TE_HAS_PASADO";
    }
};


const btnDameCarta = document.getElementById("btnDameCarta");

function HandleClickDameCarta(){
    const cartaAleatorea= dameCarta();
    const puntuacionDiv = document.getElementById("puntuacion");
   

    if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement){
        puntuacionDiv.textContent = `Carta Obtenida : ${cartaAleatorea}`
        
    }
   
    puntosPartida +=  valoresPuntos(cartaAleatorea);
    muestraPuntuacion();
    mostrarCarta(cartaAleatorea);
    

    const estadoActual = comprobarSuma(puntosPartida);
    muestraMensajeComprobacion(puntosPartida, estadoActual);
    gestionarGameover(estadoActual);
    
}

if(btnDameCarta!==null && btnDameCarta instanceof HTMLButtonElement){
    btnDameCarta.addEventListener("click",HandleClickDameCarta);
}

const btnMePlanto = document.getElementById("btnMePlanto");


if(btnMePlanto!==null && btnMePlanto instanceof HTMLButtonElement){
    btnMePlanto.addEventListener("click",HandleClickMePlanto);

}



const mePlanto = (suma: number): string => {
    if (suma < 4) {
        return "Has sido muy conservador";
    } else if (suma >= 4 && suma < 6) {
        return "Te ha entrado el canguelo eh?";
    } else if (suma >= 6 && suma < 7.5) {
        return "Casi, casi.....";
    } else if (suma === 7.5) {
        return "Lo has clavado, Enhorabuena!";
    } else {
        return "Algo ha ido mal al plantarte";
    }
};


function HandleClickMePlanto() {
    const estadoActual = comprobarSuma(puntosPartida);

    const mensaje = mePlanto(puntosPartida); 
    muestraMensajeComprobacion(puntosPartida, estadoActual);
    gestionarGameover(estadoActual);

    const puntuacionDiv = document.getElementById("resultado");
    if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement) {
        puntuacionDiv.textContent = `Te has plantado con ${puntosPartida}. ${mensaje}`; // Aquí mostramos el mensaje junto con la puntuación
    }

    const elementobtnDamecarta = document.getElementById("btnDameCarta");
    if (elementobtnDamecarta !== null && elementobtnDamecarta instanceof HTMLButtonElement) {
        elementobtnDamecarta.disabled = true;
    } else {
        console.error("HandleClickMePlanto: No se ha encontrado el elemento con id btnDameCarta");
    }

    const btnNuevaPartida = document.getElementById("btnNuevaPartida");
    if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
        btnNuevaPartida.classList.remove("hidden");
        btnNuevaPartida.style.display = "inline-block";
    
    
    }
}

const btnNuevaPartida = document.getElementById("btnNuevaPartida");
if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", () => {
        puntosPartida = 0;
        muestraPuntuacion();
        mostrarCarta(0);
        const elementoResultado = document.getElementById("resultado");
        if (elementoResultado) {
            elementoResultado.innerHTML = "";
        }
        const btnDameCarta = document.getElementById("btnDameCarta");
        if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
            btnDameCarta.disabled = false;
        }
        const btnMePlanto = document.getElementById("btnMePlanto");
        if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
            btnMePlanto.disabled = false;
        }
        btnNuevaPartida.style.display = "none";
    });
}
