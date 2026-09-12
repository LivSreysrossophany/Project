<template>
  <header class="w-full bg-white border-b border-gray-100 px-4 md:px-6 py-3 font-sans relative">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      
      <!-- Logo / Home Link -->
      <router-link to="/" class="flex items-center gap-3 cursor-pointer shrink-0">
        <div class="bg-[#009FB7] p-2.5 rounded-xl text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <span class="text-xl font-bold text-slate-800 tracking-tight">EduFind</span>
      </router-link>

      <!-- Desktop Center Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 shrink-0">
        <router-link to="/" class="hover:text-slate-900 transition-colors">Home</router-link>
        <router-link to="/explore" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 block">
          <span>Explore</span>
        </router-link>
        <router-link to="/about-us" class="hover:text-slate-900 transition-colors">About Us</router-link>
      </nav>

      <!-- Desktop Right Section -->
      <div class="hidden md:flex items-center gap-3 shrink-0">
        
        <!-- Search Form -->
        <form @submit.prevent="executeSearch" class="hidden md:flex items-center relative flex-1 max-w-xs">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search "
            class="w-[150px] bg-slate-50 border border-slate-200 pl-9 pr-4 py-1.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/20 focus:border-[#009FB7] transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 absolute left-3 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </form>
        
        <!-- Auth Buttons (Hidden if Authenticated) -->
        <template v-if="!isAuthenticated">
          <router-link to="/login" class="text-slate-700 hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Log In
          </router-link>
          <router-link to="/signup" class="bg-[#009FB7] hover:bg-[#00899e] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Sign Up
          </router-link>
        </template>

        <!-- Profile / Logged In State (Shown if Authenticated) -->
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

      <!-- Mobile Right Controls (Search Toggle + Hamburger) -->
      <div class="flex items-center gap-1 md:hidden">
        <button @click="toggleSearch" type="button" aria-label="Toggle Search" class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>

        <button @click="isMenuOpen = !isMenuOpen" type="button" class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors" aria-label="Toggle Navigation">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Collapsible Search Input -->
    <div v-if="isSearchOpen" class="md:hidden pt-3 px-1">
      <form @submit.prevent="executeSearch" class="relative flex items-center">
        <input v-model="searchQuery" type="text" placeholder="Search..." class="w-full bg-slate-50 border border-slate-200 pl-9 pr-4 py-2 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/20 focus:border-[#009FB7]" autofocus />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 absolute left-3 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </form>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <div v-if="isMenuOpen" class="md:hidden border-t border-gray-100 pt-4 pb-6 mt-3 space-y-4 px-2">
      <nav class="flex flex-col space-y-3 font-medium text-slate-600">
        <router-link to="/" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50">Home</router-link>
        <router-link to="/explore" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 flex items-center justify-between">
          <span>Explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </router-link>
        <router-link to="/about-us" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50">About Us</router-link>
      </nav>

      <!-- Mobile Action Buttons -->
      <div class="flex flex-col gap-2 pt-2 border-t border-slate-100 mt-2">
        
        <!-- Mobile Auth Buttons (Hidden if Authenticated) -->
        <template v-if="!isAuthenticated">
          <router-link to="/login" @click="isMenuOpen = false" class="w-full text-center text-slate-700 hover:bg-slate-50 border border-slate-200 py-2 rounded-lg text-sm font-medium transition-colors">
            Log In
          </router-link>
          <router-link to="/signup" @click="isMenuOpen = false" class="w-full text-center bg-[#009FB7] hover:bg-[#00899e] text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Sign Up
          </router-link>
        </template>

        <!-- Mobile Profile State (Shown if Authenticated) -->
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
import { useSearch } from "../Search";

const route = useRoute();
const { searchQuery, isSearchOpen, toggleSearch, executeSearch } = useSearch();

// UI state
const isMenuOpen = ref<boolean>(false);

// Auth state
const isAuthenticated = ref<boolean>(false);

// Reusable function to check login status
const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem("isAuthenticated") === "true";
};

// 1. Check when the navbar first loads
onMounted(() => {
  checkAuthStatus();
});

// 2. IMPORTANT: Re-check every time the URL (route) changes! 
// This makes the navbar react instantly after logging in or logging out.
watch(
  () => route.path,
  () => {
    checkAuthStatus();
  }
);
</script>