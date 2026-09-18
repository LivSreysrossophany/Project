<template>
  <div class="min-h-screen bg-[#f8fafc] font-sans text-slate-800 antialiased">
    
    <!-- ========================================== -->
    <!-- FIXED NAVBAR                               -->
    <!-- ========================================== -->


    <!-- ========================================== -->
    <!-- MAIN CONTENT (Wrapped with pt-[72px])      -->
    <!-- ========================================== -->
    <main class="pt-17">
      
      <!-- HERO SECTION -->
      <header class="relative min-h-[600px] w-full bg-slate-900 text-white overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-8 lg:px-16">
        <!-- Background Image Overlay -->
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2000" 
            alt="School Architecture" 
            class="w-full h-full object-cover opacity-25"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide uppercase mb-6 text-amber-400">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            New: 2025-2026 Education Ranking
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-2xl leading-tight mb-4">
            Smart Scholarship Finder & Assistant <br />
            <span class="text-orange-500">To Find Their Future.</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
            Find and apply for top scholarships effortlessly. Our smart assistant turns complex eligibility rules into clear, actionable paths to fund your education.
          </p>
          
          <!-- Search Bar -->
          <div class="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl max-w-3xl flex flex-col md:flex-row gap-3 text-slate-700">
            <div class="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200 relative">
              <svg class="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" v-model="searchQuery" placeholder="Search by University Name..." class="w-full focus:outline-none text-sm bg-transparent" />
              
              <ul v-if="searchQuery.trim() !== '' && searchResults.length > 0" class="absolute top-full left-0 w-full mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                <li 
                  v-for="school in searchResults" 
                  :key="school.id" 
                  @click="goToSchool(school.id)" 
                  class="px-4 py-3 hover:bg-teal-50 cursor-pointer border-b border-slate-50 last:border-none flex items-center gap-3 transition-colors text-left"
                >
                  <img :src="school.image" class="w-8 h-8 rounded-md object-cover shrink-0" />
                  <div class="min-w-0">
                    <div class="text-xs font-bold text-slate-900 truncate">{{ school.name }}</div>
                    <div class="text-[10px] text-slate-500">{{ school.category }}</div>
                  </div>
                </li>
              </ul>
              
              <div v-else-if="searchQuery.trim() !== '' && searchResults.length === 0" class="absolute top-full left-0 w-full mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 z-50 text-center text-xs text-slate-500">
                No schools found matching "{{ searchQuery }}"
              </div>
            </div>

            <button 
              @click="executeSearch" 
              class="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200 shrink-0"
            >
              <span>Search University</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

          <!-- Rating / Trust Bar -->
          <div class="mt-8 flex items-center gap-4">
            <div class="flex -space-x-2">
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60WqDGnNsjHdkL1ixQAr6ku5Cy87qDVOAiM7bCKqldA&s=10" alt="User" />
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk71fyfaAL1hZszfyf0bNmzwiCDquWGtMYcGXzEs23Gg&s=10" alt="User" />
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-PSn6p16dAuAD7qmWQTgxOB1Ev90OLeYN9Ys_si87XTcrwVtQatbL54&s" alt="User" />
            </div>
            <div>
              <div class="flex items-center text-amber-400 text-xs">
                ★ ★ ★ ★ ★ <span class="text-white font-bold ml-1.5 text-sm">4.9/5.0</span>
              </div>
              <p class="text-xs text-slate-400">Trusted by 10,000+ students nationwide</p>
            </div>
          </div>
        </div>
      </header>

      <!-- SECTION 2: BEYOND SIMPLE LISTINGS (FEATURES) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Side: Header & Small Info Boxes -->
          <div class="lg:col-span-6 space-y-6">
            <span class="text-xs font-bold uppercase tracking-wider text-teal-600">Why Choose Us</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Beyond Simple Listings. <br />
              <span class="text-teal-600">Deep Academic Insight.</span>
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              We collect details from official database records, grade requirements, and past winner profiles to find the exact funding that fits you best.
            </p>

            <!-- Horizontal Mini Feature Cards -->
            <div class="space-y-4 pt-4">
              <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition">
                <div class="p-3 bg-teal-50 rounded-lg text-teal-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-slate-900">Smart Matching</h4>
                  <p class="text-xs text-slate-500">Find scholarships based on your grades, major, and financial needs.</p>
                </div>
              </div>

              <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition">
                <div class="p-3 bg-teal-50 rounded-lg text-teal-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-slate-900">Application Tracker</h4>
                  <p class="text-xs text-slate-500">Track deadlines, organize your required essays, and manage applications in one place.</p>
                </div>
              </div>
            </div>

            <RouterLink to="/about-us" class="inline-flex items-center text-xs font-bold text-teal-600 hover:text-teal-700 pt-2 group">
              Learn More Our Process 
              <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </RouterLink>
          </div>

          <!-- Right Side: 2x2 Feature Grid -->
          <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(feature, idx) in features" :key="idx" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <!-- Render Dynamic SVG Icons from Data -->
                <div :class="feature.bgIcon" class="w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-5 h-5" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-for="(path, index) in feature.iconPaths" :key="index" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="path" />
                  </svg>
                </div>
                <h3 class="font-bold text-slate-900 text-base mb-2">{{ feature.title }}</h3>
                <p class="text-xs text-slate-500 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: ELITE SCHOOLS HUB (CARDS) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <!-- Section Title & Filter Tabs -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">
              Top Scholarships <span class="text-orange-500">Opportunity Hub</span>
            </h2>
            <p class="text-xs text-slate-500 mt-1 max-w-lg">
              Verified grants and awards that give you real money for your education.
            </p>
          </div>
          <RouterLink to="/explore" class="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 shrink-0">
            View all scholarships &rarr;
          </RouterLink>
        </div>

        <!-- Category Filter Buttons -->
        <div class="flex flex-wrap gap-2 mb-8">
          <button 
            v-for="tab in filterTabs" 
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'px-4 py-1.5 rounded-full text-xs font-medium transition',
              activeTab === tab ? 'bg-teal-700 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            ]"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="school in filteredSchools" :key="school.id" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition">
            <!-- Card Image & Badges -->
            <div class="relative h-48 w-full overflow-hidden">
              <img :src="school.image" :alt="school.name" class="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {{ school.category }}
              </span>
              
              <!-- NEW: Favorite (Save) Button -->
              <button 
                @click.stop="toggleSave(school.id)"
                class="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 z-10"
                :class="isSaved(school.id) ? 'text-red-500' : 'text-slate-400 hover:text-red-400'"
                title="Save to favorites"
              >
                <!-- Filled Heart if Saved -->
                <svg v-if="isSaved(school.id)" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <!-- Outline Heart if not Saved -->
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>

              <div class="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-amber-400 text-xs px-2 py-0.5 rounded font-bold flex items-center gap-1">
                ★ {{ school.rating }}
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-bold text-slate-900 text-base mb-4 leading-snug">{{ school.name }}</h3>

                <!-- Data Stats Grid -->
                <div class="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                  <div>
                    <span class="text-slate-400 block text-[10px]">ANNUAL TUITION</span>
                    <span class="font-bold text-slate-800">{{ school.tuition }}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[10px]">ENROLLMENT</span>
                    <span class="font-bold text-slate-800">{{ school.students }}</span>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 mb-6">
                  <span v-for="tag in school.tags" :key="tag" class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Action RouterLink -->
              <RouterLink 
                :to="{ name: 'school-details', params: { id: school.id } }" 
                class="mt-auto w-full bg-[#009FB7] hover:bg-[#00899e] text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                View Detailed Profile &rarr;
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: METRICS BANNER -->
      <section class="bg-teal-600 text-white py-12 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl sm:text-4xl font-extrabold mb-1">8k+</div>
            <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">VERIFIED SCHOLARSHIPS</div>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-extrabold mb-1">98%</div>
            <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">STUDENT SUCCESS RATE</div>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-extrabold mb-1">40+</div>
            <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">ACTIVE GRANTS</div>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-extrabold mb-1">10k</div>
            <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">TOTAL FUNDING FOUND</div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: CTA BANNER / DISCOVERY TOOL -->
      <section class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20">
        <div class="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <!-- Background Overlay Image -->
          <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1500" alt="Students" class="w-full h-full object-cover opacity-20" />
          </div>

          <div class="relative z-10 max-w-lg space-y-6">
            <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
              Not sure where <br />
              <span class="text-teal-400">to start?</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our quick finder matches you with top scholarships in under 3 minutes.
            </p>

            <ul class="space-y-2 text-xs text-slate-300">
              <li class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                Enter your major and study level
              </li>
              <li class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                Set your GPA and financial needs
              </li>
              <li class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                Get your custom scholarship list
              </li>
            </ul>

            <RouterLink to="/explore" class="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/30 transition duration-200 inline-block">
              Find My Scholarships
            </RouterLink>
          </div>

          <!-- Floating Testimonial Card Overlay -->
          <div class="relative z-10 w-full md:w-80 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white space-y-4">
            <div class="w-10 h-10 rounded-full bg-teal-500/30 flex items-center justify-center text-teal-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p class="text-xs text-slate-200 leading-relaxed italic">
              "I found and won a $5,000 scholarship for my degree in less than a month!"
            </p>
            <div class="flex items-center gap-3 pt-2">
              <img class="w-8 h-8 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDrczR28hZLVaaxFIzoY7l8HKa33VZgy-l_-qqiwNkw&s=10" alt="Sarah" />
              <div>
                <div class="text-xs font-bold">Mean Heng </div>
                <div class="text-[10px] text-slate-400">College Student</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER PARTNERS / ACCREDITATIONS --> 
      <footer class="border-t border-slate-200 py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div class="flex flex-wrap items-center justify-around gap-6 opacity-60 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div class="flex items-center gap-2">
              <i class="bi bi-bank"></i>
              Council
            </div>

            <div class="flex items-center gap-2">
              <i class="bi bi-book"></i>
              Scholar+
            </div>

            <div class="flex items-center gap-2">
              <i class="bi bi-search"></i>
              EDU-CHECK
            </div>

            <div class="flex items-center gap-2">
              <i class="bi bi-shield-check"></i>
              Trust-Edu
            </div>
          </div>
        </div>
      </footer> 
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue' // Added watch
import { RouterLink, useRouter, useRoute } from 'vue-router' // Added useRoute
import { filterTabsData, featuresData, schoolsData } from '../data/Data'
import { useSearch } from '../Search' 

