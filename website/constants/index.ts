export const navItems: NavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
    links: [
      {
        section: "University",
        items: [
          {
            title: "Our History",
            url: "/about/our_history",
          },
          {
            title: "Mission & Vision",
            url: "/about/mission",
          },
          {
            title: "Leadership",
            url: "/about/leadership",
          },
          {
            title: "Campus Life",
            url: "/about/campus_life",
          },
        ],
      },
      {
        section: "Community",
        items: [
          {
            title: "Student Stories",
            url: "/about/student_stories",
          },
          {
            title: "Alumni Network",
            url: "/about/alumni_network",
          },
          {
            title: "Partners",
            url: "/about/patners",
          },
          {
            title: "News & Events",
            url: "/about/news",
          },
        ],
      },
    ],
  },
  {
    title: "Academics",
    url: "/academics",
    links: [
      {
        section: "Programs",
        items: [
          {
            title: "Undergraduate",
            url: "/academics/undergraduate",
          },
          {
            title: "Graduate",
            url: "/academics/graduate",
          },
          {
            title: "Online Learning",
            url: "/academics/online_learning",
          },
          {
            title: "Professional Certificates",
            url: "/academics/certificates",
          },
        ],
      },
      {
        section: "Resources",
        items: [
          {
            title: "Academic Calendar",
            url: "/academics/academic_calender",
          },
          {
            title: "Library",
            url: "/academics/library",
          },
          {
            title: "Research Centers",
            url: "/academics/research_Centers",
          },
          {
            title: "Faculty Directory",
            url: "/academics/faculty_directory",
          },
        ],
      },
    ],
  },
  {
    title: "Admissions",
    url: "/admissions",
    links: [
      {
        section: "Apply",
        items: [
          {
            title: "Application Process",
            url: "/admissions/application_process",
          },
          {
            title: "Requirements",
            url: "/admissions/requirements",
          },
          {
            title: "Deadlines",
            url: "/admissions/deadlines",
          },
          {
            title: "Transfer Credits",
            url: "/admissions/transfer_credits",
          },
        ],
      },
      {
        section: "Financial",
        items: [
          {
            title: "Tuition & Fees",
            url: "/admissions/tuition",
          },
          {
            title: "Scholarships",
            url: "/admissions/scholarships",
          },
          {
            title: "Financial Aid",
            url: "/admissions/financial_aid",
          },
          {
            title: "Payment Plans",
            url: "/admissions/payment",
          },
        ],
      },
    ],
  },
  {
    title: "Student Life",
    url: "/student_life",
    links: [
      {
        section: "Campus",
        items: [
          {
            title: "Housing",
            url: "/student_life/housing",
          },
          {
            title: "Dining",
            url: "/student_life/dining",
          },
          {
            title: "Athletics",
            url: "/student_life/athletics",
          },
          {
            title: "Health Services",
            url: "/student_life/health_services",
          },
        ],
      },
      {
        section: "Activities",
        items: [
          {
            title: "Clubs & Organizations",
            url: "/student_life/clubs",
          },
          {
            title: "Events",
            url: "/student_life/events",
          },
          {
            title: "Career Services",
            url: "/student_life/career_services",
          },
          {
            title: "Student Support",
            url: "/student_life/student_support",
          },
        ],
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
export const featuredCourses = [
  {
    title: "COMPUTER SCIENCE",
    description:
      "Learn computer science fundamentals and advanced programming concepts",
    icon: "/assets/icons/computers.svg",
    backgroundImage: "/assets/images/computer-science.jpg",
  },
  {
    title: "BUSINESS ADMINISTRATION",
    description:
      "Study business principles, management, and organizational leadership",
    icon: "/assets/icons/business.svg",
    backgroundImage: "/assets/images/business.webp",
  },
  {
    title: "MASS COMMUNICATION",
    description:
      "Explore media, journalism, and modern communication techniques",
    icon: "/assets/icons/communications.svg",
    backgroundImage: "/assets/images/mass-communication.jpg",
  },
  {
    title: "SOCIAL MEDIA",
    description:
      "Master social media marketing and digital communication strategies",
    icon: "/assets/icons/media.svg",
    backgroundImage: "/assets/images/social-media.webp",
  },
  {
    title: "BS MATHEMATICS",
    description:
      "Dive deep into mathematical theories and practical applications",
    icon: "/assets/icons/mathematics.svg",
    backgroundImage: "/assets/images/mathematics.jpg",
  },
  {
    title: "BA LLB",
    description: "Study law and legal frameworks in a comprehensive program",
    icon: "/assets/icons/law.svg",
    backgroundImage: "/assets/images/law.jpg",
  },
];

export const aboutItems: AboutItem[] = [
  {
    title: "About Samburu West TVC",
    imageUrl: "/assets/images/courses.jpg",
    text: "Learn more about our mission, vision, and commitment to providing quality technical and vocational education.",
    url: "/about",
  },
  {
    title: "Student Life",
    imageUrl: "/assets/images/student_life.jpg",
    text: "Discover a vibrant student community with extracurricular activities, clubs, and events that make learning exciting.",
    url: "/student_life",
  },
];

export const upcomingEvents = [
  { date: '10', month: 'JAN', title: 'Workshop FMP' },
  { date: '15', month: 'JAN', title: 'Workshop FMP' },
  { date: '20', month: 'JAN', title: 'Workshop FMP' }
];

export const coreValues = [
  {
    title:"Accountability",
    icon:"/assets/icons/accountability.svg"
  },
  {
    title:"Integrity",
    icon:"/assets/icons/integrity.svg"
  },
  {
    title:"Diligence",
    icon:"/assets/icons/dilligence.svg"
  },
  {
    title:"Transparency",
    icon:"/assets/icons/transparency.svg"
  },
  {
    title:"Hardwork",
    icon:"/assets/icons/hardwork.svg"
  },
  {
    title:"Teamwork",
    icon:"/assets/icons/teamwork.svg"
  },
]

export const timelineData:TimelineProps[] = [
  {
    year: "1950",
    title: "School Foundation",
    icon: "/assets/icons/building.svg",
    description: "Our institution was founded with a vision to provide quality education to all. The first building was established in the heart of the city.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    details: [
      "Initial enrollment of 50 students",
      "5 dedicated teaching staff members",
      "First building constructed on 2 acres of land",
      "Focused on primary education"
    ],
    image: "/api/placeholder/400/300"
  },
  {
    year: "1960",
    title: "First Graduation",
    icon: "/assets/icons/graduation.svg",
    description: "Celebrated our first graduating class with 100 students. This marked a significant milestone in our journey.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    details: [
      "100% graduation rate",
      "85% college acceptance rate",
      "Established alumni association",
      "Started scholarship program"
    ],
    image: "/api/placeholder/400/300"
  },
  {
    year: "1975",
    title: "Campus Expansion",
    icon: "/assets/icons/building-2.svg",
    description: "Added new facilities including a state-of-the-art library and science laboratories.",
    color: "text-green-500",
    bgColor: "bg-green-100",
    image: "/api/placeholder/400/300"
  },
  {
    year: "1990",
    title: "Sports Excellence",
    icon: "/assets/icons/trophy.svg",
    description: "Established our sports complex and started our athletics program, which has since won numerous state championships.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    image: "/api/placeholder/400/300"
  },
  {
    year: "2010",
    title: "Digital Revolution",
    icon: "/assets/icons/book.svg",
    description: "Integrated technology into our curriculum and launched our first computer science program.",
    color: "text-red-500",
    bgColor: "bg-red-100",
    image: "/api/placeholder/400/300"
  },
  {
    year: "2024",
    title: "Modern Era",
    icon: "/assets/icons/users.svg",
    description: "Achieved recognition as one of the top educational institutions in the region, serving over 5000 students.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
    image: "/api/placeholder/400/300"
  }
];

export const leaders = [
  { name: "Jane Doe", title: "CEO", image: "/assets/images/logo.png" },
  {
    name: "John Smith",
    title: "CTO",
    image: "/assets/images/logo.png",
  },
  {
    name: "Alice Johnson",
    title: "CFO",
    image: "/assets/images/logo.png",
  },
  {
    name: "Bob Williams",
    title: "COO",
    image: "/assets/images/logo.png",
  },
];
