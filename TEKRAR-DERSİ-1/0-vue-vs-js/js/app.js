const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
    /* alert(todoText.value); */ /*text in içindeki değer yazdırılır  */
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);

})