interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    emEstoque: boolean;
}

const produto1: Produto = {
    id: 1,
    nome: "Almôndegas",
    preco: 15,
    descricao: "Almôndegas de camarão",
    emEstoque: false
}

const produto2: Produto = {
    id: 2,
    nome: "Bife",
    preco: 45,
    descricao: "Bife de boi bem temperado",
    emEstoque: true
}

console.log(produto1, produto2);

function calcularPrecoComDesconto(precoOriginal: number, percentualDesconto: number = 10): number {
    let percentual = percentualDesconto / 100;
    let precoFinal = precoOriginal - (precoOriginal * percentual);
    return precoFinal;
}

console.log(`\nPreço do ${produto1.nome} com 10% de desconto: R$ ${calcularPrecoComDesconto(produto1.preco)}`);
console.log(`Preço do ${produto2.nome} com 30% de desconto: R$ ${calcularPrecoComDesconto(produto2.preco)}\n`);
