import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register";
import Login from "@/views/Login";
import About from "@/views/About";

Vue.use(VueRouter);

// lazy import for "complex" pages (they load separately)
const posts = () => import(/* webpackChunkName: "about" */ "../views/Blog.vue");

const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/",
    name: "posts",
    component: posts
  },
  {
    path: "*",
    component: posts
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

export default router;
