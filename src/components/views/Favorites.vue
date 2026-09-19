<template>
  <div class="min-h-screen bg-[#F4F8FA] font-sans text-slate-800 antialiased flex flex-col">
    

    <main class="pt-[100px] flex-1 px-4 sm:px-6 lg:px-12 pb-20">
      <div class="max-w-7xl mx-auto">
        
        <!-- Page Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight flex items-center gap-3">
              My Saved Schools
              <span class="bg-teal-50 text-[#009FB7] text-sm py-1 px-3 rounded-full border border-teal-100">{{ savedSchools.length }}</span>
            </h1>
            <p class="text-sm text-slate-500 mt-2">Keep track of the universities and scholarships you are interested in.</p>
          </div>
          <router-link to="/explore" class="inline-flex items-center gap-2 text-sm font-bold text-[#009FB7] hover:text-[#00899e] transition-colors">
            Discover more schools
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </router-link>
        </div>

        <!-- ========================================== -->
        <!-- EMPTY STATE (If no schools are saved)      -->
        <!-- ========================================== -->
        <div v-if="savedSchools.length === 0" class="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div class="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
            <svg class="w-12 h-12 text-[#009FB7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 mb-2">No favorites yet</h2>
          <p class="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
            You haven't saved any schools to your favorites list. Explore our database and click the heart icon on any school to save it here for later.
          </p>
          <router-link to="/explore" class="bg-[#009FB7] hover:bg-[#00899e] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#009FB7]/20 transition-all flex items-center gap-2">
            Explore Schools Now
          </router-link>
        </div>

        <!-- ========================================== -->
        <!-- SAVED SCHOOLS GRID                         -->
        <!-- ========================================== -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="school in savedSchools" 
            :key="school.id"
            class="bg-white rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
          >
            <!-- Card Image Header -->
            <div class="relative h-44 overflow-hidden bg-slate-100 cursor-pointer" @click="$router.push({ name: 'school-details', params: { id: school.id } })">
              <img :src="school.image" :alt="school.name" class="w-full h-full object-cover" />
              
              <!-- Type / Category Tag -->
              <span class="absolute top-3 left-3 bg-[#009FB7] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {{ school.category }}
              </span>

              <!-- Remove Favorite Button -->
              <button 
                @click.stop="removeSchool(school.id)"
                class="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 z-10 text-red-500 hover:bg-red-50"
                title="Remove from favorites"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>

            <!-- Card Body -->
            <div class="p-5 flex-1 flex flex-col">
              <!-- Title & Rating -->
              <div class="flex justify-between items-start mb-1 cursor-pointer" @click="$router.push({ name: 'school-details', params: { id: school.id } })">
                <h3 class="text-base font-extrabold text-[#111827] truncate pr-2 hover:text-[#009FB7] transition-colors">{{ school.name }}</h3>
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

              <!-- Action RouterLink -->
              <router-link :to="{ name: 'school-details', params: { id: school.id } }" class="mt-auto w-full bg-slate-50 hover:bg-[#009FB7] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                View Profile
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { schoolsData, type School } from '../data/Data';

const router = useRouter();
const route = useRoute();

// ==========================================
// NAVBAR & AUTH LOGIC
// ==========================================
const isMenuOpen = ref<boolean>(false);
const isAuthenticated = ref<boolean>(false);

const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true';
};

watch(
  () => route.path,
  () => {
    checkAuthStatus();
  }
);

// ==========================================
// FAVORITES LOGIC
// ==========================================
const savedSchools = ref<School[]>([]);

// Function to load favorites from localStorage
const loadFavorites = () => {
  const savedIdsStr = localStorage.getItem('savedSchoolIds');
  if (savedIdsStr) {
    const savedIds: number[] = JSON.parse(savedIdsStr);
    // Find matching school objects from the data file
    savedSchools.value = schoolsData.filter(school => savedIds.includes(school.id));
  } else {
    savedSchools.value = [];
  }
};

// Function to remove a school from the list
const removeSchool = (idToRemove: number) => {
  // Remove from the visual list immediately
  savedSchools.value = savedSchools.value.filter(school => school.id !== idToRemove);
  
  // Remove from localStorage database
  const savedIdsStr = localStorage.getItem('savedSchoolIds');
  if (savedIdsStr) { 
    let savedIds: number[] = JSON.parse(savedIdsStr);
    savedIds = savedIds.filter(id => id !== idToRemove);
    localStorage.setItem('savedSchoolIds', JSON.stringify(savedIds));
  }
};

onMounted(() => {
  checkAuthStatus();
  
  // Kick user out if they try to visit /favorites without being logged in
  if (!isAuthenticated.value) {
    router.push('/login');
    return;
  }

  loadFavorites();
});
</script>