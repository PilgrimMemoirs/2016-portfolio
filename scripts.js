$( document ).ready(function() {

    $( function() {
      $( "#about, #projects, #connect" ).draggable().resizable();
    });

    $( "div[id$=icon]" ).on("click", function() {
      $("#" + this.id.split("-")[0]).show();
      $("#" + this.id.split("-")[0]).css({"top":"-250px", "left":"200px"});
    });

  $( "p[id^=exit]" ).on("click", function() {
    $("#" + this.id.split("-")[1]).hide();
  });
});
