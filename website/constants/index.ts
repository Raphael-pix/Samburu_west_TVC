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
            title: "Leadership",
            url: "/about/leadership",
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
            title: "Tuition & Fees",
            url: "/admissions/tuition",
          },
        ]
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
            title: "Clubs & Organizations",
            url: "/student_life/clubs",
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
export const icons = [
  {
    title: "instagram",
    icon: "/assets/icons/instagram.svg",
  },
  {
    title: "twitter",
    icon: "/assets/icons/twitter.svg",
  },
  {
    title: "linkedin",
    icon: "/assets/icons/linkedin.svg",
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
  { date: "10", month: "JAN", title: "Workshop FMP" },
  { date: "15", month: "JAN", title: "Workshop FMP" },
  { date: "20", month: "JAN", title: "Workshop FMP" },
];
export const coreValues = [
  {
    title: "Accountability",
    icon: "/assets/icons/accountability.svg",
  },
  {
    title: "Integrity",
    icon: "/assets/icons/integrity.svg",
  },
  {
    title: "Diligence",
    icon: "/assets/icons/dilligence.svg",
  },
  {
    title: "Transparency",
    icon: "/assets/icons/transparency.svg",
  },
  {
    title: "Hardwork",
    icon: "/assets/icons/hardwork.svg",
  },
  {
    title: "Teamwork",
    icon: "/assets/icons/teamwork.svg",
  },
];
export const timelineData: TimelineProps[] = [
  {
    year: "1950",
    title: "School Foundation",
    icon: "/assets/icons/building.svg",
    description:
      "Our institution was founded with a vision to provide quality education to all. The first building was established in the heart of the city.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    details: [
      "Initial enrollment of 50 students",
      "5 dedicated teaching staff members",
      "First building constructed on 2 acres of land",
      "Focused on primary education",
    ],
    image: "/api/placeholder/400/300",
  },
  {
    year: "1960",
    title: "First Graduation",
    icon: "/assets/icons/graduation.svg",
    description:
      "Celebrated our first graduating class with 100 students. This marked a significant milestone in our journey.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    details: [
      "100% graduation rate",
      "85% college acceptance rate",
      "Established alumni association",
      "Started scholarship program",
    ],
    image: "/api/placeholder/400/300",
  },
  {
    year: "1975",
    title: "Campus Expansion",
    icon: "/assets/icons/building-2.svg",
    description:
      "Added new facilities including a state-of-the-art library and science laboratories.",
    color: "text-green-500",
    bgColor: "bg-green-100",
    image: "/api/placeholder/400/300",
  },
  {
    year: "1990",
    title: "Sports Excellence",
    icon: "/assets/icons/trophy.svg",
    description:
      "Established our sports complex and started our athletics program, which has since won numerous state championships.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    image: "/api/placeholder/400/300",
  },
  {
    year: "2010",
    title: "Digital Revolution",
    icon: "/assets/icons/book.svg",
    description:
      "Integrated technology into our curriculum and launched our first computer science program.",
    color: "text-red-500",
    bgColor: "bg-red-100",
    image: "/api/placeholder/400/300",
  },
  {
    year: "2024",
    title: "Modern Era",
    icon: "/assets/icons/users.svg",
    description:
      "Achieved recognition as one of the top educational institutions in the region, serving over 5000 students.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
    image: "/api/placeholder/400/300",
  },
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
export const articles = [
  {
    id: 1,
    title:
      "The Importance of Branding: tips for building a personal brand online",
    description:
      "The future of Tech: Implications and also trends, this is so very important The future of Tech: Implications and also trends, this is so very important",
    author: "Ikejiaku Chineye",
    timeAgo: "4 mins ago",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 2,
    title: "Understanding Modern Web Development Frameworks",
    description:
      "An in-depth look at the latest frameworks and their impact on web development",
    author: "Sarah Chen",
    timeAgo: "1 hour ago",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 3,
    title: "Understanding Modern Web Development Frameworks",
    description:
      "An in-depth look at the latest frameworks and their impact on web development",
    author: "Sarah Chen",
    timeAgo: "1 hour ago",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 4,
    title: "The Impact of React on Modern Web Development",
    description:
      "This article explores how React, a JavaScript library for building user interfaces, has revolutionized web development with its component-based architecture and virtual DOM.",
    author: "Al-amin Ahmed",
    timeAgo: "June 2, 2024",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 5,
    title: "Top Web Development Frameworks for 2025",
    description:
      "An overview of the leading web development frameworks expected to dominate in 2025, including insights into their features and use cases.",
    author: "Creative Solutions & Co.",
    timeAgo: "November 21, 2024",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 6,
    title: "New Events in Web Development Frameworks and Tools 2025",
    description:
      "A forward-looking article discussing emerging frameworks and tools in web development, highlighting trends like AI integration and serverless architectures.",
    author: "Averageguymedianow",
    timeAgo: "November 24, 2024",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 7,
    title: "Top 5 Web Development Frameworks to Watch in 2025",
    description:
      "An analysis of the top five web development frameworks poised to make a significant impact in 2025, detailing their advantages and ideal use cases.",
    author: "The Omni Shot",
    timeAgo: "November 25, 2024",
    category: "Technology",
    image: "/assets/images/hero-image.jpeg",
  },
];
export const events = [
  {
    id: 1,
    title: "Africa Tech Summit Nairobi 2025",
    location: "Sarit Expo Centre, Nairobi",
    time: "February 12-13, 2025",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 2,
    title: "InnovateKE 2025 - Kenya's Premier Technology and Innovation Summit",
    location: "Nairobi, Kenya",
    time: "March 8-14, 2025",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 3,
    title: "Fleetech 2025: Africa's Premier Telematics Exhibition & Conference",
    location: "Nairobi, Kenya",
    time: "Dates to be announced",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 4,
    title: "The Impact of React on Modern Web Development",
    location: "Nairobi, Kenya",
    time: "June 2, 2024",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 5,
    title: "Top Web Development Frameworks for 2025",
    location: "Nairobi, Kenya",
    time: "November 21, 2024",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 6,
    title: "New Events in Web Development Frameworks and Tools 2025",
    location: "Nairobi, Kenya",
    time: "November 24, 2024",
    image: "/assets/images/hero-image.jpeg",
  },
  {
    id: 7,
    title: "Top 5 Web Development Frameworks to Watch in 2025",
    location: "Nairobi, Kenya",
    time: "November 25, 2024",
    image: "/assets/images/hero-image.jpeg",
  },
];
