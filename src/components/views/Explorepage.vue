<template>
  <div class="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 pb-16">
    
    <main class="pt-17">
      
      <!-- HERO SECTION -->
      <section class="relative bg-cover bg-center pt-16 pb-20 px-4 sm:px-6 lg:px-10 border-b border-slate-500 overflow-hidden">
        <!-- Background Image with Overlay -->
        <img src="../image/bg3.jpg" alt="Background" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-slate-900/40"></div>

        <!-- Content Container -->
        <div class="relative max-w-7xl mx-auto text-center z-10">
          <!-- Badge -->
          <span class="inline-block bg-[#E0F4F4] text-[#009FB7] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 ">
            Discover Potential
          </span>
          
          <!-- Heading -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#009FB7] tracking-tight mb-4 drop-shadow-sm">
            Explore Top Academic Institutions
          </h1>
          
          <p class="text-sm sm:text-base font-medium max-w-2xl mx-auto mb-10 leading-relaxed text-white drop-shadow">
            Let our smart tool guide you to top scholarships and financial aid built for your educational path.
          </p>

          <!-- Search Bar Wrapper -->
          <div class="relative bg-white p-2 sm:p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-3 text-slate-700">
            <!-- School Name Input & Dropdown -->
            <div class="flex-1 flex items-center px-4 py-2 relative">
              <svg class="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="Search by University Name..." 
                class="w-full focus:outline-none text-sm bg-transparent" 
              />
              
              <!-- Dropdown Results List -->
              <ul 
                v-if="searchQuery.trim() !== '' && searchResults.length > 0" 
                class="absolute top-full left-0 w-full mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 text-left"
              >
                <li 
                  v-for="school in searchResults" 
                  :key="school.id" 
                  @click="goToSchool(school.id)" 
                  class="px-4 py-3 hover:bg-teal-50 cursor-pointer border-b border-slate-50 last:border-none flex items-center gap-3 transition-colors"
                >
                  <img :src="school.image" class="w-8 h-8 rounded-md object-cover shrink-0" />
                  <div class="min-w-0">
                    <div class="text-xs font-bold text-slate-900 truncate">{{ school.name }}</div>
                    <div class="text-[10px] text-slate-500">{{ school.category }}</div>
                  </div>
                </li>
              </ul>

                
              <div 
                v-else-if="searchQuery.trim() !== '' && searchResults.length === 0" 
                class="absolute top-full left-0 w-full mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 z-50 text-center text-xs text-slate-500"
              >
                No schools found matching "{{ searchQuery }}"
              </div>
            </div>

            <button 
              @click="executeSearch" 
              class="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200 shrink-0"
            >
              <span>Search Scholarships</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div> 

          <!-- Recent Searches -->
          <div class="flex items-center justify-center gap-3 mt-6 text-xs text-slate-200 flex-wrap">
            <span class="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Recent Searches:</span>
            <router-link to="/explore?q=STEM" class="hover:text-[#009FB7] transition-colors">Full Funding</router-link>
            <span class="w-1 h-1 rounded-full bg-slate-400"></span>
            <router-link to="/explore?zip=95112" class="hover:text-[#009FB7] transition-colors">STEM Scholarships</router-link>
            <span class="w-1 h-1 rounded-full bg-slate-400"></span>
            <router-link to="/explore?q=Montessori" class="hover:text-[#009FB7] transition-colors">Study Abroad</router-link>
            <span class="w-1 h-1 rounded-full bg-slate-400"></span>
            <router-link to="/explore?q=IB" class="hover:text-[#009FB7] transition-colors">Undergraduate</router-link>
          </div>
        </div>
      </section>

      <!-- RESULTS SECTION -->
      <section 
        class="relative bg-cover bg-center px-4 sm:px-6 lg:px-8 border-b border-slate-100 "
      >
        
        <div class="relative max-w-7xl mx-auto text-center"></div>
      </section>

      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white/60 rounded-3xl">
        
        <!-- Results Header -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div>
              <h2 class="text-xl font-extrabold text-[#111827]">{{ filteredSchools.length }} Results Found</h2>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Showing 1-{{ displayedSchools.length }} of {{ filteredSchools.length }} Schools</p>
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
            v-for="school in displayedSchools" 
            :key="school.id"
            class="bg-white rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
          >
            <!-- Card Image Header -->
            <div class="relative h-44 overflow-hidden bg-slate-100">
              <img :src="school.image" :alt="school.name" class="w-full h-full object-cover" />
              
              <span class="absolute top-3 left-3 bg-[#009FB7] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {{ school.category }}
              </span>

              <!-- Favorite (Save) Button -->
              <button 
                @click.stop="toggleSave(school.id)"
                class="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 z-10"
                :class="isSaved(school.id) ? 'text-red-500' : 'text-slate-400 hover:text-red-400'"
                title="Save to favorites"
              >
                <svg v-if="isSaved(school.id)" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>

            <!-- Card Body -->
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base font-extrabold text-[#111827] truncate pr-2">{{ school.name }}</h3>
                <div class="flex items-center gap-1 shrink-0">
                  <svg class="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <span class="text-xs font-bold text-slate-700">{{ school.rating }}</span>
                </div>
              </div>

              <div class="flex justify-between items-center mb-5 text-[11px] text-slate-500">
                <div class="flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {{ school.students }}
                </div>
              </div>

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

              <div class="flex flex-wrap gap-1.5 mb-6">
                <span 
                  v-for="(tag, index) in school.tags" 
                  :key="index"
                  class="bg-slate-50 text-slate-600 border border-slate-200 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
                >
                  {{ tag }}
                </span>
              </div>

              <router-link :to="{ name: 'school-details', params: { id: school.id } }" class="mt-auto w-full bg-[#009FB7] hover:bg-[#00899e] text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                View Detailed Profile
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div v-if="displayLimit < filteredSchools.length" class="flex justify-center mt-10">
          <button 
            @click="loadMoreSchools" 
            class="bg-white border-2 border-[#009FB7] text-[#009FB7] hover:bg-[#009FB7] hover:text-white font-bold px-8 py-3 rounded-xl transition duration-300 flex items-center gap-2"
          >
            Show More Schools
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>

        <!-- Zero State -->
        <div v-if="filteredSchools.length === 0" class="text-center py-12">
          <p class="text-slate-500 font-medium">No schools found for "{{ activeTab }}".</p>
          <button @click="activeTab = 'All Types'" class="mt-4 text-[#009FB7] hover:underline font-bold text-sm">Clear Filters</button>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue' 
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { schoolsData, filterTabsData, type School } from '../data/Data' 
import { useSearch } from '../Search'

// Combine Routers
const router = useRouter()
const route = useRoute()

// ==========================================
// NAVBAR LOGIC
// ==========================================
const isMenuOpen = ref<boolean>(false)
const isAuthenticated = ref<boolean>(false)

const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem("isAuthenticated") === "true";
};

