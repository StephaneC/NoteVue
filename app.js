// Define a new component called todo-item
Vue.component('note-item', {
  props: ['message'],
  template: '<li>{{ message }} <button v-on:click="removeMessage(message)">delete</button></li>',
  methods: {
    removeMessage: function(msg){
      // get messages
      var messages = JSON.parse(localStorage.getItem('messages'));
      //delete it
      messages.splice(messages.indexOf(msg), 1);
      //update localStorage
      localStorage.setItem('messages', JSON.stringify(messages));
      //notify
      this.$emit('deletemsg');
    }
  }
})

new Vue({
  el: '#app',
  data: {
    title: 'Note Vue',
    message:'',
    messages: []
  },
  mounted: function () {
    console.log("vue app ready");
    this.messages = JSON.parse(localStorage.getItem('messages'));
  },
  methods: {
    updateMessages: function(){
      this.messages = JSON.parse(localStorage.getItem('messages'));
    },
    addMessage: function() {
      console.log("adding new note " + JSON.stringify(this.message));

      //display Message on screen
      if(!this.messages){
        this.messages = [];
      }
      this.messages.push(this.message);

      //add Message to localstorage
      localStorage.setItem('messages', JSON.stringify(this.messages));
    }
  }
})
