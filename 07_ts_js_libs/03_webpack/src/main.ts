import Livro from './model/livro';
import $ from 'jquery';

const livro = new Livro('Candyman', 33.30, 0.10);
console.log(livro.precoComDesconto());

$('body').append(`<h2 class='item'>Nome: ${livro.nome}</h2>`);
$('body').append(`<h3 class='item'>Valor: R$ ${livro.precoComDesconto()}</h3>`);
