<template>
  <div id="nav" class="container">
    <span v-on:click="closeHamburger">
    <router-link v-if="getRoute()" class="logo" to="/">Mary From LA</router-link>
    </span>
    <div class="navbar">
      <router-link class='link' to="/portfolio">portfolio</router-link>
      <router-link class='link' to="/about">About</router-link>
      <router-link class='link' to="/contact">contact</router-link>
    <button 
      class="hamburger" 
      v-on:click="toggleHamburger"
      >
      <IconHamburger/>
    </button>
    </div>
    <div v-on:click="toggleHamburger" v-bind:class="{ links__active: active }" class="links">
      <router-link class='hamLink' to="/portfolio">portfolio</router-link>
      <router-link class='hamlink' to="/about">About</router-link>
      <router-link class='hamlink' to="/contact">contact</router-link>
    </div>
  </div>
</template>

<script>

import IconHamburger from '@/components/icons/IconHamburger.vue'

export default {
  name: 'NavBar',
  props: {

  },
  components: {
    IconHamburger,
  },
  data () {
    return {
      active: false,
    }
  },
  methods: {
    getRoute: function() {
      return this.$route.path !== '/';
    },
    toggleHamburger: function() {
      this.active = !this.active;
    },
    closeHamburger: function() {
      this.active = false;
    },
  }
}
</script>


<style scoped>
  .container {
    position: fixed;
    z-index: 1;
    width: 100%;
    border-bottom: 1px solid rgba(177, 176, 176, 0.507);
    font-family: 'Major Mono Display', monospace;
    /* box-shadow: 0 2px 2px -2px rgba(0,0,0,.2); */
  }
  .navbar {
    width: 100vw;
    height: 80px;
    max-height: 80px;
    background-color: rgb(240, 240, 240);
    /* color: white; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 18px;
  }

  .navbar > * {
    margin: 50px;
  }

  .navbar .router-link-exact-active:not(.logo) {
   text-decoration: underline;
  }

  a {
  color: rgb(27, 27, 27);
  text-decoration: none; /* no underline */
  transition: .1s;
  }

  .navbar a:hover:not(.logo) {
    /* color: rgb(194, 167, 50); */
     text-decoration: underline;
  }

  .logo:hover {
    color: rgb(114, 114, 114);
    transition: .5s;
  }

  .logo {
    position: absolute;
    left: 30px;
    top: 6px;
    color: rgb(190, 190, 190);
    font-size: 22px;
    font-weight: 800;
    width: 10px;
  }

  .hamburger {
    display: none;
    margin-right: 20px;
  }

  .links {
    display: none;
  }

  /* Tablet */
  @media only screen and (max-width : 1040px) and  (min-height: 1000px) {

  }

  /* Mobile */
  @media only screen and (max-width : 600px) {

    .body {
      font-size: 40px;
    }

    .link {
      display: none;
    }

    .hamburger {
      display: inline;
      border: none;
      background: transparent;
    }

    .links {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      padding-top: 10px;
      background-color: rgba(240, 240, 240, 0.952);
      font-weight: 400;
      max-height: 0px;
      overflow: hidden;
      transition: .3s;
    }

    .links__active {
      max-height: 450px;
      transition: .3s;
    }

    .links a {
      height: 40px;
      margin: 40px;
      text-decoration: none;
    }
  }

</style>
