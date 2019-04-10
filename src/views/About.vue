<template>
  <div class="about">
    <div class="container">
      <div class="text">
        <h1 class="title">About Me</h1>
        <div class="message">
          Growing up in Russia, I always dreamed of moving to Los Angeles. And after I first visited the first time I came up with MaryFromLA even though I'm really from Russia. 
          <br />
          <br />
          Growing up I was excited by American Culture. I listened to American Music and all of my devices were switched to using English. When I had a chance to go there and visit LA I decided I want to live here. That how I came up with the nick name Mary From LA. 
        </div>
      </div>
      <div class="images">
        <img class="image" alt="" src="../assets/maria_about_1.jpg">
        <img class="image" alt="" src="../assets/maria_about_2.jpg">
        <img class="image" alt="" src="../assets/maria_about_3.jpg">
      </div>

    </div>
  </div>
</template>

<style scoped>
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
    background-color: rgba(245, 245, 245, 0.815);
    display: flex;
    flex-direction: column;
    width: 40%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin: 30px 60px;
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

</style>