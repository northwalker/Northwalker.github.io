<template>
  <div class="about">
    <h1>About De-Yi Huang</h1>
    <ul>
      <li>Over 5 year+ experience in web application development from backend to frontend.</li>
      <li>Experience in responsive web design (RWD), search engine optimization (SEO), improving performance and resolving cross browser compatibility.</li>
      <li>Good knowledge of computer science, website architecture and systems. </li>
      <li>Strong troubleshooting and debugging skills, ability to predict the problems and provide advance solutions.</li>
      <li>Coordinated and worked with UI/UX designer, project manager and mobile app engineers.</li>
      <li>Enthusiastic and interested in learning the latest information technology and wireless mobile communications.</li>
    </ul>
    <div class="back">
      <a class="btn-link" title="profile" @click="$emit('changeView', 'Profile')">Profile</a>
      <a class="btn-link" title="skills" @click="$emit('changeView', 'Skills')">Skills</a>
      <a class="btn-link" title="contact" @click="$emit('changeView', 'Contact')">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
.about {
  text-align: left;
  animation: fade-up .5s 0s 1 linear;
  .back {
    margin-top: 60px;
  }
}
</style>
