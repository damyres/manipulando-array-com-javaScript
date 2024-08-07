let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI() {

    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)
    
}