import { ref, computed, type Ref } from 'vue'

export interface SearchOptions<T> {
  keys: (keyof T)[]
}

export function useSearch<T extends Record<string, any>>(
  items: Ref<T[]>,
  options: SearchOptions<T>
) {
  const searchQuery = ref('')

  const filteredItems = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return items.value

    const tokens = query.split(/\s+/)

    return items.value.filter((item) =>
      tokens.every((token) =>
        options.keys.some((key) => {
          const value = item[key]
          if (value == null) return false
          return String(value).toLowerCase().includes(token)
        })
      )
    )
  })

  return {
    searchQuery,
    filteredItems
  }
}