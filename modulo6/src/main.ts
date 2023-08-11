
import {siguienteCarta} from './motor';

import {HandleClickDameCarta,HandleClickMePlanto, iniciarPartida} from './ui';


document.addEventListener("DOMContentLoaded", iniciarPartida);


const btnDameCarta = document.getElementById("btnDameCarta");
if (btnDameCarta !== null && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", HandleClickDameCarta);
}


const btnMePlanto = document.getElementById("btnMePlanto");
if (btnMePlanto !== null && btnMePlanto instanceof HTMLButtonElement) {
  btnMePlanto.addEventListener("click", HandleClickMePlanto);
}


  const btnsiguienteCarta = document.getElementById("btnsiguienteCarta");
  if (btnsiguienteCarta !== null && btnsiguienteCarta instanceof HTMLButtonElement) {
    btnsiguienteCarta.addEventListener("click", () => {
      siguienteCarta();
    });
  }
  

