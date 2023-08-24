
import { comprobarEstadoPartida,dameCarta} from "./motor";

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
  describe("dameCarta", () => {
    it("debería devolver numeroRandom +1, si numeroRandom sale 0", () => {
      // Arrange
      
      const cartaAleatoria :number = 0
  
      // Act
      const resultado = dameCarta(cartaAleatoria)
  
      // Assert
      expect(resultado).toBe(cartaAleatoria+1);
    });
    it("debería devolver numeroRandon +2, si numeroRandom sale >7", () => {
      // Arrange
    
      const cartaAleatoria :number = 8
      // Act
      const resultado = dameCarta(cartaAleatoria)  

      // Assert
      expect(resultado).toBe(cartaAleatoria+2);
    });
    it("debería devolver el numeroRandom, si numeroRandom sale <=7", () => {
      // Arrange
      const cartaAleatoria :number = 5
      // Act
      const resultado = dameCarta(cartaAleatoria) 
      // Assert
      expect(resultado).toBe(cartaAleatoria);
    });

  });
 
      

