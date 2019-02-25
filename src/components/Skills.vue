<template>
  <div class="skills">
    <h1 class="title">Skills with </h1>
    <div class="cards">
      <!--  -->
      <div key="Programming" class="card">
        <div class="icon"><i class="fas fa-code"></i></div>
        <h2 class="title">Programming Languages</h2>
        <div class="content">
          <div>JavaScript (ES6, ES7)</div>
          <div>NodeJS</div>
          <div>PHP</div>
        </div>
      </div>
      <!--  -->
      <div key="Frameworks" class="card">
        <div class="icon"><i class="fas fa-terminal"></i></div>
        <h2 class="title">Frameworks and Libraries</h2>
        <div class="content">
          <div>Vue.js</div>
          <div>React.js</div>
          <div>jQuery</div>
          <div>Express.js, Loopback.js</div>
          <div>Higncharts.js, Chart.js</div>
        </div>
      </div>
      <!--  -->
      <div key="Markup" class="card">
        <div class="icon"><i class="fas fa-paint-brush"></i></div>
        <h2 class="title">Markup and UI template</h2>
        <div class="content">
          <div>HTML5</div>
          <div>CSS3</div>
          <div>SASS/SCSS</div>
          <div>PostCSS</div>
          <div>Bootstrap</div>
          <div>Material Dedign</div>
        </div>
      </div>
      <!--  -->
      <div key="Devleopment" class="card">
        <div class="icon"><i class="fas fa-code-branch"></i></div>
        <h2 class="title">Devleopment and CI/CD</h2>
        <div class="content">
          <div>Webpack</div>
          <div>gulp</div>
          <div>git / gitflow</div>
          <div>GitHub</div>
          <div>CitLab CI</div>
          <div>Circle CI</div>
        </div>
      </div>
      <!--  -->
      <div key="CICD" class="card">
        <div class="icon"><i class="fas fa-database"></i></div>
        <h2 class="title">Backend</h2>
        <div class="content">
          <div>Firebase</div>
          <div>CirRESTful API</div>
          <div>Ngnix</div>
          <div>MySQL</div>
          <div>Linux / Ubuntu</div>
        </div>
      </div>
      <!--  -->
      <div key="Experience" class="card">
        <div class="icon"><i class="fas fa-book"></i></div>
        <h2 class="title">Experience</h2>
        <div class="content">
          <div>SEO</div>
          <div>RWD</div>
          <div>PWA</div>
          <div>Structure Data / JSON+LD</div>
          <div>GA / GTAG</div>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="back">
      <a class="btn-link" title="profile" @click="$emit('changeView', 'Profile')">Profile</a>
      <a class="btn-link" title="about" @click="$emit('changeView', 'About')">About</a>
      <a class="btn-link" title="contact" @click="$emit('changeView', 'Contact')">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped lang="scss">
.skills {
  .title {
    text-align: center;
    animation: fade 0.5s 0s 1 ease;
  }
  .cards {
    text-align: center;
    animation: fade-up .5s 0s 1 linear;
    .card {
      display: inline-block;
      vertical-align: top;
      width: 265px;
      height: 360px;
      margin: 16px;
      background-color: #ffffff;
      border: solid 1px #dddddd;
      transition: all 0.5s ease;
      &:hover {
        border: solid 1px #ffffff;
        box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8);
        /* box-shadow:  0 4px 4px rgba(1,67,163,0.24), 0 0 4px rgba(1,67,163,0.12), 0 6px 18px rgba(43,133,231,0.12); */
        text-decoration: none;
        transform: translate3d(0, -2px, 0);
      }
      & .icon {
        padding: 16px;
        font-size: 36px;
        color: #505050;
      }
      & .title {
        margin: 0;
        padding: 0 16px;
        font-size: 24px;
        font-weight: 700;
        color: #505050;
        text-align: left;
      }
      & .content {
        height: 216px;
        padding: 16px;
        font-size: 16px;
        font-weight: 500;
        // color: #505050;
        text-align: left;
        overflow: hidden;
      }
    }
  }
}
</style>
