import {CalcularVecesPalabra, get_frase, separar_fraseComa, separar_fraseEspacio} from "./Palabras";

describe("Calcular Palabras", () => {
    it("Deberia retornar la frase que se esta utilizando", () => {
      expect(get_frase("Hola")).toEqual("Hola");
    });
    it("Deberia retornar la frase que se esta utilizando separada", () => {
      expect(separar_fraseEspacio("hola Que tal")).toEqual(["hola","Que","tal"]);
    });
    it("Deberia retornar la frase que se esta utilizando separada por una coma", () => {
      expect(separar_fraseComa("hola,Que,tal")).toEqual(["hola", "Que", "tal"]);
    });
    it("Deberia retornar la frase con las veces", () => {
      expect(CalcularVecesPalabra("hola,Que,tal")).toEqual([2]);
    });
});