<template v-on:scroll.native="handleScroll">
  <div class="home">
    <div class="image-container">
      <img class="image" alt="" src="../assets/maria_main.jpg">
      <div class="title">Mary From LA</div>
    </div>
    <InstaFeed/>
  </div>
</template>

<script>
// @ is an alias to /src
import InstaFeed from '@/components/InstaFeed.vue'
import _ from 'lodash'


export default {
  name: 'home',
  components: {
    InstaFeed
  },
  methods: {
    handleScroll () {
      document.querySelector('.title').style.top = 1.2 * window.scrollY + 110 + 'px';
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
  .image-container {
    max-height: 800px;
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


</style>
