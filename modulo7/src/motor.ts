import {Estado,partida} from './modelo'


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

  
 function valoresPuntos(carta: number): number {
    const valorCarta: number = carta <= 7 ? carta : 0.5;
  
    return valorCarta;
  }

  export const sumarPuntosPartida = (carta: number): void => {
    const puntosCarta = valoresPuntos(carta);
    partida.puntosPartida += puntosCarta;
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

  