export default {
  inserted (el, binding) {
    // console.log('inserted', el.getBoundingClientRect())
  },
  bind (el, binding) {
    // console.log('bind')
    if (el.dataset.src) {
      const img = new Image()
      img.src = el.dataset.src
      img.onload = function () {
        // console.log('onload')
        // el.src = img.src
        el.style.backgroundImage = `url(${img.src})`
        el.style.filter = 'none'
      }
      img.onerror = (err) => {
        console.error(`Image load error ${err}`)
        //
        //
      }
    }
  },
  update (el, binding) {
    if (el.dataset.src) {
      const img = new Image()
      img.src = el.dataset.src
      img.onload = function () {
        // el.src = img.src
        el.style.backgroundImage = `url(${img.src})`
      }
      img.onerror = (err) => {
        console.error(`Image load error ${err}`)
        //
        //
      }
    }
  }
}
