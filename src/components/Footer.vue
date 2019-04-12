<template>
  <div class="footer">
    <div class="links">
      <a class="insta" href="https://www.instagram.com/maryfromla/" target="_blank" rel="noopener">
        <span></span>
        <IconInsta/>
        <span>@MaryFromLA</span>
      </a>
    </div>
    <div class="copyright">
    © 2019 <a href="https://jackvaught.com">jacten</a>
    </div>
  </div>
</template>

<script>

import IconInsta from '@/components/icons/IconInsta.vue'

export default {
  name: 'Footer',
  components: {
    IconInsta,
  },
}
</script>


<style scoped>
  .footer {
    /* height: 150px; */
    /* line-height: 150px; */
    position: relative;
    background-color: #DDD6F3;
    background-image: linear-gradient(19deg, rgb(201, 188, 243) 0%, rgb(212, 140, 136) 100%);
    color: rgb(154, 134, 219);
    z-index: 1;
    border-top: 1px solid white;
  }

  a {
    color: rgb(154, 134, 219);
  }

  .insta {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    text-decoration: none; /* no underline */
    margin: 0 auto;
    width: 80vw;
  }

  .insta span {
    transition: .4s ease-in;
    margin: 10px;
    width: 0;
    overflow: hidden;
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  .insta:hover span {
    transition: .4s ease-out;
    width: 170px;
  }

  .copyright {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

      /* Tablet */
  @media only screen and (max-width : 1040px) {


  }

  @media only screen and (max-width : 1040px) and  (min-height: 1000px) {

  }


  /* Mobile */
  @media only screen and (max-width : 600px) {
    .insta:hover span {
      transition: .4s ease-out;
      width: 0px;
    }
  }

</style>
