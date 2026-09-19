import { createRouter, createWebHistory } from "vue-router";
import Homapage from "../views/Homapage.vue";
import Explorepage from "../views/Explorepage.vue";
import AboutUs from "../views/AboutUs.vue";
import Loginpage from "../views/Loginpage.vue";
import SignUp from "../views/SignUp.vue";
import Profilepage from "../views/Profile.vue";
import Viewdetailspage from "../views/Viewdetailspage.vue";
import Contectpage from "../views/Contectpage.vue";
import Favorites from "../views/Favorites.vue"; //

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
    component: Viewdetailspage,
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
  {
    path: "/contact",
    name: "contact",
    component: Contectpage,
  },
  // <-- 2. ADDED FAVORITES ROUTE HERE -->
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
    meta: { requiresAuth: true } // Protects the page so only logged-in users can see it
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // --- ADDED SCROLL BEHAVIOR HERE ---
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If the user uses the back/forward buttons, return to where they were
      return savedPosition;
    } else {
      // Otherwise, always scroll to the very top of the new page
      return { top: 0 };
    }
  }
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
  else {
    next();
  }
});

export default router;