// ==UserScript==
// @name                Scavenging
// @version     	    1.0.4
// @description         Scavenge for resources automatically
// @author              joaovperin
// @icon                https://i.imgur.com/7WgHTT8.gif
// @include             https://**.tribalwars.com.*/game.php?**&mode=scavenge*
// @downloadURL         https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/Scavenging.user.js
// @updateURL           https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/Scavenging.user.js
//
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// ==/UserScript==

/**
 * THIS SCRIPT WAS FORKED FROM TavinhuTurbinator!! Turbinando TW. All credits to him!
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

  // Dependency loading
  await ModuleLoader.loadModule('utils/notify-utils');

  const gameData = TribalWars.getGameData();
  const tag =
    gameData.world +
    '' +
    gameData.player.name +
    '' +
    gameData.screen +
    '_' +
    gameData.mode;
  const nLoop = 5;
  unsafeWindow.window.name = tag;

  if (unsafeWindow.window.name === tag) {
    iniciar();
    loop(nLoop);
    recarregar(600); // minutos (vai passar de aldeia antes)
  }

  function iniciar() {
    logica();
  }

  function aleatorio(menor, maior) {
    var intervalo = Math.round(maior - menor);
    return (
      Math.floor(Math.random() * intervalo) + menor + Timing.offset_to_server
    );
  }

  // Loop no inicar a cada X segundos. nLoop = 0 para o loop
  function loop(segundos) {
    var timer = setInterval(function () {
      document.querySelector('title').textContent = 'COLET';
      if (nLoop === 0) {
        clearInterval(timer);
      } else {
        setTimeout(function () {
          iniciar();
        }, aleatorio(segundos * 1000 * 0.01, segundos * 1000 * 0.1));
      }
    }, segundos * 1000);
  }

  // Recarrega a pagina a cada X minutos
  function recarregar(minutos) {
    setInterval(function () {
      setTimeout(function () {
        window.location.reload();
      }, aleatorio(minutos * 60000 * 0.01, minutos * 60000 * 0.1));
    }, minutos * 60000);
  }

  // Buscar e Validar Objeto
  function buscarObjeto(sObj) {
    var objeto = document.querySelectorAll(sObj);
    if (objeto !== undefined && objeto[0] !== undefined) {
      return objeto;
    } else {
      return undefined;
    }
  }

  function parseAsInteger(txt, divisor) {
    var retInt = 0;
    var valor = parseInt(txt.replace('(', '').replace(')', ''));
    if (valor > 0 && divisor > 0) {
      retInt = Math.trunc(valor / divisor);
    }
    return retInt;
  }

  function selecionarTropas(botoesDisponiveis) {
    if (botoesDisponiveis <= 0) {
      return;
    }

    var divisor = 0;

    var lanca = document.getElementsByName('spear')[0];
    var espada = document.getElementsByName('sword')[0];
    var machado = document.getElementsByName('axe')[0];

    if (botoesDisponiveis == 4) {
      divisor = 13;
      lanca.value = parseAsInteger(
        $("a.units-entry-all[data-unit='spear']")[0].innerText,
        divisor,
      );
      lanca.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );

      espada.value = parseAsInteger(
        $("a.units-entry-all[data-unit='sword']")[0].innerText,
        divisor,
      );
      espada.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );

      machado.value = parseAsInteger(
        $("a.units-entry-all[data-unit='axe']")[0].innerText,
        divisor,
      );
      machado.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );
    } else if (botoesDisponiveis == 3) {
      divisor = 8;
      lanca.value = parseAsInteger(
        $("a.units-entry-all[data-unit='spear']")[0].innerText,
        divisor,
      );
      lanca.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );

      espada.value = parseAsInteger(
        $("a.units-entry-all[data-unit='sword']")[0].innerText,
        divisor,
      );
      espada.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );

      machado.value = parseAsInteger(
        $("a.units-entry-all[data-unit='axe']")[0].innerText,
        divisor,
      );
      machado.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );
    } else if (botoesDisponiveis == 2) {
      divisor = 3.5;
      lanca.value = parseAsInteger(
        $("a.units-entry-all[data-unit='spear']")[0].innerText,
        divisor,
      );
      lanca.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );

      espada.value = parseAsInteger(
        $("a.units-entry-all[data-unit='sword']")[0].innerText,
        divisor,
      );
      espada.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );

      machado.value = parseAsInteger(
        $("a.units-entry-all[data-unit='axe']")[0].innerText,
        divisor,
      );
      machado.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: '0',
        }),
      );
    } else {
      var nrLanca = $("a.units-entry-all[data-unit='spear']")[0];
      var nrEspada = $("a.units-entry-all[data-unit='sword']")[0];
      var nrMachado = $("a.units-entry-all[data-unit='axe']")[0];

      nrLanca.click();
      nrEspada.click();
      nrMachado.click();
    }
  }

  function timeOver() {
    var tempo = document.getElementsByClassName('return-countdown');
    var lRecarregar = false;
    for (var i = 0; i < 4; i++) {
      if (
        tempo[i] !== undefined &&
        parseInt(tempo[i].innerText.split(':')[1]) < 1
      ) {
        lRecarregar = true;
      }
    }
    if (lRecarregar) {
      recarregar(2);
    }
  }

  /**
   * Get button count on the container
   *
   * @param {HtmlElement} obj
   */
  function getButtonCount(obj) {
    var objRet = {};
    var cont = 0;
    for (var i = 0; i < 4; i++) {
      if (obj[i] !== undefined) {
        cont = cont + 1;
        objRet.btn = obj[i];
      }
    }
    objRet.cont = cont;
    return objRet;
  }

  function logica() {
    var btns = buscarObjeto(
      'a.btn.btn-default.free_send_button:not(.btn-disabled)',
    );
    if (btns !== undefined) {
      var disp = getButtonCount(btns);
      if (disp.cont > 0) {
        selecionarTropas(disp.cont);
        setTimeout(function () {
          disp.btn.click();
        }, aleatorio(700, 1500));
      }
    }
    timeOver();
  }
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
