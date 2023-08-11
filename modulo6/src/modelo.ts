interface Partida {
    puntosPartida : number;
}

export const partida : Partida = {
    puntosPartida: 0,
 }


export type Estado = "SIGUE_JUGANDO" | "GAME_OVER_TE_HAS_PASADO" | "WINER_HAS_GANADO";