/**
 * PORTFOLIO DATA — Single Source of Truth
 * ========================================
 * Edit this file to update your portfolio content.
 * No HTML or CSS knowledge required for content updates.
 *
 * Sections:
 *  - personal       : contact info, bio, links
 *  - stats          : headline metrics
 *  - achievements   : bullet achievements for About section
 *  - certifications : Azure certs
 *  - skills         : technical skills with categories
 *  - experience     : work history
 *  - projects       : portfolio projects
 *  - education      : degrees
 */

const PORTFOLIO = {

  /* ─── PERSONAL ──────────────────────────────────────────────────── */
  personal: {
    name: "Mohit Kakkar",
    initials: "MK",
    title: "Azure Identity & Integration Architect",
    taglines: [
      "Azure Identity Architect",
      "Zero Trust Architecture Expert",
      "Cloud-Native Integration Builder",
      "Enterprise Systems Designer",
      "Digital Nomad · Remote-First"
    ],
    bio: "Azure Identity & Integration Architect with 14+ years designing enterprise-grade cloud solutions on Microsoft Azure. I specialise in passwordless authentication, Zero Trust security, JML lifecycle automation, federated SSO, and cloud-native integration patterns — currently securing 500+ users at Wipro while engineering next-gen hybrid integration ecosystems.",
    location: "Remote · Global",
    email: "mohit.kakkar87@gmail.com",
    phone: ["+91 9910277836", "+351 929223008"],
    phoneLabels: ["Best Contact · WhatsApp", "Secondary Contact"],
    linkedin: "https://www.linkedin.com/in/mohit-kakkar-6b264517/",
    github: "https://github.com/mohitkakkar87",
    availability: "Open to Opportunities",
    profileImage: "assets/images/profile.jpg",
    resume: "assets/resume/Mohit_Kakkar_Resume_Updated_2026.docx"
  },

  /* ─── STATS ─────────────────────────────────────────────────────── */
  stats: [
    { value: "14+", label: "Years Experience", suffix: "", icon: "⚡" },
    { value: "20+", label: "Enterprise Projects", suffix: "", icon: "🏗️" },
    { value: "500+", label: "Users Secured", suffix: "", icon: "🔐" },
    { value: "60", label: "Cost Reduction", suffix: "%", icon: "📉" }
  ],

  /* ─── ACHIEVEMENTS ──────────────────────────────────────────────── */
  achievements: [
    "Architected passwordless auth for 500+ plant floor workers (FIDO2, NFC, Smart Cards)",
    "Led BizTalk → Azure migration cutting infrastructure costs by 60%",
    "Built zero-touch JML automation — reduced manual provisioning by 90%",
    "Designed federated SSO across 20+ applications (OAuth 2.0, SAML, OIDC)",
    "Engineered event-driven platform processing 10M+ events/day at 99.9% uptime",
    "Reduced deployment cycles by 75% via Infrastructure as Code (Bicep / Terraform)",
    "Established enterprise-wide API standards with 40% efficiency improvement",
    "Implemented Zero Trust with Conditional Access, PIM & RBAC via Terraform"
  ],

  /* ─── CERTIFICATIONS ────────────────────────────────────────────── */
  certifications: [
    { name: "Azure Solutions Architect Expert", code: "AZ-305", color: "#0078D4", badge: "🏆" },
    { name: "Azure Administrator Associate", code: "AZ-104", color: "#00BCF2", badge: "☁️" },
    { name: "Azure Data Engineer Associate", code: "DP-203", color: "#107C10", badge: "📊" },
    { name: "Azure Integration Specialist", code: "AZ-204", color: "#7C3AED", badge: "🔗" }
  ],

  /* ─── SKILLS ────────────────────────────────────────────────────── */
  /*
   * Categories: identity | cloud | integration | backend | frontend | devops | data
   * icon: filename without extension from assets/icons/ (or a fallback emoji)
   */
  skills: [
    // Identity & Access Management
    { name: "Azure Entra ID", category: "identity", icon: "azure", level: 95 },
    { name: "Passwordless Auth (FIDO2)", category: "identity", icon: null, level: 90 },
    { name: "Zero Trust Architecture", category: "identity", icon: null, level: 92 },
    { name: "Conditional Access", category: "identity", icon: null, level: 90 },
    { name: "SAP IAS / SAP BTP", category: "identity", icon: null, level: 80 },
    { name: "OAuth 2.0 / SAML / OIDC", category: "identity", icon: null, level: 88 },

    // Azure Cloud
    { name: "Azure Functions", category: "cloud", icon: "azure", level: 95 },
    { name: "Azure Logic Apps", category: "cloud", icon: "azure", level: 93 },
    { name: "Azure API Management", category: "cloud", icon: "azure", level: 90 },
    { name: "Azure Service Bus", category: "cloud", icon: "azure", level: 92 },
    { name: "Azure DevOps", category: "cloud", icon: "azure", level: 90 },
    { name: "Azure Monitor / App Insights", category: "cloud", icon: "azure", level: 85 },

    // Integration
    { name: "BizTalk Server 2016", category: "integration", icon: null, level: 88 },
    { name: "Azure Data Factory", category: "integration", icon: "azure", level: 85 },
    { name: "RESTful APIs", category: "integration", icon: null, level: 95 },
    { name: "SOAP / XML / XSLT", category: "integration", icon: null, level: 85 },
    { name: "Event-Driven Architecture", category: "integration", icon: null, level: 90 },
    { name: "Enterprise Integration Patterns", category: "integration", icon: null, level: 88 },

    // Backend
    { name: "C# / .NET Core 8", category: "backend", icon: null, level: 93 },
    { name: "Python", category: "backend", icon: null, level: 80 },
    { name: "Node.js", category: "backend", icon: "nodejs", level: 75 },
    { name: "ASP.NET MVC Core", category: "backend", icon: null, level: 88 },

    // Frontend
    { name: "React", category: "frontend", icon: "react", level: 78 },
    { name: "Angular", category: "frontend", icon: "angular", level: 82 },
    { name: "TypeScript", category: "frontend", icon: "typescript", level: 80 },
    { name: "JavaScript", category: "frontend", icon: "javascript", level: 85 },

    // DevOps & IaC
    { name: "Terraform", category: "devops", icon: null, level: 88 },
    { name: "Bicep / ARM Templates", category: "devops", icon: null, level: 90 },
    { name: "Docker / Kubernetes", category: "devops", icon: "docker", level: 82 },
    { name: "CI/CD Pipelines", category: "devops", icon: "git", level: 90 },

    // Data
    { name: "SQL Server", category: "data", icon: "sql", level: 85 },
    { name: "Cosmos DB", category: "data", icon: "azure", level: 80 },
    { name: "MongoDB", category: "data", icon: "mongodb", level: 72 }
  ],

  /* ─── EXPERIENCE ────────────────────────────────────────────────── */
  experience: [
    {
      id: 1,
      company: "Wipro",
      role: "Azure Identity & Integration Architect",
      period: "Sep 2025 – Present",
      location: "Remote",
      current: true,
      logo: null,  // no logo file; will render initials
      logoText: "Wi",
      color: "#7C3AED",
      highlights: [
        "Architecting passwordless authentication for 500+ plant floor workers using FIDO2, Smart Cards & NFC",
        "Designing federated SSO across Azure Entra ID, SAP IAS & SAP BTP for 20+ enterprise applications",
        "Implementing Zero Trust security with Conditional Access, PIM & RBAC managed via Terraform",
        "Building zero-touch JML automation using Python Durable Functions & Microsoft Graph API",
        "Reducing manual user provisioning work by 90% through intelligent lifecycle automation"
      ],
      tags: ["Azure Entra ID", "FIDO2", "Zero Trust", "SAP IAS", "Python", "Terraform", "Graph API"]
    },
    {
      id: 2,
      company: "Games Workshop (SNAK Consultancy)",
      role: "Azure Integration Architect",
      period: "Sep 2024 – Aug 2025",
      location: "Nottingham, UK (Remote)",
      current: false,
      logo: "assets/images/gswip.png",
      logoText: "GW",
      color: "#0078D4",
      highlights: [
        "Designed & executed BizTalk-to-Azure cloud-native migration — 60% infrastructure cost reduction",
        "Integrated Azure Functions, App Service, Logic Apps, Event Hubs, Service Bus & APIM",
        "Implemented CI/CD pipelines and IaC with Bicep/Terraform — 75% faster deployment cycles",
        "Designed hybrid integration using VNET integration and hub-spoke network topology",
        "Established enterprise-wide API standards & API OPS practices — 40% efficiency improvement"
      ],
      tags: ["Azure Functions", "Logic Apps", "BizTalk", "APIM", "Bicep", "Terraform", "VNET"]
    },
    {
      id: 3,
      company: "KCS IT",
      role: "Technical Architect",
      period: "Dec 2022 – Aug 2024",
      location: "Porto, Portugal",
      current: false,
      logo: "assets/images/kcsitp.png",
      logoText: "KCS",
      color: "#00BCF2",
      highlights: [
        "Designed and maintained cloud-native applications on Microsoft Azure",
        "Architected scalable integration solutions using Azure PaaS services",
        "Implemented CI/CD pipelines for fully automated deployments",
        "Deployed and managed Infrastructure as Code using Bicep and Terraform",
        "Led cross-functional technical teams across enterprise projects (COFCO International)"
      ],
      tags: ["Azure", "C#", ".NET Core", "Bicep", "Terraform", "CI/CD", "Docker"]
    },
    {
      id: 4,
      company: "MetLife",
      role: "Assistant Manager – Technology",
      period: "Mar 2017 – Nov 2022",
      location: "Greater Noida, India",
      current: false,
      logo: "assets/images/metl.png",
      logoText: "ML",
      color: "#107C10",
      highlights: [
        "Designed system architecture for multiple enterprise-grade products",
        "Led multi-team development and delivery across complex technology programs",
        "Implemented CI/CD automation using Azure DevOps, Docker & Kubernetes",
        "Built enterprise budgeting and training management platforms",
        "Managed stakeholder communication and end-to-end delivery governance"
      ],
      tags: ["Azure DevOps", "Docker", "Kubernetes", "Angular", "C#", "SQL Server"]
    },
    {
      id: 5,
      company: "GSWI India Pvt. Ltd.",
      role: "Senior Software Developer",
      period: "Jul 2014 – Mar 2017",
      location: "Gurgaon, India",
      current: false,
      logo: "assets/images/gswip.png",
      logoText: "GSWI",
      color: "#E81123",
      highlights: [
        "Developed EPC Management solutions for engineering procurement projects",
        "Collaborated with product owners throughout full SDLC",
        "Developed pattern-searching algorithms for high-volume data processing",
        "Led feature development and technical design decisions"
      ],
      tags: ["C#", "ASP.NET", "SQL Server", "jQuery", "JavaScript"]
    },
    {
      id: 6,
      company: "IN Technologies Pvt. Ltd.",
      role: "Software Developer",
      period: "Dec 2013 – Jun 2014",
      location: "Gurgaon, India",
      current: false,
      logo: "assets/images/intech.png",
      logoText: "INT",
      color: "#FF8C00",
      highlights: [
        "Converted legacy systems to real-time processing using SignalR",
        "Implemented load balancing algorithms for high-availability services",
        "Resolved critical production issues and improved system stability"
      ],
      tags: ["C#", "SignalR", "ASP.NET", "SQL Server"]
    },
    {
      id: 7,
      company: "ATS Infotech Pvt. Ltd.",
      role: "Software Developer",
      period: "Feb 2011 – May 2013",
      location: "New Delhi, India",
      current: false,
      logo: "assets/images/ats.png",
      logoText: "ATS",
      color: "#0078D4",
      highlights: [
        "Developed enterprise applications from requirements through deployment",
        "Provided client support and rapid problem resolution",
        "Improved software architecture and maintained system integrity"
      ],
      tags: ["C#", "ASP.NET", "SQL Server", "JavaScript"]
    }
  ],

  /* ─── PROJECTS ──────────────────────────────────────────────────── */
  projects: [
    {
      id: 1,
      name: "Passwordless SSO for Shared Enterprise Devices",
      category: "identity",
      period: "Sep 2025 – Present",
      client: "Wipro",
      description: "Architected passwordless authentication for 500+ plant floor workers. FIDO2, Smart Cards & NFC tap-to-sign-in with federated SSO across Azure Entra ID, SAP IAS & SAP BTP. Zero Trust enforcement via Conditional Access and PIM.",
      metrics: ["500+ users secured", "Federated across 20+ apps", "Zero Touch provisioning"],
      tags: ["Azure Entra ID", "FIDO2", "SAP IAS", "SAP BTP", "Zero Trust", "Conditional Access"],
      color: "#7C3AED",
      icon: "🔐"
    },
    {
      id: 2,
      name: "Zero-Touch JML Lifecycle Automation",
      category: "identity",
      period: "Sep 2025 – Present",
      client: "Wipro",
      description: "Built fully automated Joiner-Mover-Leaver lifecycle system using Python Durable Functions, Microsoft Graph API & Terraform. Intelligent provisioning rules with PIM-managed just-in-time access.",
      metrics: ["90% manual work reduced", "Graph API integration", "Terraform-managed RBAC"],
      tags: ["Python", "Durable Functions", "Graph API", "Terraform", "PIM", "RBAC"],
      color: "#7C3AED",
      icon: "⚙️"
    },
    {
      id: 3,
      name: "Unified Cloud Integration Ecosystem",
      category: "integration",
      period: "Sep 2024 – Aug 2025",
      client: "Games Workshop",
      description: "Led full BizTalk-to-Azure migration creating a cloud-native integration platform. 10+ Azure services integrated with event-driven architecture processing 10M+ events/day at 99.9% uptime.",
      metrics: ["60% cost reduction", "10M+ events/day", "99.9% uptime"],
      tags: ["Azure Functions", "Logic Apps", "APIM", "Service Bus", "Event Hubs", "Bicep"],
      color: "#0078D4",
      icon: "☁️"
    },
    {
      id: 4,
      name: "Enterprise Integration Platform",
      category: "integration",
      period: "Dec 2022 – Aug 2024",
      client: "COFCO International (KCS IT)",
      description: "Designed scalable cloud-native integration platform replacing legacy BizTalk. Event-driven architecture with Azure Functions, Logic Apps, Service Bus & Storage. Full IaC deployment with CI/CD.",
      metrics: ["Legacy modernisation", "Event-driven architecture", "75% faster deploys"],
      tags: ["C#", "Azure Functions", "Logic Apps", "Service Bus", "Storage", "BizTalk"],
      color: "#00BCF2",
      icon: "🔗"
    },
    {
      id: 5,
      name: "Internal Budgeting Automation System",
      category: "enterprise",
      period: "2017 – 2022",
      client: "MetLife",
      description: "Automated internal budgeting process with Business Intelligence dashboards. Microservices architecture using Docker, RabbitMQ & Azure DevOps, significantly reducing budget cycle time.",
      metrics: ["Process fully automated", "BI dashboards", "Microservices architecture"],
      tags: ["Angular 8", "MVC Core", "Docker", "RabbitMQ", "Azure DevOps"],
      color: "#107C10",
      icon: "📊"
    },
    {
      id: 6,
      name: "Employee Training Management Platform",
      category: "enterprise",
      period: "2017 – 2022",
      client: "MetLife",
      description: "Unified training management platform for 3,500+ MetLife resources. Integrated internal and external training modules with comprehensive tracking, reporting & certifications management.",
      metrics: ["3,500+ users", "Unified platform", "Full reporting suite"],
      tags: ["Angular 8", "C#", "MVC", "SQL Server", "Azure DevOps"],
      color: "#107C10",
      icon: "🎓"
    }
  ],

  /* ─── GITHUB PROJECTS ───────────────────────────────────────────── */
  githubProjects: [
    {
      id: 1,
      name: "Python Mastery Tutorial",
      description: "Comprehensive interactive Python learning platform — 8 standalone HTML files, 29 topics, 60+ code examples and 30+ Chart.js visualisations. Covers Python Core through Data Science: NumPy, Pandas, Matplotlib & Seaborn. Zero install, runs entirely in the browser.",
      icon: "🐍",
      color: "#3B82F6",
      tags: ["Python", "Chart.js", "Prism.js", "Data Science", "HTML/CSS/JS"],
      github: "https://github.com/mohitkakkar87/python_mastery_tutorial",
      live: "https://mohitkakkar87.github.io/python_mastery_tutorial/",
      highlights: ["29 topics across 6 chapters", "30+ interactive Chart.js visualisations", "60+ code examples with real output"]
    },
    {
      id: 2,
      name: "JML Lifecycle Automation on Azure",
      description: "Production-ready zero-touch identity lifecycle automation for Microsoft Entra ID. Automates Joiner (<4 hrs), Mover (<40 min) & Leaver (<60 sec) processes via Azure Durable Functions, Microsoft Graph API, SCIM 2.0 provisioning and Terraform-managed RBAC.",
      icon: "⚙️",
      color: "#7C3AED",
      tags: ["Python", "Azure Functions", "Entra ID", "Graph API", "Terraform", "SCIM 2.0", "Cosmos DB"],
      github: "https://github.com/mohitkakkar87/jml-automation",
      live: null,
      highlights: ["Joiner provisioned in < 4 hrs vs 2–5 days manual", "Leaver de-provisioned in < 60 sec", "OIDC auth — zero stored secrets"]
    },
    {
      id: 3,
      name: "Enterprise Azure Integration: OMS → D365",
      description: "Production-grade interactive tutorial for integrating an Order Management System with Dynamics 365 Finance & Operations via Azure Integration Services. Features 13 sections, 9 architecture diagrams, 26 code examples and full IaC templates in Bicep & Terraform.",
      icon: "☁️",
      color: "#0078D4",
      tags: ["Azure Functions", "Service Bus", "Event Grid", "Logic Apps", "Cosmos DB", "Bicep", "Terraform", "D365"],
      github: "https://github.com/mohitkakkar87/Enterprise_Azure_Integration-OMS-to-D365-via-AIS",
      live: "https://mohitkakkar87.github.io/Enterprise_Azure_Integration-OMS-to-D365-via-AIS/",
      highlights: ["13 comprehensive sections end-to-end", "9 Mermaid architecture diagrams", "IaC templates: Bicep (12 files) + Terraform (3 files)"]
    }
  ],

  /* ─── EDUCATION ─────────────────────────────────────────────────── */
  education: [
    {
      degree: "MBA in Information Technology",
      institution: "Ural Federal University",
      location: "Russia",
      period: "2018 – 2020",
      icon: "🎓"
    },
    {
      degree: "Bachelor of Technology (IT)",
      institution: "IETE",
      location: "New Delhi, India",
      period: "2006 – 2010",
      icon: "🎓"
    },
    {
      degree: "'A' Level – Advanced Diploma in CS",
      institution: "DOEACC Society",
      location: "New Delhi, India",
      period: "2005 – 2009",
      icon: "📜"
    }
  ]

};
