/*===animated===*/
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: false, // trigger animations on mobile devices (true is default)
});
wow.init();

/*======one Page Nav =========*/
jQuery(".scroll").onePgaeNav({
  wrapper: "#onepage-nav",
});

/*======Jquery sticky top=========*/
jQuery(".header").sticky({ topSpacing: 0 });

/*======Back to Top=========*/
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
    jQuery(".scrollup").fadeIn();
  } else {
    jQuery(".scrollup").fadeOut();
  }
});

jQuery(".scrollup").click(function () {
  jQuery("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
  return false;
});

/*====== Owl Testinomials =========*/
jQuery(window).on("load", function () {
  $("#owl-testinomials").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    items: 1,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
  });
});

/*====== Trainers Carousel =========*/
jQuery(document).ready(function () {
  $("#trainers-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

/*====== Slider =========*/
jQuery(document).ready(function () {
  $("#slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
  });
});

/*====== Blog Gallery =========*/
jQuery(document).ready(function () {
  $("#blog-gallery").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
  });
});

/*====== Related Blog =========*/
jQuery(document).ready(function () {
  $("#related-blog").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

/*========= Loader =========*/
jQuery(window).on("load", function () {
  jQuery(".container-loader").delay(1500).fadeOut("slow");
});

/*========= Counter =========*/
jQuery(document).ready(function () {
  (function ($) {
    $(".count-num").rCounter();
  })(jQuery);
});

/*========= MixItUp =========*/
$(document).ready(function () {
  $(".ourGallery").mixItUp({
    selectors: {
      target: ".gallery-item",
    },
  });
});

/*===Drop Down Menu for Mobile ===*/
jQuery(document).ready(function () {
  jQuery(".navigation").meanmenu();
});

/*Alterações feitas*/
$(document).ready(function() {
  // Manipula o clique no link
  $('.video-link').on('click', function(event) {
      event.preventDefault();

      // Obtém o valor do atributo href
      var originalLink = $(this).attr('href');

      // Extrai o ID do vídeo do link original
      var videoId = getYouTubeVideoId(originalLink);

      // Cria o link de incorporação
      var embedLink = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&controls=0&showinfo=0';

      // Atualiza o atributo href com o novo link de incorporação
      $(this).attr('href', embedLink);

      // Abre o vídeo no fancybox
      $.fancybox.open({
          src: embedLink,
          type: 'iframe',
          opts: {
              iframe: {
                  preload: false
              }
          }
      });
  });

  // Função para extrair o ID do vídeo do link do YouTube
  function getYouTubeVideoId(url) {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return (match && match[7].length == 11) ? match[7] : false;
  }
});

function openMap(latitude, longitude) {
  // Abre o mapa do Google Maps usando a API
  window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
}