import { createRouter, createWebHashHistory } from "vue-router";
//import HomeCmp from "@/views/Home.vue";

const routes = [
    {
        name : "HomePage",
        path : "/",
        //component : HomeCmp
        component : () => import("@/views/Home.vue")
    },
    {
        name : "AboutPage",
        path : "/hakkimda",
        //component : HomeCmp
        component : () => import("@/views/About.vue")
    },
    {
        name : "DetailPage",
        path : "/detay/:userID",
        component : () => import("@/views/Details.vue")
    }
];

const router = createRouter({
    routes,
    //mode : "hash | history",
    //history : createWebHashHistory()
    history : createWebHashHistory()
});

export default router;