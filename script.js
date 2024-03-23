var botaocriptografar = document.querySelector(".botao-criptografar");
var botaodescriptografar = document.querySelector(".botao-descriptografar");
var conteudofotomascote = document.querySelector(".conteudo-foto-mascote");
var conteudoparagrafo = document.querySelector(".conteudo-paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaocriptografar.onclick = criptografar;
botaodescriptografar.onclick = descriptografar;

function criptografar(){
    ocultarAfrente();
    var caixadetexto = recuperarTexto()
    resultado.textContent = criptografarTexto(caixadetexto);
}

function descriptografar(){
    ocultarAfrente();
    var caixadetexto = recuperarTexto()
    resultado.textContent = descriptografarTexto(caixadetexto);
}

function recuperarTexto(){
    var caixadetexto = document.querySelector(".caixa-de-texto")
    return caixadetexto.value
}

function ocultarAfrente(){
    conteudofotomascote.classList.add("ocultar");
    conteudoparagrafo.classList.add("ocultar");

}

function criptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";


    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const botaoCopiar = document.querySelector(".botao-copiar"); 
    botaoCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Olá!"); 
});
