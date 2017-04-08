new Vue({
  el: '#app',
  data: {
    title: 'Note Vue',
    message:'',
    messages: []
  },
  mounted: function () {
    console.log("vue app ready");
    messages = localStorage.getItem('messages');
  },
  methods: {
    readMessages: function(){
      console.log("vue app ready");
      return localStorage.getItem('messages');
    },
    addMessage: function() {
      console.log("adding new note " + this.message);

      //display Message on screen
      if(!this.messages){
        this.messages = [];
      }
      this.messages.push(this.message);

      //add Message to localstorage
      localStorage.setItem('messages', this.messages);
    }
  }
})
