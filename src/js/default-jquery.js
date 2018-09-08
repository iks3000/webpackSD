import $ from "jquery";

$(document).ready(function(){
  $('.header__logo').click( function() {
    $(this).toggleClass('flip');
  });
});