import Vue from "vue";
import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter";

Vue.use(VueRouter);
const router = new VueRouter({
    mode:"history",
    routes: [pageRouter],
    base: '/Do_It_Vue/', 
})
export default router;