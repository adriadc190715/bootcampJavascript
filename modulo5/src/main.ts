let puntosPartida: number = 0;
let siguienteCarta: number | null = null;

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
  if (elementoResultado) {
    elementoResultado.innerHTML = mensajeCompleto;
  } else {
    console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado");
  }
};

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  const textoPuntosTotales = "Puntos totales: ";
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `${textoPuntosTotales} ${puntosPartida}`;
  } else {
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

const gestionarGameover = (estado: Estado) => {
  if (estado === "GAME_OVER_TE_HAS_PASADO") {
    habilitarBotones(false, false, true);
    const btnVerResultado = document.getElementById("btnVerResultado");
    if (btnVerResultado !== null && btnVerResultado instanceof HTMLButtonElement) {
      btnVerResultado.classList.remove("hidden");
      btnVerResultado.style.display = "inline-block";
    }
  }
};

const habilitarBotones = (dameCarta: boolean, mePlanto: boolean, nuevaPartida: boolean) => {
  const btnDameCarta = document.getElementById("btnDameCarta");
  const btnMePlanto = document.getElementById("btnMePlanto");
  const btnNuevaPartida = document.getElementById("btnNuevaPartida");
  const btnVerSiguienteCarta = document.getElementById("btnVerSiguienteCarta");
  const btnVerResultado = document.getElementById("btnVerResultado");

  if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = !dameCarta;
  }
  if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = !mePlanto;
  }
  if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.classList.remove("hidden");
    btnNuevaPartida.style.display = nuevaPartida ? "inline-block" : "none";
  }
  if (btnVerSiguienteCarta !== null && btnVerSiguienteCarta instanceof HTMLButtonElement) {
    btnVerSiguienteCarta.classList.remove("hidden");
    btnVerSiguienteCarta.style.display = nuevaPartida ? "inline-block" : "none";
  }
  if (btnVerResultado !== null && btnVerResultado instanceof HTMLButtonElement) {
    btnVerResultado.classList.add("hidden");
  }
};

function dameCarta() {
  const cartaAleatoria = Math.floor(Math.random() * 11);

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
  const cartaAleatoria = dameCarta();
  siguienteCarta = cartaAleatoria;
  const puntosCarta = valoresPuntos(cartaAleatoria);

  actualizarPuntuacion(cartaAleatoria);

  puntosPartida += puntosCarta;
  muestraPuntuacion();
  mostrarCarta(cartaAleatoria);

  const estadoActual = comprobarEstadoPartida(puntosPartida);
  muestraMensajeComprobacion(puntosPartida, estadoActual);
  gestionarGameover(estadoActual);
};

const btnDameCarta = document.getElementById("btnDameCarta");
if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", HandleClickDameCarta);
}

const HandleClickMePlanto = () => {
  if (siguienteCarta !== null) {
    const mensajeConSiguienteCarta = `La siguiente carta hubiera sido: ${siguienteCarta}`;
    alert(mensajeConSiguienteCarta);
  }

  const estadoActual = comprobarSuma(puntosPartida);
  const mensaje = mePlanto(puntosPartida);
  muestraMensajeComprobacion(puntosPartida, estadoActual);
  gestionarGameover(estadoActual);

  const puntuacionDiv = document.getElementById("resultado");
  if (puntuacionDiv !== null && puntuacionDiv instanceof HTMLElement) {
    puntuacionDiv.textContent = `Te has plantado con ${puntosPartida}. ${mensaje}`;
  }

  habilitarBotones(false, false, true);
  if (estadoActual === "GAME_OVER_TE_HAS_PASADO") {
    const btnVerResultado = document.getElementById("btnVerResultado");
    if (btnVerResultado !== null && btnVerResultado instanceof HTMLButtonElement) {
      btnVerResultado.classList.remove("hidden");
      btnVerResultado.style.display = "inline-block";
    }
  }
};

const btnMePlanto = document.getElementById("btnMePlanto");
if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
  btnMePlanto.addEventListener("click", HandleClickMePlanto);
}

const btnNuevaPartida = document.getElementById("btnNuevaPartida");
if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
  btnNuevaPartida.addEventListener("click", () => {
    puntosPartida = 0;
    siguienteCarta = null;
    muestraPuntuacion();
    mostrarCarta(0);
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
      elementoResultado.innerHTML = "";
    }
    habilitarBotones(true, true, false);
  });
}

const btnVerSiguienteCarta = document.getElementById("btnVerSiguienteCarta");
if (btnVerSiguienteCarta !== null && btnVerSiguienteCarta instanceof HTMLButtonElement) {
  btnVerSiguienteCarta.classList.add("hidden");
  btnVerSiguienteCarta.addEventListener("click", () => {
    if (siguienteCarta !== null) {
      const mensajeConSiguienteCarta = `La siguiente carta hubiera sido: ${siguienteCarta}`;
      alert(mensajeConSiguienteCarta);
    }
  });
} else {
  console.error("btnVerSiguienteCarta: No se ha encontrado el elemento con id btnVerSiguienteCarta");
}

const btnVerResultado = document.getElementById("btnVerResultado");
if (btnVerResultado !== null && btnVerResultado instanceof HTMLButtonElement) {
  btnVerResultado.classList.add("hidden");
  btnVerResultado.addEventListener("click", () => {
    if (siguienteCarta !== null) {
      const mensajeConSiguienteCarta = `La siguiente carta hubiera sido: ${siguienteCarta}`;
      alert(mensajeConSiguienteCarta);
    }
  });
} else {
  console.error("btnVerResultado: No se ha encontrado el elemento con id btnVerResultado");
}
