(function(){
  'use strict';
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });

  /* smmoth scroll init */
  smoothScroll.init();

  var $window = $(window);
  $(window).scroll(function(){
    if($window.scrollTop() > 150)
      $(".navbar-nw").addClass("navbar-nw-shadow");
    else
      $(".navbar-nw").removeClass("navbar-nw-shadow");

    if($window.scrollTop() > 800)
      $(".navbar-nw").addClass("navbar-nw-shadow-2x");
    else
      $(".navbar-nw").removeClass("navbar-nw-shadow-2x");

  });



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
