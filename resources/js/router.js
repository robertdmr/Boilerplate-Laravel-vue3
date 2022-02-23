import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/pages/Home.vue";
import Products from "./components/pages/Products.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;