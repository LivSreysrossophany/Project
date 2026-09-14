<template>
  <div class="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4 sm:p-6 lg:p-12 font-sans text-slate-800">
    <div class="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
      
      <!-- LEFT SECTION: INFO & GRAPHICS -->
      <div class="lg:pr-16 lg:border-r border-slate-200 flex flex-col justify-center h-full">
        <h1 class="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight mb-4 text-[#111827]">
          Join the <span class="text-[#009FB7]">EduFind</span> Community
        </h1>
        
        <p class="text-sm sm:text-base text-slate-600 mb-10 leading-relaxed max-w-md">
          Discover the perfect educational path for your child. Access verified reviews, expert guides, and a community of supportive parents.
        </p>

        <!-- Main Image -->
        <div class="relative rounded-3xl overflow-hidden shadow-sm mb-10 max-w-lg bg-slate-100 border border-slate-200/60">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
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
              <p class="text-[11px] text-slate-500">50k+ Schools listed</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SECTION: SIGNUP FORM -->
      <div class="lg:pl-16 flex flex-col justify-center">
        <div class="max-w-md w-full mx-auto lg:mx-0">
          
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Create your account</h2>
          <p class="text-xs text-slate-500 mb-8">
            Already have an account? 
            <RouterLink to="/login" class="text-[#009FB7] font-semibold hover:underline">Log in</RouterLink>
          </p>

          <!-- Error Message Alert -->
          <div v-if="errorMessage" class="mb-6 bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Success Message Alert -->
          <div v-if="successMessage" class="mb-6 bg-teal-50 border border-teal-200 text-teal-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span>{{ successMessage }}</span>
          </div>

          <form @submit.prevent="handleSignup" class="space-y-5">
            
            <!-- Social Signup Buttons -->
            <div class="grid grid-cols-2 gap-3 mb-6">
              <button type="button" class="flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-xl py-2.5 px-3 text-[10px] font-bold text-slate-600 hover:bg-slate-50 transition uppercase tracking-wider">
                <svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                Google
              </button>
              <button type="button" class="flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-xl py-2.5 px-3 text-[10px] font-bold text-slate-600 hover:bg-slate-50 transition uppercase tracking-wider">
                <svg class="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </button>
            </div>

            <!-- Divider -->
            <div class="relative flex items-center justify-center my-6">
              <div class="border-t border-slate-200 w-full"></div>
              <span class="bg-[#FAFAFA] px-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest absolute">or continue with email</span>
            </div>

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
                  placeholder="John son"
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
                  placeholder="john@example.com"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

    // IMPORTANT: Even without a backend, we need to save the user somewhere 
    // in the browser so the Login page can find it.
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]')
    savedUsers.push({ email: email.value, password: password.value })
    localStorage.setItem('users', JSON.stringify(savedUsers))

    // Redirect to login page after 1.5 seconds
    setTimeout(() => {
      router.push('/login')
    }, 1000)
  }
}
</script>