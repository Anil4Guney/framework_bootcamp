import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Anıl",
      lname: "Güney",
      age: 23,
      address: {},
      password: 123123123,
      tc: 11111,
    },
    theme: "dark",
    fullName: "Anıl Güney",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Anıl", "Gökhan", "Tayfun", "İlker", "Ramazan", "Kamil", "Cemil"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "Tv", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ]
  },
  getters: {
    woodItems: state => state.itemList.filter(i => i.type == "mobilya"),
    activeUser(state){
      // eslint-disable-next-line no-unused-vars
      const user = {
        ...state.user
      };
      delete user.password;
      return user;
    }
  }
});

export default store;
