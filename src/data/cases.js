
export const cases = [
    {
        slug: 'web-porto',
        title: 'Web Portfolio',
        client: 'PERSONAL',
        location: 'INDONESIA',
        tags: ['REACT', 'TAILWIND', 'PORTFOLIO'],
        desc: 'Personal portfolio website built with modern web technologies to showcase projects and skills.',
        tech: ['JavaScript', 'React', 'Tailwind'],
        timeline: 'Ongoing',
        imageGradient: 'from-blue-100 to-blue-50',
        category: 'Web App',
        demoUrl: 'https://azahrul-portofolio.vercel.app/',
        githubLink: 'https://github.com/azahrulsmavo-design/web-porto',
        details: {
            header: "PLAYER 1 PORTFOLIO – INTERACTIVE DATA ANALYST SHOWCASE",
            subheader: "WEB DEVELOPMENT | UI/UX DESIGN",
            githubLink: "https://github.com/azahrulsmavo-design/web-porto",
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
                technologies: ["REACT 19", "VITE", "TAILWIND CSS v4", "FRAMER MOTION", "LUCIDE REACT"]
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
    {
        slug: 'antropics-interview',
        title: 'Antropics Interview',
        client: 'PERSONAL',
        location: 'GLOBAL',
        tags: ['ALGORITHMS', 'PYTHON', 'PROBLEM SOLVING'],
        desc: 'Technical interview project focusing on problem-solving and algorithms using Python.',
        tech: ['Python'],
        timeline: '1 week',
        imageGradient: 'from-emerald-100 to-emerald-50',
        category: 'Data Analysis',
        demoUrl: '',
        githubLink: 'https://github.com/azahrulsmavo-design/antropics_interview',
        details: {
            header: "ANTHROPIC – DECODING WORKFORCE BEHAVIOR & TRUST IN AI",
            subheader: "DATA ANALYTICS | PYTHON",
            githubLink: "https://github.com/azahrulsmavo-design/antropics_interview",
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
                technologies: ["PYTHON (PANDAS/NUMPY)", "SCIKIT-LEARN", "NETWORKX", "MATPLOTLIB/SEABORN", "NEXT.JS (DASHBOARD)"]
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
    {
        slug: 'internship-intelligence',
        title: 'Internship Intelligence',
        client: 'PERSONAL',
        location: 'INDONESIA',
        tags: ['DATA ANALYSIS', 'ETL', 'API'],
        desc: 'Data analysis of tech job vacancies to identify skill trends. Involves data fetching (API), ETL, and analysis using Python.',
        tech: ['Python', 'Jupyter', 'Pandas'],
        timeline: '1 month',
        imageGradient: 'from-orange-100 to-orange-50',
        category: 'Data Analysis',
        demoUrl: 'https://magang-intel.vercel.app/',
        githubLink: 'https://github.com/azahrulsmavo-design/magang_intel',
        details: {
            header: "MAGANG INTEL – INTERNSHIP MARKET INTELLIGENCE DASHBOARD",
            subheader: "DATA VISUALIZATION | FULL STACK ENGINEERING",
            githubLink: "https://github.com/azahrulsmavo-design/magang_intel",
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
                technologies: ["NEXT.JS 16", "TYPESCRIPT", "PYTHON (PANDAS/PYARROW)", "GITHUB ACTIONS", "TAILWIND CSS v4", "RECHARTS"]
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
    {
        slug: 'ivy-design-system',
        title: 'Ivy Design System',
        client: 'OPEN SOURCE',
        location: 'GLOBAL',
        tags: ['DESIGN SYSTEM', 'CSS', 'ANIMATION'],
        desc: 'A responsive web implementation of the "Ivy" design system. Features offset-grid layouts, noise textures, and smooth spring physics animations.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        timeline: '2 weeks',
        imageGradient: 'from-purple-100 to-purple-50',
        category: 'Website',
        demoUrl: 'https://ivy-main.vercel.app/',
        githubLink: 'https://github.com/azahrulsmavo-design/ivy-main'
    },
    {
        slug: 'kevin-book-store',
        title: 'Kevin Book Store',
        client: 'KEVIN BOOKS',
        location: 'YOGYAKARTA',
        tags: ['WEB APP', 'DASHBOARD', 'TYPESCRIPT'],
        desc: 'Landing page and dashboard for a local bookstore to manage sales and inventory.',
        tech: ['TypeScript', 'React'],
        timeline: '1 month',
        imageGradient: 'from-pink-100 to-pink-50',
        category: 'Web App',
        demoUrl: 'https://kevin-book-store.vercel.app/',
        githubLink: 'https://github.com/azahrulsmavo-design/Kevin_book_store_LandingPage'
    },
    {
        slug: 'awing-body-repair',
        title: 'AWING Body Repair',
        client: 'AWING',
        location: 'DEPOK',
        tags: ['LANDING PAGE', 'SEO', 'TYPESCRIPT'],
        desc: 'Official landing page for AWING Body Repair & Cat. Features WhatsApp conversion focus and local SEO optimization.',
        tech: ['TypeScript', 'Next.js', 'Tailwind'],
        timeline: '2 weeks',
        imageGradient: 'from-cyan-100 to-cyan-50',
        category: 'Website',
        demoUrl: 'https://awing-body-repair.vercel.app/',
        githubLink: 'https://github.com/azahrulsmavo-design/awing-body-repair'
    },
    {
        slug: 'road-traffic-analysis',
        title: 'Road Traffic Analysis Pangyo',
        client: 'RESEARCH',
        location: 'KOREA',
        tags: ['DATA ANALYSIS', 'VISSIM', 'PYTHON'],
        desc: 'Data analysis of IEEE Pangyo autonomous driving traffic dataset (VISSIM simulation).',
        tech: ['Python', 'Pandas', 'Jupyter'],
        timeline: '1 month',
        imageGradient: 'from-indigo-100 to-indigo-50',
        category: 'Data Analysis',
        demoUrl: '',
        githubLink: 'https://github.com/azahrulsmavo-design/road-traffic-analysis-pangyo',
        details: {
            header: "ROAD TRAFFIC ANALYSIS – IEEE PANGYO DATASET",
            subheader: "AUTONOMOUS DRIVING RESEARCH | DATA ANALYSIS",
            githubLink: "https://github.com/azahrulsmavo-design/road-traffic-analysis-pangyo",
            stats: [
                { title: "VISSIM Simulation", desc: "Analyzed complex traffic flow data from VISSIM simulations used for autonomous driving research." },
                { title: "Fundamental Diagrams", desc: "Generated Tripartite Fundamental Diagrams to analyze the relationship between Speed, Flow, and Occupancy." },
                { title: "Occupancy Inversion", desc: "Investigated the impact of occupancy inversion on traffic relationships and data validity." }
            ],
            overview: {
                title: "Analyzing Traffic Patterns for Autonomous Systems",
                content: "This project involves a detailed analysis of the IEEE Pangyo autonomous driving traffic dataset. The goal was to understand traffic flow characteristics and validate the data using Fundamental Diagrams of Traffic Flow. By examining relationships between speed, density (occupancy), and flow, we identified key traffic phases and anomalies critical for calibrating autonomous driving algorithms."
            },
            meta: {
                projectType: "RESEARCH / DATA ANALYSIS",
                services: ["DATA ANALYSIS", "VISSIM SIMULATION", "STATISTICAL MODELLING"],
                technologies: ["PYTHON", "PANDAS", "MATPLOTLIB", "SEABORN"]
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
                {
                    src: "/images/pangyo/tripartite_diagram.png",
                    title: "Figure 2: Tripartite Fundamental Diagram Analysis (Speed vs Occupancy / Flow vs Occupancy / Speed vs Flow)"
                },
                {
                    src: "/images/pangyo/occupancy_inversion.png",
                    title: "Figure 3: Impact of Occupancy Inversion on Traffic Relationships (Raw vs Corrected Occupancy)"
                }
            ]
        }
    }
];

export const categories = ['All Projects', 'Web App', 'Data Analysis', 'Website'];
