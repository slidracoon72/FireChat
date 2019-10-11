<template>
<div class="head">
      <h2>Fire🔥Chat</h2> 
      
      <div class="container">
      <!-- <h5 class="tagg">A Realtime Chatting System!</h5> -->
      <div class="tagg">
      <vue-typed-js :strings="['fun','awesome', 'brilliant']" :loop="true" >
      <h4>A realtime <span class="typing"></span> chatting system!</h4>
      </vue-typed-js>

      </div>
      </div>
      <div class="row">
      <div class="col s12">
        <div class="center">
          <div class="logos">
            <a href="https://vuejs.org/" target="_blank"><img src="../assets/vue.svg"></a><span>+</span>
            <a href="https://firebase.google.com/" target="_blank"><img src="../assets/firebase.svg"></a>
          </div>
        </div>
        <p>Made using Vue.js and Google Firebase</p>    
      
<div class="body">
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h3>Lets Chat!</h3>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn orange">Enter Chat</button>
          <p>By : <a href="https://www.linkedin.com/in/rahul-trivedi-7b82a8173/" target="_blank">RAHUL TRIVEDI</a></p>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } });
      } else {
        this.feedback = "Please Enter Your Name!";
      }
    },
  },
};
</script>

<style lang="scss">
.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50px;
    max-width: 100%;
  }
  span {
    margin-left: 20px;
    margin-right: 20px;
  }
}

.body{
   background-image: linear-gradient(45deg, hsl(30,92,50), #4F2AE3);

}
.head{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: -10px;
  
}
.head h2{
  margin-top: -2px;
  padding: 15px;
  color: white;
  text-align: center;
  font-family: 'Tajawal', sans-serif;
  font-weight: 550;
  background-color:#343a40;
}
.welcome {
  max-width: 500px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px; 
}

.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
.tagg{
  color: hsl(153,47,48);
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-left: 25%;
  margin-bottom: 20px;
}
label{
  font-size: 25px;
}
p {
  text-align: center;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
}
h3{
  font-family: 'Raleway', sans-serif;
  color: hsl(153,47,48);
}
input{
  text-align: center;
  color:  hsl(153,47,48);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 400;
  font-size: 50px;
 
}
</style>
