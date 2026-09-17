<template>
  <div class="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 pb-16">
    
    <!-- HERO SECTION -->
    <section class="bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Badge -->
        <span class="inline-block bg-[#E0F4F4] text-[#009FB7] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
          DISCOVER SCHOLARSHIP OPPORTUNITIES
        </span>
        
        <!-- Heading -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
          Explore Scholarships for Students
        </h1>
        
        <p class="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover scholarships, grants, and financial-aid opportunities that match each student's academic achievements, interests, and goals.
        </p>

        <!-- Corrected Search Bar Wrapper -->
        <div class="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-3 text-slate-700">
          
<<<<<<< HEAD
          <!-- School Name Input & Dropdown -->
          <div class="flex-1 flex items-center px-4 py-2 relative">
            <svg class="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" v-model="searchQuery" placeholder="Search by School Name..." class="w-full focus:outline-none text-sm bg-transparent" />
            
            <!-- Dropdown Results List -->
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

            <!-- No Results Found State -->
            <div v-else-if="searchQuery.trim() !== '' && searchResults.length === 0" class="absolute top-full left-0 w-full mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 z-50 text-center text-xs text-slate-500">
              No schools found matching "{{ searchQuery }}"
            </div>
          </div>

          <button 
            @click="executeSearch" 
            class="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200 shrink-0"
          >
            <span>Search Schools</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
=======
          <!-- Keyword Input -->
          <div class="flex-1 flex items-center w-full px-4 py-2 md:border-r border-slate-200">
            <svg class="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search university or keywords…" 
              class="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-800 placeholder-slate-400 pl-3 focus:outline-none"
            />
          </div>
          
          <!-- Search Button -->
          <button class="w-full md:w-auto bg-[#009FB7] hover:bg-[#00899e] text-white font-semibold py-3 px-8 rounded-xl md:rounded-full transition-colors shrink-0">
            Search University
>>>>>>> 016192a8e1b8ab8749ed6eeb944e86c6a2ab789f
          </button>
        </div> <!-- Removed the broken/duplicate code below this! -->

        <!-- Recent Searches -->
        <div class="flex items-center justify-center gap-3 mt-6 text-xs text-slate-500 flex-wrap">
          <span class="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Recent Searches:</span>
          <router-link to="/explore?q=STEM" class="hover:text-[#009FB7] transition-colors">STEM Scholarships</router-link>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <router-link to="/explore?zip=95112" class="hover:text-[#009FB7] transition-colors">Scholarships for International Students</router-link>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <router-link to="/explore?q=Montessori" class="hover:text-[#009FB7] transition-colors">Merit Scholarships</router-link>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <router-link to="/explore?q=IB" class="hover:text-[#009FB7] transition-colors">Need-Based Scholarships</router-link>
        </div>
      </div>
    </section>

    <!-- RESULTS SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Results Header -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        
        <!-- Results Count & Active Filters -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div>
            <h2 class="text-xl font-extrabold text-[#111827]">{{ filteredSchools.length }} Results Found</h2>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Showing 1-{{ filteredSchools.length }} of {{ filteredSchools.length }} Schools</p>
          </div>

          <!-- Category Filter Buttons -->
          <div class="flex flex-wrap gap-2">
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
        </div>
      </div>

      <!-- Schools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="school in filteredSchools" 
          :key="school.id"
          class="bg-white rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
        >
          <!-- Card Image Header -->
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img :src="school.image" :alt="school.name" class="w-full h-full object-cover" />
            
            <!-- Type / Category Tag -->
            <span class="absolute top-3 left-3 bg-[#009FB7] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              {{ school.category }}
            </span>
          </div>

          <!-- Card Body -->
          <div class="p-5 flex-1 flex flex-col">
            <!-- Title & Rating -->
            <div class="flex justify-between items-start mb-1">
              <h3 class="text-base font-extrabold text-[#111827] truncate pr-2">{{ school.name }}</h3>
              <div class="flex items-center gap-1 shrink-0">
                <svg class="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span class="text-xs font-bold text-slate-700">{{ school.rating }}</span>
              </div>
            </div>

            <!-- Student Count -->
            <div class="flex justify-between items-center mb-5 text-[11px] text-slate-500">
              <div class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {{ school.students }}
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-4 mb-5 border-y border-slate-100 py-3">
              <div>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Annual Tuition</p>
                <p class="text-xs font-bold text-slate-800">{{ school.tuition }}</p>
              </div>
              <div class="text-right">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Category</p>
                <p class="text-xs font-bold text-slate-800">{{ school.category }}</p>
              </div>
            </div>

            <!-- Focus Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span 
                v-for="(tag, index) in school.tags" 
                :key="index"
                class="bg-slate-50 text-slate-600 border border-slate-200 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
              >
                {{ tag }}
              </span>
            </div>

            <!-- FIX: Corrected RouterLink path -->
            <router-link :to="{ name: 'school-details', params: { id: school.id } }" class="mt-auto w-full bg-[#009FB7] hover:bg-[#00899e] text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
              View Detailed Profile
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Zero State if filters match nothing -->
      <div v-if="filteredSchools.length === 0" class="text-center py-12">
        <p class="text-slate-500 font-medium">No schools found for "{{ activeTab }}".</p>
        <button @click="activeTab = 'All Types'" class="mt-4 text-[#009FB7] hover:underline font-bold text-sm">Clear Filters</button>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { schoolsData, filterTabsData, type School } from '../data/Data' 
import { useSearch } from '../Search'

// State variables
const schools = ref<School[]>(schoolsData)
const filterTabs = ref<string[]>(filterTabsData)

// search
const { searchQuery, searchResults, executeSearch, goToSchool } = useSearch()

// Set the active tab to the first item ('All Types') by default
const activeTab = ref<string>(filterTabsData[0])

// Computed property to dynamically filter schools based on the active tab
const filteredSchools = computed(() => {
  if (activeTab.value === 'All Types') {
    return schools.value
  }
  
  // Filter by matching the tab name against the category OR tags
  return schools.value.filter(school => {
    const matchesCategory = school.category.toLowerCase().includes(activeTab.value.toLowerCase())
    const matchesTags = school.tags.some(tag => tag.toLowerCase().includes(activeTab.value.toLowerCase()))
    
    return matchesCategory || matchesTags
  })
})
</script>