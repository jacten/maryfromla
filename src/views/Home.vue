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


export default {
  name: 'home',
  components: {
    InstaFeed
  },
  methods: {
    handleScroll () {
      let el = document.querySelector('.title').style.top = .8 * window.scrollY + 110 + 'px';
    },
    debounceScroll (func, limit) {
      let inThrottle
      return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit)
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.debounceScroll(this.handleScroll, 10));
  },
  destroyed () {
    window.removeEventListener('scroll', this.debounceScroll(this.handleScroll, 10));
  }
}
</script>

<style scoped>
  .image-container {
    min-height: calc(100vh);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 30px;
    position: relative;
    top: 0px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    object-fit: cover;
    /* margin: 0 120px; */
  }

  .title {
  position: absolute;
  left: 30px;
  top: 110px;
  color: white;
  font-size: 100px;
  font-weight: 800;
  width: 100px;
  }


</style>
