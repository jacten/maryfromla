<template v-on:scroll.native="handleScroll">
  <div class="home">
    <div class="image-container">
      <img class="image" alt="" src="../assets/maria_main.jpg">
      <div class="title">Mary From LA</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'


export default {
  name: 'home',
  methods: {
    handleScroll () {
      document.querySelector('.title').style.top = 1.4 * window.scrollY + 110 + 'px';
      // document.querySelector('.image-container').style.maxHeight = 1.2 * window.scrollY + 800 + 'px';
    },
  },
  created () {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 5, {leading: true, trailing: true}));
  },
  destroyed () {
    window.removeEventListener('scroll', _.throttle(this.handleScroll, 5, {leading: true, trailing: true}));
  }
}
</script>

<style scoped>
  .home {
    min-height: calc(100vh - 100px);
  }

  .image-container {
    max-height: 110vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 30px;
    position: relative;
    top: 0px;
    overflow: hidden;
  }

  .image {
    top: -80px;
    max-width: 100%;
    min-height: calc(120vh + 80px);
    /* min-height: calc(100vh - 100px); */
    object-fit: cover;
    position: relative;
  }

  .title {
  font-family: 'Major Mono Display', monospace;
  position: absolute;
  left: 30px;
  top: 110px;
  color: white;
  font-size: 100px;
  font-weight: 800;
  width: 100px;
  animation: fade-in ease 2s forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

    /* Tablet */
  @media only screen and (max-width : 1040px) and  (min-height: 1000px) {
    .home, .image-container {
      height: 100vh;
    }

 
  }

  /* Desktop */
  @media only screen and (max-width : 600px) {

  }

</style>
