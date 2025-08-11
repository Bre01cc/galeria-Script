/*
curso de otimização de html e css
JSon notação de objetodo javaScript
array de objetos 
*/

'use script'
const imagens = [
  {//chave e valor 
    nome:'Imagem',
    url:'./imagem1.png'
  },
  {
    nome:'Imagem',
    url:'./imagem2.jpg'

  },
  {
    nome:'Imagem',
    url:'./imagem3.png'

  },
  {
    nome:'Imagem',
    url:'./imagem4.png'

  }, {
    nome:'Imagem',
    url:'./imagem5.png'

  }, {
    nome:'Imagem',
    url:'./imagem6.png'

  }, {
    nome:'Imagem',
    url:'./imagem7.png'

  }, {
    nome:'Imagem',
    url:'./imagem8.png'

  }
]
function crearImagem(srcImagem){
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(imagem)


}

function carregarImagens() {
    
    //galeria.textContent("texto")
    //javaScript é dinamicamente tipado, logo o seu tipo varia de acordo com o dado inserido nela
    
    //atribuio a um indice do array imagens
//     let contador =0
//     const limite= imagens.length-1
//     while(contador<=limite){
//         const imagem = document.createElement('img')
//         imagem.src = imagens[contador]
//         //Adicionando um filho para galeria
//         galeria.appendChild(imagem)
//         contador++
//    }

imagens.forEach(crearImagem)
    
}
carregarImagens()


