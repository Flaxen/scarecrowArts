

$(document).ready(function() {
  // enlarge image toggle function
  function imgageEnlarge(imgURL) {
    console.log(imgURL);
    $('#imageEnlarged').attr('src', imgURL);
    $('#imageEnlargedContainer').stop().css('display', 'inherit');
    imageEnlarged = true;
  }
  function imageReset() {
    console.log("entering imageReset function");
    $('#imageEnlargedContainer').stop().css('display', 'none');
    imageEnlarged = false;
  }

  var imageEnlarged = false;
  $(".galleryImage").click(function() {
    var imgURL = $(this).attr("src");
    if (imageEnlarged == false) {
      imgageEnlarge(imgURL);
    }
  });
  $("#imageEnlargedContainer").click(function(e) {
    if (!$(e.target).hasClass('fa')) {
      if (imageEnlarged == true) {
        imageReset();
      }
    }
  });
  // image switch from enlarged image

  function nextImage(value) {
    var nextImg;
    var nextImg;
    var imgNr;
    // sperates image url nr from url
    var urlImg = $('#imageEnlarged').attr('src');
    urlImg = urlImg.replace('.jpg', '');
    urlImg = urlImg.replace('screenshots/', '');
    console.log(urlImg);
    var fullUrl = urlImg + ".jpg";
    // increases/decreases img nr by 1
    imgNr = parseInt(urlImg) + value;
    if (imgNr < 10) {
      nextImg = "screenshots/" + 0 + imgNr + ".jpg";
    } else {
      nextImg = "screenshots/" + imgNr + ".jpg";
    }
    $('#imageEnlarged').attr('src', nextImg);
  }

  $('.fa-chevron-left').click(function() {
    nextImage(1);
  });
  $('.fa-chevron-right').click(function() {
    nextImage(-1);
  });

});
