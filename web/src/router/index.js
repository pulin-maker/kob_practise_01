import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from "../views/pk/PkIndexView.vue";
import RankListIndexView from "../views/ranklist/RankListIndexView.vue"
import NotFoundView from "../views/error/NotFound.vue"
import RecordIndexView from "../views/record/RecordIndexView.vue"
import UserBotIndexView from "../views/user/bot/UserBotIndexView.vue"

const routes = [
  {
    path: '/',
    name: "home",
    redirect: '/pk/'
  },
  {
    path: '/pk/',
    name: "pk_index",
    component: PkIndexView
  },
  {
    path: '/ranklist/',
    name: "ranklist_index",
    component: RankListIndexView
  },
  {
    path: '/404/',
    name: "not_found_index",
    component: NotFoundView
  },
  {
    path: '/record/',
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: '/user/bot/',
    name: "user_bot_index",
    component: UserBotIndexView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
