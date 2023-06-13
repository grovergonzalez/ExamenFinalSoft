function get_frase(frase){
    return frase;
}
function separar_frase(frase){
    const Frase = get_frase(frase);
    var palabras = []
    const separadores = [' ', ',','-',';','.'];
    palabras = Frase.split(' ');
    return palabras;
}

export {get_frase, separar_frase};