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

});