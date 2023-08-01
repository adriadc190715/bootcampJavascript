let puntosPartida: number = 0;

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
      let valorCarta : number;

      switch (carta){
        case 1:
            valorCarta = 1;
            break;
        case 2:
            valorCarta = 2;
            break;
        case 3:
            valorCarta = 3;
            break;
        case 4:
            valorCarta = 4;
            break;
        case 5:
            valorCarta = 5;
            break;
        case 6:
            valorCarta = 6;
            break;
        case 7:
            valorCarta = 7;
            break;
        case 10:
            valorCarta = 0.5;
            break;
        case 11:
            valorCarta = 0.5;
            break;
        case 12:
            valorCarta = 0.5;
            break;
        default:
           console.error("No se encuentra valorCarta");
           valorCarta=0;
            break;

      }
      return valorCarta;

};


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
    
}

if(btnDameCarta!==null && btnDameCarta instanceof HTMLButtonElement){
    btnDameCarta.addEventListener("click",HandleClickDameCarta);
}






