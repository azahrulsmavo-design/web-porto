import { Database, Terminal, Briefcase } from 'lucide-react';

export const translations = {
    en: {
        navbar: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            cases: 'Cases',
            experience: 'Experience',
            quotes: 'Daily Post',
            personal: 'Personal',
            contact: 'Contact',
            hireMe: 'HIRE ME'
        },
        hero: {
            hello: '// HELLO, I\'M',
            role: 'Aspiring Data Analyst.',
            description: 'I use data and systems thinking to solve real problems in education and online retail.',
            viewWork: 'VIEW WORK',
            downloadCv: 'DOWNLOAD CV'
        },
        about: {
            title: 'About Me.',
            subtitle: 'Background, focus, and what I\'m working on.',
            bio1: 'Recent Mathematics Education graduate (3.40 GPA) with a strong passion for data analytics and artificial intelligence.',
            bio2: 'Brings over a year of hands-on experience from Kevin Book Store, developing data workflows and automation systems. Proven ability to build multi-channel sales dashboards (Power BI), implement demand forecasting, and automate data pipelines.',
            bio3: 'I enjoy turning messy, real-world data into clear insights and simple tools that people actually use.',
            details: [
                {
                    label: 'Background',
                    value: 'B.Ed. in Mathematics Education (UNY)',
                    icon: '🎓',
                    desc: 'GPA: 3.40 / 4.00. Relevant Coursework: Data Analysis & Statistics, Educational Measurement.'
                },
                {
                    label: 'Focus',
                    value: 'Data Analytics & Marketing',
                    icon: '🎯',
                    desc: 'Digital Marketing Analytics, A/B Testing, Dashboard Design.'
                },
                {
                    label: 'Currently',
                    value: 'Building Portfolio & Upskilling',
                    icon: '🚀',
                    desc: 'Preparing for full-time Data Analyst roles and expanding my ML toolkit.'
                }
            ]
        },
        skills: {
            title: 'Skills.',
            subtitle: 'Data, tools, and domain knowledge.',
            items: [
                {
                    title: 'Technical Skills',
                    // Icon handling needs care, we might just store keys or keep structure in component
                    iconKey: 'Database',
                    items: [
                        'Excel Power Query (Good)',
                        'Power BI (Intermediate)',
                        'Python (Pandas, Matplotlib — Intermediate)',
                        'R (RStudio — Good)',
                        'Data Cleaning & EDA',
                    ],
                    desc: "Core stack for transforming raw data into actionable insights."
                },
                {
                    title: 'Tools & Technologies',
                    iconKey: 'Terminal',
                    items: [
                        'Digital Marketing Analytics',
                        'A/B Testing',
                        'Dashboard Design',
                        'Jupyter Notebook',
                        'VS Code',
                        'Git & GitHub',
                    ],
                    desc: "The daily drivers I use to build, analyze, and visualize."
                },
                {
                    title: 'Soft Skills',
                    iconKey: 'Briefcase',
                    items: [
                        'Critical Thinking',
                        'Process Documentation',
                        'Strategic Communication',
                        'Business Analysis',
                        'English (Professional)',
                    ],
                    desc: "Contextual knowledge connecting data to real-world business value."
                },
            ]
        },
        experience: {
            title: 'Experience.',
            subtitle: 'My professional journey so far.',
            list: [
                {
                    id: 1,
                    role: 'Business Development (Manager)',
                    company: 'Kevin Book Store',
                    period: 'Aug 2024 – Okt 2025',
                    description: 'Developed automated data pipelines and inventory strategies necessary for business scalability.',
                    tasks: [
                        'Developed automated data pipelines for Shopee and TikTok order reports using Excel Power Query.',
                        'Created a price floor calculator to maintain consistent margins across online channels.',
                        'Designed and documented B2B & B2C SOPs with full audit readiness.',
                        'Conducted demand forecasting and inventory analytics to optimize restock and supply chain planning.',
                        'Key Achievement: Reduced daily reporting time by 80% through query-based automation.',
                        'Key Achievement: Increased forecasting accuracy by 25%, preventing overstock during peak seasons.'
                    ],
                },
                {
                    id: 2,
                    role: 'Bachelor of Mathematics Education',
                    company: 'Universitas Negeri Yogyakarta',
                    period: 'Aug 2021 - Oct 2025',
                    description: 'GPA: 3.40 / 4.00. Focus on analytical thinking and research methodology.',
                    tasks: [
                        'Relevant Coursework: Data Analysis & Statistics, Research Methodology, Educational Measurement.',
                        'Machine Learning Basics (self-study).',
                    ],
                },
            ]
        },
        contact: {
            title: 'Get In Touch',
            desc: 'If you’d like to talk about data, internships, or collaboration, feel free to reach out. I’m especially interested in roles that mix data, education, and e-commerce.',
            available: 'AVAILABLE FOR OPPORTUNITIES',
            infoTitle: 'Contact Information'
        },
        casesPage: {
            title: 'Explore our projects',
            getInTouch: 'GET IN TOUCH',
            allProjects: 'All Projects',
            client: 'Client',
            location: 'Location',
            techStack: 'Tech Stack',
            timeline: 'Timeline',
            explore: 'EXPLORE',
            visitSite: 'VISIT SITE',
            categories: {
                all: 'All Projects',
                webApp: 'Web App',
                dataAnalysis: 'Data Analysis',
                website: 'Website'
            }
        },
        projects: {
            'web-porto': {
                title: 'Web Portfolio',
                client: 'PERSONAL',
                location: 'INDONESIA',
                desc: 'Personal portfolio website built with modern web technologies to showcase projects and skills.',
                details: {
                    header: "PLAYER 1 PORTFOLIO – INTERACTIVE DATA ANALYST SHOWCASE",
                    subheader: "WEB DEVELOPMENT | UI/UX DESIGN",
                    stats: [
                        { title: "100% Component Modularity", desc: "Built on a scalable React 19 architecture using reusable atomic components, ensuring easy maintenance and rapid content updates for future projects." },
                        { title: "Sub-Second Load Times", desc: "Powered by Vite’s next-generation tooling and optimized asset delivery, achieving near-instant page loads and a seamless single-page application (SPA) experience." },
                        { title: "Premium Dark Mode Aesthetic", desc: "A custom-engineered UI leveraging Tailwind CSS v4 and Glassmorphism effects to create a sophisticated, data-centric visual environment." }
                    ],
                    overview: {
                        title: "Bridging the gap between raw data and creative storytelling",
                        content: "This project is a high-performance personal portfolio website designed to serve as the central hub for my professional identity. It transcends the traditional static CV by offering an interactive, responsive narrative of my journey as an Aspiring Data Analyst. The platform integrates a modern tech stack to showcase technical case studies, professional milestones, and certifications in a visually engaging \"Premium Dark\" environment."
                    },
                    meta: {
                        projectType: "PERSONAL BRANDING / WEB APPLICATION",
                        services: ["FRONTEND DEVELOPMENT", "UI/UX DESIGN", "PERFORMANCE OPTIMIZATION"],
                    },
                    context: {
                        title: "Redefining the Data Analyst Portfolio",
                        content: "In a competitive job market, a PDF resume often fails to capture the full depth of a candidate's technical capabilities and creative problem-solving skills. The challenge was to build a digital platform that does more than list skills—it needed to demonstrate them. The goal was to engineer a fast, responsive, and visually striking application that organizes complex project data (like the Anthropic Interview Analysis and Pangyo Traffic Study) into an accessible, user-friendly interface without compromising on performance.",
                        role: "Acting as Lead Developer and Designer, I architected the application from scratch. I utilized the latest web standards (React 19 & Tailwind 4) to ensure the code quality reflects the same precision and attention to detail applied in my data analysis work."
                    },
                    process: [
                        {
                            title: "1. Component Architecture",
                            desc: "To ensure scalability, the project adopts a modular directory structure. Key sections—Hero, About, Skills, and Projects—were encapsulated into reusable React components (.jsx). This atomic approach allows for independent state management and easier debugging, mirroring the structured approach used in data cleaning pipelines."
                        },
                        {
                            title: "2. UI/UX Engineering",
                            desc: "The design system focuses on a \"Premium Dark Theme\" to reduce eye strain and highlight data visualizations. I integrated Framer Motion to handle complex animations, creating smooth transitions between sections. Glassmorphism effects were applied to cards and navigation elements to add depth and modern texture to the interface."
                        },
                        {
                            title: "3. Content Integration",
                            desc: "The platform aggregates diverse data points from my career:\n\n• Project Showcase: Detailed cards for projects like Internship Intelligence and Kevin Book Store Dashboard.\n• Skill Matrix: A categorized breakdown of technical competencies (Python, SQL, Power BI).\n• Certification Log: A verified timeline of professional achievements."
                        }
                    ],
                    findings: [
                        {
                            title: "Responsive Ecosystem",
                            desc: "The application is fully responsive across all viewports (Mobile, Tablet, Desktop). By utilizing Tailwind's utility-first classes, the layout adapts fluidly, ensuring that complex project details are legible on any device."
                        },
                        {
                            title: "Next-Gen Performance",
                            desc: "Leveraging Vite for build tooling resulted in a lightning-fast development server and optimized production build. This ensures that recruiters and visitors experience zero friction when navigating through heavy content sections."
                        },
                        {
                            title: "Interactive Navigation",
                            desc: "A sophisticated navigation system connects the comprehensive sections (Hero, Experience, Projects) seamlessly. The integration of Lucide React provides a consistent iconographic language that guides the user journey intuitively."
                        }
                    ]
                }
            },
            'antropics-interview': {
                title: 'Antropics Interview',
                client: 'PERSONAL',
                location: 'GLOBAL',
                desc: 'Technical interview project focusing on problem-solving and algorithms using Python.',
                details: {
                    header: "ANTHROPIC – DECODING WORKFORCE BEHAVIOR & TRUST IN AI",
                    subheader: "DATA ANALYTICS | PYTHON",
                    stats: [
                        { title: "3 Distinct Personas", desc: "Identified Using K-Means Clustering on 12,076 interaction turns, we successfully segmented users into three distinct behavioral groups, revealing the hidden \"Micromanager\" archetype previously unknown in standard reports." },
                        { title: "8.64% Hallucination Rate", desc: "Quantified A robust NLP pipeline quantified specific \"Trust Issues.\" We identified that nearly 9% of interactions contained specific keywords related to errors or hallucinations, directly correlating with user frustration." },
                        { title: "Data-Driven User Insight", desc: "By transforming unstructured text into semantic networks, we shifted the understanding of user satisfaction—proving it correlates with \"Results\" rather than \"Ease of Use,\" guiding future AI product strategies." }
                    ],
                    overview: {
                        title: "Translating unstructured conversations into strategic insights",
                        content: "This project is a deep-dive analysis of the \"Anthropic Interviewer\" dataset, exploring how 1,250 professionals across different sectors integrate AI into their daily workflows. It automates the extraction of qualitative patterns—from frustration triggers to adoption maturity—using Unsupervised Machine Learning. The result is a comprehensive dashboard that turns raw text into a strategic map of human-AI collaboration."
                    },
                    meta: {
                        projectType: "PERSONAL CASE STUDY / DATA SCIENCE",
                        services: ["ETL PIPELINE", "NLP ANALYSIS", "BEHAVIORAL CLUSTERING", "DATA VISUALIZATION"],
                    },
                    context: {
                        title: "Decoding the \"Black Box\" of User Interaction",
                        content: "When analyzing large-scale interview data, traditional manual coding is inefficient and prone to bias. The raw dataset contained over 12,000 conversational turns with varying contexts—from \"Scientists\" checking facts to \"Creatives\" brainstorming ideas. The challenge was to move beyond simple keyword counting. We needed to understand the structure of interactions: Why do users get frustrated? Who trusts the AI implicitly, and who micromanages it? The goal was to build a scalable analytical framework to answer these questions without human intervention.",
                        role: "Acting as both Data Analyst and Visualization Engineer, I engineered the end-to-end pipeline. My contribution went beyond calculation—I designed the semantic architecture to interpret \"meaning\" and built the interactive frontend to communicate these findings to stakeholders effectively."
                    },
                    process: [
                        {
                            title: "1. Data Ingestion & Cleaning",
                            desc: "The foundation was a rigorous ETL process. Using Python and Regex, I parsed the raw transcript logs to separate \"User\" and \"Assistant\" roles. A critical step was the development of a Domain-Specific Stopword List—removing conversational fillers (e.g., \"I think,\" \"maybe\") to isolate high-value intent keywords like \"code,\" \"draft,\" or \"verify.\""
                        },
                        {
                            title: "2. Semantic Network Analysis",
                            desc: "To understand the context of user emotions, I utilized NetworkX to build co-occurrence graphs. Instead of guessing why users felt \"Frustrated,\" the network revealed strong edge weights connecting \"Frustrated\" to \"Hallucination\" and \"Context.\" This provided a diagnostic view of user pain points that simple sentiment analysis missed."
                        },
                        {
                            title: "3. Behavioral Clustering (K-Means)",
                            desc: "I engineered features such as Average Prompt Length, Vocabulary Complexity, and Refinement Count. By applying PCA (Principal Component Analysis) and K-Means Clustering, I projected high-dimensional user data into a 2D matrix, revealing three distinct clusters of user maturity levels."
                        }
                    ],
                    findings: [
                        {
                            title: "The \"Micromanager\" Anomaly",
                            desc: "Standard assumption suggests that \"Power Users\" trust AI the most. My analysis proved the opposite. What we found:\n\n• Identified Cluster 1 (The Architects/Micromanagers) who have the highest technical vocabulary score (5.83).\n• Surprisingly, this group has the highest Refinement Rate (26 revisions per session).\n\nImpact: Proved that technical adoption requires higher model transparency, as experts treat AI as a \"Junior Intern\" needing constant supervision."
                        },
                        {
                            title: "The Trust Paradox",
                            desc: "Users were reporting mixed feelings of satisfaction and frustration. What we found:\n\n• Semantic analysis decoupled these emotions. \"Frustration\" is structurally linked to Time Loss and Inaccuracy.\n• \"Satisfaction\" is structurally linked to Results and Output.\n\nImpact: Users are willing to tolerate a difficult process (friction) if the final result is tangible, shifting the focus from \"UI polish\" to \"Model Capability.\""
                        },
                        {
                            title: "Sector-Specific Dialects",
                            desc: "Different professions speak different \"Data Languages.\" What we found:\n\n• Workforce: Focused on Efficiency (Keywords: Time, Help, Task).\n• Creatives: Focused on Process (Keywords: Idea, Brainstorm).\n• Scientists: Focused on Validity (Keywords: Research, Data).\n\nImpact: demonstrated that a \"One-Size-Fits-All\" AI strategy is ineffective; prompts must be tailored to professional domains."
                        }
                    ]
                }
            },
            'internship-intelligence': {
                title: 'Internship Intelligence',
                client: 'PERSONAL',
                location: 'INDONESIA',
                desc: 'Data analysis of tech job vacancies to identify skill trends. Involves data fetching (API), ETL, and analysis using Python.',
                details: {
                    header: "MAGANG INTEL – INTERNSHIP MARKET INTELLIGENCE DASHBOARD",
                    subheader: "DATA VISUALIZATION | FULL STACK ENGINEERING",
                    stats: [
                        { title: "Real-time Competition Scoring", desc: "Engineered a custom algorithm to calculate the \"Applicant-to-Quota Ratio,\" providing instant risk assessment for thousands of internship vacancies across Indonesia." },
                        { title: "Automated ETL Pipeline", desc: "Built a self-healing Python data pipeline integrated with GitHub Actions, ensuring dataset freshness with automatic 6-hour interval updates without manual intervention." },
                        { title: "Next-Gen Web Performance", desc: "Developed using Next.js 16 (App Router) and React 19, delivering a highly responsive, data-heavy interface that maintains high performance even when rendering large datasets." }
                    ],
                    overview: {
                        title: "Transforming opaque vacancy data into actionable insights",
                        content: "Magang Intel is a comprehensive analytics dashboard designed to solve the information asymmetry in the Indonesian internship market (MagangHub & Kemnaker). By aggregating scattered data points—quotas, applicant counts, and location metrics—the platform empowers candidates to make data-driven career decisions. It serves not just as a job board, but as a strategic tool for analyzing probability and competition."
                    },
                    meta: {
                        projectType: "DATA PRODUCT / WEB APPLICATION",
                        services: ["DATA ENGINEERING", "FRONTEND DEVELOPMENT", "AUTOMATION"],
                    },
                    context: {
                        title: "Navigating High-Competition Markets Blindly",
                        content: "Internship applicants often face a \"black box\" scenario: they apply to positions without knowing the saturation level of the vacancy. Official portals often lack granular insights regarding competition ratios. The challenge was to build a system that scrapes, cleans, and analyzes this public data to reveal hidden patterns. The goal was to create a transparent mechanism where users can instantly identify \"Low Risk\" (High Chance) vs \"High Risk\" (Oversaturated) opportunities.",
                        role: "I operated as the End-to-End Developer, bridging the gap between Data Analysis and Software Engineering. I architected the backend Python pipeline to handle data reliability and designed the frontend interface to ensure data readability."
                    },
                    process: [
                        {
                            title: "1. Data Pipeline Architecture",
                            desc: "Reliability was paramount. I engineered a Python-based ETL (Extract, Transform, Load) script utilizing Pandas and PyArrow for efficient data processing. This pipeline is containerized within a GitHub Actions workflow, triggering automated fetches every 6 hours to ensure the dashboard reflects the latest market status from MagangHub/Pantauloker APIs."
                        },
                        {
                            title: "2. Algorithmic Scoring",
                            desc: "Raw numbers are often meaningless without context. I implemented a scoring logic that computes the Competition Ratio (Applicants / Quota). This derived metric acts as the core \"Intelligence\" of the platform, allowing users to sort vacancies not just by name, but by strategic probability."
                        },
                        {
                            title: "3. UI/UX Implementation",
                            desc: "Visualizing thousands of rows requires performance. Utilizing Next.js 16 Server Components, the dashboard renders complex data grids instantly. I integrated Tailwind CSS v4 for a clean, distraction-free aesthetic and Recharts for visualizing macro-trends, ensuring the user experience focuses on insight consumption."
                        }
                    ],
                    findings: [
                        {
                            title: "Smart Data Grid",
                            desc: "A fully responsive, sortable data table that handles complex filtering logic (Ascending/Descending Ratios, Location, Category) on the client side, enabling rapid exploration of opportunities."
                        },
                        {
                            title: "Application Status Tracker",
                            desc: "Beyond market analysis, the platform integrates a personal tracker feature. Users can verify their application status via email integration, providing a centralized hub for both market research and personal application monitoring."
                        },
                        {
                            title: "Official Timeline Visualization",
                            desc: "To aid planning, the dashboard includes a dynamic timeline component visualizing critical program phases (Selection, Announcement, Onboarding), ensuring candidates stay aligned with the official Kemnaker schedule."
                        }
                    ]
                }
            },
            'ivy-design-system': {
                title: 'Ivy Design System',
                client: 'OPEN SOURCE',
                location: 'GLOBAL',
                desc: 'A responsive web implementation of the "Ivy" design system. Features offset-grid layouts, noise textures, and smooth spring physics animations.',
            },
            'kevin-book-store': {
                title: 'Kevin Book Store',
                client: 'KEVIN BOOKS',
                location: 'YOGYAKARTA',
                desc: 'Built automated Excel Power Query pipelines; reduced reporting time by 80%. Demand Forecasting Model: improved restock precision by 25%.',
            },
            'awing-body-repair': {
                title: 'AWING Body Repair',
                client: 'AWING',
                location: 'DEPOK',
                desc: 'Official landing page for AWING Body Repair & Cat. Features WhatsApp conversion focus and local SEO optimization.',
            },
            'road-traffic-analysis': {
                title: 'Traffic Analysis — Pangyo Road Simulation',
                client: 'RESEARCH',
                location: 'KOREA',
                desc: 'Exploratory data analysis of 266K records; correlation (−0.59) between occupancy & speed; visualization with Seaborn & Matplotlib.',
                details: {
                    header: "ROAD TRAFFIC ANALYSIS – IEEE PANGYO DATASET",
                    subheader: "AUTONOMOUS DRIVING RESEARCH | DATA ANALYSIS",
                    stats: [
                        { title: "VISSIM Simulation", desc: "Exploratory data analysis of 266K records from VISSIM simulations used for autonomous driving research." },
                        { title: "Strong Correlation", desc: "Identified a strong negative correlation (-0.59) between occupancy and speed, validating traffic flow models." },
                        { title: "Visualization", desc: "Generated comprehensive visualizations using Seaborn and Matplotlib to illustrate traffic patterns." }
                    ],
                    overview: {
                        title: "Analyzing Traffic Patterns for Autonomous Systems",
                        content: "This project involves a detailed analysis of the IEEE Pangyo autonomous driving traffic dataset. The goal was to understand traffic flow characteristics and validate the data using Fundamental Diagrams of Traffic Flow. By examining relationships between speed, density (occupancy), and flow, we identified key traffic phases and anomalies critical for calibrating autonomous driving algorithms."
                    },
                    meta: {
                        projectType: "RESEARCH / DATA ANALYSIS",
                        services: ["DATA ANALYSIS", "VISSIM SIMULATION", "STATISTICAL MODELLING"],
                    },
                    context: {
                        title: "Validating Simulation Data",
                        content: "Accuracy in simulation data is paramount for training safe autonomous vehicles. The challenge was to verify if the VISSIM simulation outputs adhered to established traffic flow theories. We needed to identify if 'Occupancy Inversion'—a phenomenon where sensor readings might misrepresent density—was affecting the dataset's reliability.",
                        role: "Data Analyst responsible for cleaning, processing, and visualizing the VISSIM simulation outputs to derive physical traffic characteristics."
                    },
                    process: [
                        {
                            title: "1. Data Preprocessing",
                            desc: "Cleaned raw VISSIM output logs, handling missing values and synchronizing time-stamps across multiple sensor locations."
                        },
                        {
                            title: "2. Fundamental Diagram Generation",
                            desc: "Plotted the relations between Flow (q), Density (k), and Speed (v). Used these diagrams to identify free-flow vs. congested traffic phases."
                        },
                        {
                            title: "3. Occupancy Correction",
                            desc: "Identified discrepancies in raw occupancy data and applied correction techniques to align the data with theoretical traffic models."
                        }
                    ],
                    findings: [
                        {
                            title: "Speed vs. Occupancy Correlation",
                            desc: "Established a strong negative correlation (r = -0.58) between Mean Speed and Corrected Occupancy, confirming the transition from free-flow to congestion."
                        },
                        {
                            title: "Capacity Identification",
                            desc: " identified the road capacity at approximately 3690 veh/h, occurring at an occupancy of 0.80."
                        },
                        {
                            title: "Free-Flow Speed Estimation",
                            desc: "Estimated the Free-Flow Speed to be approximately 185 km/h based on the Speed-Flow relationship."
                        }
                    ],
                    images: [
                        { src: "/images/pangyo/tripartite_diagram.png", title: "Figure 2: Tripartite Fundamental Diagram Analysis (Speed vs Occupancy / Flow vs Occupancy / Speed vs Flow)" },
                        { src: "/images/pangyo/occupancy_inversion.png", title: "Figure 3: Impact of Occupancy Inversion on Traffic Relationships (Raw vs Corrected Occupancy)" }
                    ]
                }
            }
        },
        footer: {
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
        }
    },
    id: {
        navbar: {
            home: 'Beranda',
            about: 'Tentang',
            skills: 'Keahlian',
            cases: 'Proyek',
            experience: 'Pengalaman',
            quotes: 'Postingan Harian',
            personal: 'Personal',
            contact: 'Kontak',
            hireMe: 'REKRUT SAYA'
        },
        hero: {
            hello: '// HALO, SAYA',
            role: 'Aspiring Data Analyst.',
            description: 'Saya menggunakan data dan pemikiran sistematis untuk memecahkan masalah nyata dalam pendidikan dan ritel online.',
            viewWork: 'LIHAT KARYA',
            downloadCv: 'UNDUH CV'
        },
        about: {
            title: 'Tentang Saya.',
            subtitle: 'Latar belakang, fokus, dan apa yang sedang saya kerjakan.',
            bio1: 'Lulusan Pendidikan Matematika (IPK 3.40) dengan minat kuat pada analisis data dan kecerdasan buatan.',
            bio2: 'Membawa pengalaman lebih dari satu tahun dari Kevin Book Store, mengembangkan alur kerja data dan sistem otomasi. Terbukti mampu membangun dasbor penjualan multi-saluran (Power BI), menerapkan peramalan permintaan, dan mengotomatisasi pipa data.',
            bio3: 'Saya senang mengubah data dunia nyata yang berantakan menjadi wawasan yang jelas dan alat sederhana yang benar-benar digunakan orang.',
            details: [
                {
                    label: 'Latar Belakang',
                    value: 'S.Pd. Pendidikan Matematika (UNY)',
                    icon: '🎓',
                    desc: 'IPK: 3.40 / 4.00. Mata Kuliah Relevan: Analisis Data & Statistika, Pengukuran Pendidikan.'
                },
                {
                    label: 'Fokus',
                    value: 'Analisis Data & Pemasaran',
                    icon: '🎯',
                    desc: 'Analisis Pemasaran Digital, A/B Testing, Desain Dasbor.'
                },
                {
                    label: 'Saat Ini',
                    value: 'Membangun Portofolio & Belajar',
                    icon: '🚀',
                    desc: 'Mempersiapkan peran Data Analyst purna waktu dan memperluas perangkat ML saya.'
                }
            ]
        },
        skills: {
            title: 'Keahlian.',
            subtitle: 'Data, alat, dan pengetahuan domain.',
            items: [
                {
                    title: 'Keahlian Teknis',
                    iconKey: 'Database',
                    items: [
                        'Excel Power Query (Bagus)',
                        'Power BI (Menengah)',
                        'Python (Pandas, Matplotlib — Menengah)',
                        'R (RStudio — Bagus)',
                        'Pembersihan Data & EDA',
                    ],
                    desc: "Tumpukan inti untuk mengubah data mentah menjadi wawasan yang dapat ditindaklanjuti."
                },
                {
                    title: 'Alat & Teknologi',
                    iconKey: 'Terminal',
                    items: [
                        'Analisis Pemasaran Digital',
                        'A/B Testing',
                        'Desain Dasbor',
                        'Jupyter Notebook',
                        'VS Code',
                        'Git & GitHub',
                    ],
                    desc: "Alat harian yang saya gunakan untuk membangun, menganalisis, dan memvisualisasikan."
                },
                {
                    title: 'Soft Skills',
                    iconKey: 'Briefcase',
                    items: [
                        'Berpikir Kritis',
                        'Dokumentasi Proses',
                        'Komunikasi Strategis',
                        'Analisis Bisnis',
                        'Bahasa Inggris (Profesional)',
                    ],
                    desc: "Pengetahuan kontekstual menghubungkan data dengan nilai bisnis dunia nyata."
                },
            ]
        },
        experience: {
            title: 'Pengalaman.',
            subtitle: 'Perjalanan profesional saya sejauh ini.',
            list: [
                {
                    id: 1,
                    role: 'Pengembangan Bisnis (Manajer)',
                    company: 'Kevin Book Store',
                    period: 'Agu 2024 – Okt 2025',
                    description: 'Mengembangkan pipa data otomatis dan strategi inventaris yang diperlukan untuk skalabilitas bisnis.',
                    tasks: [
                        'Mengembangkan pipa data otomatis untuk laporan pesanan Shopee dan TikTok menggunakan Excel Power Query.',
                        'Membuat kalkulator harga dasar untuk menjaga margin konsisten di seluruh saluran online.',
                        'Merancang dan mendokumentasikan SOP B2B & B2C dengan kesiapan audit penuh.',
                        'Melakukan peramalan permintaan dan analisis inventaris untuk mengoptimalkan perencanaan stok ulang dan rantai pasokan.',
                        'Pencapaian Utama: Mengurangi waktu pelaporan harian sebesar 80% melalui otomatisasi berbasis kueri.',
                        'Pencapaian Utama: Meningkatkan akurasi peramalan sebesar 25%, mencegah kelebihan stok selama musim puncak.'
                    ],
                },
                {
                    id: 2,
                    role: 'Sarjana Pendidikan Matematika',
                    company: 'Universitas Negeri Yogyakarta',
                    period: 'Agu 2021 - Okt 2025',
                    description: 'IPK: 3.40 / 4.00. Fokus pada berpikir analitis dan metodologi penelitian.',
                    tasks: [
                        'Mata Kuliah Relevan: Analisis Data & Statistika, Metodologi Penelitian, Pengukuran Pendidikan.',
                        'Dasar Pembelajaran Mesin (belajar mandiri).',
                    ],
                },
            ]
        },
        contact: {
            title: 'Hubungi Saya',
            desc: 'Jika Anda ingin berbicara tentang data, magang, atau kolaborasi, jangan ragu untuk menghubungi. Saya terutama tertarik pada peran yang menggabungkan data, pendidikan, dan e-commerce.',
            available: 'TERSEDIA UNTUK PELUANG',
            infoTitle: 'Informasi Kontak'
        },
        casesPage: {
            title: 'Jelajahi Proyek Kami',
            getInTouch: 'HUBUNGI KAMI',
            allProjects: 'Semua Proyek',
            client: 'Klien',
            location: 'Lokasi',
            techStack: 'Teknologi',
            timeline: 'Waktu',
            explore: 'JELAJAHI',
            visitSite: 'KUNJUNGI',
            categories: {
                all: 'Semua Proyek',
                webApp: 'Aplikasi Web',
                dataAnalysis: 'Analisis Data',
                website: 'Website'
            }
        },
        projects: {
            'web-porto': {
                title: 'Web Portfolio',
                client: 'PERSONAL',
                location: 'INDONESIA',
                desc: 'Website portofolio pribadi yang dibangun dengan teknologi web modern untuk menampilkan proyek dan keahlian.',
                details: {
                    header: "PORTFOLIO PLAYER 1 – PAMERAN DATA ANALYST INTERAKTIF",
                    subheader: "PENGEMBANGAN WEB | DESAIN UI/UX",
                    stats: [
                        { title: "100% Modularitas Komponen", desc: "Dibangun di atas arsitektur React 19 yang dapat diskalakan menggunakan komponen atom yang dapat digunakan kembali, memastikan perawatan mudah dan pembaruan konten cepat untuk proyek masa depan." },
                        { title: "Waktu Muat Sub-Detik", desc: "Didukung oleh tooling generasi berikutnya dari Vite dan pengiriman aset yang dioptimalkan, mencapai pemuatan halaman yang hampir instan dan pengalaman aplikasi satu halaman (SPA) yang mulus." },
                        { title: "Estetika Mode Gelap Premium", desc: "UI yang dirancang khusus memanfaatkan Tailwind CSS v4 dan efek Glassmorphism untuk menciptakan lingkungan visual yang canggih dan berpusat pada data." }
                    ],
                    overview: {
                        title: "Menjembatani kesenjangan antara data mentah dan penceritaan kreatif",
                        content: "Proyek ini adalah situs web portofolio pribadi berkinerja tinggi yang dirancang untuk berfungsi sebagai pusat identitas profesional saya. Ini melampaui CV statis tradisional dengan menawarkan narasi interaktif dan responsif tentang perjalanan saya sebagai Calon Analisis Data. Platform ini mengintegrasikan tumpukan teknologi modern untuk menampilkan studi kasus teknis, tonggak profesional, dan sertifikasi dalam lingkungan \"Premium Dark\" yang menarik secara visual."
                    },
                    meta: {
                        projectType: "PERSONAL BRANDING / APLIKASI WEB",
                        services: ["PENGEMBANGAN FRONTEND", "DESAIN UI/UX", "OPTIMALISASI KINERJA"],
                    },
                    context: {
                        title: "Mendefinisikan Ulang Portofolio Data Analyst",
                        content: "Di pasar kerja yang kompetitif, resume PDF seringkali gagal menangkap kedalaman penuh kemampuan teknis dan keterampilan pemecahan masalah kreatif kandidat. Tantangannya adalah membangun platform digital yang melakukan lebih dari sekadar mencantumkan keterampilan—itu perlu menunjukkannya. Tujuannya adalah untuk merekayasa aplikasi yang cepat, responsif, dan mencolok secara visual yang mengatur data proyek yang kompleks (seperti Analisis Wawancara Anthropic dan Studi Lalu Lintas Pangyo) ke dalam antarmuka yang mudah diakses dan ramah pengguna tanpa mengorbankan kinerja.",
                        role: "Bertindak sebagai Pengembang Utama dan Desainer, saya merancang aplikasi dari awal. Saya menggunakan standar web terbaru (React 19 & Tailwind 4) untuk memastikan kualitas kode mencerminkan ketepatan dan perhatian terhadap detail yang sama yang diterapkan dalam pekerjaan analisis data saya."
                    },
                    process: [
                        {
                            title: "1. Arsitektur Komponen",
                            desc: "Untuk memastikan skalabilitas, proyek ini mengadopsi struktur direktori modular. Bagian utama—Hero, About, Skills, dan Projects—dienkapsulasi menjadi komponen React yang dapat digunakan kembali (.jsx). Pendekatan atomik ini memungkinkan manajemen status independen dan debugging yang lebih mudah, mencerminkan pendekatan terstruktur yang digunakan dalam pipa pembersihan data."
                        },
                        {
                            title: "2. Rekayasa UI/UX",
                            desc: "Sistem desain berfokus pada \"Tema Gelap Premium\" untuk mengurangi ketegangan mata dan menonjolkan visualisasi data. Saya mengintegrasikan Framer Motion untuk menangani animasi yang kompleks, menciptakan transisi yang mulus antar bagian. Efek Glassmorphism diterapkan pada kartu dan elemen navigasi untuk menambah kedalaman dan tekstur modern pada antarmuka."
                        },
                        {
                            title: "3. Integrasi Konten",
                            desc: "Platform ini mengumpulkan berbagai titik data dari karir saya:\n\n• Pameran Proyek: Kartu rinci untuk proyek seperti Internship Intelligence dan Dasbor Kevin Book Store.\n• Matriks Keterampilan: Rincian kategori kompetensi teknis (Python, SQL, Power BI).\n• Log Sertifikasi: Garis waktu pencapaian profesional yang terverifikasi."
                        }
                    ],
                    findings: [
                        {
                            title: "Ekosistem Responsif",
                            desc: "Aplikasi ini sepenuhnya responsif di semua area pandang (Seluler, Tablet, Desktop). Dengan memanfaatkan kelas utilitas-pertama Tailwind, tata letak beradaptasi dengan lancar, memastikan detail proyek yang kompleks dapat dibaca di perangkat apa pun."
                        },
                        {
                            title: "Kinerja Generasi Berikutnya",
                            desc: "Memanfaatkan Vite untuk alat build menghasilkan server pengembangan yang secepat kilat dan build produksi yang dioptimalkan. Ini memastikan bahwa perekrut dan pengunjung mengalami nol gesekan saat menavigasi melalui bagian konten yang berat."
                        },
                        {
                            title: "Navigasi Interaktif",
                            desc: "Sistem navigasi yang canggih menghubungkan bagian-bagian komprehensif (Hero, Experience, Projects) dengan mulus. Integrasi Lucide React menyediakan bahasa ikonografis yang konsisten yang memandu perjalanan pengguna secara intuitif."
                        }
                    ]
                }
            },
            'antropics-interview': {
                title: 'Wawancara Antropics',
                client: 'PERSONAL',
                location: 'GLOBAL',
                desc: 'Proyek wawancara teknis yang berfokus pada pemecahan masalah dan algoritma menggunakan Python.',
                details: {
                    header: "ANTHROPIC – MENAFSIRKAN PERILAKU TENAGA KERJA & KEPERCAYAAN PADA AI",
                    subheader: "ANALISIS DATA | PYTHON",
                    stats: [
                        { title: "3 Persona Berbeda", desc: "Diidentifikasi Menggunakan K-Means Clustering pada 12.076 putaran interaksi, kami berhasil mengelompokkan pengguna menjadi tiga kelompok perilaku yang berbeda, mengungkapkan arketipe \"Micromanager\" tersembunyi yang sebelumnya tidak diketahui dalam laporan standar." },
                        { title: "8.64% Tingkat Halusinasi", desc: "Pipa NLP yang kuat mengukur \"Masalah Kepercayaan\" tertentu. Kami mengidentifikasi bahwa hampir 9% interaksi mengandung kata kunci tertentu yang terkait dengan kesalahan atau halusinasi, yang berkorelasi langsung dengan frustrasi pengguna." },
                        { title: "Wawasan Pengguna Berbasis Data", desc: "Dengan mengubah teks tidak terstruktur menjadi jaringan semantik, kami menggeser pemahaman kepuasan pengguna—membuktikan bahwa itu berkorelasi dengan \"Hasil\" daripada \"Kemudahan Penggunaan,\" memandu strategi produk AI di masa depan." }
                    ],
                    overview: {
                        title: "Menerjemahkan percakapan tidak terstruktur menjadi wawasan strategis",
                        content: "Proyek ini adalah analisis mendalam dari dataset \"Pewawancara Anthropic\", mengeksplorasi bagaimana 1.250 profesional di berbagai sektor mengintegrasikan AI ke dalam alur kerja harian mereka. Ini mengotomatiskan ekstraksi pola kualitatif—dari pemicu frustrasi hingga kematangan adopsi—menggunakan Pembelajaran Mesin Tanpa Pengawasan. Hasilnya adalah dasbor komprehensif yang mengubah teks mentah menjadi peta strategis kolaborasi manusia-AI."
                    },
                    meta: {
                        projectType: "STUDI KASUS PERSONAL / SAINS DATA",
                        services: ["PIPA ETL", "ANALISIS NLP", "CLUSTERING PERILAKU", "VISUALISASI DATA"],
                    },
                    context: {
                        title: "Membuka \"Kotak Hitam\" Interaksi Pengguna",
                        content: "Saat menganalisis data wawancara skala besar, pengkodean manual tradisional tidak efisien dan rentan terhadap bias. Dataset mentah berisi lebih dari 12.000 putaran percakapan dengan konteks yang bervariasi—dari \"Ilmuwan\" yang memeriksa fakta hingga \"Kreatif\" yang bertukar pikiran. Tantangannya adalah melampaui penghitungan kata kunci sederhana. Kami perlu memahami struktur interaksi: Mengapa pengguna frustrasi? Siapa yang mempercayai AI secara implisit, dan siapa yang mengelolanya secara mikro? Tujuannya adalah membangun kerangka kerja analitis yang dapat diskalakan untuk menjawab pertanyaan-pertanyaan ini tanpa intervensi manusia.",
                        role: "Bertindak sebagai Analis Data dan Insinyur Visualisasi, saya merekayasa pipa ujung-ke-ujung. Kontribusi saya melampaui perhitungan—saya merancang arsitektur semantik untuk menafsirkan \"makna\" dan membangun frontend interaktif untuk mengomunikasikan temuan ini kepada pemangku kepentingan secara efektif."
                    },
                    process: [
                        {
                            title: "1. Penyerapan & Pembersihan Data",
                            desc: "Fondasi utamanya adalah proses ETL yang ketat. Menggunakan Python dan Regex, saya mengurai log transkrip mentah untuk memisahkan peran \"Pengguna\" dan \"Asisten\". Langkah kritis adalah pengembangan Daftar Kata Henti Khusus Domain—menghapus pengisi percakapan (misalnya, \"saya pikir,\" \"mungkin\") untuk mengisolasi kata kunci niat bernilai tinggi seperti \"kode,\" \"draf,\" atau \"verifikasi.\""
                        },
                        {
                            title: "2. Analisis Jaringan Semantik",
                            desc: "Untuk memahami konteks emosi pengguna, saya menggunakan NetworkX untuk membangun grafik ko-okurensi. Daripada menebak mengapa pengguna merasa \"Frustrasi,\" jaringan mengungkapkan bobot tepi yang kuat yang menghubungkan \"Frustrasi\" ke \"Halusinasi\" dan \"Konteks.\" Ini memberikan pandangan diagnostik tentang titik nyeri pengguna yang dilewatkan oleh analisis sentimen sederhana."
                        },
                        {
                            title: "3. Clustering Perilaku (K-Means)",
                            desc: "Saya merekayasa fitur-fitur seperti Rata-rata Panjang Prompt, Kompleksitas Kosakata, dan Jumlah Perbaikan. Dengan menerapkan PCA (Analisis Komponen Utama) dan K-Means Clustering, saya memproyeksikan data pengguna berdimensi tinggi ke dalam matriks 2D, mengungkapkan tiga kluster tingkat kematangan pengguna yang berbeda."
                        }
                    ],
                    findings: [
                        {
                            title: "Anomali \"Micromanager\"",
                            desc: "Asumsi standar menunjukkan bahwa \"Power Users\" paling mempercayai AI. Analisis saya membuktikan sebaliknya. Apa yang kami temukan:\n\n• Mengidentifikasi Kluster 1 (Arsitek/Micromanager) yang memiliki skor kosakata teknis tertinggi (5.83).\n• Anehnya, kelompok ini memiliki Tingkat Perbaikan tertinggi (26 revisi per sesi).\n\nDampak: Membuktikan bahwa adopsi teknis memerlukan transparansi model yang lebih tinggi, karena para ahli memperlakukan AI sebagai \"Magang Junior\" yang membutuhkan pengawasan konstan."
                        },
                        {
                            title: "Paradoks Kepercayaan",
                            desc: "Pengguna melaporkan perasaan campur aduk antara kepuasan dan frustrasi. Apa yang kami temukan:\n\n• Analisis semantik memisahkan emosi ini. \"Frustrasi\" secara struktural terkait dengan Kehilangan Waktu dan Ketidakakuratan.\n• \"Kepuasan\" secara struktural terkait dengan Hasil dan Output.\n\nDampak: Pengguna bersedia mentolerir proses yang sulit (gesekan) jika hasil akhirnya nyata, menggeser fokus dari \"poles UI\" ke \"Model Capability.\""
                        },
                        {
                            title: "Dialek Spesifik Sektor",
                            desc: "Profesi yang berbeda berbicara dalam \"Bahasa Data\" yang berbeda. Apa yang kami temukan:\n\n• Tenaga Kerja: Berfokus pada Efisiensi (Kata Kunci: Waktu, Bantuan, Tugas).\n• Kreatif: Berfokus pada Proses (Kata Kunci: Ide, Brainstorm).\n• Ilmuwan: Berfokus pada Validitas (Kata Kunci: Riset, Data).\n\nDampak: menunjukkan bahwa strategi AI \"Satu Ukuran untuk Semua\" tidak efektif; prompt harus disesuaikan dengan domain profesional."
                        }
                    ]
                }
            },
            'internship-intelligence': {
                title: 'Internship Intelligence',
                client: 'PERSONAL',
                location: 'INDONESIA',
                desc: 'Analisis data lowongan kerja teknologi untuk mengidentifikasi tren keterampilan. Melibatkan pengambilan data (API), ETL, dan analisis menggunakan Python.',
                details: {
                    header: "MAGANG INTEL – DASBOR INTELIJEN PASAR MAGANG",
                    subheader: "VISUALISASI DATA | REKAYASA FULL STACK",
                    stats: [
                        { title: "Penilaian Kompetisi Real-time", desc: "Merekayasa algoritma khusus untuk menghitung \"Rasio Pelamar-terhadap-Kuota,\" memberikan penilaian risiko instan untuk ribuan lowongan magang di seluruh Indonesia." },
                        { title: "Pipa ETL Otomatis", desc: "Membangun pipa data Python yang memulihkan diri sendiri yang terintegrasi dengan GitHub Actions, memastikan kesegaran dataset dengan pembaruan otomatis interval 6 jam tanpa intervensi manual." },
                        { title: "Kinerja Web Generasi Berikutnya", desc: "Dikembangkan menggunakan Next.js 16 (App Router) dan React 19, memberikan antarmuka yang sangat responsif dan padat data yang mempertahankan kinerja tinggi bahkan saat merender dataset besar." }
                    ],
                    overview: {
                        title: "Mengubah data lowongan yang buram menjadi wawasan yang dapat ditindaklanjuti",
                        content: "Magang Intel adalah dasbor analitik komprehensif yang dirancang untuk memecahkan asimetri informasi di pasar magang Indonesia (MagangHub & Kemnaker). Dengan mengumpulkan titik data yang tersebar—kuota, jumlah pelamar, dan metrik lokasi—platform ini memberdayakan kandidat untuk membuat keputusan karir berbasis data. Ini berfungsi tidak hanya sebagai papan pekerjaan, tetapi sebagai alat strategis untuk menganalisis probabilitas dan kompetisi."
                    },
                    meta: {
                        projectType: "PRODUK DATA / APLIKASI WEB",
                        services: ["REKAYASA DATA", "PENGEMBANGAN FRONTEND", "OTOMASI"],
                    },
                    context: {
                        title: "Menavigasi Pasar Kompetisi Tinggi Secara Buta",
                        content: "Pelamar magang sering menghadapi skenario \"kotak hitam\": mereka melamar posisi tanpa mengetahui tingkat kejenuhan lowongan. Portal resmi seringkali tidak memiliki wawasan granular mengenai rasio kompetisi. Tantangannya adalah membangun sistem yang mengikis, membersihkan, dan menganalisis data publik ini untuk mengungkapkan pola tersembunyi. Tujuannya adalah untuk menciptakan mekanisme transparan di mana pengguna dapat langsung mengidentifikasi peluang \"Risiko Rendah\" (Peluang Tinggi) vs \"Risiko Tinggi\" (Jenuh).",
                        role: "Saya beroperasi sebagai Pengembang End-to-End, menjembatani kesenjangan antara Analisis Data dan Rekayasa Perangkat Lunak. Saya merancang arsitektur pipa backend Python untuk menangani keandalan data dan merancang antarmuka frontend untuk memastikan keterbacaan data."
                    },
                    process: [
                        {
                            title: "1. Arsitektur Pipa Data",
                            desc: "Keandalan adalah yang terpenting. Saya merekayasa skrip ETL (Extract, Transform, Load) berbasis Python menggunakan Pandas dan PyArrow untuk pemrosesan data yang efisien. Pipa ini dikemas dalam alur kerja GitHub Actions, memicu pengambilan otomatis setiap 6 jam untuk memastikan dasbor mencerminkan status pasar terbaru dari API MagangHub/Pantauloker."
                        },
                        {
                            title: "2. Skor Algoritmik",
                            desc: "Angka mentah seringkali tidak berarti tanpa konteks. Saya menerapkan logika penilaian yang menghitung Rasio Kompetisi (Pelamar / Kuota). Metrik turunan ini bertindak sebagai inti \"Intelijen\" platform, memungkinkan pengguna untuk menyortir lowongan tidak hanya berdasarkan nama, tetapi berdasarkan probabilitas strategis."
                        },
                        {
                            title: "3. Implementasi UI/UX",
                            desc: "Memvisualisasikan ribuan baris memerlukan kinerja. Memanfaatkan Komponen Server Next.js 16, dasbor merender grid data kompleks secara instan. Saya mengintegrasikan Tailwind CSS v4 untuk estetika yang bersih dan bebas gangguan serta Recharts untuk memvisualisasikan tren makro, memastikan pengalaman pengguna berfokus pada konsumsi wawasan."
                        }
                    ],
                    findings: [
                        {
                            title: "Grid Data Cerdas",
                            desc: "Tabel data yang sepenuhnya responsif dan dapat diurutkan yang menangani logika penyaringan kompleks (Rasio Naik/Turun, Lokasi, Kategori) di sisi klien, memungkinkan eksplorasi peluang yang cepat."
                        },
                        {
                            title: "Pelacak Status Aplikasi",
                            desc: "Di luar analisis pasar, platform ini mengintegrasikan fitur pelacak pribadi. Pengguna dapat memverifikasi status aplikasi mereka melalui integrasi email, menyediakan hub terpusat untuk riset pasar dan pemantauan aplikasi pribadi."
                        },
                        {
                            title: "Visualisasi Garis Waktu Resmi",
                            desc: "Untuk membantu perencanaan, dasbor menyertakan komponen garis waktu dinamis yang memvisualisasikan fase program kritis (Seleksi, Pengumuman, Onboarding), memastikan kandidat tetap selaras dengan jadwal resmi Kemnaker."
                        }
                    ]
                }
            },
            'ivy-design-system': {
                title: 'Sistem Desain Ivy',
                client: 'OPEN SOURCE',
                location: 'GLOBAL',
                desc: 'Implementasi web responsif dari sistem desain "Ivy". Menampilkan tata letak offset-grid, tekstur noise, dan animasi fisika pegas yang halus.',
            },
            'kevin-book-store': {
                title: 'Toko Buku Kevin',
                client: 'KEVIN BOOKS',
                location: 'YOGYAKARTA',
                desc: 'Membangun pipa Excel Power Query otomatis; mengurangi waktu pelaporan sebesar 80%. Model Peramalan Permintaan: meningkatkan presisi stok ulang sebesar 25%.',
            },
            'awing-body-repair': {
                title: 'AWING Body Repair',
                client: 'AWING',
                location: 'DEPOK',
                desc: 'Halaman arahan resmi untuk AWING Body Repair & Cat. Menampilkan fokus konversi WhatsApp dan optimasi SEO lokal.',
            },
            'road-traffic-analysis': {
                title: 'Analisis Lalu Lintas — Simulasi Jalan Pangyo',
                client: 'PENELITIAN',
                location: 'KOREA',
                desc: 'Analisis data eksplorasi dari 266 ribu catatan; korelasi (−0.59) antara hunian & kecepatan; visualisasi dengan Seaborn & Matplotlib.',
                details: {
                    header: "ANALISIS LALU LINTAS JALAN – DATASET IEEE PANGYO",
                    subheader: "PENELITIAN MENGEMUDI OTONOM | ANALISIS DATA",
                    stats: [
                        { title: "Simulasi VISSIM", desc: "Analisis data eksplorasi dari 266 ribu catatan dari simulasi VISSIM yang digunakan untuk penelitian mengemudi otonom." },
                        { title: "Korelasi Kuat", desc: "Mengidentifikasi korelasi negatif yang kuat (-0,59) antara hunian dan kecepatan, memvalidasi model arus lalu lintas." },
                        { title: "Visualisasi", desc: "Menghasilkan visualisasi komprehensif menggunakan Seaborn dan Matplotlib untuk mengilustrasikan pola lalu lintas." }
                    ],
                    overview: {
                        title: "Menganalisis Pola Lalu Lintas untuk Sistem Otonom",
                        content: "Proyek ini melibatkan analisis rinci dari dataset lalu lintas mengemudi otonom IEEE Pangyo. Tujuannya adalah untuk memahami karakteristik arus lalu lintas dan memvalidasi data menggunakan Diagram Dasar Arus Lalu Lintas. Dengan memeriksa hubungan antara kecepatan, kepadatan (hunian), dan arus (flow), kami mengidentifikasi fase lalu lintas utama dan anomali yang penting untuk mengkalibrasi algoritma mengemudi otonom."
                    },
                    meta: {
                        projectType: "PENELITIAN / ANALISIS DATA",
                        services: ["ANALISIS DATA", "SIMULASI VISSIM", "PEMODELAN STATISTIK"],
                    },
                    context: {
                        title: "Memvalidasi Data Simulasi",
                        content: "Keakuratan dalam data simulasi sangat penting untuk melatih kendaraan otonom yang aman. Tantangannya adalah memverifikasi apakah output simulasi VISSIM mematuhi teori arus lalu lintas yang mapan. Kami perlu mengidentifikasi apakah 'Inversi Hunian'—fenomena di mana pembacaan sensor mungkin salah merepresentasikan kepadatan—memengaruhi keandalan dataset."
                        , role: "Analis Data yang bertanggung jawab untuk membersihkan, memproses, dan memvisualisasikan output simulasi VISSIM untuk mendapatkan karakteristik lalu lintas fisik."
                    },
                    process: [
                        {
                            title: "1. Pra-pemrosesan Data",
                            desc: "Membersihkan log output VISSIM mentah, menangani nilai yang hilang, dan menyinkronkan cap waktu di beberapa lokasi sensor."
                        },
                        {
                            title: "2. Pembuatan Diagram Dasar",
                            desc: "Memplot hubungan antara Arus (q), Kepadatan (k), dan Kecepatan (v). Menggunakan diagram ini untuk mengidentifikasi fase lalu lintas arus bebas vs macet."
                        },
                        {
                            title: "3. Koreksi Hunian",
                            desc: "Mengidentifikasi ketidaksesuaian dalam data hunian mentah dan menerapkan teknik koreksi untuk menyelaraskan data dengan model lalu lintas teoritis."
                        }
                    ],
                    findings: [
                        {
                            title: "Korelasi Kecepatan vs Hunian",
                            desc: "Menetapkan korelasi negatif yang kuat (r = -0.58) antara Kecepatan Rata-rata dan Hunian Terkoreksi, mengonfirmasi transisi dari arus bebas ke kemacetan."
                        },
                        {
                            title: "Identifikasi Kapasitas",
                            desc: "mengidentifikasi kapasitas jalan sekitar 3690 kendaraan/jam, terjadi pada hunian 0,80."
                        },
                        {
                            title: "Estimasi Kecepatan Arus Bebas",
                            desc: "Memperkirakan Kecepatan Arus Bebas sekitar 185 km/jam berdasarkan hubungan Kecepatan-Arus."
                        }
                    ],
                    images: [
                        { src: "/images/pangyo/tripartite_diagram.png", title: "Gambar 2: Analisis Diagram Dasar Tripartit (Kecepatan vs Hunian / Arus vs Hunian / Kecepatan vs Arus)" },
                        { src: "/images/pangyo/occupancy_inversion.png", title: "Gambar 3: Dampak Inversi Hunian pada Hubungan Lalu Lintas (Hunian Mentah vs Terkoreksi)" }
                    ]
                }
            }
        },
        footer: {
            rights: 'Hak cipta dilindungi undang-undang.',
            privacy: 'Kebijakan Privasi',
            terms: 'Syarat Layanan'
        }
    }
};
