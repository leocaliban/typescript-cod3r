import Livro from './model/livro';

const livro = new Livro('Candyman', 33.30, 0.10);
console.log(livro.precoComDesconto());