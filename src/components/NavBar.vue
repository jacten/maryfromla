<template>
  <div id="nav" class="container">
    <router-link v-if="getRoute()" class="logo" to="/">Mary From LA</router-link>
    <div class="navbar">
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {

  },
  methods: {
    getRoute: function() {
      // return this.$route.path !== '/';
      return true
    }
  }
}
</script>


<style scoped>
  .container {
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .navbar {
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

  .router-link-exact-active:not(.logo) {
   text-decoration: underline;
  }

  a {
  color: rgb(27, 27, 27);
  text-decoration: none; /* no underline */
  transition: .1s;
  }

  a:hover:not(.logo) {
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
    color: rgb(209, 209, 209);
    font-size: 22px;
    font-weight: 800;
    width: 10px;
  }

</style>
