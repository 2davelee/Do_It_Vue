import Vue from "vue";
import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router"; // createRouter, createWebHistory import 추가
import pageRouter from "./modules/pageRouter";

Vue.use(VueRouter);

const router = createRouter({
  history: createWebHistory("/Do_It_Vue/"), // history 모드 설정
  routes: [pageRouter], // routes 설정
});

export default router;