(function () {
  'use strict';

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function () {
    // console.log('callback - particles.js config loaded');
  });

  $('.goToHome').click(function(){
    // $body.animate({
    //   scrollTop: 0
    // }, 600);
    $('html, body').animate({
      scrollTop: $("#Home").offset().top
    }, 600);

    return false;
  });
  $('.goToResume').click(function(){
    $('html, body').animate({
      scrollTop: $("#Resume").offset().top
    }, 600);
    return false;
  });
  $('.goToContact').click(function(){
    $('html, body').animate({
      scrollTop: $("#Contact").offset().top
    }, 600);
    return false;
  });

  var $window = $(window);

  $(window).scroll(function () {
    if ($window.scrollTop() > 100 && $window.width() > 768)
      $(".nw-navigation").addClass("nw-navbar-shadow");
    else
      $(".nw-navigation").removeClass("nw-navbar-shadow");

    if ($window.scrollTop() > 800 || $window.width() <= 768)
      $(".nw-navigation").addClass("nw-navbar-shadow-2x");
    else
      $(".nw-navigation").removeClass("nw-navbar-shadow-2x");
  });

  $(window).resize(function () {
    if ($window.width() > 768) {
      $("#navigation-btn").hide();
      $(".nw-navigation-list").show();
    }
    if ($window.width() < 768) {
      $("#navigation-btn").show();
      $(".nw-navigation-list").hide();
    }
  });

  $('#navigation-btn').on('click', function () {
    // $('#nw-navigation-list').show();
    if ($('.nw-navigation-list').css("display") == 'none') {
      $(".nw-navigation-list").show(300, function () {
        //
      });
    }
    else {
      $(".nw-navigation-list").hide(300, function () {
        //
      });
    }
  });

  function initNavigation() {

    if ($window.width() < 768) {
      $(".nw-navigation-list").hide();
      $("#navigation-btn").show();

      $(".nw-navigation").addClass("nw-navbar-shadow-2x");
    }
    else {
      $("#navigation-btn").hide();
      $(".nw-navigation-list").show();
    }
  }

  initNavigation();

  function initMap() {
    var myLatLng = {lat: 25.058465, lng: 121.5548159};

    var map = new google.maps.Map(document.getElementById('GoogleMap'), {
      zoom: 13,
      center: myLatLng,
      draggable: false,
      // disableDefaultUI: true,
      scrollwheel: false,
      streetViewControl: false
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello, Northwalker!'
    });
  }

  initMap();

  var wow = new WOW().init();

})();
