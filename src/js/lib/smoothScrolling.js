
// https://stackoverflow.com/questions/10063380/javascript-smooth-scroll-without-the-use-of-jquery
module.exports = function smoothScrolling(toElement, speed) {
  var toElementOffset = document.querySelector(toElement.getAttribute('href')).offsetTop;
  var windowPos = window.pageYOffset;
  var counter = setInterval(function () {
    if (windowPos > toElementOffset) {
      // from bottom to top
      window.scrollTo(0, windowPos);
      windowPos -= speed;
      if (windowPos <= toElementOffset) {
        // scrolling until toElementOffset is higher than scrollbar position, cancel interval and set scrollbar to element position
        clearInterval(counter);
        window.scrollTo(0, toElementOffset);
      }
    } else {
      // from top to bottom
      window.scrollTo(0, windowPos);
      windowPos += speed;
      if (windowPos >= toElementOffset) {
        // scroll until scrollbar is lower than element, cancel interval and set scrollbar to element position
        clearInterval(counter);
        window.scrollTo(0, toElementOffset);
      }
    }
  }, 1);
}
