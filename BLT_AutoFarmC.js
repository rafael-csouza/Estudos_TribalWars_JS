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
      document.getElementsByClassName('farm_icon_c')[x].click();
      x = x + 1;
      console.log('farmarComC_Click - x:', x);
    }
  }

  var farmarComCTempo = setInterval(
    farmarComC,
    Math.floor(Math.random() * 1000) + 500,
  );

  var tempoAleatorioMudarAldeiasOuReload =
    Math.floor(Math.random() * 10000) + 40000;
  console.log(
    'Mudar de Aldeias:',
    tempoAleatorioMudarAldeiasOuReload / 1000,
    'segundos...',
  );
  setInterval(function () {
    window.location.reload();
    // document.querySelector('#village_switch_right > span').click();
  }, tempoAleatorioMudarAldeiasOuReload);
})();
