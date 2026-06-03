// ============================================
// ✏️ EDIT FILE INI UNTUK KUSTOMISASI PORTFOLIO
// Semua konten website terpusat di sini.
// Anda TIDAK perlu mengedit file komponen.
// ============================================

import heroProfileImg from '../assets/Profile Photo Hero Section (crop).JPG';
import processPhotoProfile from '../assets/process photo profile.jpeg';

import certKoko from '../assets/certificate/KOKO RAINER.jpg';
import certIcampn from '../assets/certificate/ICampN Participant - Frederick Rainer Suryanto.pdf';
import certSic from '../assets/certificate/SIC_Frederick Rainer Suryanto.pdf';

// ─── INFORMASI PERSONAL ─────────────────────
// ✏️ Ganti dengan data Anda
export const personalInfo = {
  name: "Frederick Rainer Suryanto",
  firstName: "Frederick",
  tagline: "UI/UX Designer & Data Analyst",
  university: "Universitas Brawijaya",
  major: "Teknik Informatika 2023",
  bio: "A passionate UI/UX Designer and Data Analyst from Universitas Brawijaya, crafting intuitive digital experiences and transforming data into actionable insights. Focused on blending aesthetics with analytics to build impactful solutions.",
  profileImage: heroProfileImg,
  // ✏️ Teks untuk hero section
  heroIntro: "Hey. I'm Rainer,",
  heroTitle: {
    line1: "UI/UX",
    line2: "Designer & Data",
    line3: "analyst",
  },
  heroDescription:
    "Behind every interface I design is a reason. Research, behavioral data, and a genuine understanding of what people actually need. Not just something that looks good. Something that works.",
};

// ─── SOCIAL LINKS ────────────────────────────
// ✏️ Ganti URL dengan milik Anda. Set null untuk sembunyikan.
export const socialLinks = {
  email: "frederickrainer123@gmail.com",
  linkedin: "https://linkedin.com/in/frederick-rainer",
  github: "https://github.com/frederick-rainer",
  dribbble: "https://dribbble.com/frederick-rainer",
  instagram: null,
};

// ─── NAVIGASI ────────────────────────────────
// ✏️ Tambah/hapus link navigasi
export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Highlights", href: "#highlight" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

// ─── HIGHLIGHTS / KEUNGGULAN ─────────────────
// ✏️ Edit judul dan deskripsi. Maksimal 4 item.
export const highlights = [
  {
    id: 1,
    title: "01 · Research-Driven Design",
    description:
      "I don't guess what users need. I find out. Through interviews, behavioral analysis, and usability testing.",
  },
  {
    id: 2,
    title: "02 · Data Analysis",
    description:
      "Python, SQL, and visualization tools to turn raw data into decisions that actually make sense.",
  },
  {
    id: 3,
    title: "03 · End-to-End UI/UX",
    description:
      "From PRD to high-fidelity Figma prototype. 5+ complete design cycles across real clients and competitions.",
  },
  {
    id: 4,
    title: "04 · Measurable Outcomes",
    description:
      "80%+ task completion. 30%+ conversion uplift. 70%+ admin workload reduction. The work has numbers.",
  },
];

// ─── PENGALAMAN ──────────────────────────────
// ✏️ Tambah/hapus pengalaman kerja & pendidikan
export const experiences = [
  {
    id: 1,
    role: "Chinese Cultural, East Java Tourism, and Social Ambassador",
    company: " East Java Association of Chinese Social Groups",
    period: "(March 2026 – Present)",
    description:
      "Coordinated cultural campaigns and content reaching 23,100+ organic views. Mobilized 80+ donors for a regional blood drive.",
  },
  {
    id: 2,
    role: "UI/UX Designer Intern",
    company: "PT Bukit Arumn Sejahtera",
    period: "(Jan – Apr 2026)",
    description:
      "Designed 5+ end-to-end modules for a centralized web platform. Delivered 30%+ more job applicants, 80%+ task completion, and 70%+ reduction in admin workload.",
  },
  {
    id: 3,
    role: "Teaching Team",
    company: "Raion Community, UB",
    period: "(Apr 2025 – Feb 2026)",
    description:
      "Built a full UI/UX workshop curriculum and mentored 10+ members across 5+ sessions.",
  }, {
    id: 4,
    role: "Resource Development Staff",
    company: "Raion Community, UB",
    period: "(Jan 2025 – Feb 2026)",
    description:
      "Helped attract 100+ recruitment applicants and co-organized 4 flagship events including Raion Academy and Hackjam.",
  },
  {
    id: 5,
    role: "Computer Science Student (GPA 3.78)",
    company: "Universitas Brawijaya",
    period: "2023 — Present",
    description:
      " maintained while running real client work and competitive design projects in parallel.",
  },
];

