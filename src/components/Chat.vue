<template>
<div class="body1">
     <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
    <a class="navbar-brand abs" href="#">
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/fire_1f525.png" alt="logo" style="width:40px;">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="collapsingNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <h5>Logged In:&nbsp;&nbsp;</h5>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
               <h5>{{name}}</h5>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <form @submit.prevent="logout">
          <button class="button" style="vertical-align:middle" type="submit"><span>Logout</span></button>
                </form>
              
            </li>
        </ul>
    </div>
</nav>

  <div class="chat container">
  
    <div class="row">
      <div class="col s12">
        <div class="center">
          <div class="logos">
            <img src="../assets/vue.svg"><span>+</span>
            <img src="../assets/firebase.svg">
            <h2 class="center ">Fire🔥Chat</h2>
            
          </div>
        </div>
        <div class="tagg1">
      <vue-typed-js :strings="['awesome', 'brilliant','fun']" :loop="true" @onComplete="doSmth()">
      <h4>A realtime <span class="typing"></span> chatting system!</h4>
      </vue-typed-js>
      </div>
        <div class="card">
          <div class="card-content">
            <div class="msg">
            <ul class="messages" v-chat-scroll>
              <li v-for="message in messages" :key="message.id">
                <span class="orange-text name">{{ message.name }}</span>&nbsp;&nbsp;
                <span class="grey-text text-darken-3">{{ message.content }}</span>
                <span class="grey-text time">{{ message.timestamp }}</span>
              </li>
            </ul>
          </div>
          </div>
          <div class="card-action">

            <NewMessage :name="name" />

          </div>
        </div>
        
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s8">
       
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import db from '@/firebase/init';
import moment from 'moment';

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    logout(){
      window.location.href = "http://localhost:8081";
    }

  },

  // for fetching data from backend
  created() {
    const ref = db.collection('messages').orderBy('timestamp');
    // to retrieve changed fields
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll'),
          });
        }
      });
    });
  },
};
</script>

<style lang="scss">
.logos {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  background-color:  white;
  align-items: center;
  img {
    height: 40px;
    max-width: 100%;
  }
  span {
    margin-left: 5px;
    margin-right: 10px;
  }
}
.chat {
  h2 {
    margin-left: 20px;
    font-size: 2.6em;
    margin-bottom: 35px;
  }
  span {
    font-size: 1.4em;
  }
  .time {
    display: block;
    font-size: 0.8em;
  }
}

.messages {
  max-height: 200px;
  padding-top: 40px;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
p {
  font-size: 0.8em;
  padding: 24px;
}
.body1{
 background-image: linear-gradient(45deg, hsl(30,92,50), #4F2AE3);
  padding-bottom: 108px;
  text-align: center;
  justify-content: center;
}
.tagg1{
  color:white;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-left: 25%;
}
button{
    padding: 10px 20px;
    text-align: center;
    justify-content: center;
    color:#52BE80;
    font-size: 16px;
    background-color: #fff; 
     border-radius: 25px;
  text-decoration: none;
  width: 150px;
   border: none;
 box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  cursor: pointer;
  margin: 40px;
}
.mee button:hover{
  background-color: #fff;
  color:#52BE80;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
button:hover {
  background-color:#DDD9D0;  /* Green */
  color: hsl(30,92,50); ;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

}
</style>
