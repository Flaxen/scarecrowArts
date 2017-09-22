

$(document).ready(function() {
// opacity when paused
  var vid = document.getElementById("videoBox");
  vid.onplay = function() {
    $(this).css('opacity', '1');
  };
  vid.onpause = function() {
    $(this).css('opacity', '0.3');
  };
  // end

  // vid onclick pause

  vid.onclick = function() {
    if (this.paused)
      this.play();
    else
      this.pause();
  }

});
