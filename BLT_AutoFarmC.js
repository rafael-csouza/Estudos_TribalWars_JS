// ==UserScript==
// @name         BLT_AutoFarmC
// @version      0.1
// @description  Auto Farm
// @author       BiLeT
// @match        http*://*.tribalwars.com.br/*screen=am_farm*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  let alterarProxAldeia = false;
  let x = 0;
  function farmarComC() {
    let newPageTitle = 'FARM - ';
    let aldeiaNome = game_data.village.name;
    document.querySelector('title').textContent = newPageTitle + aldeiaNome;
    console.log('farmarComC_function');
    if (document.getElementsByClassName('farm_icon_c')) {
      tempoAleatorioAtk = Math.floor(Math.random() * 3000) + 2000;
      console.log('farmarComC em:', tempoAleatorioAtk / 1000, 'segundos...');
      document.getElementsByClassName('farm_icon_c')[x].click();
      x = x + 1;
      console.log('farmarComC_Click - x:', x);
    }
  }

  var tempoAleatorio = Math.floor(Math.random() * 10000) + 40000;
  var tempoAleatorioAtk = Math.floor(Math.random() * 3000) + 4000;

  var farmarComCTempo = setInterval(farmarComC, tempoAleatorioAtk);
  console.log('farmarComC em:', tempoAleatorioAtk / 1000, 'segundos...');

  function alterarAldeia() {
    console.log('alterarAldeia');
    document.getElementById('village_switch_right').click();
    document.getElementById('village_switch_left').click();
  }
  if (alterarProxAldeia === true) {
    var alterarAldeiaTempo = setInterval(alterarAldeia, tempoAleatorio - 20000);
    console.log(
      'alterarAldeia a cada:',
      (tempoAleatorio - 20000) / 1000,
      'segundos...',
    );
  }
  console.log('Atualizar a página:', tempoAleatorio / 1000, 'segundos...');
  setInterval(function () {
    window.location.reload();
  }, tempoAleatorio);
})();
