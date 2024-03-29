// ==UserScript==
// @name                PallyTrainer
// @version     	    1.0.0
// @description         Auto train pally when it's available
// @author              joaovperin
// @icon                https://i.imgur.com/7WgHTT8.gif
// @include             https://**.tribalwars.com.*/game.php?**&screen=statue*
// @downloadURL         https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/PallyTrainer.user.js
// @updateURL           https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/PallyTrainer.user.js
// ==/UserScript==

/**
 * THIS SCRIPT WAS FORKED FROM FunnyPocketBook. All credits to him!
 */
(async (ModuleLoader) => {
  'use strict';

  // BiletProximaAldeia
  var tempoAleatorioMudarAldeiasOuReload =
    Math.floor(Math.random() * 30000) + 60000;
  console.log(
    'Mudar de Aldeias:',
    tempoAleatorioMudarAldeiasOuReload / 1000,
    'segundos...',
  );
  setInterval(function () {
    //window.location.reload();
    document.querySelector('#village_switch_right > span').click();
  }, tempoAleatorioMudarAldeiasOuReload);

  //****************************** Configuration ******************************//
  const checkInterval = 1000;
  //*************************** End Configuration ***************************//

  // Dependency loading
  await ModuleLoader.loadModule('utils/notify-utils');

  // Controls the window title

  // Loop
  setInterval(() => {
    document.querySelector('title').textContent = 'PALLY';
    // Click on the first train option if appliable
    if (!document.querySelector('#knight_activity > span')) {
      document.querySelector('#knight_actions > div > a').click();
      document
        .querySelector(
          '#popup_box_knight_regimens > div > div:nth-child(3) > div.actions.center > a:nth-child(1)',
        )
        .click();
    }
    // Reload page if completed
    if (
      parseInt(
        document.querySelector('[data-endtime]').getAttribute('data-endtime'),
      ) <= Math.round(new Date().getTime() / 1000)
    ) {
      window.location.reload();
    }
  }, checkInterval);
})({
  // ModuleLoader functions
  loadModule: (moduleName) => {
    return new Promise((resolve, reject) => {
      const modulePath = moduleName.replace('.', '/');
      const moduleUrl = `https://raw.githubusercontent.com/joaovperin/TribalWars/master/Modules/${modulePath}.js`;
      console.debug(
        '[TwScripts] Loading ',
        modulePath,
        ' from URL ',
        moduleUrl,
        '...',
      );
      return $.ajax({
        method: 'GET',
        url: moduleUrl,
        dataType: 'text',
      })
        .done((res) => resolve(eval(res)))
        .fail((req) =>
          reject(
            console.error(
              "[TwScripts] Fail loading module '",
              moduleName,
              "'.",
            ),
          ),
        );
    });
  },
});