// ─── KEGIATAN NON-AKADEMIK / SOFT SKILL ─────
// ✏️ Tambah/hapus kegiatan non-akademik dan leadership
export const activities = [
  {
    id: 1,
    title: "Chinese Cultural, East Java Tourism, and Social Ambassador",
    organization: "East Java Association of Chinese Social Groups",
    period: "March 2026 – Present",
    category: "Leadership",
    icon: "",
    imageIcon: "../src/assets/logo koci jawa timur.png",
    iconWidth: "60px",
    description:
      "Represented the organization as a cultural ambassador, coordinating campaigns that achieved 23,100+ organic views and mobilizing 80+ donors for a regional blood drive.",
    skills: ["Public Speaking", "Event Coordination", "Cultural Advocacy"],
  },
  {
    id: 2,
    title: "Teaching Team – UI/UX Workshop",
    organization: "Raion Community, Universitas Brawijaya",
    period: "Apr 2025 – Feb 2026",
    category: "Mentorship",
    icon: "🎓",
    description:
      "Designed and delivered a full UI/UX workshop curriculum, mentoring 10+ members across 5+ hands-on sessions from wireframing to prototyping.",
    skills: ["Mentoring", "Curriculum Design", "Knowledge Sharing"],
  },
  {
    id: 3,
    title: "Resource Development Staff",
    organization: "Raion Community, Universitas Brawijaya",
    period: "Jan 2025 – Feb 2026",
    category: "Teamwork",
    icon: "",
    imageIcon: "../src/assets/logo Raion.png",
    iconWidth: "60px",
    description:
      "Led recruitment efforts attracting 100+ applicants and co-organized 4 flagship events including Raion Academy and Hackjam.",
    skills: ["Team Coordination", "Recruitment", "Event Management"],
  },
  {
    id: 4,
    title: "Volunteer – Regional Blood Drive",
    organization: "East Java Association of Chinese Social Groups",
    period: "March 2026",
    category: "Social Impact",
    icon: "❤️",
    description:
      "Played a key role in mobilizing 80+ donors for a community blood drive, managing outreach strategies and on-site volunteer coordination.",
    skills: ["Community Service", "Outreach", "Volunteer Management"],
  },
  {
    id: 5,
    title: "Content & Campaign Strategist",
    organization: "East Java Association of Chinese Social Groups",
    period: "March 2026 – Present",
    category: "Communication",
    icon: "📢",
    description:
      "Crafted content strategies for social media campaigns that organically reached 23,100+ views, amplifying cultural awareness across East Java.",
    skills: ["Content Strategy", "Social Media", "Storytelling"],
  },
  {
    id: 6,
    title: "Semifinalist – IOFEST UNTAR",
    organization: "UNTAR National Competition",
    period: "2025",
    category: "Achievement",
    icon: "🏆",
    description:
      "Competed among 75+ participants and reached the semifinal stage with NutriSync, a data-driven nutritional insights project.",
    skills: ["Problem Solving", "Presentation", "Critical Thinking"],
  },
  {
    id: 7,
    title: "1st Runner Up Koko Jawa Timur 2026",
    organization: "Ikatan Koko Cici Jawa Timur - PSMTI Jawa Timur",
    period: "2026",
    category: "Achievement",
    icon: "",
    imageIcon: "../src/assets/logo koci jawa timur.png",
    // ✏️ Sesuaikan ukuran logo (contoh: "60px", "80px", "100%")
    iconWidth: "60px",
    description:
      "Competed among 25+ finalists and earned 1st Runner Up at Koko Jawa Timur 2026, demonstrating public speaking, leadership, and problem-solving on a regional stage.",
    skills: ["Public Speaking", "Leadership", "Communication", "Cultural Advocacy"],
  },
  {
    id: 8,
    title: "BCA YOUth Ambassador 2.0",
    organization: "PT Bank Central Asia Tbk",
    period: "2026",
    category: "Achievement",
    icon: "",
    // ✏️ Masukkan path logo BCA Anda di bawah ini, contoh: "/images/logo-bca.png" atau import seperti foto profil
    imageIcon: "../src/assets/Logo BCA.jpeg",
    // ✏️ Sesuaikan ukuran logo (contoh: "60px", "80px", "100%")
    iconWidth: "60px",
    description:
      "Selected as one of 50 BCA YOUth Ambassadors 2.0 from 2,000+ applicants nationwide. Recognized for leadership potential, innovation, and impact-driven thinking.",
    skills: ["Leadership", "Innovation", "Communication", "Problem Solving", "Impact-driven Thinking"]
  },
];

