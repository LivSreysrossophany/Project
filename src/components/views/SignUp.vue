<template>
  <div class="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 antialiased flex flex-col">
    
    <!-- ========================================== -->
    <!-- FIXED NAVBAR                               -->
    <!-- ========================================== -->
    <header class="fixed left-0 top-0 w-full bg-white border-b border-gray-100 px-4 md:px-6 py-3 font-sans z-50 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <router-link to="/" class="flex items-center gap-3 cursor-pointer shrink-0">
          <div class="w-12 h-12 rounded-[18px] overflow-hidden shadow-sm">
            <img
              src="../image/image copy.png"
              alt="Logo"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Logo Title Text -->
          <span class="text-2xl font-bold text-[#0F172A] tracking-tight">ScholarFinder</span>
        </router-link>

        <!-- Desktop Center Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 shrink-0 ">
          <router-link to="/" class="hover:text-slate-900 transition-colors">Home</router-link>
          <router-link to="/explore" @click="isMenuOpen = false" class="hover:text-slate-900 py-1 transition-colors px-2 rounded-md hover:bg-slate-50 block">
            <span>Explore</span>
          </router-link>
          <router-link to="/about-us" class="hover:text-slate-900 transition-colors">About Us</router-link>
          <router-link to="/contact" class="hover:text-slate-900 transition-colors">Contact</router-link>
        </nav>

        <!-- Desktop Right Section -->
        <div class="hidden md:flex items-center gap-3 shrink-0">
          <!-- Auth Buttons -->
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="text-slate-700 hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Log In
            </router-link>
            <router-link to="/signup" class="bg-[#009FB7] hover:bg-[#00899e] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Sign Up
            </router-link>
          </template>

          <!-- Profile State -->
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

        <!-- Mobile Hamburger -->
        <div class="flex items-center gap-1 md:hidden">
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

    <!-- ========================================== -->
    <!-- MAIN CONTENT (Wrapped with padding)        -->
    <!-- ========================================== -->
    <main class="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 pt-[100px] lg:pt-[100px]">
      <div class="w-full max-w-6xl mx-auto flex lg:grid lg:grid-cols-2 gap-12 lg:gap-0 items-center justify-center">
        
        <!-- LEFT SECTION: INFO & GRAPHICS (Hidden on screens smaller than 'lg' laptops) -->
        <div class="hidden lg:flex flex-col justify-center h-full lg:pr-16 lg:border-r border-slate-200">
          <h1 class="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight mb-4 text-[#111827]">
            Join the <span class="text-[#009FB7]">Scholarship</span> Community
          </h1>
          
          <p class="text-sm sm:text-base text-slate-600 mb-10 leading-relaxed max-w-md">
            Discover the perfect educational path for your child. Access verified reviews, expert guides, and a community of supportive parents.
          </p>

          <!-- Main Image -->
          <div class="relative rounded-3xl overflow-hidden shadow-sm mb-10 max-w-lg bg-slate-100 border border-slate-200/60">
            <img 
              src="../image/pic.jpg" 
              alt="Students and teacher collaborating" 
              class="w-full h-[280px] sm:h-[320px] object-cover"
            />
          </div>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-6 max-w-lg">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-[#E0F4F4] text-[#009FB7] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h4 class="text-[11px] sm:text-xs font-bold text-slate-900 mb-0.5">Verified Data</h4>
                <p class="text-[11px] text-slate-500">Official records only</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-[#E0F4F4] text-[#009FB7] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <div>
                <h4 class="text-[11px] sm:text-xs font-bold text-slate-900 mb-0.5">Nationwide Reach</h4>
                <p class="text-[11px] text-slate-500">50k+ Universities listed</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SECTION: SIGNUP FORM (Centers automatically when left section is hidden) -->
        <div class="w-full flex flex-col justify-center lg:pl-16">
          <div class="max-w-md w-full mx-auto lg:mx-0">
            
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">Create your account</h2>

            <!-- Error Message Alert -->
            <div v-if="errorMessage" class="mt-5 mb-6 bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{{ errorMessage }}</span>
            </div>

            <!-- Success Message Alert -->
            <div v-if="successMessage" class="mt-5 mb-6 bg-teal-50 border border-teal-200 text-teal-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>{{ successMessage }}</span>
            </div>

            <form @submit.prevent="handleSignup" class="space-y-5 mt-6">

              <!-- Full Name Field -->
              <div>
                <label class="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Full Name</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-slate-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </span>
                  <input
                    v-model="fullName"
                    type="text"
                    placeholder="Pa Bona"
                    class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div>
                <label class="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Email Address</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-slate-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="example@gmail.com"
                    class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all"
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div>
                <label class="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Create Password</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-slate-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </span>
                  <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Min. 8 characters"
                    class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.04 10.04 0 012.122-.063c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-6.115-6.115a3 3 0 104.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                  </button>
                </div>
              </div>

              <!-- Terms & Conditions Checkbox -->
              <div class="flex items-start mt-4">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    v-model="agreeTerms"
                    type="checkbox"
                    class="w-4 h-4 text-[#7CC6C5] border-slate-300 rounded focus:ring-[#7CC6C5] cursor-pointer mt-0.5"
                  />
                </div>
                <label for="terms" class="ml-2.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                  I agree to the <a href="#" class="text-[#009FB7] hover:underline">Terms of Service</a> and <a href="#" class="text-[#009FB7] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <p class="text-xs text-slate-500 my-5">
                Already have an account? 
                <RouterLink to="/login" class="text-[#009FB7] font-semibold hover:underline">Log in</RouterLink>
              </p>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-[#7CC6C5] hover:bg-[#6BB5B4] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md shadow-[#7CC6C5]/20 flex items-center justify-center gap-2 transition-all duration-200 mt-2"
              >
                <span>Create Account</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              
            </form>

          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// ==========================================
// NAVBAR LOGIC
// ==========================================
const isMenuOpen = ref<boolean>(false)
const isAuthenticated = ref<boolean>(false)

const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
}

onMounted(() => {
  checkAuthStatus()
})

watch(
  () => route.path,
  () => {
    checkAuthStatus()
  }
)

// ==========================================
// SIGNUP FORM LOGIC
// ==========================================
// Basic State
const fullName = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const agreeTerms = ref<boolean>(false)
const showPassword = ref<boolean>(false)

// Messages
const errorMessage = ref<string>('')
const successMessage = ref<string>('')

// Pure Conditional Logic
const handleSignup = (): void => {
  // 1. Reset messages every time we click the button
  errorMessage.value = ''
  successMessage.value = ''

  // 2. Simple IF / ELSE IF Conditions for validation
  if (fullName.value === '') {
    errorMessage.value = 'Please enter your full name.'
  } 
  else if (email.value === '' || !email.value.includes('@')) {
    errorMessage.value = 'Please enter a valid email address.'
  } 
  else if (password.value.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters long.'
  } 
  else if (agreeTerms.value === false) {
    errorMessage.value = 'You must agree to the Terms of Service to continue.'
  } 
  // 3. The ELSE condition means all checks passed!
  else {
    // Show success message
    successMessage.value = 'Account created successfully! Redirecting to login...'

    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]')
    
    // FIX RESTORED: Saving fullName!
    savedUsers.push({ 
      fullName: fullName.value,
      email: email.value, 
      password: password.value 
    })
    
    localStorage.setItem('users', JSON.stringify(savedUsers))

    // Redirect to login page after 1.5 seconds
    setTimeout(() => {
      router.push('/login')
    }, 1000)
  }
}
</script>