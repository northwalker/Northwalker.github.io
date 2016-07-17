(function () {
  'use strict';
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './main/vendor/particlesjs/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });

  /* smmoth scroll init */
  smoothScroll.init();

  var $window = $(window);

  $(window).scroll(function () {
    if ($window.scrollTop() > 100)
      $(".navigation-nw").addClass("navbar-nw-shadow");
    else
      $(".navigation-nw").removeClass("navbar-nw-shadow");

    if ($window.scrollTop() > 800)
      $(".navigation-nw").addClass("navbar-nw-shadow-2x");
    else
      $(".navigation-nw").removeClass("navbar-nw-shadow-2x");
  });

  $(window).resize(function () {
    if ($window.width() > 768) {
      $("#navigation-btn").hide();
      $(".navigation-nw-list").show();
    }
    if ($window.width() < 768) {
      $("#navigation-btn").show();
      $(".navigation-nw-list").hide();
    }
  });

  $('#navigation-btn').on('click', function () {
    // $('#navigation-nw-list').show();
    if ($('.navigation-nw-list').css("display") == 'none') {
      $(".navigation-nw-list").show("slow", function () {
        //
      });
    }
    else {
      $(".navigation-nw-list").hide("slow", function () {
        //
      });
    }
  });

  function initNavigation() {

    if ($window.width() < 768) {
      $(".navigation-nw-list").hide();
      $("#navigation-btn").show();
    }
    else {
      $("#navigation-btn").hide();
      $(".navigation-nw-list").show();
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
      title: 'Hello! Northwalker!'
    });
  }

  initMap();

  var wow = new WOW().init();

})();
