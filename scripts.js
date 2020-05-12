$( document ).ready(function() {

    $( function() {
      $( "#about, #projects, #connect, #about-icon, #projects-icon, #resume-icon, #connect-icon" ).draggable();
    });


    $( "#projects-icon" ).on("dblclick", function() {
      $("#projects").show();
    });

    // $( "#projects-icon" ).on("click", function() {
    //   $("#projects").show();
    // });

    $( "#about-icon" ).on("dblclick", function() {
      $("#about").show();
    });

    // $( "#about-icon" ).on("click", function() {
    //   $("#about").show();
    // });

    $( "#connect-icon" ).on("dblclick", function() {
      $("#connect").show();
    });

    // $( "#connect-icon" ).on("click", function() {
    //   $("#connect").show();
    // });

    $( "#exit-connect" ).on("click", function() {
      $("#connect").hide();
    });

    $( "#exit-projects" ).on("click", function() {
      $("#projects").hide();
    });

    $( "#exit-about" ).on("click", function() {
      $("#about").hide();
    });



});
