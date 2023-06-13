import {get_frase, separar_frase} from "./Palabras";

describe("Calcular Palabras", () => {
    it("Deberia retornar la frase que se esta utilizando", () => {
      expect(get_frase("Hola")).toEqual("Hola");
    });
    it("Deberia retornar la frase que se esta utilizando separada", () => {
      expect(separar_frase("hola Que tal")).toEqual(["hola", "Que", "tal"]);
    });
});