var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
  });

  var $imgs = $carousel.find('.carousel-cell img');

  var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

