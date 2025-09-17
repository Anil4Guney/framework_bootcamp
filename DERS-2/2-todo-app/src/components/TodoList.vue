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


    <TodoListItem @delete-tod0-item="$emit('delete-tod0-item', $event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem"/>

    </ul>
</template>

<script>

    import TodoListItem from "@/components/TodoListItem"
    export default {
        props : ["myData"],
           // props : {
           //     myData :  {
           //         type: String,
           //         required: false,
           //         default : "",
           //     }
        //};

       // data(){
       //     return {
       //         myData : ""
       // 
       //     };
       //},

        components : {
            TodoListItem
        }
    };

</script>




