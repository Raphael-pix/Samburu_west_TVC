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
export const titles = [
  { value: "male", label: "Mr." },
  { value: "female", label: "Mrs." },
  { value: "doctor", label: "Dr" },
  { value: "professor", label: "Prof" },
  { value: "female-married", label: "Miss" },
]
export const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
]
export const nationalities = [
  { value: "burundian", label: "Burundian" },
  { value: "comorian", label: "Comorian" },
  { value: "djiboutian", label: "Djiboutian" },
  { value: "eritrean", label: "Eritrean" },
  { value: "ethiopian", label: "Ethiopian" },
  { value: "kenyan", label: "Kenyan" },
  { value: "malagasy", label: "Malagasy" },
  { value: "malawian", label: "Malawian" },
  { value: "mauritian", label: "Mauritian" },
  { value: "mozambican", label: "Mozambican" },
  { value: "rwandan", label: "Rwandan" },
  { value: "seychellois", label: "Seychellois" },
  { value: "somali", label: "Somali" },
  { value: "south_sudanese", label: "South Sudanese" },
  { value: "tanzanian", label: "Tanzanian" },
  { value: "ugandan", label: "Ugandan" },
  { value: "zambian", label: "Zambian" },
  { value: "zimbabwean", label: "Zimbabwean" },
  {value: "other", label:"Other"},
];
export const ethnicity = [
  { value: "agikuyu", label: "Kikuyu" },
  { value: "akamba", label: "kamba" },
  { value: "ameru", label: "meru" },
  { value: "kisii", label: "Kisii" },
  { value: "luhya", label: "Luhya" },
  { value: "luo", label: "Luo" },
  { value: "maasai", label: "Maasai" },
  { value: "samburu", label: "Samburu" },
  { value: "turkana", label: "Turkana" },
  { value: "rendille", label: "Rendille" },
  { value: "borana", label: "Borana" },
  { value: "gabra", label: "Gabra" },
  { value: "pokot", label: "Pokot" },
  { value: "taita", label: "Taita" },
  { value: "teso", label: "Teso" },
  { value: "kuria", label: "Kuria" },
  { value: "mijikenda", label: "Mijikenda" },
  { value: "swahili", label: "Swahili" },
  { value: "embu", label: "Embu" },
  { value: "tharaka", label: "Tharaka" },
  { value: "ndorobo", label: "Ndorobo" },
  {value: "other", label:"Other"},
];
export const counties = [
  { value: "baringo", label: "Baringo" },
  { value: "bomet", label: "Bomet" },
  { value: "bungoma", label: "Bungoma" },
  { value: "busia", label: "Busia" },
  { value: "elgeyo_marakwet", label: "Elgeyo Marakwet" },
  { value: "embu", label: "Embu" },
  { value: "garissa", label: "Garissa" },
  { value: "homa_bay", label: "Homa Bay" },
  { value: "isiolo", label: "Isiolo" },
  { value: "kajiado", label: "Kajiado" },
  { value: "kakamega", label: "Kakamega" },
  { value: "kericho", label: "Kericho" },
  { value: "kiambu", label: "Kiambu" },
  { value: "kilifi", label: "Kilifi" },
  { value: "kirinyaga", label: "Kirinyaga" },
  { value: "kisii", label: "Kisii" },
  { value: "kisumu", label: "Kisumu" },
  { value: "kitui", label: "Kitui" },
  { value: "kwale", label: "Kwale" },
  { value: "laikipia", label: "Laikipia" },
  { value: "lamu", label: "Lamu" },
  { value: "machakos", label: "Machakos" },
  { value: "makueni", label: "Makueni" },
  { value: "mandera", label: "Mandera" },
  { value: "marsabit", label: "Marsabit" },
  { value: "meru", label: "Meru" },
  { value: "migori", label: "Migori" },
  { value: "mombasa", label: "Mombasa" },
  { value: "murang'a", label: "Murang'a" },
  { value: "nairobi", label: "Nairobi" },
  { value: "nakuru", label: "Nakuru" },
  { value: "nandi", label: "Nandi" },
  { value: "narok", label: "Narok" },
  { value: "nyamira", label: "Nyamira" },
  { value: "nyandarua", label: "Nyandarua" },
  { value: "nyeri", label: "Nyeri" },
  { value: "samburu", label: "Samburu" },
  { value: "siaya", label: "Siaya" },
  { value: "taita_taveta", label: "Taita Taveta" },
  { value: "tana_river", label: "Tana River" },
  { value: "tharaka_nithi", label: "Tharaka Nithi" },
  { value: "trans_nzoia", label: "Trans Nzoia" },
  { value: "turkana", label: "Turkana" },
  { value: "uasin_gishu", label: "Uasin Gishu" },
  { value: "vihiga", label: "Vihiga" },
  { value: "wajir", label: "Wajir" },
  { value: "west_pokot", label: "West Pokot" },
];
export const intakeDates = [
  { value: "april", label: "April-2025" },
]
export const programmeType = [
  { value: "certificate", label: "Certificate" },
  { value: "diploma", label: "Diploma" },
]
export const stages = [
  { value: "1st Year", label: "1" },
  { value: "2nd Year", label: "2" },
  { value: "3rd Year", label: "3" },
  { value: "4th Year", label: "4" },
  { value: "5th Year", label: "5" },
  { value: "6th Year", label: "6" },
]
export const programmes = [
  { value: "automotive_engineering", label: "Automotive Engineering" },
  { value: "building_and_construction", label: "Building and Construction" },
  { value: "civil_engineering", label: "Civil Engineering" },
  { value: "electrical_and_electronic_engineering", label: "Electrical and Electronic Engineering" },
  { value: "mechanical_engineering", label: "Mechanical Engineering" },
  { value: "welding_and_fabrication", label: "Welding and Fabrication" },
  { value: "plumbing", label: "Plumbing" },
  { value: "carpentry_and_joinery", label: "Carpentry and Joinery" },
  { value: "hospitality_and_catering", label: "Hospitality and Catering" },
  { value: "food_and_beverage_production", label: "Food and Beverage Production" },
  { value: "tourism_and_travel_management", label: "Tourism and Travel Management" },
  { value: "fashion_and_design", label: "Fashion and Design" },
  { value: "hairdressing_and_beauty_therapy", label: "Hairdressing and Beauty Therapy" },
  { value: "business_management", label: "Business Management" },
  { value: "accounting_and_finance", label: "Accounting and Finance" },
  { value: "human_resource_management", label: "Human Resource Management" },
  { value: "supply_chain_management", label: "Supply Chain Management" },
  { value: "agriculture_and_agronomy", label: "Agriculture and Agronomy" },
  { value: "horticulture", label: "Horticulture" },
  { value: "information_communication_technology", label: "Information Communication Technology (ICT)" },
  { value: "computer_systems_and_repairs", label: "Computer Systems and Repairs" },
  { value: "graphic_design_and_multimedia", label: "Graphic Design and Multimedia" },
  { value: "journalism_and_mass_communication", label: "Journalism and Mass Communication" },
  { value: "early_childhood_development_education", label: "Early Childhood Development Education (ECDE)" },
  { value: "social_work_and_community_development", label: "Social Work and Community Development" },
  { value: "health_records_and_information", label: "Health Records and Information" },
  { value: "pharmaceutical_technology", label: "Pharmaceutical Technology" },
  { value: "medical_laboratory_technology", label: "Medical Laboratory Technology" },
  { value: "nursing", label: "Nursing" },
  { value: "environmental_science", label: "Environmental Science" },
  { value: "occupational_safety_and_health", label: "Occupational Safety and Health" },
  { value: "automotive_mechatronics", label: "Automotive Mechatronics" },
].sort((a, b) => a.label.localeCompare(b.label));
export const studentActivities = [
  {
    title: "Student Clubs",
    icon: "/assets/icons/clubs.svg",
    description: "Join over 50+ student-led organizations ranging from academic clubs to cultural societies"
  },
  {
    title: "Sports & Recreation",
    icon: "/assets/icons/sports.svg",
    description: "Participate in intramural sports, fitness classes, and outdoor adventure programs"
  },
  {
    title: "Arts & Culture",
    icon: "/assets/icons/arts.svg",
    description: "Express yourself through music, theater, dance, and visual arts programs"
  },
  {
    title: "Leadership",
    icon: "/assets/icons/leadership.svg",
    description: "Develop your leadership skills through student government and community service"
  },
  {
    title: "Events",
    icon: "/assets/icons/events.svg",
    description: "Enjoy campus-wide events, festivals, and celebrations throughout the year"
  },
  {
    title: "Wellness",
    icon: "/assets/icons/wellness.svg",
    description: "Access health services, counseling, and wellness programs for a balanced life"
  }
];
