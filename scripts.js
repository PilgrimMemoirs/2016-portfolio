window.onload = function() {
  var portfolio = [
  { "title": "Cats on Code",
    "url": "http://catsoncode.com",
    "img": "imgs/cats_on_code_landing.png",
    "desc": "My personal blog, made with jekyll with a custom layout and hosted on github pages. "
    },
    { "title": "Humble Hearts",
    "url": "http://www.humbleheartsfoundation.org/",
    "img": "imgs/humble_hearts.png",
    "desc": "Collaborated with a team of 9, during a 24 hour hackathon to create a website for a local charity. We were honored with Humble Hearts."
    },
    { "title": "Raft",
    "url": "http://raft.herokuapp.com",
    "img": "imgs/raft_landing.png",
    "desc": "Ten days, from ideation to creation, with a team of 3, to create this final project application for DevBootcamp. I designed and implemnted the frontend with Mapbox API. Also designed and setup the database."
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