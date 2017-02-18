function getFont() {
  var fonts = [
    "calibri"
    , "wingdings"
    , "webdings"
    , "times new roman"
  ];
  return fonts[Math.floor((Math.random() * fonts.length) + 1)];
};
function getColour() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function MessStuffUp() {
    var x = $('*');


    $.each(x, function (index, value) {
        $(this).css({'font-family' : getFont(), 'colour' : getColour(), 'backgroundColor' : getColour() });
    });
}

var x = 0;
function oops(){
  x += 1;
  MessStuffUp();
  $('*').css({'transform':'rotate(' + x + 'deg)'});
  setTimeout(oops, 20);
}
function init(){
  new Audio("http://mp3fb.com/static/EFo4t91ZWIKaoAB-kqWlGgslqHLIZ3vJzBkIgb-QZbc/Darude%2B-%2BSANDSTORM.mp3").play();
  setTimeout(oops, 80300);
}


// to call ut
$(document).ready(function(){ 
  init();
});