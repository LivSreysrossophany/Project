import { createRouter, createWebHistory } from "vue-router";
import Homapage from "../views/Homapage.vue";
import Explorepage from "../views/Explorepage.vue";
import AboutUs from "../views/AboutUs.vue";
import Loginpage from "../views/Loginpage.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    component:Homapage ,
  },
  {
    path: "/Explore",
    component: Explorepage ,
  },
  {
    path: "/About us",
    component: AboutUs ,
  },
  {
    path: "/Login",
    component: Loginpage ,
  },
  {
    path: "/Signup",
    component: SignUp ,
  },
  

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

