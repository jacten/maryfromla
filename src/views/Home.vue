<template>
  <div class="home">
    <div class="image-container">
      <img class="image" alt="" src="../assets/maria_main3.jpg">
      <div class="title">Mary From LA</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'home',
}
</script>

<style scoped>

  img {
    /* -webkit-transform: scaleX(-1);
    transform: scaleX(-1); */
  }
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
  position: fixed;
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

  /* Mobile */
  @media only screen and (max-width : 600px) {

  }

</style>
