<template>
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
}
</script>

<style scoped>
  .image-container {
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position: relative;
    top: 80px;
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
