import {Estado,partida} from './modelo'
import {habilitarBotones,muestraMensajeComprobacion,muestraPuntuacion,mostrarCarta,
actualizarElementoResultado} from './ui';

export const textMensajeComprobacion = (puntosPartida: number, estado: Estado): string => {
    switch (estado) {
      case "SIGUE_JUGANDO":
        return `${puntosPartida} no has llegado, prueba otra vez`;
      case "GAME_OVER_TE_HAS_PASADO":
        return `¡GAME OVER! Te pasaste ${puntosPartida} SE ACABO EL JUEGO.`;
      case "WINER_HAS_GANADO":
        return `El número ${puntosPartida} has acertado`;
      default:
        return "No se qué ha pasado, pero no deberías estar aquí";
    }
  };

  export const comprobarEstadoPartida = (puntosTotales: number): Estado => {
    if (puntosTotales < 7.5) {
      return "SIGUE_JUGANDO";
    } else if (puntosTotales === 7.5) {
      return "WINER_HAS_GANADO";
    } else {
      return "GAME_OVER_TE_HAS_PASADO";
    }
  };

  export const gestionarPartida = (estado: Estado) => {
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

  export function generarNumeroRandom():number {
    return Math.floor(Math.random() * 11);
  }
  
 export function dameCarta(numeroRandom: number) : number {
    let  cartaAleatoria = numeroRandom;
  
    console.log(cartaAleatoria);
  
    if (cartaAleatoria === 0) {
      return cartaAleatoria + 1;
    }
  
    if (cartaAleatoria > 7) {
      return cartaAleatoria + 2;
    }
    return cartaAleatoria;
  }

  
 export function valoresPuntos(carta: number): number {
    const valorCarta: number = carta <= 7 ? carta : 0.5;
  
    return valorCarta;
  }
  
 export const obtenerURLCarta = (carta: number): string => {
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

  export const comprobarSuma = (suma: number): Estado => {
    if (suma < 7.5) {
      return "SIGUE_JUGANDO";
    } else if (suma === 7.5) {
      return "WINER_HAS_GANADO";
    } else {
      return "GAME_OVER_TE_HAS_PASADO";
    }
  };
  
  export const mePlanto = (suma: number): string => {
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

  export const HandleClickDameCarta = () => {
    const numeroRandom = generarNumeroRandom();
    const cartaAleatoria = dameCarta(numeroRandom);
    const puntosCarta = valoresPuntos(cartaAleatoria);
    
  
    partida.puntosPartida += puntosCarta;
    muestraPuntuacion();
    mostrarCarta(cartaAleatoria);
    const estadoActual = comprobarEstadoPartida(partida.puntosPartida);
    muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
    gestionarPartida(estadoActual);
  };

  export const HandleClickMePlanto = () => {
    const estadoActual = comprobarSuma(partida.puntosPartida);
    muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
    gestionarPartida(estadoActual);
    habilitarBotones(false, false, true, true);
    
  };

  export const HandleClicknuevaPartida = () =>{
    partida.puntosPartida = 0;
    muestraPuntuacion();
    mostrarCarta(0);
    actualizarElementoResultado();
    habilitarBotones(true, true, false,false);
  };

  export const siguienteCarta = () => {
    const cartaAleatoria = generarNumeroRandom();
    const puntosCarta = valoresPuntos(cartaAleatoria);
    
    partida.puntosPartida += puntosCarta;
    mostrarCarta(cartaAleatoria);
    muestraPuntuacion();

    const estadoActual = comprobarEstadoPartida(partida.puntosPartida);

    muestraMensajeComprobacion(partida.puntosPartida, estadoActual);
    habilitarBotones(false, false, true,false);
  };