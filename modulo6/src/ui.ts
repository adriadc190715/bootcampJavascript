import {textMensajeComprobacion,obtenerURLCarta} from './motor';
import {Estado,partida} from './modelo';

export const iniciarPartida = () =>{

    partida.puntosPartida=0,
    muestraPuntuacion();
    obtenerURLCarta(0);

   }


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

  export const muestraMensajeComprobacion = (puntosPartida: number, estado: Estado) => {
    const mensajeCompleto: string = textMensajeComprobacion(puntosPartida, estado);
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado !== null && elementoResultado instanceof HTMLElement) {
         elementoResultado.innerHTML= mensajeCompleto;}
         else {
          console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado");
         }
    };

    export const muestraPuntuacion = () => {
        const elementoPuntuacion = document.getElementById("puntuacion");
        const textoPuntosTotales = "Puntos totales: ";
        if (elementoPuntuacion !== null && elementoPuntuacion instanceof HTMLElement) {
           elementoPuntuacion.innerHTML = `${textoPuntosTotales} ${partida.puntosPartida}`}
           else{
            console.error("elementoPuntuacion: No se ha encontrado el id puntuacion");
           }
      };

      export const actualizarPuntuacion = (puntos: number) => {
        const puntuacionDiv = document.getElementById("puntuacion");
        if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement) {
          puntuacionDiv.textContent = `Carta Obtenida: ${puntos}`;
        }
      };

      export const mostrarCarta = (carta: number): void => {
        const imagenCarta = document.getElementById("cartaMostrada");
        if (imagenCarta !== null && imagenCarta instanceof HTMLImageElement) {
          const urlCarta = obtenerURLCarta(carta);
          imagenCarta.src = urlCarta;
        }
      };

      export const actualizarElementoResultado = () =>{
        const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.innerHTML = "";
      }
      
      }