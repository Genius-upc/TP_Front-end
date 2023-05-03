import Home from '../components/Home.vue'
import Header from "@/components/Header.vue";
import NotFound from "@/components/NotFound.vue";
import { createRouter, createWebHashHistory } from 'vue-router'

import UserEditForm from "@/components/user-edit-form.vue";
import ListUser from "@/components/user-list.vue"
import UserCreateForm from "@/components/user-create-form.vue";


const routes = [
    {path: '/', component: Home},
    { path: '/User', component: UserCreateForm },
    { path: '/User/:id', component: UserEditForm, name: 'user', },
    { path: '/ListUser', component: ListUser },
    { path: '/:catchALL(.*)', component: NotFound },
    { path: '/Header', component: Header },

    {

        path: '/signUp',
        name: "signUp",
        component: () => import('@/components/security/pages/SignUp.vue')
    },
    {
        path: '/signIn',
        name: "signIn",
        component: () => import('@/components/security/pages/SignIn.vue')
    }
]
//seccion de libreria de router
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`

})
export default router;