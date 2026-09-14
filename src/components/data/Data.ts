// src/data/Data.ts

export interface Feature {
  title: string
  description: string
  bgIcon: string
  iconColor: string
  iconPaths: string[]
}

export interface School {
  id: number
  name: string
  category: string
  rating: number
  tuition: string
  students: string
  tags: string[]
  image: string
}
// In this line can change a filter
export const filterTabsData: string[] = ['All Types', 'Private', 'Charter', 'Boarding']

export const featuresData: Feature[] = [
  {
    title: 'Real-time Stats',
    description: 'Up-to-the-minute data on teacher-to-student ratios and test scores.',
    bgIcon: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPaths: ['M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'] 
  },
  {
    title: 'Verified Reviews',
    description: 'Every review is hand-checked to ensure genuine inputs from parents & students.',
    bgIcon: 'bg-teal-100',
    iconColor: 'text-teal-600',
    iconPaths: ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'] 
  },
  {
    title: 'Local Insights',
    description: 'Understand the neighborhood safety, transit, and housing around schools.',
    bgIcon: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    iconPaths: [
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
      'M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    ]
  },
  {
    title: 'Global Curriculum',
    description: 'Compare IB, A-Levels, AP, and local systems side by side easily.',
    bgIcon: 'bg-amber-100',
    iconColor: 'text-amber-600',
    iconPaths: ['M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'] 
  }
]
// Add schooldata
export const schoolsData: School[] = [
  {
    id: 1,
    name: 'Summit Ridge International',
    category: 'Public Charter',
    rating: 4.9,
    tuition: '$18,500/yr',
    students: '1,250 Students',
    tags: ['IB World School', 'STEM Focused', 'Public Available'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Heritage Oak Science & Technology',
    category: 'Public Charter',
    rating: 4.8,
    tuition: 'Tuition Free',
    students: '850 Students',
    tags: ['Robotics', 'Public Charter', 'AP Honors'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Northbrook Montessori Primary',
    category: 'Private',
    rating: 4.7,
    tuition: '$12,200/yr',
    students: '420 Students',
    tags: ['Montessori', 'Forest School', 'Music Program'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Heritage Oak Science & Technology',
    category: 'Public Charter',
    rating: 4.8,
    tuition: 'Tuition Free',
    students: '850 Students',
    tags: ['Robotics', 'Public Charter', 'AP Honors'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Heritage Oak Science & Technology',
    category: 'Public Charter',
    rating: 4.8,
    tuition: 'Tuition Free',
    students: '850 Students',
    tags: ['Robotics', 'Public Charter', 'AP Honors'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
  }
]