$(document).ready(function(){ 

    $("button#image-carousel").click(function () {
      $("div#carousel-box").fadeIn("slow");
    });
    $("button#comment-option").click(function () {
      $("div#carousel-box").fadeOut("fast");
    });

     $('#my_carousel').slick(
      {
        speed: 500,
        draggable: false
      }
    );

    $("button#new-search").click(function () {
     // $.load('/events/new');
     window.location='events/new'
       });

    // $("#new_formblock").on("keypress", function (e) {
    //   if (e.keyCode == 13) {
    //       return false;
    //   }
    // });

}); //document ready closure