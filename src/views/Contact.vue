<template>
  <div class="contact">
    <div class="container">
      <img class="image" alt="" src="../assets/maria_contact.jpg">
      <div class="form-container">
        <h1 class="title">Contact Me!</h1>
        <form class="form"  >
          <input placeholder="Name"/>
          <input placeholder="Email"/>
          <input placeholder="Subject"/>
          <textarea placeholder="Message"/>
          <button v-on:click="handleClick">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'contact',
    methods: {
      handleClick () {
        
      },
    },
  }
</script>



<style scoped>
  .contact {
    min-height: 100vh;
    display: flex;
    padding: 20px;
    padding-top: 80px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 110vh;
    /* overflow: hidden; */
  }

  .image {
    width: 45%;
    object-fit: cover;
    object-position: top;
    position: relative;
    height: 120vh;
    margin: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    width: 45%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    margin: 60px 30px;
    height: 90vh;

  }

  .form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 70px;
    padding: 40px  90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
  }

  input, textarea {
    outline: none;
    background-color: rgb(255, 255, 255);
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 3px solid rgb(255, 255, 255);
    color: black;
    margin: 0 0 10px;
    width: 100%;
    padding: 6px;
    font: normal normal normal 16px/1.4em didot-w01-italic,serif;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    transition: .3s;
    border-radius: 3px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

  textarea {
    -webkit-appearance: textarea;
    -webkit-rtl-ordering: logical;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    resize: none;
    height: 140px;
  }

  input:focus, textarea:focus {
    transition: .3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: black;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: black;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: black;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: black;
  }

  button {
    height: 30px;
    width: 100px;
    background-color: rgba(0, 0, 0, 1);
    font: normal normal normal 17px/1.4em didot-w01-italic,serif;
    border: 0;
    color: #FFFFFF;
    cursor: pointer;
    margin: 0;
    transition: .3s;
    outline: none;
    border: 1px solid black;
    border-radius: 3px;
  }

  button:focus {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  }

  button:active {
    box-shadow: none;
    transition: .3s;
  }


</style>