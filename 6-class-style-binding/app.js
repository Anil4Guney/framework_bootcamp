const app = Vue.createApp({
    data() {
        return {
            showBorder : false,
            boxClass : "border red",
            redBG : false,
        };
    },
    computed : {
        boxClass(){
            return { border : this.showBorder, red : this.redBG };
        },
    },

}).mount("#app")