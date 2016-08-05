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
  particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function () {
    // console.log('callback - particles.js config loaded');
  });


  $(window).scroll(function () {

    if ($window.scrollTop() > 100 && $window.width() > 768)
      $(".nw-navigation").addClass("nw-navbar-shadow");
    else
      $(".nw-navigation").removeClass("nw-navbar-shadow");

    if ($window.scrollTop() > 800 || $window.width() <= 768)
      $(".nw-navigation").addClass("nw-navbar-shadow-2x");
    else
      $(".nw-navigation").removeClass("nw-navbar-shadow-2x");

    if ($window.scrollTop() > 400) {
      $('#card-content').css('visibility', 'visible');
      $('#card-content').addClass('animated fadeInUp');
    }

    if ($window.scrollTop() > 1500) {
      $('.section-contact-container').css('visibility', 'visible');
      $('.section-contact-container').addClass('animated flipInX');
    }

    // writePosition();

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

  $('.goToHome').on('click', function () {
    // $body.animate({
    //   scrollTop: 0
    // }, 600);
    $('html, body').animate({
      scrollTop: $("#Home").offset().top
    }, 600);

    return false;
  });

  $('.goToAbout').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#About").offset().top
    }, 600);
    return false;
  });

  $('.goToContact').on('click', function () {

    $('html, body').animate({
      scrollTop: $("#Contact").offset().top
    }, 600);
    return false;
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

    var map = new google.maps.Map(document.getElementById('map'), {
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

  function initSkillBar() {
    $('.skillbar').each(function () {
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      }, 5000);
    });
  }

  initSkillBar();

  function init() {
    $('#card-content').css('visibility', 'hidden');
    $('.section-contact-container').css('visibility', 'hidden');
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
