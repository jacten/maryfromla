<template>
  <div class="portfolio">
    <div class="columns">
    <h1 class="title">poRtfolio</h1>
      <div class="col">
        <img v-for="(photo, index) in photoURLs" :src="photo" :alt="index" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
const bucket = 'maryfromla-portfolio'
const images = [
  '4N7A5513.jpg',
  '4N7A5540_bw.jpg',
  '4N7A5540_color.jpg',
  '4N7A5586_bw.jpg',
  '4N7A5586_color.jpg',
  '4N7A5591.jpg',
  '4N7A5620_bw.jpg',
  '4N7A5620_color.jpg',
  '4N7A5632.jpg',
  '4N7A5657.jpg',
  '4N7A5754.jpg',
  '4N7A5783.jpg',
  '4N7A5798_bw.jpg',
  '4N7A5798_bw_crop.jpg',
  '4N7A5798_color.jpg',
]
export default {
  name: 'portfolio',
  data () {
    return {
      photoURLs: [],
    }
  },
  methods: {

  },
  mounted () {
    images.forEach((image) => {
      this.photoURLs.push(
        `https://${bucket}.s3.amazonaws.com/${image}`
      )
    })
  },
  destroyed () {

  }
}
</script>

<style scoped>
  .portfolio {
    padding-top: 80px;
    height: 100%;
    width: 100%;
    margin-bottom: 80px;
  }

  .title {
    font-size: 50px;
    /* padding: 30px  90px; */
    padding-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Major Mono Display', monospace;
    font-weight: 400;
  }

  .columns {
    display: flex;
    flex-direction: column;
    width: 1160px;
    margin: 30px auto;
    height: calc(250vh + 60px);
    padding: 30px 40px;
    background-color: rgba(245, 245, 245, 0.795);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .col {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 250vh;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    width: 250px;
    object-fit:contain;
    margin: 10px;
    transition: .3s;
  }

  img:hover {
    transition: .3s;
    -webkit-box-shadow: 10px 9px 13px -1px rgba(0,0,0,0.5);
    -moz-box-shadow:    10px 9px 13px -1px rgba(0,0,0,0.5);
    box-shadow:         10px 9px 13px -1px rgba(0,0,0,0.5);
    transform:scale(1.02);
  }


</style>