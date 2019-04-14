<template>
  <div class="about">
    <div class="container">
      <div class="text">
        <h1 class="title">About Me</h1>
        <div class="message">
          Growing up in Russia, I always dreamed of moving to Los Angeles. And after I first visited the first time I came up with MaryFromLA even though I'm really <span class="from">from</span> Russia.
          <br />
          <br />
          <!-- Growing up in Russia, I was excited by American Culture. I listened to American Music and all of my devices were switched to using English. When I had a chance to go there and visit LA I decided I want to live here. That how I came up with the nick name Mary From LA. 
          <br />
          <br /> -->
          I am a freelance model working and living in Los Angeles. I am also a full time student on the path to becoming a registered nurse. Feel free to reach out to me with any potential modeling oppertunities or just to say hi!
        </div>
      </div>
      <div class="images">
        <img class="image" alt="" src="../assets/m6.jpg">
        <img class="image" alt="" src="../assets/m8.jpeg">
        <img class="image" alt="" src="../assets/m7.jpeg">
      </div>

    </div>
  </div>
</template>

<style scoped>
  .from {
    font-style: italic;
  }

  .about {
    padding-top: 80px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    
  }

  .images {
    display: flex;
    /* margin-right: 100px; */
  }

  .image {
    width: 18vw;
    object-fit: cover;
    height: 100vh;
  }

  .text {
    max-width: 400px;
    max-height: 600px;
    background-color: rgba(245, 245, 245, 0.815);
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin: 30px auto;
    height: 80vh;

  }
    .title {
    font-size: 50px;
    padding: 40px  90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Major Mono Display', monospace;
    font-weight: 100;
  }

  .message {
    margin: 0px 60px;
    line-height: 1.5;
  }


    /* Tablet */
  @media only screen and (max-width : 1040px) {
    .images {
      max-width: 50vw;
    }
    .about, .container {
      height: 100vh;
      max-width: 100vw;
    }

    .text {
      max-width: 40vw;
      max-height: 600px;
    }

    .message {
      font-size: 14px;
      margin: 0 40px;
    }

  }

  @media only screen and (max-width : 1040px) and  (min-height: 1000px) {
    .text {
      margin: auto;
      position: relative;
      top: -40px;
    }
    .message {
      font-size: 16px;
    }
  }


  /* Mobile */
  @media only screen and (max-width : 600px) {
    .image {
      display: none;
    }
    .text {
      margin: auto;
      max-width: 90vw;
      position: relative;
      top: -40px;
    }
  }

    /* XS Mobile */
  @media only screen and (max-height : 600px) {
    .message {
      font-size: 12px;
    }
  }

</style>