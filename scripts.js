window.onload = function() {
  var portfolio = [
  { "title": "Cats on Code",
    "url": "http://catsoncode.com",
    "github": "https://github.com/PilgrimMemoirs/pilgrimmemoirs.github.io",
    "img": "imgs/cats_on_code_landing.png",
    "desc": ""
    },
    { "title": "Humble Hearts",
    "url": "http://www.humbleheartsfoundation.org/",
    "github": "https://github.com/wiliajc87/humblehearts",
    "img": "imgs/humble_hearts.png",
    "desc": ""
    },
    { "title": "Raft",
    "url": "http://raft.herokuapp.com",
    "github": "https://github.com/PilgrimMemoirs/DBC_Raft",
    "img": "imgs/raft_landing.png",
    "desc": ""
    }
  ]

  var counter = 1;


  $("#card-pic").click(function() {
      $( this ).css( "background-image", "url('" + portfolio[counter]["img"] + "')" ).fadeIn(1999);
      $("#portfolio_url").text( portfolio[counter]["title"]);
      $("#portfolio_url").attr( "href", portfolio[counter]["url"] );
      $("#github_link").attr( "href", portfolio[counter]["github"]);

      if (counter <= 1){
        counter ++;
      }
      else {
        counter = 0;
      }
});
}