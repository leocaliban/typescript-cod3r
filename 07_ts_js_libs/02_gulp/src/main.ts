import Livro from './model/livro';

const livro = new Livro('Candyman', 33.30, 0.10);
console.log(livro.precoComDesconto());

document.write(`<h2 class='item'>${livro.nome}</h2>`);
document.write(`<h3 class='item'>${livro.precoComDesconto()}</h3>`);