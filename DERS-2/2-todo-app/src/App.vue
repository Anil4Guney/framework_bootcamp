<template>
  <div class="container">

    <h3 class="text-center">Todo App</h3>
        <hr class="my-2"/>
    <!--  BU İKİ KISMI AddSection içine alıyoruz onun yerine buraya <AddSection/> YAZIYYORUZ. AMA AŞAĞIDA TANIMLADIK BUNU  YAPTIĞIMIZ ŞEY COMPANENTLERE AYIRMAK !!!
    <label for="todoText"></label> 
    <input @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız..."/>
    -->

    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />

    <!-- Aynı şeyi bunada yapıyoruz
    <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id" 
      class="d-felx justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button 
        @click="deleteItem(todoItem)" 
        class="sm red">Sil</button>
      </li>
    </ul>
    -->  

    <!--   <TodoList  @delete-tod0-item="deleteItem" :myData=" todoList " />      --> 

    <!-- BUNDADA AYNI İŞLEM
    <small class="mt-2 d-felx justify-content-end  green"> {{ todoList.length }} adet todo vardır</small>
    -->
    <!--        <ResultBar :itemCount="todoList.length" />   --> 

    <!--   <TodoList  @delete-tod0-item="deleteItem" :myData=" todoList " />    ve    <ResultBar :itemCount="todoList.length" />    <ListSection />  içine koyduk-->

    <ListSection />



  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
//import TodoList from "@/components/TodoList";     // Bunları burdan kesip ListSection içine alıyorurz.
//import ResultBar from "@/components/ResultBar";   // // Bunları burdan kesip ListSection içine alıyorurz.  
import ListSection from "@/components/ListSection";
export default {
  components: {
    AddSection,
    ListSection
//    TodoList,        Bunları burdan kesip ListSection içine alıyorurz.
//    ResultBar
  },

  created() {
 //   setTimeout(() => {
   //   this.todoList = [
     //   { id : 1, text : "Bootcamp #2"},
     //   { id : 2, text : "Bootcamp #2.1"},
     //   { id : 3, text : "Bootcamp #2.2"},
     //   { id : 4, text : "Bootcamp #2.3"},
     //   { id : 5, text : "Bootcamp #2.4"},
     //   { id : 6, text : "Bootcamp #2.5"},

  //    ];
 //   }, 2000);

  },


  // BUNU TodoList içinede alabiliriz 
  data(){
    return{
      provideData : {
        todoList : [
          { id : 1, text : "Bootcamp #2"},
          { id : 2, text : "Bootcamp #2.1"},
          { id : 3, text : "Bootcamp #2.2"},
          { id : 4, text : "Bootcamp #2.3"},
          { id : 5, text : "Bootcamp #2.4"},
          { id : 6, text : "Bootcamp #2.5"},
        ]
      }

    };
  },


  provide () {
    return {
      provideData : this.provideData,
      deleteItem : this.deleteItem
    };
  },



  methods : {
    testEvent(data){
      alert(data);
    },
    deleteItem(todoItem){
    this.provideData.todoList = this.provideData.todoList.filter((t) => t != todoItem);  // BUNUN DAHA UZUN BAŞKA VERSİYONU ŞÖYLE ;
      // const matchedIndex = this.todoList.findIndex(i => == todoItem);
      // if(matchedIndex > -1){
      //    this.todoList.splice(this.todoList[matchedIndex], 1);
    },
    addNewTodo(todo){
        this.provideData.todoList.push({
          id : new Date().getTime(),
          text : todo
      });
    },
  }  
};

</script>