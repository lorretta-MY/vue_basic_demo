import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "@/layout/index.vue";
import demo from "./modules/demo.js";

Vue.use(VueRouter);
const originalPath = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPath.call(this, location).catch((err) => console.log(err));
};
const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    // redirect: "/index",
    children: [
      {
        path: "to-login",
        name: "toLogin",
        component: () => import("../views/About.vue"),
        meta: {
          title: "登录页",
        },
      },
      ...demo,
    ],
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: "登录页",
    },
  },
  {
    path: "/401",
    name: "401",
    component: () => import("../views/error/401.vue"),
    meta: {
      title: "401出错页",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/error/404.vue"),
    meta: {
      title: "404出错页",
    },
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/error/404.vue"),
    meta: {
      title: "404出错页",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
