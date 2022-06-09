//----------------------------------------------------------------
//Projeto:  EsconderAldeiasFarmadas
//Autor:  BiLeT
//---------------------------------------------------------------
javascript: if (game_data.player.premium == false) {
  UI.InfoMessage(
    'Para utilizar esse script é necessário uma Conta Premium!',
    3000,
    true,
  );
  end();
}

if (game_data.screen != 'map') {
  UI.InfoMessage('Script deve ser usado no mapa!', 3000, true);
  end();
}

setInterval(function () {
  $("#map_container div:not('.map_border') img[id^='map_cmdicons_']").each(
    function (i, e) {
      var aldeia = $(e)
        .attr('id')
        .replace('_0', '')
        .replace('cmdicons', 'village');
      $(e).remove();
      $('#' + aldeia).remove();
    },
  );
}, 1);
