<template>
  <div class="modal" v-bind:class="{ open: open }">
    <div>
      <img :src="image"/>
      <button v-on:click="close">close</button>
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoModal',
  props: [
    'image', 
    'open', 
    'update', 
    'close',
  ],
  methods: {
    increment () {
      this.update(1)
    },
    decrement () {
      this.update(-1)
    }
  }
}
</script>

<style scoped>
  .modal {
    width: 102vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: none;
    justify-content: center;
    align-items: center;
  }

  .open {
    display: flex;
  }

  img {
    max-width: 60vw;
    max-height: 90vh;
  }
</style>