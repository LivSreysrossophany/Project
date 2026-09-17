import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
// Import your school data and interface
import { schoolsData, type School } from '../components/data/Data' 

export interface SearchOptions {
  searchRoute?: string
}
// in this line it can change router
export function useSearch(options: SearchOptions = {}) {
  const { searchRoute = '/explore' } = options // Set default to your explore page
  
  const router = useRouter()
  const searchQuery = ref<string>('')
  const isSearchOpen = ref<boolean>(false)

  // NEW: Computed property to filter schools based on what the user types
  const searchResults = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return []
    
    // Filter schools that match the name, limited to 5 results for the dropdown
    return schoolsData.filter((school: School) => 
      school.name.toLowerCase().includes(query)
    ).slice(0, 5) 
  })

  const toggleSearch = (): void => {
    isSearchOpen.value = !isSearchOpen.value
  }

  // Handle hitting "Enter" or clicking the main search button
  const executeSearch = (): void => {
    const trimmedQuery = searchQuery.value.trim()
    if (!trimmedQuery) return

    router.push({
      path: searchRoute,
      query: { q: trimmedQuery }
    })

    isSearchOpen.value = false
  }

  const goToSchool = (id: number): void => {
    router.push({ name: 'school-details', params: { id } })
    searchQuery.value = '' // Clear input after clicking
    isSearchOpen.value = false
  }

  const clearSearch = (): void => {
    searchQuery.value = ''
  }

  return {
    searchQuery,
    searchResults,
    isSearchOpen,
    toggleSearch,
    executeSearch,
    goToSchool,
    clearSearch
  }
}