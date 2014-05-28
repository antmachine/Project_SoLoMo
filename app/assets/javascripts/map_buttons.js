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

}); //document ready closure