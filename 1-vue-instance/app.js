const app = Vue.createApp({
    data(){
        return {
            title : "Vue.js Bootcamp 1.gün",
            content : "Lorem ipsum dolor sit amet...",
            eduflow : {
                title : "Müfredat ve açıklamalar için tıklayınız",
                target : "_blank",
                url : "https://eduflow.kablosuzkedi.com",
                alt : "mufredat-kablosuzkedi-vue-bootcamp",
            },
            owner : "Pogaca",
            coords : {
                x : 0,
                y : 0,
            },
        };
    },
    methods : {
        changeTitle(pTitle){ /*içeri pTitle yazmazsak */
            /* this.title = "Bu değişmiş bir title bilgisi"; */
            this.title = pTitle;
        },
        /*
        updateCoords() {
            console.log("Update Coords");
        }, 
        */

        /*mouse event yapmak */
        /*  böylece oluşan alanın kordinatlarını alabiliriz

        updateCoords(event) {
            console.log("event");
        },        
        */
         
        /* x y kordinatları yazdırmak istersek */

        updateCoords(message, event) {
            // console.log(message, event.x, event.y);
            this.changeTitle( `${event.x}`, `${event.y}`); //methods heryerde kullanılabilir
            this.coords = {
                x : event.x,
                y: event.y,
            };
        }, 


    },
}).mount("#app");


// Vue2 Version
// new Vue({
// el : "#app",  -> mount ile el arasında bir fark yok aynısı
//      data : {

//      }    
// })