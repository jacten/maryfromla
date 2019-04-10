<template v-on:scroll.native="handleScroll">
  <div class="home">
    <div class="image-container">
      <img class="image" alt="" src="../assets/maria_main.jpg">
      <div class="title">Mary From LA</div>
    </div>
    <div class="links">
      <a href="https://www.instagram.com/maryfromla/" target="_blank" rel="noopener">
        <span></span>
        <IconInsta/>
        <span>@MaryFromLA</span>
      </a>
    </div>
  </div>
</template>

<script>
import IconInsta from '@/components/icons/IconInsta.vue'
import _ from 'lodash'


export default {
  name: 'home',
  components: {
    IconInsta,
  },
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

  a {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    text-decoration: none; /* no underline */
  }

  a span {
    transition: .4s ease-in;
    margin: 10px;
    width: 0;
    overflow: hidden;
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  a:hover span {
    transition: .4s ease-out;
    width: 170px;
  }

  .links {
    height: 100px;
  }


</style>
