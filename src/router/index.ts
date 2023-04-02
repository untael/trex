import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
  path: '/:lang',
  component: RouterView,
}]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
