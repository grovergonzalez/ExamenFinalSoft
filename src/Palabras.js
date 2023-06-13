function get_frase(frase){
    return frase;
}
function separar_fraseComa(frase){
    const Frase = get_frase(frase);
    var palabras = []
    palabras = Frase.split(',');
    return palabras;
}
function separar_fraseEspacio(frase){
    const Frase = get_frase(frase);
    var palabras = []
    palabras = Frase.split(' ');
    return palabras;
}

function CalcularVecesPalabra(frase)
{
    var Palabras = []
    var contador = 0;
    var Words = separar_fraseComa(frase);
    for(let i=0; i<5;i++){
        if(Words[i] == Words[i+1])
        {
            contador++;
            Palabras = [contador];
        }
    }
    return Palabras;
}

export {get_frase, separar_fraseComa, separar_fraseEspacio, CalcularVecesPalabra};