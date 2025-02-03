import Vue from "vue";
import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter";

Vue.use(VueRouter); // Vue Router 사용 선언 (필수)

const router = new VueRouter({ // VueRouter 인스턴스 생성 (Vue 2 방식)
  mode: 'history', // 또는 'hash' 모드 (Vue 2 방식)
  base: '/Do_It_Vue/', // base URL 설정 (원하는 경우)
  routes: pageRouter, // routes 설정
});

export default router;