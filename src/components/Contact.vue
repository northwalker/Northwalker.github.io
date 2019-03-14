<template>
  <div class="contact">
    <h1>Contact</h1>
    <Map />
    <p>
      mailto: <a class="email-link" title="mail-link" href="mailto:northwalker28@gmail.com">northwalker28@gmail.com</a>
    </p>
    <div class="back">
      <a class="btn-link" title="profile" @click="$emit('changeView', 'Profile')">Profile</a>
      <a class="btn-link" title="about" @click="$emit('changeView', 'About')">About</a>
      <a class="btn-link" title="skills" @click="$emit('changeView', 'Skills')">Skills</a>
    </div>
    <h2 class="hide">northwalker28@gmail.com</h2>
  </div>
</template>

<script>
import Map from '@/components/Map'
export default {
  name: 'Contact',
  components: {
    Map
  }
}
</script>

<style lang="scss" scoped>
.contact {
  animation: fade .5s 0s 1 ease;
}
</style>
