(function () {
  'use strict';

  var $window = $(window);
  var viewportHeight = $(window).height();
  var particlesHeight = $('#particles-js').height();
  if (particlesHeight < viewportHeight) {
    // Dynamic update height
    $('#particles-js').height(viewportHeight);
  }

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './src/json/particlesjs-config.json', function () {
    // console.log('callback - particles.js config loaded');
  });


  $(window).scroll(function () {

    if ($window.scrollTop() > 100 && $window.width() > 768)
      $('.nw-navigation').addClass('nw-navbar-shadow');
    else
      $('.nw-navigation').removeClass('nw-navbar-shadow');

    if ($window.scrollTop() > 800 || $window.width() <= 768)
      $('.nw-navigation').addClass('nw-navbar-shadow-2x');
    else
      $('.nw-navigation').removeClass('nw-navbar-shadow-2x');

    if ($window.scrollTop() > 1500) {
      $('.contact-container').css('visibility', 'visible');
      $('.contact-container').addClass('animated flipInX');
    }

    // writePosition();

  });

  $('.goToHome').on('click', function () {
    // $body.animate({
    //   scrollTop: 0
    // }, 600);
    $('html, body').animate({
      scrollTop: $('#Home').offset().top
    }, 600);

    return false;
  });
  $('.goToAbout').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#About').offset().top
    }, 600);
    return false;
  });
  $('.goToSkill').on('click', function () {

    $('html, body').animate({
      scrollTop: $('#Skill').offset().top - 60
    }, 600);
    return false;
  });
  $('.goToContact').on('click', function () {

    $('html, body').animate({
      scrollTop: ( $('#Contact').offset().top - 420 )
    }, 600);
    return false;
  });

  function initNavigation() {

    if ($window.width() <= 768) {
      $('.nw-navigation-list').hide();
      $('.nw-navigation-brand-list').show();

      $('.nw-navigation').addClass('nw-navbar-shadow-2x');
    }
    else {
      $('.nw-navigation-brand-list').hide();
      $('.nw-navigation-list').show();
    }
  }

  initNavigation();


  $(window).resize(function () {
    if ($window.width() <= 768) {
      $('.nw-navigation-brand-list').show();
      $('.nw-navigation-list').hide();
    }
    if ($window.width() > 768) {
      $('.nw-navigation-brand-list').hide();
      $('.nw-navigation-list').show();
    }
  });

  function initMap() {
    var myMapLatLng = {lat: 25.023739, lng: 121.553004};   // Liuzhangli Station
    var myMapKaffe = {lat: 25.080642, lng: 121.5660205};   // Journey Kaffe
    var myMapCenter = {lat: 25.0513848, lng: 121.5475527}; // Taipei Arena
    var map = new google.maps.Map(document.getElementById('Map'), {
      zoom: 13,
      center: myMapCenter,
      draggable: false,
      // disableDefaultUI: true,
      scrollwheel: false,
      streetViewControl: false
    });

    var marker = new google.maps.Marker({
      position: myMapLatLng,
      map: map,
      title: 'Hello, Northwalker!'
    });

    // Add resize reload event
    google.maps.event.addDomListener(window, 'resize', function() {
      // var center = map.getCenter();
      // console.log('center', center);
      map.setCenter(myMapCenter);
    });
  }

  initMap();

  function init() {
    $('.contact-container').css('visibility', 'hidden');

    var version = $('meta[name=version]').attr('content');
    var gitHash = $('meta[name=git-hash]').attr('content');
    console.log('Ver.', version, 'Hash code:', gitHash);

    if (version && gitHash) {
      $('#version').html('Ver. ' + version + '-' + gitHash);
    }
  }

  init();


  // ------------------------------------------------------------------------
  // Test Function just to show main variables
  // ------------------------------------------------------------------------
  function writePosition() {
    var html = '';
    var viewportHeight = $(window).height();
    var top = $(window).scrollTop();
    var bottom = top + viewportHeight;

    html += 'viewport size: ' + viewportHeight + '<br>';
    html += 'top: ' + top + '<br>';
    html += 'bottom: ' + (top + viewportHeight) + '<br>';

    $('#positionInfo').html(html);
  }


})();
