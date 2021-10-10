'use strict'

var swiper = new Swiper('.blog-slider', {
    });

$(document).ready(function(){
    $(window).on("scroll", function(){
    let top = $(window).scrollTop();
    $("#css-result").css('background-position-y', "-" + top + 'px');
    });
});

$(function(){
    var shrinkHeader = 60;
     $(window).scroll(function() {
       var scroll = getCurrentScroll();
         if ( scroll >= shrinkHeader ) {
              $('.header').addClass('shrink');
              $('img').addClass('shrink-image')
           }
           else {
               $('.header').removeClass('shrink');
               $('img').removeClass('shrink-image')
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }
   });
   
$('.notify--dismissible').append('<button type="button" class="notify-close">&times;</button>');

$('.notify-close').on('click',function(){
  $(this).closest('.notify').hide();
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})