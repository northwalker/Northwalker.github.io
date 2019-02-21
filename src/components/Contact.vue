<template>
  <div class="contact">
    <h1>Contact</h1>
    <h2 class="hide">northwalker28@gmail.com</h2>
    <p>
      mailto: <a class="email-link" title="mail-link" href="mailto:northwalker28@gmail.com">northwalker28@gmail.com</a>
    </p>
    <div class="back">
      <a href="/" class="btn-link" title="profile">Profile</a>
      <a href="/about" class="btn-link" title="about">About</a>
      <a href="/skills" class="btn-link" title="skills">Skills</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact {
  animation: fade .5s 0s 1 ease;
}
</style>
