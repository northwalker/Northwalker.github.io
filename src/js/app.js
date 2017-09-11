/*
 * --------------------------
 * app.js
 * --------------------------
 */

import '../scss/app.scss'
import favicon from '../img/N.png'
// import './lib/googleAnalytics.js'  // use webpack entry inject
// import './lib/googleMap.js'        // use webpack entry inject
// import './lib/particles.js'        // use webpack entry inject
import particlesConfig from './lib/particles.config.js'
import smoothScrolling from './lib/smoothScrolling.js'

function initParticlesJS() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)) */
  // particlesJS.load('js-particles', particlesConfigPath, function () {
  //   console.log('callback - particles.js config loaded')
  // })
  particlesJS('js-particles', particlesConfig)
}

function initGoogleMap() {
  if (typeof (google) == 'undefined')
    return;

  const mapElement = document.querySelector('#map')
  mapElement.style.height = '100vh'

  const myMapLatLng = { lat: 25.023739, lng: 121.553004 }           // Liuzhangli Station
  const myMapJourneyKaffe = { lat: 25.080642, lng: 121.5660205 }    // Journey Kaffe
  const myMapCenter = { lat: 25.0513848, lng: 121.5475527 }         // Taipei Arena
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
    title: 'Hello, Northwalker!'
  })

  // Add resize reload event
  google.maps.event.addDomListener(window, 'resize', function () {
    // const center = map.getCenter()
    // console.log('center', center)
    // console.log('resize')
    map.setCenter(myMapCenter)
  })
}

function initFavicon() {
  document.querySelector('[rel=icon]').href = favicon || 'favicon.png'
}

function initHeaderLinks() {
  const links = document.querySelectorAll('.link');
  Object.keys(links).map(function (i) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();
      smoothScrolling(this, 15);
    });
  })
}


function init() {
  console.log('%c Hello! ^________________^', 'color: #4994F2; font-size: 24px; font-weight: bold;')
  console.log('%c Greeting from Northwalker.', 'color: #4994F2; font-size: 24px; font-weight: bold;')
  initFavicon()
  initParticlesJS()
  initHeaderLinks()
  initGoogleMap()
}

function headerOnScroll() {
  if (!window.headerElement)
    window.headerElement = document.querySelector('#header')

  if (window.pageYOffset === 0)
    window.headerElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  else if (window.pageYOffset > 20)
    window.headerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

window.onload = function (e) {
  // console.log(e)
  init()
}

window.onresize = function (e) {
  // console.log(e)
}

window.onscroll = function (e) {
  // console.log(e)
  headerOnScroll()
}
