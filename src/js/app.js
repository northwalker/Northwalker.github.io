/*
 * --------------------------
 * app.js
 * --------------------------
 */

import '../scss/app.scss'
import favicon from '../img/64x64.png'
// import './lib/googleMap.js'        // use webpack entry inject
// import './lib/particles.js'        // use webpack entry inject
import particlesConfig from './lib/particles.config.js'
import smoothScrolling from './lib/smoothScrolling.js'

/**
 * initParticlesJS
 * @constructor
 */
function initParticlesJS () {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)) */
  // particlesJS.load('js-particles', particlesConfigPath, function () {
  //   console.log('callback - particles.js config loaded')
  // })

  // eslint-disable-next-line no-undef
  particlesJS('js-particles', particlesConfig)
}

/**
 * initGoogleMap
 * @constructor
 */
function initGoogleMap () {
  /* eslint-disable */
  if (typeof (google) == 'undefined')
    return;

  const mapElement = document.querySelector('#map');
  mapElement.style.height = '100vh';

  const myMapLatLng = { lat: 25.023739, lng: 121.553004 };           // Liuzhangli Station
  const myMapJourneyKaffe = { lat: 25.080642, lng: 121.5660205 };    // Journey Kaffe
  const myMapCenter = { lat: 25.0513848, lng: 121.5475527 };         // Taipei Arena

  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 13,
    center: myMapCenter,
    draggable: false,
    // disableDefaultUI: true,
    scrollwheel: false,
    streetViewControl: false
  })

  const marker = new google.maps.Marker({
    position: myMapJourneyKaffe,
    map: map,
    title: 'Hello, visitor of Northwalker!'
  })

  // Add resize reload event
  google.maps.event.addDomListener(window, 'resize', function () {
    // const center = map.getCenter()
    // console.log('center', center)
    // console.log('resize')
    map.setCenter(myMapCenter)
  })

  /* eslint-enable */
}

/**
 * initFavicon
 * @constructor
 */
function initFavicon () {
  document.querySelector('[rel=icon]').href = favicon || 'favicon.ico'
}

/**
 * initHeaderLinks
 * @constructor
 */
function initHeaderLinks () {
  const links = document.querySelectorAll('.link')
  Object.keys(links).map(function (i) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault()
      smoothScrolling(links[i], 15)
    })
  })
}

/**
 * init
 * @constructor
 */
function init () {
  const logsStyleString = 'color: #4994F2; font-size: 24px; font-weight: bold;'
  // eslint-disable-next-line no-console
  console.log('%c Hello! ^________________^', logsStyleString)
  // eslint-disable-next-line no-console
  console.log('%c Greeting from Northwalker.', logsStyleString)
  // initFavicon()
  initParticlesJS()
  initHeaderLinks()
  initGoogleMap()
}

/**
 * headerOnScroll
 * @constructor
 */
function headerOnScroll () {
  if (!window.headerElement) {
    window.headerElement = document.querySelector('#header')
  }

  if (window.pageYOffset === 0) {
    window.headerElement.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  } else if (window.pageYOffset > 100) {
    window.headerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  }
}

window.onload = function () {
  init()
}

window.onresize = function () { }

window.onscroll = function () {
  headerOnScroll()
}
