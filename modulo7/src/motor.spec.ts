import { Estado,partida} from "./modelo";
import { comprobarEstadoPartida, comprobarSuma, textMensajeComprobacion } from "./motor";
import {vi} from "vitest";

describe("comprobarSuma", () => {
    it("debería devolver WINER_HAS_GANADO si el valor obtenido es igual a 7.5", () => {
      // Arrange
      const valorSuma : number  = 7.5;
  
      // Act
      const resultado =comprobarSuma(valorSuma);
  
      // Assert
      expect(resultado).toBe("WINER_HAS_GANADO");
    });
    it("debería devolver SIGUE_JUGANDO si el valor obtenido es menor a 7.5", () => {
        // Arrange
        const valorSuma : number  = 3;
    
        // Act
        const resultado =comprobarSuma(valorSuma);
    
        // Assert
        expect(resultado).toBe("SIGUE_JUGANDO");
      });
      it("debería devolver GAME_OVER_TE_HAS_PASADO si el valor obtenido es mayor a 7.5", () => {
        // Arrange
        const valorSuma : number  = 10;
    
        // Act
        const resultado =comprobarSuma(valorSuma)
    
        // Assert
        expect(resultado).toBe("GAME_OVER_TE_HAS_PASADO");
      });
  });

  describe("comprobarEstadoPartida", () => {
    it("debería devolver WINER_HAS_GANADO si  los puntosTotales = 7.5 ", () => {
      // Arrange
      const puntosTotales:number = 7.5
  
      // Act
      const resultado = comprobarEstadoPartida(puntosTotales);
  
      // Assert
      expect(resultado).toBe("WINER_HAS_GANADO");
    });
    it("debería devolver SIGUE_JUGANDO si  los puntosTotales < 7.5 ", () => {
        // Arrange
        const puntosTotales:number = 5
    
        // Act
        const resultado = comprobarEstadoPartida(puntosTotales);
    
        // Assert
        expect(resultado).toBe("SIGUE_JUGANDO");
      });
      it("debería devolver GAME_OVER_TE_HAS_PASADO si  los puntosTotales > 7.5 ", () => {
        // Arrange
        const puntosTotales:number = 10
    
        // Act
        const resultado = comprobarEstadoPartida(puntosTotales);
    
        // Assert
        expect(resultado).toBe("GAME_OVER_TE_HAS_PASADO");
      });
  });

  describe("textMensajeComprobacion", () => {
    it("deberia devolver El número ${puntosPartida} has acertado si puntosPartida = 7.5 ", () => {
      // Arrange
      const valorPartida: number = 7.5
      const estado : Estado = "WINER_HAS_GANADO";
      vi.spyOn(partida,"puntosPartida","get").mockReturnValue(7.5);
      
      const resultadoEsperado: string = textMensajeComprobacion(partida.puntosPartida, estado);
  
      // Act
      const resultado : string  = textMensajeComprobacion(valorPartida,estado);
      
      // Assert
      expect(resultado).toBe(resultadoEsperado)
    
    });
    it("deberia devolver ${puntosPartida} no has llegado, prueba otra vez si puntosPartida < 7.5 ", () => {
        // Arrange
        const valorPartida: number = 4.5
        const estado : Estado = "SIGUE_JUGANDO";
        vi.spyOn(partida,"puntosPartida","get").mockReturnValue(4.5);
        
        const resultadoEsperado: string = textMensajeComprobacion(partida.puntosPartida, estado);
    
        // Act
        const resultado : string  = textMensajeComprobacion(valorPartida,estado);
        
        // Assert
        expect(resultado).toBe(resultadoEsperado)
      
      });
      it("deberia devolver ¡GAME OVER! Te pasaste ${puntosPartida} SE ACABO EL JUEGO. si puntosPartida > 7.5 ", () => {
        // Arrange
        const valorPartida: number = 10.5
        const estado : Estado = "GAME_OVER_TE_HAS_PASADO";
        vi.spyOn(partida,"puntosPartida","get").mockReturnValue(10.5);
        
        const resultadoEsperado: string = textMensajeComprobacion(partida.puntosPartida, estado);
    
        // Act
        const resultado : string  = textMensajeComprobacion(valorPartida,estado);
        
        // Assert
        expect(resultado).toBe(resultadoEsperado)
      
      });
      
  });
