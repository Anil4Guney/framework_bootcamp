<template>
  <!-- <AppModal :onSave="onSave" :title="'AppModal Title'" :content="content"/> -->
   <AppModal>
      <template #title>
        <h3>Slot ile Gelen Title Bilgisi </h3>
      </template>  
      <!--
      <template #content>
        <p class="text-green">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Accusamus odit, id dignissimos distinctio officiis corrupti vero quia, 
          esse doloribus, sequi ipsa harum cumque voluptas. Temporibus sequi suscipit eveniet officiis laboriosam!
        </p>
      </template>  -->
      <template v-slot:content>
        <p class="text-green">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Accusamus odit, id dignissimos distinctio officiis corrupti vero quia, 
          esse doloribus, sequi ipsa harum cumque voluptas. Temporibus sequi suscipit eveniet officiis laboriosam!
        </p>
      </template>
      <template #default>
        Bu default olarak gösterilicek...
      </template>
   </AppModal>
</template>

<script>
import AppModal from '@/components/AppModal.vue';

export default {

  components: {
    AppModal
  },
  // HTML kodu göndermek istersek  <AppModal :onSave="onSave" :title="'AppModal Title'" :content="'lorem ipsum dolor sit amet'"/> da  
  // :content="'lorem ipsum dolor sit amet'" siler  :content="content" yazarız
  data () {
    return {
      content: `<h3 class = "text-red">title</h3>`
    }
  },
  methods : {
    onSave(){
      alert("Saved");
    }
  }
};
</script>

