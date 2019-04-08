<template>
  <div class="instaFeed">
    <div>insta_image</div>
    <div>insta_image</div>
    <div>insta_image</div>
    <div>insta_image</div>
  </div>
</template>

<script>
export default {
  name: 'InstaFeed',
}
</script>


<style scoped>
  .instaFeed {
    min-height: 200px;
    line-height: 150px;
    background-color: whitesmoke;
    color: black;
    display: flex;
    justify-content: space-evenly;
    
  }

  .instaFeed > * {
    height: 180px;
    background-color: rgb(7, 7, 7);
    color: whitesmoke;
    width: 200px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>