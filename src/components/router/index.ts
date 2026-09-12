import { createRouter, createWebHistory } from "vue-router";
import Homapage from "../views/Homapage.vue";
import Explorepage from "../views/Explorepage.vue";
import AboutUs from "../views/AboutUs.vue";
import Loginpage from "../views/Loginpage.vue";
import SignUp from "../views/SignUp.vue";
import Profilepage from "../views/Profile.vue"; // Ensure this matches your exact filename (e.g., Profile.vue or Profilepage.vue)

const routes = [
  {
    path: "/",
    name: "home",
    component: Homapage,
  },
  {
    path: "/explore",
    name: "schools-search",
    component: Explorepage,
  },
  {
    path: "/explore/:id",
    name: "school-details",
    component: Explorepage,
  },
  {
    path: "/about-us",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/login",
    name: "login",
    component: Loginpage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Profilepage,
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard for Authentication protection
router.beforeEach((to, from, next) => {
  // Check if the user is logged in
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // If the route requires auth and the user is NOT logged in, redirect to login
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } 
  // If the user is logged in and tries to access login or signup, redirect to dashboard
  else if ((to.name === "login" || to.name === "signup") && isAuthenticated) {
    next({ name: "dashboard" });
  } 
  // Otherwise, allow the navigation
  else {
    next();
  }
});

export default router;