<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <!--default functionality of vue.js-->
      <label for="new-message">New Message (Press Enter to Send):</label><br>

<!--v-model is two-way binding(read and update)-->
      <input type="text" name="new-message" v-model="newMessage">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init';

export default {
  name: 'NewMessage',
  props: ['name'],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        /* eslint-disable-next-line */
        db
          .collection('messages')
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = 'Enter a message to send!';
      }
    },
  },
};
</script>

<style lang="scss">
input {
  text-align: center;
  color:  hsl(153,47,48);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 400;
  font-size: 50px;
}
.new-message{
  text-align: center;
}
label{
  text-align: center;
}
</style>
