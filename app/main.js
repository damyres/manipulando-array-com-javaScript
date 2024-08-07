let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI() {

    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)

}
// praticando array com forEach
// let frutas = ['maca', 'banana', 'abacaxi']

// // for(let i=0; i<frutas.length; i++){
// //     console.log(frutas[i])

// // }

// frutas.forEach((fruta, index) => {
//     console.table(fruta, index)
// })


