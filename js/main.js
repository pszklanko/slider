/**
 * Here initialization of scripts
 * Library please put in separate file.
 */
 $('document').ready(function () {
   var picturesArray = $("img").map(function () {
        return $(this).attr("src");
    }).get();
    var itemNum = 1;
    $('li').first().addClass('mainImg');
    $('.mainImg').on('click', function () {
      $('.mainImg').fadeOut('slow', function () {

        $('.mainImg img').attr('src', picturesArray[itemNum++%picturesArray.length]);
      }).fadeIn(1000);
    })
});
