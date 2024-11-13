$(function () {

  "use strict"

  // Backtotop JS
  $(".backtotop i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    if (scrolling > 20) {
      $(".backtotop i").fadeIn(500)
    } else {
      $(".backtotop i").fadeOut(500)
    }
  })

  // preloader js
  setTimeout(function () {
    $("#loader").fadeToggle()
  }, 1000)
})