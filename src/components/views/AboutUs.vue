<template>
  <div class="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 pb-16">
    <main class="pt-17">
      <div class="space-y-16 pb-20">
        
        <!-- Hero Banner Section -->
        <section class="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
          <!-- Darkened Background Image Placeholder -->
          <div class="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80" 
              alt="Education background" 
              class="w-full h-full object-cover"
            />
          </div>

          <div class="relative z-10 max-w-4xl mx-auto space-y-4">
            <span class="inline-block text-[10px] font-bold bg-[#009FB7]/20 text-[#009FB7] px-3 py-1 rounded-full uppercase tracking-widest border border-[#009FB7]/30">
              SMART SCHOLARSHIP ASSISTANT
            </span>
            
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Simplifying<br />
              Scholarships for<br />
              <span class="text-[#009FB7]">Every Student.</span>
            </h1>

            <p class="text-slate-300 text-xs md:text-sm max-w-md leading-relaxed pt-2">
                Smart Scholarship Finder was born from a simple belief: every student deserves an education they can afford, and every family deserves the data to fund it.
            </p>

            <div class="pt-2">
              <RouterLink 
                to="/explore" 
                class="inline-flex items-center gap-2 bg-[#009FB7] hover:bg-[#00899e] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Explore Our Platform
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </section>

        <!-- Mission Section with Image & Floating Badge -->
        <section class="max-w-6xl mx-auto px-6 py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <!-- Left Content -->
            <div class="space-y-6">
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Smart Scholarship Finder & Assistant</h2>
              
              <div class="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  Finding the right scholarship shouldn't feel like a shot in the dark. We serve as the trusted assistant for students and families navigating the journey from High School to Graduation.
                </p>
                <p>
                  We aggregate verified scholarship opportunities, eligibility criteria, and application guides to create a transparent marketplace for student funding.
                </p>
              </div>

              <!-- Highlight Quote Box -->
              <div class="bg-teal-50/60 border-l-4 border-[#009FB7] p-4 rounded-r-xl flex items-start gap-3">
                <div class="bg-[#009FB7] text-white p-1.5 rounded-full mt-0.5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p class="text-xs font-semibold text-[#009FB7]">
                  "Our goal is to simplify scholarship discovery and reduce financial stress for 10,000+ students by 2026."
                </p>
              </div>
            </div>

            <!-- Right Image Column -->
            <div class="relative flex justify-center">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-sm w-full">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcNk9x6NOBqq3dZ4afIGIvd8zVMJpk0aZ51RSIKwQGQ&s=10" 
                  alt="Graduation Cap" 
                  class="w-full h-[380px] object-cover"
                />
                
                <!-- Floating Counter Badge -->
                <div class="absolute bottom-4 right-4 bg-white p-3 px-5 rounded-2xl shadow-lg border border-slate-100 text-center">
                  <span class="block text-xl font-black text-[#009FB7]">50k+</span>
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">STUDENTS HELPED</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- Foundation of Integrity Cards -->
        <section class="bg-slate-50 py-16 px-6">
          <div class="max-w-6xl mx-auto space-y-10">
            
            <div class="text-center max-w-xl mx-auto space-y-2">
              <span class="inline-block text-[10px] font-bold bg-teal-50 text-[#009FB7] px-3 py-1 rounded-full uppercase border border-[#009FB7]/20">
                WHY TRUST US
              </span>
              <h2 class="text-2xl font-bold text-slate-900">Built on a Foundation of Integrity</h2>
              <p class="text-xs text-slate-500">
                We aren't just a listing site; we are a dedicated scholarship assistant committed to verified opportunities and transparent funding options.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <!-- Card 1 -->
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <div class="w-8 h-8 rounded-full bg-teal-50 text-[#009FB7] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 class="font-bold text-slate-900 text-sm">Clarity & Precision</h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                 We eliminate the guesswork from scholarship applications by providing verified, up-to-date eligibility requirements and deadline data.
                </p>
              </div>

              <!-- Card 2 -->
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <div class="w-8 h-8 rounded-full bg-teal-50 text-[#009FB7] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="font-bold text-slate-900 text-sm">Student-First Philosophy</h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  We put students first. Our tool helps you find affordable school options and scholarships that fit your goals.
                </p>
              </div>

              <!-- Card 3 -->
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <!-- Icon Wrapper -->
              <div class="w-8 h-8 rounded-full bg-teal-50 text-[#009FB7] flex items-center justify-center">
                <!-- Bootstrap Icon -->
                <i class="bi bi-globe2 text-base"></i>
              </div>
              
              <h3 class="font-bold text-slate-900 text-sm">Global Reach, Local Depth</h3>
              <p class="text-xs text-slate-500 leading-relaxed">
                Find scholarships nearby or around the world with simple, step-by-step guidance.
              </p>
              </div>

            </div>

          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// ==========================================
// NAVBAR LOGIC
// ==========================================
const route = useRoute();
const isMenuOpen = ref<boolean>(false);
const isAuthenticated = ref<boolean>(false);

const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true';
};

onMounted(() => {
  checkAuthStatus();
});

watch(
  () => route.path,
  () => {
    checkAuthStatus();
  }
);
</script>