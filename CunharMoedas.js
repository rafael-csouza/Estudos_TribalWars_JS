// ==UserScript==
// @name         #TW - CunharMoedas - BLT
// @version      0.1
// @description  Cunhar moedas automatico
// @author       Lordsthan, edited by BiLeT
// @match        http*://*.tribalwars.com.br/*screen=snob*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @grant        none
// ==/UserScript==

(function () {
  function cunharMaximo() {
    document.querySelector('title').textContent = 'CUNHAR';
    var maximumAmount = document
      .getElementById('coin_mint_fill_max')
      .text.match(/\(([^)]+)\)/)[1];
    console.log('Cunhar maximumAmount:', maximumAmount);
    if (document.getElementById('coin_mint_count').value != maximumAmount) {
      document.getElementById('coin_mint_count').value = maximumAmount;
    }
    document.getElementsByClassName('btn btn-default')[0].click();
  }

  if (document.getElementById('coin_mint_count') !== null) {
    console.log('Detectado: coin_mint_count');
    cunharMaximo();
  }

  var tempoAleatorio = Math.floor(Math.random() * 30000) + 600000;

  console.log('Atualizando a página:', tempoAleatorio / 1000, 'segundos...');
  setInterval(function () {
    window.location.reload();
  }, tempoAleatorio);
})();
