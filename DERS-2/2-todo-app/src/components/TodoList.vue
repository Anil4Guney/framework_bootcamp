<template>
    <ul>
       <!--
      <li v-for="todoItem in todoList" :key="todoItem.id" 
      class="d-felx justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button 
        @click="deleteItem(todoItem)" 
        class="sm red">Sil</button>
      </li> 
      --> 


    <!-- BURASIDA KALABALIK OLABİLİR BU YÜZDEN BURAYIDA AYIRIP SCRİPT İÇİNE ALIRIZ DAHA İYİ OLUR !!!!
      <li class="d-felx justify-content-between align-items-center">
         <span>TodoItem</span>
         <button class="sm red">Sil</button>
      </li>

    -->

    <TodoListItem v-for="i in 10" :key="i"/>

    </ul>
</template>

<script>

    import TodoListItem from "@/components/TodoListItem"
    export default {
        components : {
            TodoListItem
        },
    };

</script>




