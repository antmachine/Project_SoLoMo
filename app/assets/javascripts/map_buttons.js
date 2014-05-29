$(document).ready(function(){ 

    $("button#image-carousel").click(function () {
      $("div#carousel-box").toggle("fast");
    });
    
    $("button#image-carousel-off").click(function () {
      $("div#carousel-box").fadeOut("fast");
    });



     $('#my_carousel').slick(
      {
        speed: 500,
        draggable: false
      }
    );

    $("button#new-event").click(function () {
     // $.load('/events/new');
     window.location='events/new'
       });

    // $("#new_formblock").on("keypress", function (e) {
    //   if (e.keyCode == 13) {
    //       return false;
    //   }
    // });

}); //document ready closure