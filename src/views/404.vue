<template>
  <div class="body">
    <router-link to="/"><h1>404: page not found</h1></router-link>
  </div>
</template>

<style scoped>
  .body {
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Major Mono Display', monospace;
    font-size: 100px;
  }

  a {
    text-decoration: none; /* no underline */
    color: white;
    transition: 1s;
  }

  a:hover {
    color: rgb(171, 150, 238);
    transition: 1s;
  }

      /* Tablet */
  @media only screen and (max-width : 1040px) and  (min-height: 1000px) {

  }

  /* Mobile */
  @media only screen and (max-width : 600px) {
    .body {
      font-size: 40px;
    }
  }
</style>
