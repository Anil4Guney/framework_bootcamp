const app = Vue.createApp({
    data(){
        return{
            counter : 0,
            counter2 : 0,
        };
    },
    methods : {
//        getCounterResult(){
//                console.log("Counter 1 çalıştı")
//            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";    // ŞÖYLE HTML YAZMAK YERİNE  {{ counter > 5 ? 'BÜYÜK' : 'KÜÇÜK' }}   
//        },                                         //  <!-- COUNTER IN DEĞERİ 5 DEN BÜYÜKSE BÜYÜK YAZSIN KÜÇÜKSE KÜÇÜK YAZSIN --> BÖYLE JS YE YAZIP  {{getCounterResult }} YAZICAN HTMLE
//        getCounter2Result(){  
//                console.log("Counter 2 çalıştı")     
//            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
//        },                                                 
    },
    // consolda her sayı arttırdığımızda sadece counter 1 den bile arttırsak consolda Counter 1 çalıştı Counter 2 çalıştı diye ikiside yazıcak bu yüzden sadece bastığımız
    // çalışsın diye DOM KULLANICAZ 


    // BUNU YAZINCA HTML DE {{ getCounter2Result() }} DA  getCounter2Result() DAKİ () SİLİCEZ
    computed : {  // computed lar bir fonksiyon gibi çalışan değişkenlerdir diyebiliriz.     
        getCounterResult(){
                console.log("Counter 1 çalıştı")
            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";    
        },    
        getCounter2Result(){  
               console.log("Counter 2 çalıştı")     
            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        },                                                             
    },
    

    // DATA da computed da bulunan bilgiyi direkt izleyebilmemizi sağlar
    watch : {
        counter(newValue, oldValue){
            console.log("Counter", oldValue, "=>" , newValue);
        },
        getCounterResult(newValue, oldValue){  
            console.log("RESULT", oldValue, "=>" , newValue);
        },
    },



   // methods : {
   //     inc(){
   //         this.counter++;
   //     },
   //     dec(){
   //         this.counter--;
   //     },
   // },            -> bunları html de  @click="inc"  @click="dec" yazarsak yaparız 
}).mount("#app");