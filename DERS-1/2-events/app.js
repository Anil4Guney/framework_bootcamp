const app = Vue.createApp({
    data() {
        return {
            fullName : "Küpeli",
        };
    },
    methods : {
        updateValue(event){
            console.log(event.target.value);  //.target.value yazarsak anlık bilgiyi alabiliriz
            this.fullName = event.target.value;
        },
    },
}).mount("#app");