watch(
  () => route.path,
  () => {
    checkAuthStatus();
  }
);

// ==========================================
// PAGE & SEARCH LOGIC
// ==========================================
const schools = ref<School[]>(schoolsData)
const filterTabs = ref<string[]>(filterTabsData)

const { searchQuery, searchResults, executeSearch, goToSchool } = useSearch()

const activeTab = ref<string>(filterTabsData[0])
const displayLimit = ref<number>(9) 

watch(activeTab, () => {
  displayLimit.value = 9
})

const loadMoreSchools = () => {
  displayLimit.value += 9 
}

// ==========================================
// SAVE/FAVORITE LOGIC
// ==========================================
const savedSchoolIds = ref<number[]>([])

onMounted(() => {
  // Setup authentication for navbar
  checkAuthStatus();

  // Setup saved schools for page
  const saved = localStorage.getItem('savedSchoolIds')
  if (saved) {
    savedSchoolIds.value = JSON.parse(saved)
  }
})

const isSaved = (id: number) => {
  return savedSchoolIds.value.includes(id)
}

const toggleSave = (id: number) => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true'
  
  if (!isAuth) {
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

const filteredSchools = computed(() => {
  if (activeTab.value === 'All Types') {
    return schools.value
  }
  
  return schools.value.filter(school => {
    const matchesCategory = school.category.toLowerCase().includes(activeTab.value.toLowerCase())
    const matchesTags = school.tags.some(tag => tag.toLowerCase().includes(activeTab.value.toLowerCase()))
    
    return matchesCategory || matchesTags
  })
})

const displayedSchools = computed(() => {
  return filteredSchools.value.slice(0, displayLimit.value)
})
</script>