// ==========================================
// NAVBAR & ROUTING LOGIC
// ==========================================
const router = useRouter()
const route = useRoute()

const isMenuOpen = ref<boolean>(false)
const isAuthenticated = ref<boolean>(false)

const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
}

// Watch for route changes to re-evaluate the auth status for the navbar
watch(
  () => route.path,
  () => {
    checkAuthStatus()
  }
)

// ==========================================
// PAGE LOGIC
// ==========================================
const { searchQuery, searchResults, executeSearch, goToSchool } = useSearch()

const activeTab = ref<string>('All Types')

const filterTabs = filterTabsData
const features = featuresData
const schools = ref(schoolsData)

// --- FAVORITE / SAVE LOGIC ---
const savedSchoolIds = ref<number[]>([])

onMounted(() => {
  // 1. Check Authentication for Navbar
  checkAuthStatus()

  // 2. Load saved schools
  const saved = localStorage.getItem('savedSchoolIds')
  if (saved) {
    savedSchoolIds.value = JSON.parse(saved)
  }
})

// Check if a specific school is saved
const isSaved = (id: number) => {
  return savedSchoolIds.value.includes(id)
}

// Toggle Save State with Login Verification
const toggleSave = (id: number) => {
  if (!isAuthenticated.value) {
    alert('Please log in to save schools to your favorites.')
    router.push('/login')
    return 
  }

  if (isSaved(id)) {
    savedSchoolIds.value = savedSchoolIds.value.filter(savedId => savedId !== id)
  } else {
    savedSchoolIds.value.push(id)
  }
  localStorage.setItem('savedSchoolIds', JSON.stringify(savedSchoolIds.value))
}

// Computed property to filter schools based on active tab AND limit to 3 items
const filteredSchools = computed(() => {
  let result = schools.value;
  
  if (activeTab.value !== 'All Types') {
    result = schools.value.filter(school => 
      school.category.toLowerCase().includes(activeTab.value.toLowerCase()) ||
      school.tags.some(tag => tag.toLowerCase().includes(activeTab.value.toLowerCase()))
    )
  }
  
  return result.slice(0, 3);
})
</script>