<template>
  <div id="app">
    <div class="container">
      <router-view />
      <!-- <div class="copyright">&copy; Northwalker</div> -->
    </div>
  </div>
</template>

<style lang="scss">
#app {
  min-height: calc(100vh - 48px);
  margin: 24px;
  color: #505050;
  font-size: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
.container {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding: 48px;
  border: solid 1px #0088ff;
  transition: all .2s linear;
}

@media only screen and (max-width: 1439.98px) {
  .container {
    width: 976px;
    margin: 0 auto;
    padding: 24px;
    border: solid 1px #0088ff;
  }
}
@media only screen and (max-width: 1023.98px) {
  .container {
    width: auto;
    margin: 0 auto;
    padding: 24px;
  }
}
@media only screen and (max-width: 767.98px) {
  #app {
    margin: 16px;
  }
  .container {
    min-height: calc(100vh - 32px);
    padding: 16px;
  }
}
</style>
