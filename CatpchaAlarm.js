// ==UserScript==
// @name                CatpchaAlarm
// @version     	    1.0.6
// @description         Solve your captchas for you, so you don't need to worry getting banned
// @author              joaovperin
// @icon                https://i.imgur.com/7WgHTT8.gif
// @include             https://**.tribalwars.com.*
// @downloadURL         https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/CaptchaSolver.user.js
// @updateURL           https://raw.githubusercontent.com/joaovperin/TribalWars/master/UserScripts/CaptchaSolver.user.js
// ==/UserScript==

/**
 * THIS SCRIPT WAS FORKED FROM Lucas Martins!! Turbinando TW.
 *
 * But I totally improved that, so the credits are mine ;)
 *
 * https://www.youtube.com/watch?v=HE2tBbc7-gA
 */
(() => {
  'use strict';
  //****************************** Configuration ******************************//
  //*************************** End Configuration ***************************//
  setInterval(async function () {
    if (
      document.querySelectorAll(
        '#error > div.center > div.content.box-border.red > div.inner > div.full-content > h2',
      ).length > 0
    ) {
      console.log('Much requisitions, reload page!');
      window.location.reload();
    }
    if (document.querySelector('#bot_check')) {
      console.log('Captcha!');
      TribalWars.playAttackSound();
      $('html,body').scrollTop(0);
      var myAudio = new Audio(
        'http://protettordelinks.com/wp-content/baixar/bomba_relogio_alerta_www.toquesengracadosmp3.com.mp3',
      );
      await myAudio.play();
    }

    //onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
    onclick = function (e) {
      console.log('mouse location:', e.clientX, e.clientY);
    };
    //document.elementFromPoint(104, 232).click()
  }, 1000);
})();