// ─── SECTION TITLES ──────────────────────────
// ✏️ Ganti judul setiap section
export const sectionMeta = {
  experience: {
    label: "Journey",
    title: "Experience & Education",
    subtitle:
      "A timeline of my professional journey and academic background.",
  },
  activities: {
    label: "Beyond Academics",
    title: "Leadership & Activities",
    subtitle:
      "Non-academic experiences that shaped my leadership, communication, and collaborative mindset.",
  },
  process: {
    impactTitle: "DESIGNING WITH DATA,\nBUILDING WITH PURPOSE.",
    impactDesc:
      "I blend creativity and strategy to design intuitive interfaces and compelling brand identities. From UX research to visual storytelling, my skills ensure seamless and engaging experiences.",
    stepsTitle: "Design Is a Method, Not a Mood",
    stepsDesc:
      "A strategic, creative process that ensures intuitive and impactful design.",
  },
  projects: {
    label: "Portfolio",
    title: "Featured Projects",
    subtitle:
      "A curated selection of my work in UI/UX design and data analytics, showcasing creative solutions and data-driven insights.",
  },
  certificates: {
    label: "Credentials",
    title: "Certificates & Awards",
    subtitle:
      "Recognitions and certifications that validate my expertise and continuous learning journey.",
  },
  contact: {
    label: "Contact",
    title: "Let's Connect",
    subtitle:
      "Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below.",
  },
};

// ─── SKILL STATS ─────────────────────────────
// ✏️ Edit persentase dan label skill
export const stats = [
  { value: 90, suffix: "%", label: "UI Design" },
  { value: 80, suffix: "%", label: "Data Analysis" },
  { value: 80, suffix: "%+", label: "Task Completion Rate" },
  { value: 92, suffix: "%", label: "UX Research" },
  { value: 95, suffix: "%", label: "Prototyping" },
  { value: 80, suffix: "%+", label: "Client Satisfaction" },
];

// ─── PROSES KERJA ────────────────────────────
// ✏️ Edit langkah-langkah proses desain Anda
export const processSteps = [
  {
    title: "Define the Problem",
    desc: "Research and data before any design tool is opened",
  },
  {
    title: "Structure First",
    desc: "User flows, journey maps, and wireframes before aesthetics.",
  },
  {
    title: "Design With Evidence",
    desc: "Figma work grounded in hierarchy, accessibility, and benchmarks.",
  },
  {
    title: "Test & Measure",
    desc: "Usability sessions and task tracking to verify, not assume.",
  }
];

// ─── GALERI PROSES ───────────────────────────
// ✏️ Ganti URL gambar dengan karya Anda


// ─── GAMBAR PROSES ───────────────────────────
// ✏️ Gambar utama di section proses
export const processImage = {
  src: processPhotoProfile,
  alt: "Creative Process",
};

