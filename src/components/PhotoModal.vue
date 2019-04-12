<template>
  <div
    class="modal" 
    v-bind:class="{ openModal: open }" 
    v-on="focus" 
    v-on:keyup.esc="close" 
    v-on:keyup.arrow-right="clickRight" 
    v-on:keyup.arrow-left="clickLeft"
    >
    <div>
      <img :src="image"/>
      <button 
        v-bind:class="{ click: left }" 
        ref="left" 
        class="left" 
        v-on:click="decrement"
        >
        <IconLeft/>
      </button>
      <button 
        v-bind:class="{ click: right }" 
        ref="right" 
        class="right" 
        v-on:click="increment"
        >
        <IconRight/>
      </button>
      <button 
        class="x" 
        v-on:click="close"
        >
        <IconX/>
      </button>
    </div>
  </div>
</template>

<script>
  import IconLeft from '@/components/icons/IconLeft.vue'
  import IconRight from '@/components/icons/IconRight.vue'
  import IconX from '@/components/icons/IconX.vue'

  export default {
    name: 'PhotoModal',
    components: {
      IconLeft,
      IconRight,
      IconX,
    },
    props: [
      'image', 
      'open', 
      'update', 
      'close',
    ],
    data () {
      return {
        left: false,
        right: false,
      }
    },
    computed: {
      focus () {
        if (this.open) {
          this.$nextTick(() => this.$refs.right.focus())
        }
        return true;
      }
    },
    methods: {
      increment () {
        this.right = true;
        this.update(1);
        setTimeout(() => this.right = false, 201);
      },
      decrement () {
        this.left = true;
        this.update(-1);
        setTimeout(() => this.left = false, 201);
      },
      clickLeft () {
        this.$refs.left.click()
      },
      clickRight () {
        this.$refs.right.click()
      }
    }
  }
</script>

<style scoped>
  .modal {
    width: 102vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.89);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: none;
    justify-content: center;
    align-items: center;
  }

  .openModal {
    display: flex;
  }

  img {
    max-width: 60vw;
    max-height: 90vh;
  }

  button {
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    /* transition: background 250ms ease-in-out; */
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 50%; 
    height: 100px;
    width: 100px;
    background: transparent;
    transition: .4s;
    /* background: #8d72a3; */
}

button:hover {
  
}

button:focus {
    outline: none;
    /* background: #8d72a3; */
    
  }

  .click {
    animation: fade-out ease .3s forwards;
  }

  @keyframes fade-out {
    from {
      background-color: #8d72a3;;
    }
    to {
      background-color: transparent;
    }
  }

button:active {
    transition: none;
}

  .left {
    position: absolute;
    left: 100px;
    top: calc(100vh / 2 - 25px);
  }
  .right {
    position: absolute;
    right: 100px;
    top: calc(100vh / 2 - 25px);
  }
  .x {
    position: absolute;
    top: 50px;
    right: 100px;
  }

          /* iPad Pro */
  @media only screen and (max-width : 1040px) {
    .left {
      left: 20px;
    }

    .right {
      right: 20px;
    }
  }

    /* Mobile */
  @media only screen and (max-width : 600px) {
    .modal {
      display: none;
    }
  }

</style>