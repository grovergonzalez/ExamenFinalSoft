import ContadorPalabras from "./Palabras";

describe("Calcular Palabras", () => {
  const frase = new ContadorPalabras("Hola");
    it("Deberia retornar la frase que se esta utilizando", () => {
      expect(frase.get_frase(frase)).toEqual("Hola");
    });
});