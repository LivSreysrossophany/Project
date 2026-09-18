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
export const filterTabsData: string[] = ['All Types', 'Public', 'Private']

export const featuresData: Feature[] = [
  {
    title: 'Smart Scholarship Matching',
    description: 'Get personalized scholarship recommendations based on your study level, field, grades, destination, and eligibility.',
    bgIcon: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPaths: ['M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'] 
  },
  {
    title: 'Verified Scholarships',
    description: 'Find trusted scholarship opportunities checked against official university, government, and organization sources.',
    bgIcon: 'bg-teal-100',
    iconColor: 'text-teal-600',
    iconPaths: ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'] 
  },
  {
    title: 'Deadline & Eligibility Alerts',
    description: 'Stay on top of application deadlines and eligibility requirements so you never miss an opportunity.',
    bgIcon: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    iconPaths: [
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
      'M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    ]
  },
  {
    title: 'AI Application Assistant',
    description: 'Get AI-powered help with scholarship essays, application questions, documents, and personalized application guidance.',
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
    image: 'https://res.klook.com/image/upload/w_750,c_fill,q_85/v1710142781/hotel/mh3mkp4wcderwiytmwfb.jpg'
  },
  {
    id: 2,
    name: 'Heritage Oak Science & Technology',
    category: 'Public Charter',
    rating: 4.8,
    tuition: 'Tuition Free',
    students: '850 Students',
    tags: ['Robotics', 'Public Charter', 'AP Honors'],
    image: 'https://d25wby5c7p9100.cloudfront.net/public/uploads/5efe41b55010fe111dcedc326e59a5ab/images/files/1c8c2c773e6ab4d17e3bb855e6ac05b9/large/emilykeeney.spring.heritageoak-359.jpg?1752556015'
  },
  {
  id: 27,
  name: 'Paragon International University',
  category: 'Private University',
  rating: 5,
  tuition: '$2,000 - $5,000/yr',
  students: '2,000+ Students',
  tags: ['Engineering', 'STEM', 'Business', 'IT', 'Private University', 'Research'],
  image: 'https://sustainability-ai.org/paragon_university.jpg'
},
  {
    id: 4,
    name: 'Norton University',
    category: 'Private University',
    rating: 5,
    tuition: '$700 - $2,000/yr',
    students: '5,000+ Students',
    tags: ['Engineering', 'IT', 'Business', 'Private University', 'Architecture'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLrlqUbpRVC_iNl6uqN9-d18lg1G1jDP9A7jVV0cAHg&s=10'
  },
{
    id: 5,
    name: 'Cambodia University of Technology and Science (CamTech)',
    category: 'Private University',
    rating: 5,
    tuition: '$1,500 - $3,000/yr',
    students: '1,000+ Students',
    tags: ['Engineering', 'STEM', 'Technology', 'Private University', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgjvVirx1MMLBOTbX2FiAuJgsJRS9O1Imw5vxQUaUtw&s=10'
  },
  {
    id: 6,
    name: 'Institute of Technology of Cambodia',
    category: 'Public Institute',
    rating: 5,
    tuition: '$650 - $2500/yr',
    students: '1800+ Students',
    tags: ['Engineering', 'STEM', 'Public University', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnuMu3rnOGpWTfWhEdzcdFEKBD4NVQC_hQwhU-iN7AA&s=10'
  },

  {
    id: 7,
    name: 'Cambodia Academy of Digital Technology (CADT)',
    category: 'Public Institute',
    rating: 5,
    tuition: '$1,250 - $2,500/yr',
    students: '150+ new students/year',
    tags: ['Engineering', 'STEM', 'Public Institute', 'Research', 'Digital Technology'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtqm4TRY_v5OyED9afhxyNTKdlkN_hi9J0JWhD5yN7A&s=10'
  },
  {
    id: 8,
    name: 'ACLEDA University of Business (AUB)',
    category: 'Private University',
    rating: 5,
    tuition: '$1,000 - $2,500/yr',
    students: '10,700+ Students',
    tags: ['Business',
    'Finance',
    'STEM',
    'Private University',
    'Research',
    'Technology'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJI3c1u2EPvJo087SabpeipPIMGoVq6jHgJQd0DaZofg&s=10'
  },
    {
    id: 9,
    name: 'American University of Phnom Penh (AUPP)',
    category: 'Private University',
    rating: 5,
    tuition: '$6,000 - $9,000/yr',
    students: '1,950+ Students',
    tags: ['Business', 'Technology', 'Law', 'Social Sciences', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDxPJQIC8VeEFjMoKD665NNMHgsJAnJmLGh1k7E0qdw&s=10'
  },
  {
    id: 10,
    name: 'Royal University of Phnom Penh (RUPP)',
    category: 'Public University',
    rating: 5,
    tuition: '$250 - $450/yr',
    students: '30,000+ Students',
    tags: ['Engineering',
    'STEM',
    'Public University',
    'Research',
    'Humanities',
    'Social Sciences'],
    image: 'https://fed.rupp.edu.kh/images/slider/slide2.jpg'
  },
  {
    id: 11,
    name: 'National Polytechnic Institute of Cambodia (NPIC)',
    category: 'Public Institute',
    rating: 5,
    tuition: '$400 - $800/yr',
    students: '1,000+ Students',
    tags: ['Engineering',
    'STEM',
    'Public Institute',
    'Technical',
    'Research',
    'Vocational'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHbv11LFJCpNp-jviCbws6hPrCe4E-Sdle3yaWGzkMw&s=10'
  },
  {
    id: 12,
    name: 'National University of Management (NUM)',
    category: 'Public  University',
    rating: 5,
    tuition: '$500 - $1,500/yr',
    students: '1,000+ Students',
    tags: [ 'Business',
    'Finance',
    'Economics',
    'Public University',
    'Management',
    'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtARqDAuu4twKDzp4Y6NNc0ZALoElrzRf9I5PVFQ0TAA&s=10'
  },
    {
    id: 13,
    name: 'BELTEI International University (BIU)',
    category: 'Private University',
    rating: 5,
    tuition: '$500 - $1,500/yr',
    students: '1,000+ Students',
    tags: ['Business',
    'Engineering',
    'STEM',
    'Private University',
    'IT',
    'Languages'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0J1cG149W-7hpEQHCPzKp3Lov3kJrCh0KIrHzqYgnAA&s=10',
  },
  {
  id: 14,
  name: 'Paññāsāstra University of Cambodia (PUC)',
  category: 'Private University',
  rating: 4,
  tuition: '$1,000 - $2,500/yr',
  students: '3,000+ Students',
  tags: [
    'Business',
    'Economics',
    'Law',
    'Education',
    'Private University',
    'Information Technology'
  ],
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyqM3rjLoGhmapBwfHtW7awqb541hcLDuMJjeghvhqA&s=10'
},
    
    {
    id: 15,
    name: 'Royal University of Law and Economics (RULE)',
    category: 'Public  University',
    rating: 5,
    tuition: '$500 - $1,500/yr',
    students: '1,500+ Students',
    tags: [ 'Law',
    'Economics',
    'Business',
    'Public University',
    'Finance',
    'Management'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOxMnUt1DwaLyMEp6-j66Tm1j-_kYmihpy3Ud-FbOzA&s=10'
  },
  {
    id: 16,
    name: 'Human Resource University (HRU)',
    category: 'Private  University',
    rating: 5,
    tuition: '$400 - $1,200/yr',
    students: '5,000+ Students',
    tags: ['Business',
    'Management',
    'IT',
    'Private University',
    'Accounting',
    'Finance'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9GmuRwQbOW0Y_n4PW7TpBH_0LkAEOAsHWiLLulzEhg&s=10'
  },
  {
    id: 17,
    name: 'Harvard University',
    category: 'Private University',
    rating: 5,
    tuition: '$59,000 - $60,000/yr',
    students: '23,000+ Students',
    tags: ['Business', 'Engineering', 'STEM', 'Research'],
    image: 'https://oscg.b-cdn.net/summercourses/assets/c2/c2ec23eacbd84ab235c24500f29e70e9ef6723d3bdedff732fc0671ed660cf10.jpg'
  },
  {
    id: 18,
    name: 'MIT',
    category: 'Private University',
    rating: 5,
    tuition: '$62,000 - $65,000/yr',
    students: '11,000+ Students',
    tags: ['Engineering', 'STEM', 'Computer Science', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCISUuDBQ344RoRtFViJIilo_V0pUdVwq7MUPQOl1-w&s=10'
  },
  {
    id: 19,
    name: 'Stanford University',
    category: 'Private University',
    rating: 5,
    tuition: '$60,000 - $65,000/yr',
    students: '17,000+ Students',
    tags: ['Engineering', 'STEM', 'Business', 'Research'],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b'
  },
  {
    id: 20,
    name: 'University of Oxford',
    category: 'Public University',
    rating: 5,
    tuition: '$35,000 - $60,000/yr',
    students: '26,000+ Students',
    tags: ['Humanities', 'STEM', 'Business', 'Research'],
    image: 'https://dynamic-media.tacdn.com/media/photo-o/31/d2/7e/23/caption.jpg?w=700&h=500&s=1'
  },
  {
    id: 21,
    name: 'University of Cambridge',
    category: 'Public University',
    rating: 5,
    tuition: '$35,000 - $65,000/yr',
    students: '24,000+ Students',
    tags: ['Engineering', 'STEM', 'Humanities', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GbrnmUKPRvr7TX0YuwAol124wMbRihaus02yw54Zxv_k0r6iROZfvpRg&s=10'
  },
  {
    id: 22,
    name: 'University of Toronto',
    category: 'Public University',
    rating: 5,
    tuition: '$30,000 - $55,000/yr',
    students: '97,000+ Students',
    tags: ['Engineering', 'STEM', 'Business', 'Research'],
    image: 'https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg'
  },
  {
    id: 23,
    name: 'University of Melbourne',
    category: 'Public University',
    rating: 5,
    tuition: '$25,000 - $50,000/yr',
    students: '53,000+ Students',
    tags: ['Engineering', 'STEM', 'Business', 'Research'],
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952'
  },
  {
    id: 24,
    name: 'National University of Singapore',
    category: 'Public University',
    rating: 5,
    tuition: '$20,000 - $40,000/yr',
    students: '40,000+ Students',
    tags: ['Engineering', 'STEM', 'Computer Science', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-8QLZCtnCIvW3TfCgzeJ1mRsNpCR1sda6WBKTksPzg&s=10'
  },
  {
    id: 25,
    name: 'University of Tokyo',
    category: 'Public University',
    rating: 5,
    tuition: '$4,000 - $6,000/yr',
    students: '28,000+ Students',
    tags: ['Engineering', 'STEM', 'Technology', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmtbDHIHQQgfuFsulJN9FsbcteEiONZWPgEDN_VLTGw&s=10'
  },
  {
    id: 26,
    name: 'Tsinghua University',
    category: 'Public University',
    rating: 5,
    tuition: '$4,000 - $8,000/yr',
    students: '50,000+ Students',
    tags: ['Engineering', 'STEM', 'Technology', 'Research'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9rhc2DNTsggTxkmFbBkqvpWENEzuPQW_7xq0pfMX1g&s=10'
  }
]




