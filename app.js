// Define a new component called todo-item
Vue.component('note-item', {
  props: ['message'],
  template:'<div class="card"><div class="card-content"><span class="card-title">Title</span><p>{{ message }}</p></div> <div class="card-action"><a class="waves-effect waves-light btn" v-on:click="removeMessage(message)"><i class="material-icons left">delete</i></a></div></div>',
  //template: '<li>{{ message }} <a class="waves-effect waves-light btn" v-on:click="removeMessage(message)"><i class="material-icons left">delete</i></a></li>',
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


var data = { message:'' }
Vue.component('note-add',{
  data: function () {
    return data
  },
  template:'<div>  <div class="row">          <div class="input-field col s6">            <i class="material-icons prefix">mode_edit</i>            <textarea id="icon_prefix2" class="materialize-textarea"            v-model="message" placeholder="Your note here"></textarea>            <label for="icon_prefix2"></label></div>       <a class="waves-effect waves-light btn" v-on:click="addMessage()"><i class="material-icons left">add</i></a></div></div>',
  methods:{
    addMessage: function() {
      console.log("adding new note " + JSON.stringify(this.message));

      //display Message on screen
      if(!this.messages){
        this.messages = [];
      }
      this.messages.push(this.message);

      //add Message to localstorage
      localStorage.setItem('messages', JSON.stringify(this.messages));
      //notify
      this.$emit('addmsg');

    }
  }
})

new Vue({
  el: '#app',
  data: {
    title: 'Note Vue',
    message:'',
    wannaAdd : false,
    messages: []
  },
  mounted: function () {
    console.log("vue app ready");
    this.messages = JSON.parse(localStorage.getItem('messages'));
  },
  methods: {
    updateMessages: function(){
      this.messages = JSON.parse(localStorage.getItem('messages'));
      this.wannaAdd = false;
    },
    wannaAddFct: function(){
      this.wannaAdd=!this.wannaAdd;
    }
  }
})
