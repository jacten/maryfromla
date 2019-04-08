<template>
  <div id="nav" class="navbar">
    <router-link class="test" to="/">MaryFromLA</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {

  }
}
</script>


<style scoped>
  .navbar {
    height: 100px;
    /* background-color: whitesmoke; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
  }

  .router-link-exact-active {
    /* text-decoration: underline; */
    color: goldenrod;
  }

  a {
  color: black;
  text-decoration: none; /* no underline */
  transition: .4s;
  }

</style>
