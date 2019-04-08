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
      return this.$route.path !== '/';
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

  .router-link-exact-active {
   
    color: goldenrod;
  }

  a {
  color: rgb(27, 27, 27);
  text-decoration: none; /* no underline */
  transition: .1s;
  }

  a:hover {
    /* color: rgb(194, 167, 50); */
     text-decoration: underline;
     text-decoration-color: rgb(118, 227, 231);
  }

  .logo {
    position: absolute;
    left: 30px;
    top: 6px;
    color: rgb(202, 202, 202);
    font-size: 22px;
    font-weight: 800;
    width: 10px;
  }

</style>
