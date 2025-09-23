export default {
    state : {
        taskList : [],
        userList : []
    },
    mutations : {
        setItem(state, item) {
            state.itemList.push(item);
        }
    },
    getters : {
        _itemList : state => state.itemList
    }
};