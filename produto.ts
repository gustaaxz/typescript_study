interface produto1 {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    emEstoque: boolean;
}

interface produto2 {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    emEstoque: boolean;
}

const produto1: produto1 = {
    id: 1,
    nome: "Almôndegas",
    preco: 15,
    descricao: "Almôndegas de camarão",
    emEstoque: false
}

const produto2: produto2 = {
    id: 2,
    nome: "Bife",
    preco: 45,
    descricao: "Bife de boi bem temperado",
    emEstoque: true
}

console.log(produto1);
console.log(produto2);