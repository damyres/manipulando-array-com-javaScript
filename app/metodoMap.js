function aplicarDesconto(livros  ){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        // if(livro.preco > 100){
            return {...livro, preco: livro.preco - (livro.preco*desconto)}
        // }  
        return {...livro, preco: livro.preco }
    })
 return livrosComDesconto
}