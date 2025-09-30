<template>
  <h3>{{ title }} </h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus quod provident, quae eveniet ipsa voluptatum rem sed sint incidunt ex
    recusandae, debitis reiciendis nostrum, nam minus! Expedita, cupiditate nemo.
  </p>
  <hr />
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr />
  <input type="text" v-model="searchText" />
  <p v-if="isTyping">Şu an yazıyor....</p>
</template>


<script>
import { ref } from "vue";
  export default {
    //data(){
    //  return{
    //    title : "Bu bir başlık",
    //  };
    //},
    //beforeCreate(){
    //  console.log("BC");
    //},                            BUNLARA İHTİYAÇ YOK 
    //created(){
    //  console.log("C");
    //},
    setup(){
      //console.log("S");
      const title  =  ref("Bu bir Setup başlık");
      let show = ref(true);
      const toggleIt = () => {
        show =!show;
      };
      //function toggleIt(){} bunuda yapabiliriz  const toggleIt = () => {} yerine 
      return {
        title,
        show,
        toggleIt,
      };
    },

  };
</script>