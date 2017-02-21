$.fn.slider = function(interval) {
  $('li:gt(0)').hide();
  //$('li:first').addClass('mainImg');
  var width = $('img').width();
  var stripes = 8;
  var stripeWidth = width/stripes;
  var totalWidth = 0;

  for (var i = 0; i < stripes; i++) {
     $('ul').append('<span style="left:'+ i * stripeWidth +'px"></span>');
   }

   setInterval(function() {
     sliceImg();
     $('span').each(function() {
       totalWidth += $(this).width();
     })
     if(totalWidth===800) {
       totalWidth = 0;
       if($('span:visible').length === 8){
         toggleImgs();
       }
     }
   }, interval);
};

function sliceImg() {
  var collection = $('ul span');
  if( collection.length > 0 ){
    var i = 0;
    var fn = function(){
        var element = $(collection[i]);
        element.fadeToggle(1000);
        if( ++i < collection.length ){
          setTimeout(fn, 200);
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
       .insertBefore('span:first');
}
