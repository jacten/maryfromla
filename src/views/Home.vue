<template>
  <div class="home">
    <img class="image" alt="" src="../assets/maria_main.jpg">
    <div class="title">Mary From LA</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
}
</script>

<style scoped>
  .home {
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position: relative;
  }

  .image {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    /* margin: 0 120px; */
  }

  .title {
  position: absolute;
  left: 30px;
  top: 30px;
  color: white;
  font-size: 100px;
  font-weight: 800;
  width: 100px;
  }


</style>
