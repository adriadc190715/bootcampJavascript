
import {iniciarPartida} from './ui';
import {HandleClickDameCarta,HandleClickMePlanto,HandleClicknuevaPartida,
 siguienteCarta} from './motor';



document.addEventListener("DOMContentLoaded", iniciarPartida);


const btnDameCarta = document.getElementById("btnDameCarta");
if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", HandleClickDameCarta);
};


const btnMePlanto = document.getElementById("btnMePlanto");
if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
  btnMePlanto.addEventListener("click", HandleClickMePlanto);
}


const btnNuevaPartida = document.getElementById("btnNuevaPartida");
if (btnNuevaPartida !== null && btnNuevaPartida instanceof HTMLButtonElement) {
  btnNuevaPartida.addEventListener("click", HandleClicknuevaPartida)
};

 
  const btnsiguienteCarta = document.getElementById("btnsiguienteCarta");
  if (btnsiguienteCarta !== null && btnsiguienteCarta instanceof HTMLButtonElement) {
    btnsiguienteCarta.addEventListener("click", () => {
      siguienteCarta();
    });

  };
  
