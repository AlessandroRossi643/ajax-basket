$(document).ready(function(){
  var template_card=$('#template_card').html();
  var template_function=Handlebars.compile(template_card);
  var numberPlayers=parseInt(prompt("Inserisci il numero di giocatori"));


  $.ajax({
    url: 'https://www.boolean.careers/api/array/basket?n=numberPlayers',
    method: 'GET',
    data:{
      'n': numberPlayers
    },
    success: function(giocatore){
      var codiceG, rimbalziG, falliG, puntiG, punti2G, punti3G;
      var giocatori=giocatore.response;
      console.log(giocatori);

      for (var i = 0; i < giocatori.length; i++) {
        codiceG=giocatori[i].playerCode;
        rimbalziG=giocatori[i].rebounds;
        falliG=giocatori[i].fouls;
        puntiG=giocatori[i].points;
        punti2G=giocatori[i].twoPoints;
        punti3G=giocatori[i].threePoints;

        var player = {
          'codeplayer': codiceG,
          'rebounds': rimbalziG,
          'fouls': falliG,
          'points': puntiG,
          'twopoints': punti2G,
          'threepoints': punti3G
        }
        var html= template_function(player);
        $('.container_cards').append(html);
      }
    },
    error: function(){
      alert("Ops, qualcosa è andato storto");
    }
  })
});
