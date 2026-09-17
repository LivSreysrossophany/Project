<template>
  <div class="min-h-screen bg-[#F4F8FA] py-10 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
    <div class="max-w-5xl mx-auto">
      
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-[#111827] tracking-tight">My Dashboard</h1>
          <p class="text-sm text-slate-500 mt-1">Manage your profile, saved schools, and applications.</p>
        </div>
        <button @click="handleLogout" class="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-600 font-medium py-2 px-4 rounded-xl transition-colors text-sm shadow-sm sm:w-auto w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Sign Out
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- LEFT COLUMN: Profile Card -->
        <div class="lg:col-span-1 space-y-6">
          <div class="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col items-center">
            
            <!-- Avatar -->
            <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-[#009FB7] to-[#7CC6C5] p-1 mb-4 shadow-lg shadow-[#009FB7]/20">
              <div class="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl font-extrabold text-[#009FB7]">
                {{ userInitials }}
              </div>
            </div>

            <!-- VIEW MODE: Shows when NOT editing profile and NOT changing password -->
            <div v-if="!isEditingProfile && !isChangingPassword" class="w-full flex flex-col items-center text-center">
              <h2 class="text-xl font-bold text-slate-900">{{ userData.fullName }}</h2>
              <p class="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {{ userData.email }}
              </p>

              <div class="w-full h-px bg-slate-100 my-6"></div>

              <!-- Interactive Stats -->
              <div class="w-full grid grid-cols-2 gap-4 divide-x divide-slate-100 mb-6">
                <div>
                  <p class="text-2xl font-bold text-[#111827]">{{ savedSchools.length }}</p>
                  <p class="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">Saved<br/>Schools</p>
                </div>
                <div>
                  <p class="text-2xl font-bold text-[#111827]">{{ activeApplications }}</p>
                  <p class="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">Active<br/>App</p>
                </div>
              </div>

              <button @click="startEditing" class="w-full bg-[#F4F8FA] hover:bg-[#E8F0F4] text-[#009FB7] font-semibold py-2.5 rounded-xl text-xs transition-colors">
                Edit Profile
              </button>
            </div>

            <!-- EDIT PROFILE MODE -->
            <div v-else-if="isEditingProfile" class="w-full flex flex-col mt-2">
              <div class="mb-3">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
                <input 
                  v-model="editForm.fullName" 
                  type="text" 
                  class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all"
                />
              </div>

              <!-- We disable email editing because it's used as the login ID -->
              <div class="mb-5">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email (Cannot be changed)</label>
                <input 
                  :value="userData.email" 
                  type="email" 
                  disabled
                  class="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-500 cursor-not-allowed opacity-70"
                />
              </div>

              <div class="flex gap-2 w-full">
                <button @click="isEditingProfile = false" class="flex-1 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold py-2 rounded-xl text-xs transition-colors">
                  Cancel
                </button>
                <button @click="saveProfile" class="flex-1 bg-[#009FB7] hover:bg-[#00899e] text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>

            <!-- CHANGE PASSWORD MODE -->
            <div v-else-if="isChangingPassword" class="w-full flex flex-col mt-2">
              <h3 class="text-sm font-bold text-slate-900 mb-4 text-center">Change Password</h3>
              
              <!-- Message Alert (Error or Success) -->
              <div v-if="passwordMessage.text" :class="passwordMessage.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'" class="px-3 py-2 rounded-lg text-[10px] font-bold mb-3 text-center">
                {{ passwordMessage.text }}
              </div>

              <div class="mb-3">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Current Password</label>
                <input v-model="passwordForm.current" type="password" placeholder="••••••••" class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all" />
              </div>
              
              <div class="mb-3">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">New Password</label>
                <input v-model="passwordForm.new" type="password" placeholder="At least 8 characters" class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all" />
              </div>

              <div class="mb-5">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Confirm New Password</label>
                <input v-model="passwordForm.confirm" type="password" placeholder="Match new password" class="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009FB7]/30 focus:border-[#009FB7] transition-all" />
              </div>

              <div class="flex gap-2 w-full">
                <button @click="isChangingPassword = false" class="flex-1 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold py-2 rounded-xl text-xs transition-colors">
                  Cancel
                </button>
                <button @click="savePassword" class="flex-1 bg-[#009FB7] hover:bg-[#00899e] text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-sm">
                  Update
                </button>
              </div>
            </div>

          </div>

          <!-- Account Settings Menu -->
          <div class="bg-white rounded-3xl p-4 shadow-xl shadow-slate-200/40 border border-slate-100">
            <nav class="flex flex-col space-y-1">
              <!-- Account Details (Returns to default view) -->
              <button @click="isChangingPassword = false; isEditingProfile = false" :class="!isChangingPassword ? 'bg-[#F8FAFC] text-[#009FB7]' : 'text-slate-600 hover:bg-slate-50'" class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  Account Details
                </div>
              </button>
              
              <!-- Security & Password (Opens password form) -->
              <button @click="startPasswordChange" :class="isChangingPassword ? 'bg-[#F8FAFC] text-[#009FB7]' : 'text-slate-600 hover:bg-slate-50'" class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Security & Password
                </div>
              </button>
            </nav>
          </div>
        </div>

        <!-- RIGHT COLUMN: Saved Items & Activity -->
        <div class="lg:col-span-2 space-y-6">
          
          <div v-if="!isProfileComplete" class="bg-gradient-to-r from-[#009FB7] to-[#7CC6C5] rounded-3xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 class="font-bold text-lg">Complete your parent profile</h3>
              <p class="text-xs text-white/80 mt-1 max-w-sm">Unlock personalized school recommendations by filling out your child's academic preferences.</p>
            </div>
            <button @click="isProfileComplete = true" class="shrink-0 bg-white text-[#009FB7] px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm">
              Complete Now
            </button>
          </div>

          <!-- Saved Schools Section -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/40 border border-slate-100">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-slate-900">Saved Schools</h3>
              <router-link to="/explore" class="text-xs font-bold text-[#009FB7] hover:underline">Explore More</router-link>
            </div>

            <!-- Dynamic List of Schools -->
            <div v-if="savedSchools.length > 0" class="space-y-4">
              
              <!-- Clicking the card links to the details page -->
              <div 
                v-for="school in savedSchools" 
                :key="school.id" 
                @click="$router.push({ name: 'school-details', params: { id: school.id } })"
                class="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:border-[#009FB7]/30 hover:bg-[#F4F8FA]/50 transition-colors cursor-pointer group"
              >
                <div class="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                  <img :src="school.image" class="w-full h-full object-cover" :alt="school.name" />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-bold text-slate-900 truncate">{{ school.name }}</h4>
                  <p class="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                    <svg class="w-3 h-3 text-[#009FB7]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    {{ school.category }} • {{ school.tuition }}
                  </p>
                </div>
                <!-- Delete Button -->
                <button 
                  @click.stop="removeSchool(school.id)" 
                  class="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors shrink-0" 
                  title="Remove from saved"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
              </div>

            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <svg class="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <h4 class="text-sm font-bold text-slate-700">No schools saved yet</h4>
              <p class="text-xs text-slate-500 mt-1 mb-4">Start exploring to find the best fit for your child.</p>
              <router-link to="/explore" class="bg-white border border-slate-200 text-[#009FB7] hover:bg-slate-50 px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm">Search Schools</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Import the central data store
import { schoolsData, type School } from '../data/Data'

const router = useRouter()

// Data structure
interface UserProfile { fullName: string; email: string }

// --- STATE ---
const userData = ref<UserProfile>({ fullName: 'Loading...', email: 'loading@example.com' })
const isProfileComplete = ref(false)
const activeApplications = ref(0) // Set to 0 initially

// Edit Profile State
const isEditingProfile = ref(false)
const editForm = ref({ fullName: '' })

// Change Password State
const isChangingPassword = ref(false)
const passwordForm = ref({ current: '', new: '', confirm: '' })
const passwordMessage = ref({ text: '', type: '' }) // type: 'error' | 'success'

// Using the School interface from Data.ts
const savedSchools = ref<School[]>([])

// Generate initials based on current name
const userInitials = computed(() => {
  if (!userData.value.fullName || userData.value.fullName === 'Loading...') return ''
  const nameParts = userData.value.fullName.split(' ')
  return nameParts.length >= 2 
    ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase() 
    : userData.value.fullName.slice(0, 2).toUpperCase()
})

// --- LIFECYCLE ---
onMounted(() => {
  if (localStorage.getItem('isAuthenticated') !== 'true') {
    router.push('/login')
    return
  }

  // 1. Load User Profile
  const currentUserStr = localStorage.getItem('currentUser')
  const usersArrayStr = localStorage.getItem('users')

  if (currentUserStr && usersArrayStr) {
    const currentUser = JSON.parse(currentUserStr)
    const allUsers = JSON.parse(usersArrayStr)

    const matchedUser = allUsers.find((user: any) => user.email === currentUser.email)

    if (matchedUser && matchedUser.fullName) {
      userData.value = {
        fullName: matchedUser.fullName,
        email: matchedUser.email
      }
    } else {
      let fallbackName = 'EduFind Member'
      if (currentUser.email) {
        fallbackName = currentUser.email.split('@')[0]
        fallbackName = fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1)
      }
      
      userData.value = { 
        fullName: fallbackName, 
        email: currentUser.email || 'Unknown Email' 
      }
    }
  }

  // 2. Load Saved Schools from LocalStorage
  const savedIdsStr = localStorage.getItem('savedSchoolIds')
  if (savedIdsStr) {
    const savedIds: number[] = JSON.parse(savedIdsStr)
    // Map the IDs stored in local storage to the actual school objects in Data.ts
    savedSchools.value = schoolsData.filter(school => savedIds.includes(school.id))
  }
})

// --- ACTIONS ---

// Profile Name Editing
const startEditing = () => {
  isChangingPassword.value = false
  editForm.value.fullName = userData.value.fullName
  isEditingProfile.value = true
}

const saveProfile = () => {
  // Update local display immediately
  userData.value.fullName = editForm.value.fullName
  
  // Save to database (localStorage)
  const usersArrayStr = localStorage.getItem('users')
  if (usersArrayStr) {
    const allUsers = JSON.parse(usersArrayStr)
    
    const updatedUsers = allUsers.map((user: any) => {
      if (user.email === userData.value.email) {
        return { ...user, fullName: editForm.value.fullName }
      }
      return user
    })
    
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }
  
  isEditingProfile.value = false
}

// Security / Password Editing
const startPasswordChange = () => {
  isEditingProfile.value = false
  isChangingPassword.value = true
  passwordForm.value = { current: '', new: '', confirm: '' }
  passwordMessage.value = { text: '', type: '' }
}

const savePassword = () => {
  passwordMessage.value = { text: '', type: '' } // Reset messages
  
  // 1. Validation
  if (!passwordForm.value.current || !passwordForm.value.new || !passwordForm.value.confirm) {
    passwordMessage.value = { text: 'All fields are required.', type: 'error' }
    return
  }
  if (passwordForm.value.new.length < 8) {
    passwordMessage.value = { text: 'New password must be at least 8 characters.', type: 'error' }
    return
  }
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    passwordMessage.value = { text: 'New passwords do not match.', type: 'error' }
    return
  }

  // 2. Checking Local Storage
  const usersArrayStr = localStorage.getItem('users')
  if (usersArrayStr) {
    const allUsers = JSON.parse(usersArrayStr)
    const userIndex = allUsers.findIndex((u: any) => u.email === userData.value.email)
    
    if (userIndex !== -1) {
      // Verify old password
      if (allUsers[userIndex].password !== passwordForm.value.current) {
        passwordMessage.value = { text: 'Incorrect current password.', type: 'error' }
        return
      }
      
      // Update with new password
      allUsers[userIndex].password = passwordForm.value.new
      localStorage.setItem('users', JSON.stringify(allUsers))
      
      // Update the active currentUser session
      const currentUserStr = localStorage.getItem('currentUser')
      if(currentUserStr) {
          const currentUser = JSON.parse(currentUserStr)
          currentUser.password = passwordForm.value.new
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
      }

      // Success feedback
      passwordMessage.value = { text: 'Password updated successfully!', type: 'success' }
      setTimeout(() => {
        isChangingPassword.value = false
      }, 1500)
    }
  }
}

// Remove school from list dynamically AND local storage
const removeSchool = (idToRemove: number) => {
  savedSchools.value = savedSchools.value.filter(school => school.id !== idToRemove)
  
  const savedIdsStr = localStorage.getItem('savedSchoolIds')
  if (savedIdsStr) { 
    let savedIds: number[] = JSON.parse(savedIdsStr)
    savedIds = savedIds.filter(id => id !== idToRemove)
    localStorage.setItem('savedSchoolIds', JSON.stringify(savedIds))
  }
}

// Logout and kick user to login page
const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('currentUser')
  window.location.href = '/login' 
}
</script>