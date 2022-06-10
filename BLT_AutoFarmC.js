// ==UserScript==
// @name         #TW - AutoFarmC - BLT
// @version      0.1
// @description  Auto Farm
// @author       BiLeT
// @match        http*://*.tribalwars.com.br/*screen=am_farm*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  let x = 0;
  function farmarComC() {
    document.querySelector('title').textContent = 'FARM';
    if (document.getElementsByClassName('farm_icon_c')) {
      var tempoAleatorioAtk = Math.floor(Math.random() * 3000) + 1000;
      console.log('farmarComC em:', tempoAleatorioAtk / 1000, 'segundos...');
      document.getElementsByClassName('farm_icon_c')[x].click();
      x = x + 1;
      console.log('farmarComC_Click - x:', x);
    }
  }

  var farmarComCTempo = setInterval(
    farmarComC,
    Math.floor(Math.random() * 3000) + 4000,
  );

  var tempoAleatorioMudarAldeias = Math.floor(Math.random() * 10000) + 40000;
  console.log(
    'Mudar de Aldeias:',
    tempoAleatorioMudarAldeias / 1000,
    'segundos...',
  );
  setInterval(function () {
    //window.location.reload();
    document.querySelector('#village_switch_right > span').click();
  }, tempoAleatorioMudarAldeias);
})();
