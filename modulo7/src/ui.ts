import {textMensajeComprobacion,generarNumeroRandom,comprobarEstadoPartida,comprobarSuma,dameCarta,sumarPuntosPartida} from './motor';
import {Estado,partida} from './modelo';

export const iniciarPartida = () =>{

    partida.puntosPartida=0,
    muestraPuntuacion();
    obtenerURLCarta(0);

   }


const habilitarBotones = (dameCarta: boolean, mePlanto: boolean, nuevaPartida: boolean, siguienteCarta : boolean) => {
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

  const muestraMensajeComprobacion = (puntosPartida: number, estado: Estado) => {
    const mensajeCompleto: string = textMensajeComprobacion(puntosPartida, estado);
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado !== null && elementoResultado instanceof HTMLElement) {
         elementoResultado.innerHTML= mensajeCompleto;}
         else {
          console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado");
         }
    };

    const muestraPuntuacion = () => {
        const elementoPuntuacion = document.getElementById("puntuacion");
        const textoPuntosTotales = "Puntos totales: ";
        if (elementoPuntuacion !== null && elementoPuntuacion instanceof HTMLElement) {
           elementoPuntuacion.innerHTML = `${textoPuntosTotales} ${partida.puntosPartida}`}
           else{
            console.error("elementoPuntuacion: No se ha encontrado el id puntuacion");
           }
      };

    

      const mostrarCarta = (carta: number): void => {
        const imagenCarta = document.getElementById("cartaMostrada");
        if (imagenCarta !== null && imagenCarta instanceof HTMLImageElement) {
          const urlCarta = obtenerURLCarta(carta);
          imagenCarta.src = urlCarta;
        }
      };

     const actualizarElementoResultado = () =>{
      const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.innerHTML = "";
      }
      }

    const gestionarPartida = (estado: Estado) => {
        if (estado === "GAME_OVER_TE_HAS_PASADO" )
          habilitarBotones(false, false, true, false);
        else if(estado === "WINER_HAS_GANADO") {
          habilitarBotones(false, false, true, false);
        } else if (estado === "SIGUE_JUGANDO") {
          habilitarBotones(true, true, false, false);
        } else {
           console.error("Algo ha fallado");
        }
      };
      
      

       
   const obtenerURLCarta = (carta: number): string => {
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

   return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/${nombreImagen}`;
 };
   

      export const handleClickDameCarta = () => {
        const numeroRandom = generarNumeroRandom();
        const cartaAleatoria = dameCarta(numeroRandom);
        sumarPuntosPartida(cartaAleatoria);
        muestraPuntuacion();
        mostrarCarta(cartaAleatoria);
        const estadoActual = comprobarEstadoPartida(partida.puntosPartida);
        muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
        gestionarPartida(estadoActual);
      };
    
      export const handleClickMePlanto = () => {
        const estadoActual = comprobarSuma(partida.puntosPartida);
        muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
        gestionarPartida(estadoActual);
        habilitarBotones(false, false, true, true);
        
      };
    
      export const handleClicknuevaPartida = () =>{
        partida.puntosPartida = 0;
        muestraPuntuacion();
        mostrarCarta(0);
        actualizarElementoResultado();
        habilitarBotones(true, true, false,false);
      };
    
      export const siguienteCarta = () => {
        const cartaAleatoria = generarNumeroRandom();
        sumarPuntosPartida(cartaAleatoria);
        muestraPuntuacion();
        mostrarCarta(cartaAleatoria);
        const estadoActual = comprobarEstadoPartida(partida.puntosPartida);
        muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
        habilitarBotones(false, false, true,false);
      };