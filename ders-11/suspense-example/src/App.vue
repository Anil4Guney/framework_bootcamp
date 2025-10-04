<script setup>
import { defineAsyncComponent, onErrorCaptured, ref } from "vue";
//import Todos from "./components/Todos.vue";
const err = ref(null);
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));
const Users = defineAsyncComponent(() => import("./components/Users.vue"));
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
//import Users from "./components/Users.vue";


</script>

<template>
  <span v-if="err" class="error"> {{ err }}</span>
  <suspense v-else>
    <template #default>
      <div>
        <Users/>
        <hr/>
        <Todos/>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
 <!-- <Users/> -->
 <!-- <hr /> -->
  
</template>


<style scoped>

.error{color: red; font-size: 20px;}

</style>