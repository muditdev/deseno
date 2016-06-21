(function() {
  var i, resize;

  // i = setInterval(function() {
  //   return $(".trigger").toggleClass("cross");
  // }, 1500);

  $(".trigger").click(function() {
    clearInterval(i);
    return $(".trigger").toggleClass("cross");
  });
}).call(this);
