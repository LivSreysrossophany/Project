<template>
  <header
    class="w-full bg-white border-b border-gray-100 px-4 md:px-6 py-3 font-sans relative"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <!-- Logo / Home Link -->
      <router-link
        to="/"
        class="flex items-center gap-3 cursor-pointer shrink-0"
      >
        <div
          class="bg-[#009FB7] p-2.5 rounded-xl text-white flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <span class="text-xl font-bold text-slate-800 tracking-tight"
          >EduFind</span
        >
      </router-link>

      <nav
        class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 shrink-0"
      >
        <router-link to="/" class="hover:text-slate-900 transition-colors"
          >Home</router-link
        >

        <router-link
          to="/Explore"
          @click="isMenuOpen = false"
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 block"
        >
          <span>Explore</span>
        </router-link>

        <!-- FIX: Changed "/About us" to match router path casing -->
        <router-link
          to="/About us"
          class="hover:text-slate-900 transition-colors"
          >About Us</router-link
        >
      </nav>

      <!-- Desktop Action Buttons -->
      <div class="hidden md:flex items-center gap-3 shrink-0">
        <form
          @submit.prevent="executeSearch"
          class="hidden md:flex items-center relative flex-1 max-w-xs"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search "
            class="w-[150px] bg-slate-50 border border-slate-200 pl-9 pr-4 py-1.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/20 focus:border-[#009FB7] transition-all"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-slate-400 absolute left-3 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </form>
        
        <!-- FIX: Changed "/login" to "/Login" -->
        <router-link
          to="/Login"
          class="text-slate-700 hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Log In
        </router-link>

        <!-- FIX: Changed "/signup" to "/Signup" -->
        <router-link
          to="/Signup"
          class="bg-[#009FB7] hover:bg-[#00899e] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          Sign Up
        </router-link>
      </div>

      <!-- Mobile Right Controls (Search Toggle + Hamburger) -->
      <div class="flex items-center gap-1 md:hidden">
        <button
          @click="toggleSearch"
          type="button"
          aria-label="Toggle Search"
          class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>

        <button
          @click="isMenuOpen = !isMenuOpen"
          type="button"
          class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label="Toggle Navigation"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Collapsible Search Input -->
    <div v-if="isSearchOpen" class="md:hidden pt-3 px-1">
      <form @submit.prevent="executeSearch" class="relative flex items-center">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-full bg-slate-50 border border-slate-200 pl-9 pr-4 py-2 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/20 focus:border-[#009FB7]"
          autofocus
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-slate-400 absolute left-3 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </form>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <div
      v-if="isMenuOpen"
      class="md:hidden border-t border-gray-100 pt-4 pb-6 mt-3 space-y-4 px-2"
    >
      <nav class="flex flex-col space-y-3 font-medium text-slate-600">
        <router-link
          to="/"
          @click="isMenuOpen = false"
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50"
        >
          Home
        </router-link>

        <router-link
          to="/Explore"
          @click="isMenuOpen = false"
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 flex items-center justify-between"
        >
          <span>Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </router-link>

        <!-- FIX: Changed "/About" to "/About us" -->
        <router-link
          to="/About us"
          @click="isMenuOpen = false"
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50"
        >
          About Us
        </router-link>
      </nav>

      <!-- Mobile Action Buttons -->
      <div class="flex flex-col gap-2 pt-2 border-t border-slate-100">
        <!-- FIX: Changed "/login" to "/Login" -->
        <router-link
          to="/Login"
          @click="isMenuOpen = false"
          class="w-full text-center text-slate-700 hover:bg-slate-50 border border-slate-200 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Log In
        </router-link>

        <!-- FIX: Changed "/signup" to "/Signup" -->
        <router-link
          to="/Signup"
          @click="isMenuOpen = false"
          class="w-full text-center bg-[#009FB7] hover:bg-[#00899e] text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSearch } from "../Search";

// UI state
const isMenuOpen = ref<boolean>(false);


const { searchQuery, isSearchOpen, toggleSearch, executeSearch } = useSearch();
</script>
