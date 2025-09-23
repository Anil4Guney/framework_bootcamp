<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis facere at accusamus molestiae. Omnis nihil nostrum neque pariatur, 
        facilis reiciendis eveniet quibusdam totam, quo impedit minima itaque! Natus, eos corporis?</p>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
    export default {
        methods : {
            goToDetails(event){
               // alert(event.target.value);
                this.$router.push(`/detay/${event.target.value}`);
                this.$router.push({ // bunun sayesinde home sayfasındaki arama yerine herhangi bir şey yazınca aboutpage e geçer  name AboutPage yazarsak
                    name : "DetailPage",
                    params : {
                        userID : event.target.value // bunun sayfasınde details sayfasındaki başlık yeni yazdığımız şeyle değişir
                    }
                });
            }
        }
    }
</script>