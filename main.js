/*
curso de otimização de html e css
JSon notação de objetodo javaScript
array de objetos 
*/

'use script'
const galeria = document.getElementById('galeria')
const imagens = [
  {//chave e valor 
    nome: 'Denver',
    url: './img/imagem1.png'
  },
  {
    nome: 'Nets',
    url: './img/imagem2.jpg'

  },
  {
    nome: 'New york',
    url: './img/imagem3.png'

  },
  {
    nome: 'Miami',
    url: './img/imagem4.png'

  }, {
    nome: 'Philadelphia',
    url: './img/imagem5.png'

  }, {
    nome: 'Lakes',
    url: './img/imagem6.png'

  }, {
    nome: 'Bucks',
    url: './img/imagem7.png'

  }, {
    nome: 'timberwolves',
    url: './img/imagem8.png'

  }
]
function crearImagem(srcImagem) {

  const container = document.createElement('div')
  const imagem = document.createElement('img')
  container.textContent = srcImagem.nome
  imagem.src = srcImagem.url
  galeria.appendChild(imagem)
  galeria.appendChild(container)


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
  //nomes.forEach(crearImagem)
  imagens.forEach(crearImagem)

}
carregarImagens()


