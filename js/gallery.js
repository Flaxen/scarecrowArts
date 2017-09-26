

$(document).ready(function() {
  // vid onclick playstate toggle
  function imgageEnlarge(image) {
    $('.imageEnlarged').stop().css('display', 'inherit')
  }




  var imageEnlarged = false;
  $(".galleryImage").stop().click(function() {
    if (imageEnlarged == false) {
      imgageEnlarge(this);
    } else {
      imageReset(this);
    }
  });
});

//   // playbutton animation
//   $(pButton).add(vid).mouseover(function() {
//     $(pButton).stop().css('filter','none')
//   });
//   $(pButton).add(vid).mouseout(function() {
//     $(pButton).stop().css('filter','brightness(500%)')
//   });
// });
