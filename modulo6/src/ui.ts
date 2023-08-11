import {Estado,partida} from './modelo';
import {textMensajeComprobacion,comprobarEstadoPartida,gestionarPartida,dameCarta,valoresPuntos,obtenerURLCarta,comprobarSuma,mePlanto} from './motor';

export const muestraMensajeComprobacion = (puntosPartida: number, estado: Estado) => {
    const mensajeCompleto: string = textMensajeComprobacion(puntosPartida, estado);
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
      elementoResultado.innerHTML = mensajeCompleto;
    } else {
      console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado");
    }
  };

export const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    const textoPuntosTotales = "Puntos totales: ";
    if (elementoPuntuacion) {
      elementoPuntuacion.innerHTML = `${textoPuntosTotales} ${partida.puntosPartida}`;
    } else {
      console.error("elementoPuntuacion: No se ha encontrado el id puntuacion");
    }
  };

 export  const actualizarPuntuacion = (puntos: number) => {
    const puntuacionDiv = document.getElementById("puntuacion");
    if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement) {
      puntuacionDiv.textContent = `Carta Obtenida: ${puntos}`;
    }
  };

  export const habilitarBotones = (dameCarta: boolean, mePlanto: boolean, nuevaPartida: boolean, siguienteCarta : boolean) => {
    const btnDameCarta = document.getElementById("btnDameCarta");
    const btnMePlanto = document.getElementById("btnMePlanto");
    const btnNuevaPartida = document.getElementById("btnNuevaPartida");
    const btnsiguienteCarta = document.getElementById("btnsiguienteCarta");
    
  
    if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
      btnDameCarta.disabled = !dameCarta;
    }
    if (btnMePlanto !== null && btnMePlanto !== undefined &&  btnMePlanto instanceof HTMLButtonElement) {
      btnMePlanto.disabled = !mePlanto;
    }
    if (btnNuevaPartida !== null &&  btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
      btnNuevaPartida.classList.remove("hidden");
      btnNuevaPartida.style.display = nuevaPartida ? "inline-block" : "none";
    }
    if (btnsiguienteCarta !== null && btnsiguienteCarta !== undefined && btnsiguienteCarta instanceof HTMLButtonElement) {
      btnsiguienteCarta.classList.remove("hidden");
      btnsiguienteCarta.style.display = siguienteCarta ? "inline-block" : "none";
    }
  
  };

  
export const mostrarCarta = (carta: number): void => {
    const imagenCarta = document.getElementById("cartaMostrada");
    if (imagenCarta !== null && imagenCarta instanceof HTMLImageElement) {
      const urlCarta = obtenerURLCarta(carta);
      imagenCarta.src = urlCarta;
    }
  };

  
export const HandleClickDameCarta = () => {
    const cartaAleatoria = dameCarta();
    const puntosCarta = valoresPuntos(cartaAleatoria);
  
    actualizarPuntuacion(cartaAleatoria);
  
    partida.puntosPartida += puntosCarta;
    muestraPuntuacion();
    mostrarCarta(cartaAleatoria);
  
    const estadoActual = comprobarEstadoPartida(partida.puntosPartida);
    muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
    gestionarPartida(estadoActual);
  };

 export  const HandleClickMePlanto = () => {
    const estadoActual = comprobarSuma(partida.puntosPartida);
    const mensaje = mePlanto(partida.puntosPartida);
    muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
    gestionarPartida(estadoActual);
  
    const puntuacionDiv = document.getElementById("resultado");
    if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement) {
      puntuacionDiv.textContent = `Te has plantado con ${partida.puntosPartida}. ${mensaje}`;
    }
  
    habilitarBotones(false, false, true, true);
    if (estadoActual === "GAME_OVER_TE_HAS_PASADO") {
      const btnVerResultado = document.getElementById("btnVerResultado");
      if (btnVerResultado !== null && btnVerResultado instanceof HTMLButtonElement) {
        btnVerResultado.classList.remove("hidden");
        btnVerResultado.style.display = "inline-block";
      }
    }
  };

 export  const HandleClicknuevaPartida = () =>{
    partida.puntosPartida = 0;
    muestraPuntuacion();
    mostrarCarta(0);
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
      elementoResultado.innerHTML = "";
    }
    habilitarBotones(true, true, false,false);}
  
  const btnNuevaPartida = document.getElementById("btnNuevaPartida");
  if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", HandleClicknuevaPartida)
  }
  
   export const iniciarPartida = () =>{

    partida.puntosPartida=0,
    muestraPuntuacion();
    obtenerURLCarta(0);

   }