
import {iniciarPartida,handleClickDameCarta,handleClickMePlanto,handleClicknuevaPartida,
  siguienteCarta} from './ui';




document.addEventListener("DOMContentLoaded", iniciarPartida);


const btnDameCarta = document.getElementById("btnDameCarta");
if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", handleClickDameCarta);
};


const btnMePlanto = document.getElementById("btnMePlanto");
if (btnMePlanto !== null && btnMePlanto !== undefined && btnMePlanto instanceof HTMLButtonElement) {
  btnMePlanto.addEventListener("click", handleClickMePlanto);
}


const btnNuevaPartida = document.getElementById("btnNuevaPartida");
if (btnNuevaPartida !== null && btnNuevaPartida !== undefined &&  btnNuevaPartida instanceof HTMLButtonElement) {
  btnNuevaPartida.addEventListener("click", handleClicknuevaPartida)
};

 
  const btnsiguienteCarta = document.getElementById("btnsiguienteCarta");
  if (btnsiguienteCarta !== null && btnsiguienteCarta !== undefined && btnsiguienteCarta instanceof HTMLButtonElement) {
    btnsiguienteCarta.addEventListener("click", () => {
      siguienteCarta();
    });

  };
  
