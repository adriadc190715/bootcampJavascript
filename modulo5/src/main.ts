let puntosPartida: number = 0;


type Estado = "SIGUE_JUGANDO" | "GAME_OVER_TE_HAS_PASADO" | "WINER_HAS_GANADO";

const textMensajeComprobacion = (puntosPartida: number, estado: Estado): string => {
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
     elementoPuntuacion.innerHTML = `${textoPuntosTotales} ${puntosPartida}`}
     else{
      console.error("elementoPuntuacion: No se ha encontrado el id puntuacion");
     }
};




document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const actualizarPuntuacion = (puntos: number) => {
  const puntuacionDiv = document.getElementById("puntuacion");
  if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement) {
    puntuacionDiv.textContent = `Carta Obtenida: ${puntos}`;
  }
};

const comprobarEstadoPartida = (puntosTotales: number): Estado => {
  if (puntosTotales < 7.5) {
    return "SIGUE_JUGANDO";
  } else if (puntosTotales === 7.5) {
    return "WINER_HAS_GANADO";
  } else {
    return "GAME_OVER_TE_HAS_PASADO";
  }
};

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

function generarNumeroRandom():number {
  return Math.floor(Math.random() * 11);
}

function dameCarta(numeroRandom: number) : number {
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

const mostrarCarta = (carta: number): void => {
  const imagenCarta = document.getElementById("cartaMostrada");
  if (imagenCarta !== null && imagenCarta instanceof HTMLImageElement) {
    const urlCarta = obtenerURLCarta(carta);
    imagenCarta.src = urlCarta;
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

const HandleClickDameCarta = () => {
  const numeroRandom = generarNumeroRandom();
  const cartaAleatoria = dameCarta(numeroRandom);
  const puntosCarta = valoresPuntos(cartaAleatoria);
  puntosPartida += puntosCarta;
  muestraPuntuacion();
  mostrarCarta(cartaAleatoria);
  const estadoActual = comprobarEstadoPartida(puntosPartida);
  muestraMensajeComprobacion(puntosPartida, estadoActual);
  gestionarPartida(estadoActual);
};

const btnDameCarta = document.getElementById("btnDameCarta");
if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", HandleClickDameCarta);
};

const HandleClickMePlanto = () => {
  const estadoActual = comprobarSuma(puntosPartida);
  muestraMensajeComprobacion(puntosPartida, estadoActual);
  gestionarPartida(estadoActual);
  habilitarBotones(false, false, true, true);
  
};

const btnMePlanto = document.getElementById("btnMePlanto");
if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
  btnMePlanto.addEventListener("click", HandleClickMePlanto);
}
const actualizarElementoResultado = () =>{
  const elementoResultado = document.getElementById("resultado");
if (elementoResultado) {
  elementoResultado.innerHTML = "";
}

}

const HandleClicknuevaPartida = () =>{
  puntosPartida = 0;
  muestraPuntuacion();
  mostrarCarta(0);
  actualizarElementoResultado();
  habilitarBotones(true, true, false,false);
};

const btnNuevaPartida = document.getElementById("btnNuevaPartida");
if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
  btnNuevaPartida.addEventListener("click", HandleClicknuevaPartida)
};

 
const siguienteCarta = () => {
    const cartaAleatoria = generarNumeroRandom();
    const puntosCarta = valoresPuntos(cartaAleatoria);
    
    puntosPartida += puntosCarta;
    mostrarCarta(cartaAleatoria);
    muestraPuntuacion();

    const estadoActual = comprobarEstadoPartida(puntosPartida);

    muestraMensajeComprobacion(puntosPartida, estadoActual);
    habilitarBotones(false, false, true,false);
  };
  
  const btnsiguienteCarta = document.getElementById("btnsiguienteCarta");
  if (btnsiguienteCarta !== null && btnsiguienteCarta instanceof HTMLButtonElement) {
    btnsiguienteCarta.addEventListener("click", () => {
      siguienteCarta();
    });

  };
  
