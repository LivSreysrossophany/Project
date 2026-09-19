<template>
  <div class="min-h-screen bg-[#F4F8FA] font-sans text-slate-800 pb-20 flex flex-col">
    

    <main class="pt-[72px] flex-1">
      <!-- Loading State -->
      <div v-if="isLoading" class="min-h-[70vh] flex items-center justify-center">
        <svg class="w-10 h-10 animate-spin text-[#009FB7]" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>

      <!-- Error / Not Found State -->
      <div v-else-if="!school" class="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <svg class="w-16 h-16 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-2xl font-bold text-slate-800 mb-2">School Not Found</h2>
        <p class="text-slate-500 mb-6">We couldn't find the details for this institution.</p>
        <button @click="goBack" class="bg-[#009FB7] hover:bg-[#00899e] text-white px-6 py-2 rounded-xl font-bold transition-colors">
          Back to Explore
        </button>
      </div>

      <!-- Success State: School Details -->
      <div v-else>
        <!-- Hero Image Cover -->
        <div class="w-full h-[300px] sm:h-[400px] relative bg-slate-900">
          <img :src="school.image" :alt="school.name" class="w-full h-full object-cover opacity-60" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

          <!-- Back Button (Floating over image) -->
          <button @click="goBack" class="absolute top-6 left-4 sm:left-8 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Results
          </button>
        </div>

        <!-- Main Content Container -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <!-- Header Card -->
          <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/40 p-6 sm:p-10 mb-8 border border-slate-100">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span class="inline-block bg-[#009FB7] text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider mb-3">
                  {{ school.category }}
                </span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-2">
                  {{ school.name }}
                </h1>
                <div class="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                  <span class="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2 py-1 rounded-md">
                    ★ {{ school.rating }} / 5.0
                  </span>
                  <span class="flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {{ school.students }}
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap sm:flex-nowrap gap-3 w-full md:w-auto shrink-0">
                
                <!-- Map Button -->
                <a :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.name)}`" target="_blank" class="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 px-5 py-3 rounded-xl font-bold text-xs transition-colors shadow-sm">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Map
                </a>

                <!-- Favorite / Save Button -->
                <button @click="toggleSave" :class="isSaved ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'" class="flex-1 md:flex-none flex items-center justify-center gap-2 border px-5 py-3 rounded-xl font-bold text-xs transition-colors shadow-sm">
                  <svg class="w-4 h-4" :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  {{ isSaved ? "Saved" : "Save" }}
                </button>

                <button class="flex-1 md:flex-none bg-[#009FB7] hover:bg-[#00899e] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg shadow-[#009FB7]/25 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <!-- Details Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left Column (Description & Tags) -->
            <div class="lg:col-span-2 space-y-8">
              <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h3 class="text-xl font-extrabold text-slate-900 mb-4">
                  About {{ school.name }}
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed mb-6">
                  {{ school.name }} is recognized as a premier institution
                  dedicated to fostering academic excellence and personal growth.
                  With a state-of-the-art campus and a curriculum designed to
                  challenge and inspire, this school prepares students to thrive
                  in a rapidly evolving global landscape.
                </p>

                <h4 class="text-sm font-bold text-slate-900 mb-3">
                  Academic Highlights & Curriculum
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in school.tags" :key="tag" class="bg-[#F4F8FA] text-[#009FB7] border border-[#E0F4F4] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Virtual Tour / Gallery Placeholder -->
              <div class="bg-slate-900 rounded-3xl p-8 text-center text-white relative overflow-hidden">
                <div class="relative z-10">
                  <svg class="w-12 h-12 text-teal-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <h3 class="text-lg font-bold mb-2">Campus Virtual Tour</h3>
                  <p class="text-xs text-slate-400 mb-6">
                    Experience the facilities and classrooms from your home.
                  </p>
                  <button class="bg-white text-slate-900 hover:bg-slate-100 px-6 py-2.5 rounded-xl text-xs font-bold transition-colors">
                    Start Tour
                  </button>
                </div>
              </div>
            </div>

            <!-- Right Column (Quick Facts Sidebar) -->
            <div class="lg:col-span-1 space-y-6">
              <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h3 class="font-extrabold text-slate-900 mb-6">Quick Facts</h3>

                <ul class="space-y-5">
                  <li class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Annual Tuition</p>
                      <p class="text-sm font-bold text-slate-800">{{ school.tuition }}</p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Institution Type</p>
                      <p class="text-sm font-bold text-slate-800">{{ school.category }}</p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enrollment</p>
                      <p class="text-sm font-bold text-slate-800">{{ school.students }}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Contact Box -->
              <div class="bg-teal-50 border border-teal-100 rounded-3xl p-6 text-center">
                <h3 class="font-extrabold text-teal-900 mb-2">Need more info?</h3>
                <p class="text-xs text-teal-700 mb-4">
                  Contact the admissions office directly to schedule a meeting.
                </p>
                <RouterLink to="/contact" class="block w-full bg-white text-teal-700 border border-teal-200 hover:bg-teal-100 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors">
                  Contact Admissions
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- ========================================== -->
          <!-- MORE SCHOOLS (SCROLLABLE CAROUSEL)           -->
          <!-- ========================================== -->
          <div class="mt-16 pt-10 border-t border-slate-200 relative group">
            
            <div class="flex items-center justify-between mb-8">
              <h3 class="text-2xl font-bold text-slate-900">More Schools to Explore</h3>
              <RouterLink to="/explore" class="text-xs font-bold text-[#009FB7] hover:underline">View All</RouterLink>
            </div>

            <!-- Relative Wrapper for Absolute Buttons -->
            <div class="relative">
              
              <!-- Left Arrow Button -->
              <button @click="scrollLeft" class="hidden sm:flex absolute -left-4 md:-left-6 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-500 hover:bg-[#009FB7] hover:text-white hover:border-[#009FB7] shadow-lg transition-all focus:outline-none">
                <svg class="w-6 h-6 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" /></svg>
              </button>

              <!-- Horizontal Scrollable Container (ADDED REF: carouselRef) -->
              <div ref="carouselRef" class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth px-2">
                <div v-for="related in relatedSchools" :key="related.id" class="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden">
                  <!-- Card Image Header -->
                  <div class="relative h-44 overflow-hidden bg-slate-100">
                    <img :src="related.image" :alt="related.name" class="w-full h-full object-cover" />
                    <!-- Type / Category Tag -->
                    <span class="absolute top-3 left-3 bg-[#009FB7] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {{ related.category }}
                    </span>
                  </div>

                  <!-- Card Body -->
                  <div class="p-5 flex-1 flex flex-col">
                    <!-- Title & Rating -->
                    <div class="flex justify-between items-start mb-1">
                      <h3 class="text-base font-extrabold text-[#111827] truncate pr-2">{{ related.name }}</h3>
                      <div class="flex items-center gap-1 shrink-0">
                        <svg class="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <span class="text-xs font-bold text-slate-700">{{ related.rating }}</span>
                      </div>
                    </div>

                    <!-- Student Count -->
                    <div class="flex justify-between items-center mb-5 text-[11px] text-slate-500">
                      <div class="flex items-center gap-1.5">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {{ related.students }}
                      </div>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 gap-4 mb-5 border-y border-slate-100 py-3">
                      <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Annual Tuition</p>
                        <p class="text-xs font-bold text-slate-800">{{ related.tuition }}</p>
                      </div>
                      <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Category</p>
                        <p class="text-xs font-bold text-slate-800">{{ related.category }}</p>
                      </div>
                    </div>

                    <!-- Action RouterLink -->
                    <router-link :to="{ name: 'school-details', params: { id: related.id } }" class="mt-auto w-full bg-slate-50 hover:bg-[#009FB7] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      View Profile
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Right Arrow Button -->
              <button @click="scrollRight" class="hidden sm:flex absolute -right-4 md:-right-6 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-500 hover:bg-[#009FB7] hover:text-white hover:border-[#009FB7] shadow-lg transition-all focus:outline-none">
                <svg class="w-6 h-6 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7 7 7" /></svg>
              </button>

            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { schoolsData, type School } from "../data/Data"; 

const route = useRoute();
const router = useRouter();

// ==========================================
// SCROLL LOGIC FOR CAROUSEL
// ==========================================
const carouselRef = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (carouselRef.value) {
    // Scroll left by the width of one card + gap (~344px)
    carouselRef.value.scrollBy({ left: -344, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carouselRef.value) {
    // Scroll right by the width of one card + gap (~344px)
    carouselRef.value.scrollBy({ left: 344, behavior: 'smooth' });
  }
};

// ==========================================
// NAVBAR LOGIC
// ==========================================
const isMenuOpen = ref<boolean>(false)
const isAuthenticated = ref<boolean>(false)

const checkAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
}

// ==========================================
// DETAILS LOGIC
// ==========================================
const school = ref<School | null>(null);
const isLoading = ref<boolean>(true);
const isSaved = ref<boolean>(false);

// Function to fetch school data based on current URL ID
const loadSchoolData = () => {
  isLoading.value = true;
  const routeId = Number(route.params.id);
  const foundSchool = schoolsData.find((s) => s.id === routeId);

  if (foundSchool) {
    school.value = foundSchool;
    
    // Check if this school is already saved in localStorage
    const saved = localStorage.getItem('savedSchoolIds')
    if (saved) {
      const savedIds = JSON.parse(saved)
      isSaved.value = savedIds.includes(foundSchool.id)
    }
  } else {
    school.value = null; // Show Not Found state
  }

  // Fake a quick loading state so the page feels smooth
  setTimeout(() => {
    isLoading.value = false;
  }, 400);
}

// Fetch data when component loads
onMounted(() => {
  checkAuthStatus();
  loadSchoolData();
});

// Watch for route ID changes (When user clicks a "Related School" card at the bottom)
watch(
  () => route.params.id,
  () => {
    // Only reload if we are still on the school-details page
    if (route.name === 'school-details') {
      loadSchoolData();
    }
  }
);

// Watch for route changes to re-evaluate the auth status for the navbar
watch(
  () => route.path,
  () => {
    checkAuthStatus()
  }
)

// Computed Property for the "Related Schools" cards at the bottom
const relatedSchools = computed(() => {
  if (!school.value) return [];
  // Show up to 10 schools that are NOT the one currently being viewed to allow scrolling
  return schoolsData.filter(s => s.id !== school.value?.id).slice(0, 10);
});

// Navigation
const goBack = () => {
  router.push("/explore"); // Sends user back to search page
};

// Interaction (Toggle Save with Login Verification)
const toggleSave = () => {
  // 1. Check if user is authenticated
  const isAuth = localStorage.getItem('isAuthenticated') === 'true'
  
  if (!isAuth) {
    alert('Please log in to save schools to your favorites.')
    router.push('/login')
    return // Stop here!
  }

  if (!school.value) return;

  const schoolId = school.value.id;
  let savedIds: number[] = [];
  
  // Get current saved list
  const savedStr = localStorage.getItem('savedSchoolIds');
  if (savedStr) {
    savedIds = JSON.parse(savedStr);
  }

  // Toggle Logic
  if (isSaved.value) {
    // Remove it
    savedIds = savedIds.filter(id => id !== schoolId);
    isSaved.value = false;
  } else {
    // Add it
    if (!savedIds.includes(schoolId)) {
      savedIds.push(schoolId);
    }
    isSaved.value = true;
    alert(`${school.value.name} has been saved to your dashboard!`);
  }

  // Save back to localStorage so Profile page can read it
  localStorage.setItem('savedSchoolIds', JSON.stringify(savedIds));
};
</script> 

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>