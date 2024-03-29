// ==UserScript==
// @name                AutoFinishBuildings
// @version     	    1.0.4
// @description         Auto-click on the 'finish' green button (when it appears)
// @author              joaovperin
// @icon                https://i.imgur.com/7WgHTT8.gif
// @include             https://**.tribalwars.com.*/game.php?**&screen=main*
// @downloadURL         https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/AutoFinishBuilding.user.js
// @updateURL           https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/AutoFinishBuilding.user.js
// ==/UserScript==

(async () => {
  'use strict';
  //****************************** Configuration ******************************//
  const mediumDelay = 1000;
  const delayRange = 300;
  const alterarProxAldeia = false;
  //*************************** End Configuration ***************************//
  var tempoAleatorio = Math.floor(Math.random() * 20000) + 70000;

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

  const intervalRange = Math.floor(
    Math.random() * (mediumDelay - delayRange / 2) + mediumDelay / 2,
  );

  // Loop
  setInterval(() => {
    const tr = $('[id="buildqueue"]').find('tr').eq(1);
    const text = tr
      .find('td')
      .eq(1)
      .find('span')
      .eq(0)
      .text()
      .split(' ')
      .join('')
      .split('\n')
      .join('');
    const timeSplit = text.split(':');

    // Free completition
    if (
      timeSplit[0] * 60 * 60 + timeSplit[1] * 60 + timeSplit[2] * 1 <
      3 * 60
    ) {
      tr.find('td').eq(2).find('a').eq(2).click();
    }

    // Completed mission
    $('[class="btn btn-confirm-yes"]').click();
  }, intervalRange);
})();
