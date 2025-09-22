<template>
  <div>
    <p>
      {{ $store.state.user }}
      {{ $store.state.permissions }}
<!--
      <ul v-for="permissions in $store.state.permissions" :key="permissions">
        <li>{{ permissions }}</li>
      </ul>
-->
<!--
      <ul v-for="user in $store.state.userList" :key="user">
        <li>{{ user }}</li>
      </ul>  
-->
<!--
      <ul v-for="(item,index) in $store.getters.woodItems" :key="index">
        <li>{{ item.title }}</li>
      </ul>  
-->
      <ul v-for="(item,index) in woodItems" :key="index">
        <li>{{ item.title }}</li>
      </ul>  

      {{ $store.state.fullName }}
      <button @click="updateName">Full Name Bilgisini Değiştir.</button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  created() {
    console.log(this.$store.state.person);
    //console.log(this.$store.state.itemList.filter(i => i.type == "mobilya"));
    console.log(this.$store.getters._woodItems)
    //console.log(this.$store.getters.activeUser)
    console.log('this.activeUser :>> ', this.activeUser);
  },
  methods : {
    updateName(){
      this.$store.state.itemList.push( { id: 6, title: "Raf", type: "mobilya"});
      this.$store.state.fullName = new Date().getTime();
    }
  },
  computed : {
//    ...mapGetters(["woodItems", "activeUser"]),
    ...mapGetters({ 
      woodItems : "_woodItems",
      activeUser : "_activeUser"
    })
  //  customComputed(){
//
//    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
