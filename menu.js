//animation one : dots
function squares(width, height, distance) {
  var rowNum = Math.ceil(width / distance);
  var colNum = Math.ceil(height / distance);
  for (i = 0; i < rowNum; i++) {
    for (j = 0; j < colNum; j++) {
      $(".blocks").append(
        "<div class='block' style='left:" +
          (i * distance) +
          "px; top:" +
          (j * distance) +
          "px'></div>"
      );
    }
  }
}

window.onload = function() {
  squares(300, 500, 50);
    $(".block").each(function(index) {
    var rand = Math.random()/5;
    var delay = index/200 + rand;
    $(this).css("transition-delay", delay + "s");
  });
  $(".button-container").click(function(){
    $(".button-container").toggleClass("active");
    $(".menu").toggleClass("active");
    $(".title").toggleClass("active");
  });
}
