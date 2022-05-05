/**
 * @Project: study-vue2
 * @File:router
 * @Dsc: 路由
 * @Author wjz
 * @CreateDate 2022/5/5 17:05
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '',
        redirect: '/main',

    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('@/views/main/index')
    },

]

const router = new Router({
    routes // (缩写) 相当于 routes: routes
})

export default router
