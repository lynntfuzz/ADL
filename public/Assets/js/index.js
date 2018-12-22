$(document).ready(function() {

    //Changes navbar when scrolling
    $(window).scroll(function() {
      if ($(document).scrollTop() > 300) {
        $("#navbar-row-0").show("slow");
        $("#navbar-row-1").hide();
        $("#navbar-row-2").hide();
        $("#navbar-row-3").hide();
      } else if ($(document).scrollTop() < 25){
        $("#navbar-row-0").hide();
        $("#navbar-row-1").show();
        $("#navbar-row-2").show();
        $("#navbar-row-3").show();
      }
    });

    $("#widget-iframe").contents().$(".search-button").on("click", function(){
      console.log("meow")
    })

    $("#advanced-button").on("click", function(){
        $("#widget-modal").modal({keyboard: true});
        $("#widget-modal").modal("show")
    })

  });