<template>
  <div class="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 pb-20">
    
    <!-- Hero Header -->
    <section class="bg-slate-900 text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <svg class="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,100 100,0 100,100"/>
        </svg>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10 text-center">
        <span class="inline-block bg-white/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-white/20">
          Get In Touch
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          We're here to help.
        </h1>
        <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have questions about finding the right school, navigating scholarships, or using the EduFind platform? Send us a message and our team will get back to you shortly.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- LEFT COLUMN: Contact Information -->
        <div class="lg:col-span-5 space-y-6 mt-8 lg:mt-16">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
          
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-slate-900 mb-1">Email Us</h4>
                <p class="text-xs text-slate-500 mb-2">Our team usually responds within 24 hours.</p>
                <a href="mailto:livsreysrossophany@gmail.com" class="text-sm font-semibold text-[#009FB7] hover:underline">livsreysrossophany@gmail.com</a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-slate-900 mb-1">Call Us</h4>
                <p class="text-xs text-slate-500 mb-2">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+85516816888" class="text-sm font-semibold text-[#009FB7] hover:underline">+855 81 248 587</a>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-slate-900 mb-1">Headquarters</h4>
                <p class="text-xs text-slate-500 mb-2">Come visit our main office.</p>
                <span class="text-sm font-semibold text-slate-700">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Contact Form -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            
            <h3 class="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>

            <!-- Success Alert -->
            <div v-if="successMessage" class="mb-6 bg-teal-50 border border-teal-200 text-teal-700 text-sm px-4 py-4 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p class="font-bold mb-1">Message sent successfully!</p>
                <p class="text-xs opacity-90">{{ successMessage }}</p>
              </div>
            </div>

            <form v-else @submit.prevent="submitForm" class="space-y-5">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- Name -->
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required
                    placeholder="Pa Bona" 
                    class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all"
                  />
                </div>
                
                <!-- Email -->
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required
                    placeholder="example@gmail.com" 
                    class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                <select 
                  v-model="form.subject"
                  required
                  class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all appearance-none"
                >
                  <option value="" disabled>Select a topic...</option>
                  <option value="school_info">Need help finding a school</option>
                  <option value="scholarship">Question about scholarships</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  v-model="form.message" 
                  required
                  rows="5" 
                  placeholder="How can we help you today?" 
                  class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-[#009FB7] hover:bg-[#00899e] disabled:bg-[#009FB7]/50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-[#009FB7]/20 flex items-center justify-center gap-2 transition-all duration-200 mt-4"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
                <svg v-if="!isSubmitting" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')

// Pre-fill user data if they are already logged in!
onMounted(() => {
  const currentUserStr = localStorage.getItem('currentUser')
  const usersArrayStr = localStorage.getItem('users')
  
  if (currentUserStr && usersArrayStr) {
    const currentUser = JSON.parse(currentUserStr)
    const allUsers = JSON.parse(usersArrayStr)
    const matchedUser = allUsers.find((user: any) => user.email === currentUser.email)
    
    if (matchedUser) {
      form.value.name = matchedUser.fullName || ''
      form.value.email = matchedUser.email || ''
    }
  }
})

const submitForm = () => {
  isSubmitting.value = true
  
  // Simulate an API call delay
  setTimeout(() => {
    isSubmitting.value = false
    successMessage.value = "Thanks for reaching out! A member of the EduFind support team will reply to your email shortly."
    
    // Clear the message and subject, keep name/email
    form.value.subject = ''
    form.value.message = ''
  }, 1200)
}
</script>