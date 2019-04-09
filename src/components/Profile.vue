<template>
  <div class="profile">
    <div
      v-img-loader
      class="avatar"
      data-src="https://storage.googleapis.com/northwalker/bg/greenCover.jpg"
    />
    <div class="info">
      <h1>De-Yi Huang</h1>
      <h2>Hello, I'm a front-end engineer at Taipei, Taiwan.</h2>
      <div class="links">
        <!-- <a class="icon-link" target="_blank" rel="noopener noreferrer" href="" title=""><i class="fas fa-envelope"></i></a> -->
        <!-- <a class="icon-link" target="_blank" rel="noopener noreferrer" href="" title=""><i class="fas fa-home"></i></a> -->
        <a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://github.com/northwalker" title="github">
          <i class="fab fa-github"></i>
        </a>
        <a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://codepen.io/northwalker" title="codepen">
          <i class="fab fa-codepen"></i>
        </a>
        <a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://medium.com/@northwalker" title="medium">
          <i class="fab fa-medium-m"></i>
        </a>
        <a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/northwalker28" title="twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/de-yi-huang" title="linkedin">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="email">
        <a class="email-link" title="mail-link" href="mailto:northwalker28@gmail.com">northwalker28@gmail.com</a>
      </div>
      <div class="more">
        <a class="btn-link" title="about" @click="$emit('changeView', 'About')">About</a>
        <a class="btn-link" title="skills" @click="$emit('changeView', 'Skills')">Skills</a>
        <a class="btn-link" title="contact" @click="$emit('changeView', 'Contact')">Contact</a>
      </div>
    </div>
    <div
      v-img-loader
      class="cover"
      data-src="https://storage.googleapis.com/northwalker/bg/greenCover.jpg"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import ImgLoader from '@/directives/ImgLoader'
export default {
  name: 'Profile',
  directives: {
    ImgLoader
  },
  components: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="scss">

.profile {
  .info {
    animation: fade-up .5s 0s 1 linear;
    display: inline-block;
    vertical-align: top;
    width: 320px;
    margin-right: 96px;
    text-align: left;
    .more {
      margin-top: 100px;
    }
  }
  .cover {
    display: inline-block;
    vertical-align: top;
    width: 595px;
    height: 446px;
    transition: all 0.5s linear;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #ffffff;
    background-image: url("../assets/images/green-blur.png");
    // background-image: url('https://storage.googleapis.com/static.northwalker.site/bg/greenCover.jpg');
    filter: blur(25px);
  }
}

@media only screen and (max-width: 1439.98px) {
  .profile {
    .info {
      width: 300px;
      margin-right: 24px;
    }
  }
}

@media only screen and (max-width: 1023.98px) {
  .profile {
    .info {
      .more {
        margin-top: 24px;
      }
    }
    .avatar {
      display: block;
      width: 250px;
      height: 250px;
      margin: 24px auto;
      border-radius: 50%;
      // border: solid 1px #0088FF;
      transition: all .5s linear;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: #ffffff;
      background-image: url("../assets/images/green-blur.png");
      // background-image: url('https://storage.googleapis.com/static.northwalker.site/bg/greenCover.jpg');
      filter: blur(25px);
    }
    .info {
      display: block;
      width: 100%;
      margin-right: 0;
      text-align: center;
    }
    .cover {
      display: none;
    }
  }
}
@media only screen and (max-width: 767.98px) {
  .profile {
    .avatar {
      width: 150px;
      height: 150px;
    }
  }
  .links {
    .icon-link {
      margin: 16px;
    }
  }
}
</style>
