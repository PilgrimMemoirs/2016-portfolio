$( document ).ready(function() {

    $( function() {
      $( "#about, #projects, #connect" ).draggable();
    });

    $( "div[id$=icon]" ).on("click", function() {
      $("#" + this.id.split("-")[0]).show();
    });

  $( "p[id^=exit]" ).on("click", function() {
    $("#" + this.id.split("-")[1]).hide();
  });


});
