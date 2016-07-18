(function () {
  'use strict';
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './src/main/vendor/particlesjs/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });

  /* smmoth scroll init */
  smoothScroll.init();

  var $window = $(window);

  $(window).scroll(function () {
    if ($window.scrollTop() > 100)
      $(".nw-navigation").addClass("nw-navbar-shadow");
    else
      $(".nw-navigation").removeClass("nw-navbar-shadow");

    if ($window.scrollTop() > 800)
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
      $(".nw-navigation-list").show("slow", function () {
        //
      });
    }
    else {
      $(".nw-navigation-list").hide("slow", function () {
        //
      });
    }
  });

  function initNavigation() {

    if ($window.width() < 768) {
      $(".nw-navigation-list").hide();
      $("#navigation-btn").show();
    }
    else {
      $("#navigation-btn").hide();
      $(".nw-navigation-list").show();
    }
  }

  initNavigation();

  function initMap() {
    var myLatLng = {lat: 25.058465, lng: 121.5548159};

    var map = new google.maps.Map(document.getElementById('gmap'), {
      zoom: 14,
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
