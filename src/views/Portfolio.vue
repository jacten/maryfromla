<template>
  <div class="portfolio">
    <PhotoModal
      v-bind:image="modalImage"
      v-bind:open="modalOpen"
      :update="updateModal"
      :close="closeModal"
      v-if="notMobile"
      />
    <div class="columns">
    <h1 class="title">poRtfolio</h1>
      <div class="row" v-on:click="handleClick">
        <div class="column">
          <img 
            v-for="(photo, index) in column1" 
            v-lazy="photo" 
            :alt="photo" 
            :key="index"/>
        </div>
        <div class="column">
          <img 
            v-for="(photo, index) in column2" 
            v-lazy="photo" 
            :alt="photo" 
            :key="index"/>
        </div>
        <div class="column">
          <img 
            v-for="(photo, index) in column3" 
            v-lazy="photo" 
            :alt="photo" 
            :key="index"/>
        </div>
        <div class="column">
          <img 
            v-for="(photo, index) in column4" 
            v-lazy="photo" 
            :alt="photo" 
            :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PhotoModal from '@/components/PhotoModal.vue'

//modulo hack for negative looping  
function mod(n, m) {
  return ((n % m) + m) % m;
}

export default {
  name: 'portfolio',
  data () {
    return {
      column1: [
        'https://maryfromla-portfolio.s3.amazonaws.com/09172015_1137_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/09172015_1983_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/09172015_3578_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/4N7A5591_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/Maria_Venice_Beach-20_sm.jpg',
      ],
      column2: [
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF2410_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF2488_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF2871_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF3715_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/IMG_0752 (1)_sm.jpg',
      ],
      column3: [
        'https://maryfromla-portfolio.s3.amazonaws.com/IMG_5433 (1) (1)_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF3646_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF3828_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/DSCF8541 (1)_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/4N7A5657_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/IMG_8001- HQ.edit_sm.jpg',
      ],
      column4: [
        'https://maryfromla-portfolio.s3.amazonaws.com/4N7A5798_bw_crop_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/Maria-Look-1-2_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/Maria_Venice_Beach-23_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/Maria-1_sm.jpg',
        'https://maryfromla-portfolio.s3.amazonaws.com/Maria_Venice_Beach-25 (1)_sm.jpg',
      ],
      modalURLs: [],
      modalIndex: null,
      modalImage: null,
      modalOpen: false,
      notMobile: false,
    }
  },
  methods: {
    handleClick (event) {
      if (this.notMobile) {
        let src = event.srcElement.alt;
        if (src !== undefined) {
          this.modalIndex = this.modalURLs.indexOf(src)
          this.updateModal(0, src)
        }
      }
    },
    updateModal (increment, src) {
      this.modalIndex = mod(this.modalIndex + increment, this.modalURLs.length);
      let image = src || this.modalURLs[this.modalIndex]
      this.modalImage = image.slice(0, -7) + '.jpg'
      this.modalOpen = true;
    },
    closeModal () {
      this.modalIndex = null
      this.modalImage = null
      this.modalOpen = false
    },
    handleResize () {
      var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      if (width > 600) {
        this.notMobile = true;
      } else {
        this.notMobile = false;
      }
    }
  },
  components: {
    PhotoModal
  },
  mounted () {
    this.handleResize();
    this.modalURLs = [...this.column1, ...this.column2, ...this.column3, ...this.column4];
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 5px;
  }

  .column {
    -ms-flex: 25%;
    flex: 25%;
    max-width: 25%;
    padding: 0 5px;
  }

  .portfolio {
    padding-top: 80px;
    height: 100%;
    max-width: 100vw;
    margin-bottom: 80px;
  }

  .title {
    font-size: 50px;
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
    height: 100%;
    margin: 30px 30px;
    padding: 30px 40px 50px;
    background-color: rgba(245, 245, 245, 0.795);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  img {
    width: 100%;
    margin-top: 10px;
    vertical-align: middle;
    transition: .3s;
  }

  img:hover {
    transition: .3s;
    filter: opacity(40%);
  }



        /* iPad */
  @media only screen and (max-width : 800px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Mobile */
  @media only screen and (max-width : 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
    .insta:hover span {
      transition: .4s ease-out;
      width: 0px;
    }

    img:hover {
      filter: opacity(100%);
    }

    img {
      margin: 10px 0;
    }

    .columns {
      width: 100vw;
      padding: 0 0 10px 0;
      margin: 30px 0px;
      height: 100%;
    }

    .row, .column {
      padding: 0;
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