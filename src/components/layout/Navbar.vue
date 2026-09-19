<template>
  <header class="fixed left-0 top-0 w-full bg-white border-b border-gray-100 px-4 md:px-6 py-3 font-sans z-50 shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">

      <!-- LOGO (Left) -->
      <router-link to="/" class="flex items-center gap-3 cursor-pointer shrink-0">
        <div class="w-12 h-12 rounded-[18px] overflow-hidden shadow-sm">
          <img
            src="../image/image copy.png"
            alt="Logo"
            class="w-full h-full object-cover"
          />
        </div>
        <span class="text-2xl font-bold text-[#0F172A] tracking-tight">ScholarFinder</span>
      </router-link>

      <!-- Desktop Center Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 shrink-0">
        <router-link to="/" class="hover:text-slate-900 transition-colors">Home</router-link>
        <router-link to="/explore" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 block">
          <span>Explore</span>
        </router-link>
        <router-link to="/about-us" class="hover:text-slate-900 transition-colors">About Us</router-link>
        <router-link to="/contact" class="hover:text-slate-900 transition-colors">Contact</router-link>
      </nav>
      
      <div class="flex items-center gap-1 sm:gap-3 shrink-0">

        <!-- NEW: FAVORITE BUTTON WITH NUMBER BADGE -->
        <router-link 
          :to="isAuthenticated ? '/favorites' : '/login'"
          class="relative p-2 text-slate-400 hover:text-red-500 transition-colors focus:outline-none flex items-center justify-center rounded-full hover:bg-slate-50"
          title="Saved Schools"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          
          <!-- Number Alert Badge -->
          <span 
            v-if="savedCount > 0" 
            class="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
          >
            {{ savedCount }}
          </span>
        </router-link>

        <!-- Desktop Auth & Profile (Hidden on Mobile) -->
        <div class="hidden md:flex items-center gap-3">
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="text-slate-700 hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Log In
            </router-link>
            <router-link to="/signup" class="bg-[#009FB7] hover:bg-[#00899e] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Sign Up
            </router-link>
          </template>

          <template v-else>
            <router-link to="/dashboard" class="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors hover:bg-slate-50 pl-2 pr-3 py-1.5 rounded-lg border border-transparent hover:border-slate-200">
              <div class="w-7 h-7 rounded-full bg-[#009FB7]/10 text-[#009FB7] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span class="text-sm font-semibold hidden lg:block">Profile</span>
            </router-link>
          </template>
        </div>

        <!-- Mobile Hamburger Menu (Hidden on Desktop) -->
        <button @click="isMenuOpen = !isMenuOpen" type="button" class="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors" aria-label="Toggle Navigation">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="isMenuOpen" class="md:hidden border-t border-gray-100 pt-4 pb-6 mt-3 space-y-4 px-2 bg-white">
      <nav class="flex flex-col space-y-3 font-medium text-slate-600">
        <router-link to="/" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50">Home</router-link>
        <router-link to="/explore" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 flex items-center justify-between">
          <span>Explore</span>
        </router-link>
        <router-link to="/about-us" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50">About Us</router-link>
        <router-link to="/contact" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50">Contact</router-link>
      </nav>

      <!-- Mobile Action Buttons -->
      <div class="flex flex-col gap-2 pt-2 border-t border-slate-100 mt-2">
        <template v-if="!isAuthenticated">
          <router-link to="/login" @click="isMenuOpen = false" class="w-full text-center text-slate-700 hover:bg-slate-50 border border-slate-200 py-2 rounded-lg text-sm font-medium transition-colors">
            Log In
          </router-link>
          <router-link to="/signup" @click="isMenuOpen = false" class="w-full text-center bg-[#009FB7] hover:bg-[#00899e] text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Sign Up
          </router-link>
        </template>
        <template v-else>
          <router-link to="/dashboard" @click="isMenuOpen = false" class="w-full flex items-center justify-center gap-2 text-slate-700 hover:bg-slate-50 border border-slate-200 py-2 rounded-lg text-sm font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#009FB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            My Profile
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// UI state
const isMenuOpen = ref<boolean>(false);
const savedCount = ref<number>(0);

// Auth state
const isAuthenticated = ref<boolean>(false);

// Reusable function to check login status
const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem("isAuthenticated") === "true";
};

// Function to update the number on the heart icon
const updateSavedCount = () => {
  if (isAuthenticated.value) {
    const saved = localStorage.getItem("savedSchoolIds");
    if (saved) {
      const parsed = JSON.parse(saved);
      savedCount.value = parsed.length;
    } else {
      savedCount.value = 0;
    }
  } else {
    savedCount.value = 0;
  }
};

// 1. Check when the navbar first loads
onMounted(() => {
  checkAuthStatus();
  updateSavedCount();
  
  // Listen for custom event in case user clicks "Save" without changing page
  window.addEventListener('favorites-updated', updateSavedCount);
});

// 2. Re-check every time the URL (route) changes
watch(
  () => route.path,
  () => {
    checkAuthStatus();
    updateSavedCount();
  }
);
</script>