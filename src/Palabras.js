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

export {get_frase, separar_fraseComa, separar_fraseEspacio};