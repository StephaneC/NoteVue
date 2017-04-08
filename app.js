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
    readMessages: function(){
      console.log("vue app ready");
      return JSON.parse(localStorage.getItem('messages'));
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
    },
    removeMessage: function(msg){
      this.messages.splice(this.messages.indexOf(msg), 1);
      //update localStorage
      localStorage.setItem('messages', JSON.stringify(this.messages));
    }
  }
})
