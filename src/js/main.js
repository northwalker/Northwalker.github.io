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

  $(window).resize(function () {
    if ($window.width() > 768) {
      $('#navigation-btn').hide();
      $('.nw-navigation-list').show();
    }
    if ($window.width() < 768) {
      $('#navigation-btn').show();
      $('.nw-navigation-list').hide();
    }
  });

  $('#navigation-btn').on('click', function () {
    // $('#nw-navigation-list').show();
    if ($('.nw-navigation-list').css('display') == 'none') {
      $('.nw-navigation-list').show(300, function () {
        //
      });
    }
    else {
      $('.nw-navigation-list').hide(300, function () {
        //
      });
    }
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
      scrollTop: $('#Skill').offset().top
    }, 600);
    return false;
  });
  $('.goToContact').on('click', function () {

    $('html, body').animate({
      scrollTop: ( $('#Contact').offset().top - 400 )
    }, 600);
    return false;
  });

  function initNavigation() {

    if ($window.width() < 768) {
      $('.nw-navigation-list').hide();
      $('#navigation-btn').show();

      $('.nw-navigation').addClass('nw-navbar-shadow-2x');
    }
    else {
      $('#navigation-btn').hide();
      $('.nw-navigation-list').show();
    }
  }

  initNavigation();

  function initMap() {
    var myLatLng = {lat: 25.023739, lng: 121.553004};
    var map = new google.maps.Map(document.getElementById('Map'), {
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
