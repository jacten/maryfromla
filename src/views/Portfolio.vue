<template>
  <div class="portfolio">
    <PhotoModal
      v-bind:image="modalImage"
      v-bind:open="modalOpen"
      :update="updateModal"
      :close="closeModal"
      />
    <div class="columns">
    <h1 class="title">poRtfolio</h1>
      <div class="col" v-on:click="handleClick">
        <img 
          v-for="(photo, index) in photoURLs" 
          :src="photo" 
          :alt="index" 
          :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>

import PhotoModal from '@/components/PhotoModal.vue'

const bucket = 'maryfromla-portfolio'
const images = [
'09172015_1137.jpg',
'09172015_1983.jpg',
'09172015_3578.jpg',
'4N7A5591.jpg',
'4N7A5657.jpg',
'4N7A5798_bw_crop.jpg',
'DSCF2410.jpg',
'DSCF2488.jpg',
'DSCF2871.jpg',
'DSCF3646.jpg',
'DSCF3715.jpg',
'DSCF3828.jpg',
'DSCF8541 (1).jpg',
'IMG_0752 (1).jpg',
'IMG_5433 (1) (1).JPG',
'IMG_8001- HQ.edit.jpg',
'Maria-1.jpg',
'Maria-Look-1-2.jpg',
'Maria_Venice_Beach-20.jpg',
'Maria_Venice_Beach-23.jpg',
'Maria_Venice_Beach-25 (1).jpg',
]
//modulo hack for negative looping
function mod(n, m) {
  return ((n % m) + m) % m;
}

export default {
  name: 'portfolio',
  data () {
    return {
      photoURLs: [],
      modalIndex: null,
      modalImage: null,
      modalOpen: false,
    }
  },
  methods: {
    handleClick (event) {
      this.modalIndex = Number(event.srcElement.alt);
      this.updateModal()
    },
    updateModal (increment = 0) {
      this.modalIndex = mod(this.modalIndex + increment, images.length);
      this.modalImage = `https://${bucket}.s3.amazonaws.com/${images[this.modalIndex]}`
      this.modalOpen = true;
    },
    closeModal () {
      this.modalIndex = null
      this.modalImage = null
      this.modalOpen = false
    },
  },
  components: {
    PhotoModal
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
    max-width: 100vw;
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
    height: 2300px;
    padding: 30px 40px;
    background-color: rgba(245, 245, 245, 0.795);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .col {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 2200px;
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
    filter: opacity(40%);
  }

        /* iPad Pro */
  @media only screen and (max-width : 1150px) {
    .col {
      height: 2830px;
    }

    .columns {
      width: 890px;
      height: 2850px;
    }

    .portfolio {
      margin-bottom: 10px;
    }
  }


        /* iPad */
  @media only screen and (max-width : 800px) {
    .col {
      height: 4000px;
    }

    .columns {
      width: 620px;
      height: 4040px;
    }
  }

  /* Mobile */
  @media only screen and (max-width : 600px) {
    .insta:hover span {
      transition: .4s ease-out;
      width: 0px;
    }

    img:hover {
      filter: opacity(100%);
    }

    .col {
      flex-wrap: nowrap;
      width: 100vw;
      height: 100%;
      margin-bottom: -10px;
    }

    img {
      width: 100vw;
      margin: 10px 0;
    }

    .columns {
      width: 100vw;
      padding: 0px 0px;
      margin: 30px 0px;
      /* height: 7510px; */
      height: 100%;
      margin-bottom: -10px;
    }

    .title {
      font-size: 40px;
      padding-top: 25px;
    }

    .portfolio {
      margin-bottom: 0;
    }
  }


</style>