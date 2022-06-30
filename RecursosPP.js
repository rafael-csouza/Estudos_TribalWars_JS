// ==UserScript==
// @name         Comprar Recursos
// @version      0.5
// @description  Comprar recursos por PPs!
// @author       Victor Garé
// @match        http*://*.tribalwars.com.br/*screen=market&mode=exchange*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/VenderRecursos.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/VenderRecursos.user.js
// @run-at document-end
// ==/UserScript==

setInterval(
  () => (document.querySelector('title').textContent = 'REC-PP'),
  2000,
);
//comprar o que?
var comprarMadeira = false;
var comprarArgila = false;
var comprarFerro = false;

//quantidade estocada de cada recurso
var estoqueMandeira;
var estoqueArgila;
var estoqueFerro;

//campos para serem preenchidos
var inputComprarMadeira;
var inputComprarArgila;
var inputComprarFerro;

var qtdComprar = 64;
var algoPraComprar = false;

inputComprarMadeira = $("input[name='buy_wood']");
inputComprarArgila = $("input[name='buy_stone']");
inputComprarFerro = $("input[name='buy_iron']");

setInterval(function () {
  if (comprarMadeira) {
    estoqueMandeira = $('#premium_exchange_stock_wood').text();
    console.log('estoqueMandeira:', estoqueMandeira);
  }
  if (comprarArgila) {
    estoqueArgila = $('#premium_exchange_stock_stone').text();
    console.log('estoqueArgila:', estoqueArgila);
  }
  if (comprarFerro) {
    estoqueFerro = $('#premium_exchange_stock_iron').text();
    console.log('estoqueFerro:', estoqueFerro);
  }

  if (estoqueMandeira > qtdComprar) {
    inputComprarMadeira.val(qtdComprar);
    // inputComprarMadeira.val(estoqueMandeira);
    algoPraComprar = true;
  } else if (estoqueArgila > qtdComprar) {
    inputComprarArgila.val(qtdComprar);
    // inputComprarArgila.val(estoqueArgila);
    algoPraComprar = true;
  } else if (estoqueFerro > qtdComprar) {
    inputComprarFerro.val(qtdComprar);
    // inputComprarFerro.val(estoqueFerro);
    algoPraComprar = true;
  } else {
    inputComprarMadeira.val('');
    inputComprarArgila.val('');
    inputComprarFerro.val('');
    console.log('Nada para comprar agora!');
  }
  if (algoPraComprar) {
    console.log('algoPraComprar');
    setTimeout(calcularMelhorOferta, 2000);
  }
}, 1000);

function calcularMelhorOferta() {
  console.log('calcularMelhorOferta');
  $('.btn-premium-exchange-buy').click();
  setTimeout(confirmarCompra, 1000);
}

function confirmarCompra() {
  console.log('confirmarCompra');
  $('.btn-confirm-yes').click();
  $('.btn-confirm-no').click();
}

setInterval(function () {
  window.location.reload();
  // document.querySelector('#village_switch_right > span').click();
}, 30000);
