window.onload = function() {
  var portfolio = [
  { "title": "Cats on Code",
    "url": "http://catsoncode.com",
    "img": "imgs/cats_on_code_landing.png",
    "desc": ""
    },
    { "title": "Humble Hearts",
    "url": "http://www.humbleheartsfoundation.org/",
    "img": "imgs/humble_hearts.png",
    "desc": ""
    },
    { "title": "Raft",
    "url": "http://raft.herokuapp.com",
    "img": "imgs/raft_landing.png",
    "desc": ""
    }
  ]

  var counter = 1;


  $("#card-pic").click(function() {
      $( this ).css( "background-image", "url('" + portfolio[counter]["img"] + "')" ).fadeIn(1999);
      $("#portfolio_url").text( portfolio[counter]["title"]);
      $("#portfolio_url").attr( "href", portfolio[counter]["url"] );
      $("#portfolio_desc").text(portfolio[counter]["desc"]);

      if (counter <= 1){
        counter ++;
      }
      else {
        counter = 0;
      }
});
}