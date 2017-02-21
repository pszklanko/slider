$.fn.slider = function(options) {
  var settings = $.extend({
    interval: 3000,
    container: this,
    imgWidth: $('img').width(),
    stripes: 8
  }, options)

  stripeWidth = calculateStripeWidth(settings);

  $('#container li:gt(0)').hide(); // hides all imgs but first
  generateShades(settings, stripeWidth);
  animate(settings);
};

function animate(settings) {
  var totalWidth = 0;
  setInterval(function() {
    sliceImg();
    $('#container span').each(function() {
      totalWidth += $(this).width();
    })
    if(totalWidth === settings.imgWidth) {
      totalWidth = 0;
      if($('#container span:visible').length === settings.stripes){
        toggleImgs();
      }
    }
  }, settings.interval);
}

function generateShades(settings, stripeWidth) {
  for (var i = 0; i < settings.stripes; i++) {
     $('#container ul').append('<span style="left:'+ i * stripeWidth +'px"></span>');
   }
}

function sliceImg() {
  var slices = $('#container ul span');
  if( slices.length > 0 ){
    var i = 0;
    var fn = function(){
        var element = $(slices[i]);
        element.fadeToggle(1000);
        if( ++i < slices.length ){
          setTimeout(fn, 200);
        }
    };
    fn();
  }
}

function toggleImgs() {
    $('#container li:first')
       .toggle()
       .next()
       .toggle()
       .end()
       .insertBefore('#container span:first');
}

function calculateStripeWidth(settings) {
  return settings.imgWidth/settings.stripes;
}
