import { ref } from 'vue'
import { useRouter } from 'vue-router'

export interface SearchOptions {
  /** Target route path for search results (default: '/search') */
  searchRoute?: string
}

export function useSearch(options: SearchOptions = {}) {
  const { searchRoute = '/search' } = options
  
  const router = useRouter()
  const searchQuery = ref<string>('')
  const isSearchOpen = ref<boolean>(false)

  const toggleSearch = (): void => {
    isSearchOpen.value = !isSearchOpen.value
  }

  const executeSearch = (): void => {
    const trimmedQuery = searchQuery.value.trim()
    if (!trimmedQuery) return

    router.push({
      path: searchRoute,
      query: { q: trimmedQuery }
    })

    // Reset UI state after navigation
    isSearchOpen.value = false
  }

  const clearSearch = (): void => {
    searchQuery.value = ''
  }

  return {
    searchQuery,
    isSearchOpen,
    toggleSearch,
    executeSearch,
    clearSearch
  }
}