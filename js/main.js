/**
 * Here initialization of scripts
 * Library please put in separate file.
 */
 $('document').ready(function () {
   $('li:gt(0)').hide();

   var width = $('img').width();
   var stripes = 8;
   var stripeWidth = width/stripes;

   for(var i = 0; i < stripes; i++) {
     $('li:first').append('<span style="left:'+ i * stripeWidth +'px"></span>');
   }

   setInterval(function() {
     sliceImg();
   }, 2500);
});

function sliceImg() {
  var collection = $('span');
  if( collection.length > 0 ){
    var i = 0;
    var fn = function(){
        var element = $(collection[i]);
        element.fadeToggle(1000);
        if( ++i < collection.length ){
            setTimeout(fn, 500);
        }
    };
    fn();
}
}

function toggleImgs() {
    $('li:first')
       .toggle()
       .next()
       .toggle()
       .end()
       .appendTo('#banner');
}
