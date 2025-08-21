import About from "@/pages/About.vue";
import Main from "@/pages/Main.vue"
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPage from "@/pages/PostPage.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";
import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;