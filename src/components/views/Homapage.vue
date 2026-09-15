<template>
  <div class="min-h-screen bg-[#f8fafc] font-sans text-slate-800 antialiased">
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
          New: 2024-2025 Education Ranking
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
          <div class="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
            <svg class="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" v-model="searchQuery" placeholder="Search by School Name..." class="w-full focus:outline-none text-sm bg-transparent" />
          </div>



          <RouterLink 
            :to="{ name: 'schools-search', query: { q: searchQuery, location: locationQuery } }" 
            class="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200 shrink-0"
          >
            <span>Search Schools</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </RouterLink>
        </div>

        <!-- Rating / Trust Bar -->
        <div class="mt-8 flex items-center gap-4">
          <div class="flex -space-x-2">
            <img class="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User" />
            <img class="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="User" />
            <img class="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User" />
          </div>
          <div>
            <div class="flex items-center text-amber-400 text-xs">
              ★ ★ ★ ★ ★ <span class="text-white font-bold ml-1.5 text-sm">4.9/5.0</span>
            </div>
            <p class="text-xs text-slate-400">Trusted by 10,000+ parents nationwide</p>
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
            We aggregate millions of data points from official records, student test scores, and parent reviews to give you a 360° view of any institution.
          </p>

          <!-- Horizontal Mini Feature Cards -->
          <div class="space-y-4 pt-4">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition">
              <div class="p-3 bg-teal-50 rounded-lg text-teal-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="font-bold text-sm text-slate-900">Personalized Matching</h4>
                <p class="text-xs text-slate-500">Find schools based on your child's learning profile & budget.</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition">
              <div class="p-3 bg-teal-50 rounded-lg text-teal-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 class="font-bold text-sm text-slate-900">Campus Tour & Events</h4>
                <p class="text-xs text-slate-500">Directly schedule open houses and campus visits via our platform.</p>
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
            Elite Schools <span class="text-orange-500">Excellence Hub</span>
          </h2>
          <p class="text-xs text-slate-500 mt-1 max-w-lg">
            Our curated top-tier institutions recognized for academic innovation, diversity, and superior facilities.
          </p>
        </div>
        <RouterLink to="/explore" class="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 shrink-0">
          View all listings &rarr;
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
              class="w-full text-center py-2.5 rounded-xl border border-teal-600 text-teal-600 font-bold text-xs hover:bg-teal-600 hover:text-white transition inline-block"
            >
              Explore Program &rarr;
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: METRICS BANNER -->
    <section class="bg-teal-600 text-white py-12 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold mb-1">45k+</div>
          <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">Verified Schools</div>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold mb-1">98%</div>
          <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">Parent Satisfaction</div>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold mb-1">120+</div>
          <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">City Guides</div>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold mb-1">1.2m</div>
          <div class="text-xs text-teal-100 uppercase tracking-wider font-medium">Annual Visitors</div>
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
            Our guided wizard helps matching options tailored for your child's profile in under 3 minutes.
          </p>

          <ul class="space-y-2 text-xs text-slate-300">
            <li class="flex items-center gap-2">
              <span class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              Define your learning priorities
            </li>
            <li class="flex items-center gap-2">
              <span class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              Set your commuting range & budget
            </li>
            <li class="flex items-center gap-2">
              <span class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              Receive a curated Match Report
            </li>
          </ul>

          <RouterLink to="/explore" class="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/30 transition duration-200 inline-block">
            Launch Discovery Tool
          </RouterLink>
        </div>

        <!-- Floating Testimonial Card Overlay -->
        <div class="relative z-10 w-full md:w-80 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white space-y-4">
          <div class="w-10 h-10 rounded-full bg-teal-500/30 flex items-center justify-center text-teal-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          <p class="text-xs text-slate-200 leading-relaxed italic">
            "We found the ideal STEM school for our daughter within two weeks using this platform!"
          </p>
          <div class="flex items-center gap-3 pt-2">
            <img class="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Sarah" />
            <div>
              <div class="text-xs font-bold">Sarah Williams</div>
              <div class="text-[10px] text-slate-400">Parent of 2</div>
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
      </div>
    </template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// Updated import to point to Data.ts instead of homeData.ts
import { filterTabsData, featuresData, schoolsData } from '../data/Data'

// Search Inputs State
const searchQuery = ref<string>('')
const locationQuery = ref<string>('')
const activeTab = ref<string>('All Types')

// Import static data directly from the data file
const filterTabs = filterTabsData
const features = featuresData
const schools = ref(schoolsData)

// Computed property to filter schools based on active tab
const filteredSchools = computed(() => {
  if (activeTab.value === 'All Types') return schools.value
  return schools.value.filter(school => 
    school.category.toLowerCase().includes(activeTab.value.toLowerCase()) ||
    school.tags.some(tag => tag.toLowerCase().includes(activeTab.value.toLowerCase()))
  )
})
</script>