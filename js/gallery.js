

$(document).ready(function() {
  // vid onclick playstate toggle
  function imgageEnlarge(imgURL) {
    console.log(imgURL);
    $('#imageEnlarged').attr('src', imgURL);
    $('.imageEnlarged').stop().css('display', 'inherit');
    imageEnlarged = true;
  }
  function imageReset() {
    console.log("entering imageReset function");
    $('.imageEnlarged').stop().css('display', 'none');
    imageEnlarged = false;
  }

  var imageEnlarged = false;
  $(".galleryImage").click(function() {
    var imgURL = $(this).attr("src");
    if (imageEnlarged == false) {
      imgageEnlarge(imgURL);
    } else {
      imageReset();
    }
  });

});
// $('body').click(function() {
//   if (imageEnlarged == true) {
//     $("body").click(function() {
//       var imgURL = $(this).attr("src");
//       imageReset();
//       imageEnlarged = false;
//     });
//   } else if (imageEnlarged == false) {
//     $(".galleryImage").click(function() {
//       var imgURL = $(this).attr("src");
//       imgageEnlarge(imgURL);
//       imageEnlarged = true;
//     });
//   }
// });



// $(".galleryImage").click(function() {
//   var imgURL = $(this).attr("src");
//   if (imageEnlarged == false) {
//     imgageEnlarge(imgURL);
//   } else {
//     imageReset();
//   }
// });
