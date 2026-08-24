export const portfolioData = {
  personal: {
    name: "Ravi Raj Choubey",
    title: "Software Engineer | AI, Data Science & Systems",
    headline: "Building software systems across AI, full-stack infrastructure, and data intelligence.",
    subhead: "Computer Science (Data Science) undergraduate at VIT Chennai, building production-grade AI tools, database migration engines, enterprise ticket systems, embedded vision rovers, and automated data pipelines.",
    location: "Chennai / Varanasi, India",
    email: "ravirajchoubey0@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/1to-NkCaE9T7BrgwM_CQuWVuWzYDFr6L5/view?usp=drivesdk",
    github: "https://github.com/RaviRajChoubey",
    linkedin: "https://www.linkedin.com/in/ravi-raj-choubey-b458a628b/",
    leetcode: "https://leetcode.com/u/Ravirajchoubey/",
    leetcodeUsername: "Ravirajchoubey",
    sihRank: "Top 50 of 850+ Teams",
    defenceCert: "TRL-4 Certified @ Tambaram Airbase",
  },

  education: [
    {
      degree: "B.Tech – Computer Science and Engineering (Data Science)",
      institution: "Vellore Institute of Technology (VIT), Chennai",
      period: "2023 – Present",
      details: "Specializing in Data Science, Machine Learning, Data Structures & Algorithms, Database Management Systems, and Software Engineering."
    },
    {
      degree: "Class XII (CBSE, PCM)",
      institution: "Sunbeam Academy, Varanasi",
      period: "2022",
      details: "Completed Higher Secondary Education with focus on Physics, Chemistry, and Mathematics."
    }
  ],

  pillars: [
    {
      id: "backend-systems",
      title: "Backend & Distributed Systems",
      description: "FastAPI REST microservices, Next.js, Redis TTL concurrency protection, schema-diff engines, zero-data-loss validation, and rollback workflows.",
      icon: "Server",
      tags: ["FastAPI & Next.js", "Redis Concurrency", "PostgreSQL", "Schema-Diff Engine", "Checksum Validation"]
    },
    {
      id: "ai-ml",
      title: "AI Engineering & Data Science",
      description: "Machine learning pipelines at Cestrum, LLM architectures, RAG systems, feature engineering, and data quality preprocessing.",
      icon: "BrainCircuit",
      tags: ["Scikit-Learn", "Cestrum Data Pipelines", "Feature Engineering", "Pandas & NumPy", "NLP Summaries"]
    },
    {
      id: "cv-robotics",
      title: "Computer Vision & Embedded",
      description: "Autonomous rovers, YOLO object detection on edge devices, medical image segmentation (nnU-Net), and sensor telemetry.",
      icon: "Cpu",
      tags: ["YOLO Inference", "Raspberry Pi", "nnU-Net", "OpenCV", "Sensor Fusion"]
    },
    {
      id: "data-mining",
      title: "Data Engineering & Analytics",
      description: "Association rule mining, retail basket analysis, automated validation pipelines, and reproducible data workflows.",
      icon: "BarChart3",
      tags: ["Apriori Algorithm", "Data Pipelines", "Audit Reconciliation", "Data Mining"]
    }
  ],

  experience: [
    {
      id: "nic",
      role: "Full-Stack Developer Intern",
      company: "National Informatics Centre (NIC) – MeitY, Govt. of India",
      location: "New Delhi",
      period: "May 2026 – Jun 2026",
      badge: "Govt. of India",
      highlights: [
        "Architected an AI-powered Database Migration Platform for the e-Jagriti system (Dept. of Consumer Affairs) using FastAPI, PostgreSQL, and React.js, automating schema analysis and end-to-end migration workflows.",
        "Built automated validation pipelines with checksum-based reconciliation, rollback generation, and audit-trail logging, enabling zero-data-loss migrations with real-time monitoring.",
        "Engineered a schema-diff engine that generated optimised SQL migration scripts and flagged data-type conflicts, reducing manual effort; commended by the Deputy Director General for technical excellence."
      ],
      tags: ["FastAPI", "PostgreSQL", "React.js", "Python", "SQL Migration", "Checksum Validation", "Audit Trail"],
      impact: "Commended by Deputy Director General | 0% Data Loss"
    },
    {
      id: "cestrum",
      role: "Data Science Intern",
      company: "Cestrum",
      location: "Data Science Team",
      period: "March 2026 – April 2026",
      badge: "Data Science Internship",
      highlights: [
        "Cleaned and preprocessed complex datasets for AI/ML projects, resolving duplicates, missing values, and outliers to improve data quality and model reliability.",
        "Engineered features and partitioned data into training, validation, and test sets; trained and evaluated machine learning models in Python using Scikit-learn.",
        "Used Pandas, NumPy, and Jupyter Notebook to streamline data-analysis workflows, collaborating with the AI team and documenting datasets for reproducibility."
      ],
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Feature Engineering", "Data Cleaning", "Jupyter Notebooks"],
      impact: "Streamlined Data Quality & Model Reproducibility"
    }
  ],

  projects: [
    {
      id: "ticket-booking-app",
      title: "TicketHub — Enterprise Ticket Booking System",
      category: "Full-Stack + AI",
      badge: "Production SaaS App",
      period: "2026",
      subtitle: "High-concurrency ticket booking engine with Redis TTL seat holds, Postgres transaction locking & QR code delivery.",
      description: "Architected and built TicketHub, a production-grade enterprise ticket booking system handling concurrent seat reservations with Upstash Redis TTL, Next.js 15, PostgreSQL transaction locking, NextAuth v5, FIFO waitlists, and automated QR-code email delivery.",
      points: [
        "Implemented 2-layer concurrency safety using Upstash Redis atomic `SET NX EX` seat holds (10-min TTL) combined with PostgreSQL row-level `SELECT FOR UPDATE` transaction locking to eliminate double bookings.",
        "Built an automated waitlist engine with FIFO queue ordering, auto-generating 15-minute time-limited claim tokens upon seat cancellation.",
        "Engineered a universal email engine using Nodemailer SMTP (Brevo/Gmail) & Resend delivering inline QR-code ticket passes directly to users.",
        "Hosted live production deployment on Vercel with Supabase cloud database instance."
      ],
      tech: ["Next.js 15", "PostgreSQL", "Prisma ORM", "Upstash Redis", "NextAuth v5", "Nodemailer / Resend", "Tailwind CSS"],
      metrics: "Live Hosted on Vercel | Dual Lock Concurrency Safety",
      github: "https://github.com/RaviRajChoubey/Ticket_Booking_System",
      liveUrl: "https://ticket-booking-system-2xqf.vercel.app/",
      featured: true
    },
    {
      id: "db-migration",
      title: "AI-Powered Database Migration Platform",
      category: "Full-Stack + AI",
      badge: "Govt-Scale System",
      period: "2026",
      subtitle: "Production-grade database engine migration & schema analysis platform for e-Jagriti system.",
      description: "Built a production-grade AI-powered Database Migration Platform for the e-Jagriti system under the Department of Consumer Affairs (NIC, Govt. of India). The platform automates complex database migrations, schema diffing, validation, and audit tracking.",
      points: [
        "Built a multi-stage migration pipeline (extraction, transformation, validation, rollback) achieving zero data loss via row-level checksum verification, with real-time monitoring dashboards for government-scale deployments.",
        "Designed and deployed modular REST APIs with FastAPI to orchestrate migration jobs and serve live status data to the React.js frontend, ensuring a scalable, maintainable backend architecture.",
        "Engineered schema-diff engine generating optimized SQL migration scripts and flagging data type incompatibilities automatically."
      ],
      tech: ["FastAPI", "PostgreSQL", "React.js", "Python", "SQL Engine", "REST APIs", "Checksum Audit"],
      metrics: "Zero Data Loss | Row-Level Checksum Verification",
      github: "https://github.com/RaviRajChoubey/AI-Database-Migration-Platform",
      featured: true
    },
    {
      id: "defensive-rover",
      title: "Defensive Rover — Landmine Detection Robot",
      category: "Embedded + CV",
      badge: "TRL-4 Certified",
      period: "2025 – 2026",
      subtitle: "Autonomous defense surveillance rover with edge YOLO detection and LoRa telemetry.",
      description: "Built an autonomous surveillance rover engineered for military threat response and landmine detection. Validated and certified at TRL-4 level in live operational testing at Tambaram Airbase, Chennai.",
      points: [
        "Built an autonomous surveillance rover with YOLO-based real-time object detection, LoRa long-range telemetry, and fused IR, ultrasonic, and camera sensor data; TRL-4 certified at Tambaram Airbase, Chennai.",
        "Optimised the YOLO inference pipeline for embedded hardware (Raspberry Pi & Arduino), achieving low-latency detection and enabling reliable autonomous threat response in field conditions.",
        "Designed real-time telemetry dashboard for remote command and monitoring over long-range radio links."
      ],
      tech: ["YOLO", "Raspberry Pi", "Arduino", "LoRa Telemetry", "OpenCV", "Sensor Fusion", "Python"],
      metrics: "TRL-4 Certified @ Tambaram Airbase | Edge YOLO",
      github: "https://github.com/RaviRajChoubey",
      featured: true
    },
    {
      id: "skin-disease-detection",
      title: "Skin Disease Detection & Clinical Report Generation",
      category: "CV + NLP",
      badge: "Healthcare AI",
      period: "2025",
      subtitle: "Medical image segmentation via nnU-Net with XAI heatmaps & automated clinical summaries.",
      description: "Developed an AI-driven medical diagnostic framework combining state-of-the-art segmentation with explainability heatmaps and automated medical report generation.",
      points: [
        "Built an AI diagnostic system using nnU-Net for medical image segmentation with heat-map-based explainability, applying data preprocessing and augmentation to improve accuracy.",
        "Automated clinical report generation via NLP-driven summarisation models, structuring diagnostic findings into readable reports for clinicians.",
        "Implemented robust data pipeline handling DICOM image formats and stain normalization."
      ],
      tech: ["nnU-Net", "NLP Summarization", "Python", "PyTorch", "OpenCV", "Medical Imaging"],
      metrics: "Heat-map XAI | Automated NLP Summaries",
      github: "https://github.com/RaviRajChoubey/skin-disease-detection-and-report-generation",
      featured: true
    },
    {
      id: "market-basket-apriori",
      title: "Market Basket Analysis using Apriori",
      category: "Data Science",
      badge: "Analytics Engine",
      period: "2024",
      subtitle: "Association rule mining pipeline calculating Support, Confidence & Lift for retail.",
      description: "Applied data mining techniques to extract high-value customer purchasing patterns and association rules from large transaction datasets.",
      points: [
        "Applied the Apriori algorithm with support, confidence, and lift thresholds to mine association rules from large-scale retail transaction data using Python and Pandas.",
        "Delivered actionable cross-sell and product-bundling insights to optimize retail layout and promotional strategies.",
        "Constructed interactive itemset co-occurrence matrices and network visualization plots."
      ],
      tech: ["Python", "Pandas", "NumPy", "Apriori Algorithm", "Data Mining", "Matplotlib"],
      metrics: "Actionable Cross-Sell & Bundling Insights",
      github: "https://github.com/RaviRajChoubey",
      featured: false
    }
  ],

  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "SQL", "R", "C", "C++", "Java"],
    aiMlDataScience: [
      "Machine Learning",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "nnU-Net",
      "NLP",
      "Data Engineering",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)"
    ],
    computerVision: [
      "YOLO",
      "OpenCV",
      "Image Segmentation",
      "Real-Time Object Detection",
      "Explainable AI (Heatmaps)"
    ],
    fullStackBackend: [
      "Next.js 15",
      "FastAPI",
      "React.js",
      "Node.js",
      "REST APIs",
      "PostgreSQL (Supabase)",
      "Prisma ORM",
      "Upstash Redis",
      "MySQL"
    ],
    toolsFundamentals: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOPS)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Computer Networks",
      "Git & GitHub",
      "Linux",
      "Vercel Deployment",
      "VS Code"
    ]
  },

  achievements: [
    {
      title: "NIC Govt. of India Intern",
      subtitle: "Full-Stack Developer Intern",
      description: "Architected e-Jagriti AI database migration platform at National Informatics Centre (MeitY). Zero data loss validation, commended by DDG.",
      icon: "Building2",
      category: "Internships"
    },
    {
      title: "Cestrum Data Science Intern",
      subtitle: "AI/ML Data Science Intern",
      description: "Engineered features, preprocessed complex datasets, trained & evaluated Scikit-learn ML models, and built reproducible data workflows.",
      icon: "BrainCircuit",
      category: "Internships"
    },
    {
      title: "Smart India Hackathon Finalist",
      subtitle: "Top 50 of 850+ Teams",
      description: "Selected as national finalist in Smart India Hackathon among 850+ competing engineering teams.",
      icon: "Trophy",
      category: "Hackathons"
    },
    {
      title: "TRL-4 Defence Certification",
      subtitle: "Tambaram Airbase Validation",
      description: "Validated Defensive Rover in live field operations at Tambaram Airbase, Chennai, receiving TRL-4 military certification.",
      icon: "ShieldCheck",
      category: "Certifications"
    },
    {
      title: "Data Quest Hackathon — 3rd Place",
      subtitle: "300+ Participants",
      description: "Secured 3rd position among 300+ data science enthusiasts for predictive modeling and data insights.",
      icon: "Award",
      category: "Hackathons"
    },
    {
      title: "Marketing & Management Head",
      subtitle: "MMC Club (500+ Registrations)",
      description: "Led & organized Chaat Mahaparv flagship event, drawing 500+ online registrations and 700-800 live attendees.",
      icon: "Users",
      category: "Leadership"
    }
  ]
};
