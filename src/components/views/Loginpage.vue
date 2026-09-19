<template>
  <div class="min-h-screen bg-[#F4F8FA] font-sans text-slate-800 antialiased flex flex-col">

    <main class="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 pt-[100px] lg:pt-[100px]">
      
      <!-- RESPONSIVE LAYOUT WRAPPER -->
      <div class="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
        
        <!-- LEFT SECTION: LOGIN FORM -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          
          <!-- Inner container to keep the form width perfect -->
          <div class="w-full max-w-md">
            
            <!-- Back to Home Link -->
            <RouterLink to="/" class="inline-flex items-center text-xs font-bold text-[#009FB7] hover:text-[#00899e] uppercase tracking-wider mb-6 transition-colors mx-auto lg:mx-0 w-fit">
              <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Back to home
            </RouterLink>

            <!-- Header with Waving Hand Icon -->
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-2 flex items-center justify-center lg:justify-start gap-3">
              Welcome Back
              <svg class="w-8 h-8 text-amber-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11" />
              </svg>
            </h1>
            <p class="text-sm text-slate-500 mb-8 leading-relaxed text-center lg:text-left">
              Securely sign in to your EduFind account to manage your saved schools and applications.
            </p>

            <!-- Form Card with Border -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-200 w-full">
              
              <!-- Error Message Alert -->
              <div v-if="errorMessage" class="mb-5 bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ errorMessage }}</span>
              </div>

              <!-- Success Message Alert -->
              <div v-if="successMessage" class="mb-5 bg-teal-50 border border-teal-200 text-teal-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span>{{ successMessage }}</span>
              </div>

              <form @submit.prevent="handleLogin" class="space-y-5 text-left">
                <!-- Email Field -->
                <div>
                  <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div class="relative flex items-center">
                    <span class="absolute left-3.5 text-slate-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </span>
                    <input v-model="email" type="email" placeholder="example@example.com" class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all" />
                  </div>
                </div>

                <!-- Password Field -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Password</label>
                  </div>
                  <div class="relative flex items-center">
                    <span class="absolute left-3.5 text-slate-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </span>
                    <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all" />
                    <button type="button" @click="showPassword = !showPassword" class="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none">
                      <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.04 10.04 0 012.122-.063c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-6.115-6.115a3 3 0 104.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                    </button>
                  </div>
                </div>
                
                <div class="flex gap-1 text-xs sm:text-sm">
                  <p class="text-slate-600">Don't have an account?</p>
                  <RouterLink to="/signup" class="text-[#009FB7] font-semibold hover:underline">Register now</RouterLink>
                </div>
                
                <!-- Remember Me -->
                <div class="flex items-center">
                  <input id="remember" v-model="rememberMe" type="checkbox" class="w-4 h-4 text-[#009FB7] border-slate-300 rounded focus:ring-[#009FB7] cursor-pointer" />
                  <label for="remember" class="ml-2.5 text-xs text-slate-600 cursor-pointer">Remember this device for 30 days</label>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full bg-[#009FB7] hover:bg-[#00899e] text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-[#009FB7]/25 flex items-center justify-center gap-2 transition duration-200 mt-2">
                  <span>Sign In to EduFind</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>

            <!-- Extra Text and Icon box below the form -->
            <div class="mt-6 w-full flex items-start gap-4 p-4 bg-teal-50 rounded-2xl border border-teal-100 text-left">
              <div class="w-10 h-10 rounded-full bg-white text-[#009FB7] flex items-center justify-center shrink-0 shadow-sm">
                <!-- Help/Info Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-teal-900 mb-1">Need help logging in?</h4>
                <p class="text-xs text-teal-700 leading-relaxed">
                  If you forgot your password or need assistance accessing your account, please <RouterLink to="/contact" class="font-bold underline">contact our support team</RouterLink>.
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT SECTION: GRAPHICS (Hidden on mobile/tablet, Visible on lg screens) -->
        <div class="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center">
          <div class="relative w-full max-w-lg mb-8">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img src="../image/login.jpg" alt="EduFind Platform" class="w-full h-[380px] object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>
            <div class="absolute -top-4 -right-2 sm:right-4 bg-[#009FB7] text-white px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-[11px] font-semibold">
              <svg class="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>Your data is fully encrypted</span>
            </div>
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
// LOGIN FORM LOGIC
// ==========================================
const email = ref<string>('')
const password = ref<string>('')
const rememberMe = ref<boolean>(false)
const showPassword = ref<boolean>(false)
const errorMessage = ref<string>('')
const successMessage = ref<string>('')

const handleLogin = (): void => {
  errorMessage.value = ''
  successMessage.value = ''

  if (email.value === '') {
    errorMessage.value = 'Please enter your email address.'
  } else if (password.value === '') {
    errorMessage.value = 'Please enter your password.'
  } else {
    // 1. Fetch registered users from Signup page
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
    
    // 2. Validate credentials
    const validUser = storedUsers.find(
      (user: any) => user.email === email.value && user.password === password.value
    )

    if (validUser) {
      successMessage.value = 'Login successful! Redirecting...'
      
      // 3. SECURE CONNECTION: Tell the app the user is logged in AND who they are
      localStorage.setItem('isAuthenticated', 'true')
      
      // ✅ THE FIX: We are now explicitly saving the fullName along with the email!
      localStorage.setItem('currentUser', JSON.stringify({ 
        email: validUser.email,
        fullName: validUser.fullName // Passes the actual name to your Profile/Dashboard
      })) 
      
      // Immediately update auth status so navbar changes
      checkAuthStatus()
      
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } else {
      errorMessage.value = 'Invalid email or password. Please try again.'
    }
  }
}
</script>