// ─── PROYEK ──────────────────────────────────
// ✏️ Tambah/hapus proyek. Thumbnail bisa path lokal atau URL.
export const projects = [
  {
    id: 1,
    title: "ReservU",
    description:
      "Full visual identity design,logo, color system (70+ combinations tested), and information architecture built around trust and simplicity.",
    thumbnail: "/images/projects/project1.jpg",
    link: "https://www.behance.net/gallery/234439933/ReservU",
    tags: ["Figma", "UI/UX", "User Research"],
  },
  {
    id: 2,
    title: "Peduli Ibu",
    description:
      "Rebuilt onboarding from user research up. Added 9 new features including a dynamic scheduling calendar for expectant mothers.",
    thumbnail: "/images/projects/project2.jpg",
    link: "https://www.behance.net/gallery/234440861/Peduli-Ib",
    tags: ["Mobile Design", "UI/UX", "Wireframing"],
  },
  {
    id: 3,
    title: "Talko",
    description:
      "AI chatbot interaction design with proactive prompts, achieving 80% task success and measurable retention growth via gamification.",
    thumbnail: "/images/projects/project3.jpg",
    link: "https://www.behance.net/gallery/234442461/Talko-Learning-App-Application",
    tags: ["Figma", "Prototyping", "Mobile UI"],
  },
  {
    id: 4,
    title: "NutriSync",
    description:
      " Transformed complex nutritional data into actionable visual insights. Semifinalist IOFEST UNTAR among 75+ participants. ",
    thumbnail: "/images/projects/project4.jpg",
    link: "https://www.behance.net/gallery/234443817/NutriSync",
    tags: ["Web Design", "UI/UX", "Wireframing"],
  },
  {
    id: 5,
    title: "Sehat Mental UB",
    description:
      "Mental wellness platform for UB students. Redesigned stigma-reducing flows and a minimalist journaling feature built to lower barriers to entry.",
    thumbnail: "/images/projects/project5.jpg",
    link: "https://www.behance.net/gallery/234526873/Sehat-Mental-UB",
    tags: ["UX Research", "Wireframing", "Figma"],
  },
  {
    id: 6,
    title: "PT Bukit Arumn Sejahtera Web Design Intern",
    description:
      "Unified 5 fragmented service modules into one platform. 30%+ conversion lift, 80%+ task completion, 70%+ admin reduction.",
    thumbnail: "/images/projects/project6.jpg",
    link: "https://www.bukitaurumnsejahtera.co.id",
    tags: ["Product Design", "UI/UX", "Wireframing"],
  },
  {
    id: 7,
    title: "Food Delivery Customer Retention Analysis",
    description:
      "This data analysis project investigates the acute customer retention problem within a food delivery platform. Despite successfully acquiring 1,000 unique customers, the platform suffers from a massive 89.6% churn rate after the first order. This repository contains the end-to-end data pipeline, from data preprocessing in SQLite to interactive visualization in Power BI, along with strategic business recommendations to shift the focus from expensive acquisition to sustainable retention.",
    thumbnail: "/images/projects/project7.jpg",
    link: "https://drive.google.com/file/d/1GcgsW8hTQGBd-qUecfFSkrYKynH17tLB/view?usp=sharing",
    tags: ["Data Analysis", "SQL", "Power BI"],
  }
];

// ─── SERTIFIKAT ──────────────────────────────
// ✏️ Tambah/hapus sertifikat. Gunakan gambar landscape.
// Setiap sertifikat memiliki: id, title, issuer, date, image (path), dan description.
export const certificates = [
  {
    id: 3,
    title: "1st Runner Up Koko Jawa Timur 2026",
    issuer: "Ikatan Koko Cici Jawa Timur",
    date: "2026",
    image: certKoko,
    description:
      "Earned 1st Runner Up at Koko Jawa Timur 2026 among 25+ finalists.",
  },
  {
    id: 5,
    title: "Samsung Innovation Campus (SIC) Participant",
    issuer: "Samsung",
    date: "2026",
    image: certSic,
    description:
      "Participated in the Samsung Innovation Campus program, focusing on technology education and innovation-driven problem solving.",
  },
  {
    id: 6,
    title: "Participant of ICampN",
    issuer: "ICampN",
    date: "2026",
    image: certIcampn,
    description:
      "Actively participated in the ICampN program, engaging in collaborative activities and developing new skills.",
  }
];

// ─── KONTAK ──────────────────────────────────
// ✏️ Info kontak untuk section contact & footer
export const contactInfo = {
  email: "frederickrainer123@gmail.com",
  linkedin: "https://www.linkedin.com/in/frederick-rainer",
};
