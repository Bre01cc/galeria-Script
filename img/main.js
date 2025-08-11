/*
curso de otimização de html e css */

'use script'
const imagens = [
    "./imagem1.png",
    "./imagem2.jpg",
    "./imagem3.png",
    "./imagem4.png",
    "./imagem5.png",
    "./imagem6.png",
    "./imagem7.png",
    "./imagem8.png"
]

function carregarImagens() {
    const galeria = document.getElementById('galeria')
    //galeria.textContent("texto")
    //javaScript é dinamicamente tipado, logo o seu tipo varia de acordo com o dado inserido nela
    
    //atribuio a um indice do array imagens
    let contador =0
    while(contador<=7){
        const imagem = document.createElement('img')
        imagem.src = imagens[contador]
        //Adicionando um filho para galeria
        galeria.appendChild(imagem)
        contador++
   }
    
}
carregarImagens()


