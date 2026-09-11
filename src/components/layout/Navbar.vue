<template>
  <header class="w-full bg-white border-b border-gray-100 px-4 md:px-6 py-3 font-sans relative">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Logo / Home Link -->
      <RouterLink to="/" class="flex items-center gap-3 cursor-pointer">
        <div class="bg-[#009FB7] p-2.5 rounded-xl text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <span class="text-xl font-bold text-slate-800 tracking-tight">EduFind</span>
      </RouterLink>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <RouterLink to="/" class="hover:text-slate-900 transition-colors">Home</RouterLink>
        
        <RouterLink to="/explore" class="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900 transition-colors">
          <span>Explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </RouterLink>

        <RouterLink to="/about" class="hover:text-slate-900 transition-colors">About Us</RouterLink>
      </nav>

      <!-- Desktop Action Buttons -->
      <div class="hidden md:flex items-center gap-4">
        <RouterLink to="/search" class="flex items-center gap-2 text-slate-600 hover:text-slate-900 px-2 py-1.5 text-sm font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <span>Search</span>
        </RouterLink>

        <RouterLink to="/login" class="text-slate-700 hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Log In
        </RouterLink>

        <RouterLink to="/signup" class="bg-[#009FB7] hover:bg-[#00899e] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          Sign Up
        </RouterLink>
      </div>

      <!-- Mobile Right Section (Search Icon + Menu Toggle) -->
      <div class="flex items-center gap-1 md:hidden">
        <!-- Always-Visible Search Icon Button on Mobile -->
        <RouterLink 
          to="/search" 
          aria-label="Search"
          class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </RouterLink>

        <!-- Mobile Menu Toggle Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          type="button"
          class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label="Toggle Navigation"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>

    <!-- Mobile Dropdown Menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden border-t border-gray-100 pt-4 pb-6 mt-3 space-y-4 px-2"
    >
      <nav class="flex flex-col space-y-3 font-medium text-slate-600">
        <RouterLink 
          to="/" 
          @click="isMenuOpen = false" 
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50"
        >
          Home
        </RouterLink>

        <RouterLink 
          to="/explore" 
          @click="isMenuOpen = false" 
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 flex items-center justify-between"
        >
          <span>Explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </RouterLink>

        <RouterLink 
          to="/about" 
          @click="isMenuOpen = false" 
          class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50"
        >
          About Us
        </RouterLink>
      </nav>

      <!-- Mobile Action Buttons -->
      <div class="flex flex-col gap-2 pt-2 border-t border-slate-100">
        <RouterLink 
          to="/login" 
          @click="isMenuOpen = false" 
          class="w-full text-center text-slate-700 hover:bg-slate-50 border border-slate-200 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Log In
        </RouterLink>

        <RouterLink 
          to="/signup" 
          @click="isMenuOpen = false" 
          class="w-full text-center bg-[#009FB7] hover:bg-[#00899e] text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          Sign Up
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>