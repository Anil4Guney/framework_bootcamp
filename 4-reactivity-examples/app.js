const app = Vue.createApp({
    data(){
        return{
            search : "" ,
            itemList : ["elma", "armut", "kiraz", "çilek"],
           // filteredList : [],
        };
    },
    methods : {
        searchList(){
            // filteredList : [], eklersek yukaru bunları yazmamıza gerek kalmaz diğerini yazarız 
            //const filteredList = this.itemList.filter(i => i.includes(this.search));
            //console.log("filteredList :>> ", filteredList);
        //    this.filteredList = this.itemList.filter(i => i.includes(this.search));
        },
    },
    computed : {
        filteredList(){
            return this.itemList.filter(i => i.includes(this.search));
        },
    },
}).mount("#app");