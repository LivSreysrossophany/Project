<template>
  <header class="w-full bg-white border-b border-gray-100 px-6 py-3 font-sans">
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

      <!-- Navigation Links -->
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

      <!-- Action Buttons -->
      <div class="flex items-center gap-4">
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

    </div>
  </header>
</template>

<script setup>
</script>