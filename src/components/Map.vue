<template>
  <div id="map" class="map"/>
</template>

<script>
export default {
  name: 'Map',
  data () {
    return {
      map: undefined
    }
  },
  created () {},
  mounted () {
    this.loadGoggleMapSDK().then(() => {
      /* eslint-disable */
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.0390384, lng: 121.5647894 },
        zoom: 14,
        disableDefaultUI: true
      })
      /* eslint-enable */
    })
  },
  methods: {
    loadGoggleMapSDK () {
      return new Promise((resolve, reject) => {
        let srcJS = document.createElement('script')
        srcJS.async = true
        srcJS.defer = true
        srcJS.type = 'text/javascript'
        srcJS.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCaRpcxDaf1NmM2qHplTgJR_0rKioMYygI'
        document.head.appendChild(srcJS)
        srcJS.onload = () => {
          resolve()
        }
        srcJS.onerror = err => {
          // console.error('loadGoggleMapSDK onerror')
          reject(err)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
