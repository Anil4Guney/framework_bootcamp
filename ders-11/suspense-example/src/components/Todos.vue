<script setup>
import { ref } from 'vue';
const todoList = ref([]);
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => (todoList.value = json));


</script>

<template>
    <h3>Todos</h3>
    <ul>
        <li v-for="todo in todoList" :key="todo.id">
            {{ todo.title }}
        </li>
    </ul>
</template>