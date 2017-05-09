$(document).ready(function(){

  var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  //document.getElementById('nav').classList.toggle('main-nav__list--visible');
  document.getElementById('main-nav-all').classList.toggle('main-nav-all--active');
  //document.getElementById('main-nav-all__list').classList.toggle('main-nav-all__list--active');
  document.getElementById('page-header-all').classList.toggle('page-header-all--active');
}

$(".about__items[data-type='background']").each(function(){
    var $bgobj = $(this);

    $(window).scroll(function(){
        var yPos = -($(window).scrollTop() / $bgobj.data("speed"));
        var coords = "50%" + yPos + "px";
        $bgobj.css("background-position", coords);

    });
});

});

$(document).ready(function(){

  var gallery_large = $('#gallery_large');
  gallery_large.owlCarousel({
    items: 1,                 // одновременно 1 миниатюра
    //loop: true,               // включаем петлю
    //center: true,             // центрируем активную миниатюру
    //mouseDrag: true,         // отключаем перетаскивание мышом
    dots: false,
  });

  // Галерея на главной
  var gallery = $('#gallery');
  gallery.owlCarousel({
    items: 3,                 // одновременно 3 миниатюры
    loop: true,               // включаем петлю
    center: true,             // центрируем активную миниатюру
    mouseDrag: true,         // отключаем перетаскивание мышом
    dots: false,
    nav: true,
    navText: false,
  });

  // Следим за изменением в галерее (смена активного слайда)
  gallery.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var src = gallery.find(".owl-item").eq(current).find("img").data('large-img-url');
    $('#gallery-large-img').attr('src', src );
  });

  // Следим за кликами на миниатюрах галереи
  $('#gallery img[data-large-img-url]').on('mousedown', function(){
    $('#gallery-large-img').attr('src', $(this).data('large-img-url') );
  });

});
