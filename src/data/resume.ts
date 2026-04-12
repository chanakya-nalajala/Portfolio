import type { ResumeData } from "../types";

export const resumeData: ResumeData = {
  personal: {
    name: "Chanakya Nalajala",
    title: "Senior Java Full-Stack Engineer",
    subtitle:
      "Building enterprise systems that actually work in production",
    location: "Hyderabad, India",
    email: "chanakya.180@gmail.com",
    phone: "+91 9490375485",
    linkedin: "https://www.linkedin.com/in/chanakya-nalajala/",
    github: "https://github.com/chanakya",
    summary:
      "I've spent the last 6+ years building and fixing enterprise Java applications. Recently migrated a monolith to Spring Boot 3.x and Angular 20, cutting API response times by 35%. I enjoy solving performance bottlenecks and making legacy code work better.",
    headline:
      "I build Java applications and make them fast",
  },

  highlights: [
    {
      number: "6+",
      label: "Years",
      subtext: "Java & Spring Boot",
    },
    {
      number: "35%",
      label: "Faster",
      subtext: "After optimization",
    },
    {
      number: "0",
      label: "Downtime",
      subtext: "During migrations",
    },
    {
      number: "8",
      label: "Services",
      subtext: "Migrated to Spring 3.x",
    },
  ],

  expertiseAreas: [
    {
      title: "Java & Spring Boot",
      icon: "☕",
      description:
        "Working with Spring Boot 3.x, Security, JPA/Hibernate, and microservices. Recently migrated a monolith and 8 services from Boot 2.x to 3.x with zero downtime.",
      level: "Expert",
    },
    {
      title: "Making Old Code Work Better",
      icon: "🔧",
      description:
        "Platform migrations are my thing. Spring Boot 2→3, Angular 10→20, Jakarta EE migrations. Always with zero downtime because production doesn't sleep.",
      level: "Expert",
    },
    {
      title: "Performance Tuning",
      icon: "⚡",
      description:
        "Fixed N+1 queries, added caching (Redis/Ehcache), optimized SQL. Cut response times by 35% in my current role. Sometimes the simple fixes make the biggest difference.",
      level: "Expert",
    },
    {
      title: "Security & Multi-Tenancy",
      icon: "🔐",
      description:
        "Keycloak integration, OAuth2/OpenID Connect, RBAC, Row-level security, Tenant isolation, MFA implementation",
      level: "Advanced",
    },
  ],

  migrations: [
    {
      title: "Spring Boot 2.x → 3.x Migration",
      timeline: "3 months",
      scope: "Enterprise monolith + 8 microservices",
      challenges: [
        "Jakarta EE namespace migration (javax → jakarta)",
        "Hibernate 5 → 6 compatibility",
        "Spring Security 5 → 6 architecture changes",
        "Deprecated API replacements",
      ],
      approach: [
        "Created migration strategy with backward compatibility layer",
        "Incremental module-by-module migration",
        "Automated testing for regression prevention",
        "Zero-downtime blue-green deployment",
      ],
      impact:
        "30% performance improvement, modern security features, eliminated technical debt",
      technologies: [
        "Spring Boot 3.x",
        "Jakarta EE",
        "Hibernate 6",
        "Spring Security 6",
      ],
    },
    {
      title: "Angular 10 → 20 Modernization",
      timeline: "4 months",
      scope: "Multi-tenant SaaS platform (50+ components)",
      challenges: [
        "Deprecated APIs and breaking changes across 10 major versions",
        "Migration to standalone components",
        "RxJS operators modernization",
        "Ivy compiler optimization",
      ],
      approach: [
        "Version-by-version incremental upgrade",
        "Refactored to Angular 17+ patterns (signals, control flow)",
        "Updated state management (NgRx latest)",
        "Performance optimization with OnPush strategy",
      ],
      impact:
        "40% faster build times, 25% smaller bundle size, modern reactive patterns",
      technologies: [
        "Angular 20",
        "TypeScript 5",
        "RxJS 7",
        "NgRx",
        "Standalone Components",
      ],
    },
    {
      title: "Monolith to Microservices Decomposition",
      timeline: "6 months",
      scope: "Legacy Java EE application → Spring Boot microservices",
      challenges: [
        "Tight coupling and shared database",
        "No clear domain boundaries",
        "Legacy authentication system",
        "Data consistency across services",
      ],
      approach: [
        "Domain-driven design to identify bounded contexts",
        "Strangler fig pattern for gradual migration",
        "Event-driven architecture with Kafka",
        "Distributed tracing and monitoring",
      ],
      impact:
        "Independent deployability, 50% faster feature delivery, improved scalability",
      technologies: [
        "Spring Boot",
        "Spring Cloud",
        "Kafka",
        "Docker",
        "Kubernetes",
      ],
    },
  ],

  engineeringDepth: {
    performance: [
      {
        title: "N+1 Query Elimination",
        description:
          "Implemented fetch joins and entity graphs in Hibernate 6, reducing API response times by 35%",
        impact: "35% faster response times",
        tech: "Hibernate 6, JPA, Entity Graphs",
      },
      {
        title: "Multi-Level Caching Strategy",
        description:
          "Designed Redis + Ehcache architecture for hot data paths with smart invalidation",
        impact: "40% throughput increase",
        tech: "Redis, Ehcache, Spring Cache",
      },
      {
        title: "Connection Pool Optimization",
        description:
          "Tuned HikariCP settings and optimized database connections for high-concurrency scenarios",
        impact: "3x better concurrent request handling",
        tech: "HikariCP, PostgreSQL, Connection Pooling",
      },
    ],
    architecture: [
      {
        title: "Multi-Tenant SaaS Architecture",
        description:
          "Built secure tenant isolation using shared schema with row-level security and tenant-aware filters",
        impact: "Zero data leakage across 100+ tenants",
        tech: "Spring Boot, JPA, Hibernate Filters",
      },
      {
        title: "Microservices Communication",
        description:
          "Designed resilient inter-service communication with circuit breakers and fallback mechanisms",
        impact: "99.9% uptime despite service failures",
        tech: "Spring Cloud, Resilience4j, Feign Client",
      },
      {
        title: "Event-Driven Workflow Engine",
        description:
          "Built configurable business process engine using CQRS and event sourcing patterns",
        impact: "60% faster approval workflows",
        tech: "Spring Boot, Kafka, Event Sourcing",
      },
    ],
    security: [
      {
        title: "Enterprise IAM with Keycloak",
        description:
          "Integrated Keycloak for SSO, MFA, custom IdPs, and granular RBAC across microservices",
        impact: "Enterprise-grade security compliance",
        tech: "Keycloak, OAuth2, OpenID Connect",
      },
      {
        title: "JWT-based Microservice Security",
        description:
          "Implemented stateless authentication with JWT tokens, refresh tokens, and role-based access control",
        impact: "Secure, scalable authentication",
        tech: "Spring Security, JWT, OAuth2 Resource Server",
      },
    ],
  },

  skills: {
    backend: [
      "Java",
      "Spring Boot 3.x",
      "Spring Security",
      "JPA/Hibernate 6",
      "Microservices",
      "REST APIs",
    ],
    frontend: ["Angular 20", "TypeScript", "RxJS", "NgRx", "i18n/RTL"],
    security: [
      "Keycloak",
      "OAuth2",
      "OpenID Connect",
      "RBAC",
      "MFA",
      "Multi-tenant Architecture",
    ],
    data: [
      "Oracle",
      "PostgreSQL",
      "MSSQL",
      "MySQL",
      "Native SQL Optimization",
      "pgvector",
    ],
    performance: [
      "Redis",
      "Ehcache",
      "Query Optimization",
      "Indexing",
      "N+1 Elimination",
    ],
    ai: ["LangChain4j", "RAG", "OpenAI API", "Vector Embeddings"],
    devops: ["Docker", "Maven", "Git", "Tomcat"],
  },

  experience: [
    {
      title: "Senior Software Engineer II",
      company: "Ascent Business Technologies",
      location: "Gurugram",
      period: "Jul 2024 - Present",
      highlights: [
        "Led full-stack modernization from Spring Boot 2.x → 3.x and Angular 10 → 20, improving performance and maintainability by 30%",
        "Reduced API response times by 35% by eliminating N+1 queries and optimizing indexes with fetch joins and entity graphs",
        "Architected secure multi-tenant system with tenant-aware filters and granular RBAC using Keycloak (MFA, PKCE, custom IdPs)",
        "Implemented Redis/Ehcache caching and Hibernate Envers for increased throughput and complete audit trail",
      ],
    },
    {
      title: "Senior Software Engineer I",
      company: "Ascent Business Technologies",
      location: "Gurugram",
      period: "Sep 2022 - Jun 2024",
      highlights: [
        "Built multilingual Angular applications with i18n and RTL support, delivering seamless Arabic/English UX across web and mobile",
        "Improved application responsiveness by 30% through optimized state management with RxJS and NgRx",
        "Enhanced real-time dashboard updates by 25% using ShedLock and Quartz for background job orchestration",
        "Integrated multi-channel notification system (MIR3, EverBridge, F24, Twilio), increasing user engagement by 20%",
      ],
    },
    {
      title: "Analyst Engineer",
      company: "Conceptive Consulting",
      location: "Hyderabad",
      period: "Mar 2020 - Sep 2022",
      highlights: [
        "Built enterprise applications using Java (Spring Boot), Angular, and React Native across web and mobile platforms",
        "Delivered feature development, API integration, and authentication flows while maintaining clean code standards in Agile teams",
      ],
    },
  ],

  projects: [
    {
      name: "Doc2Chat",
      description:
        "AI-powered document intelligence platform enabling conversational Q&A over enterprise documents using RAG architecture",
      problem:
        "Organizations struggle to extract insights from large document repositories efficiently",
      solution:
        "Built a Spring Boot application leveraging LangChain4j and OpenAI models for semantic search and chat-based retrieval",
      outcome:
        "Enables natural language querying over document collections with context-aware responses",
      tech: ["Spring Boot", "LangChain4j", "pgvector", "OpenAI API", "RAG"],
    },
    {
      name: "ClearTrail Workflow Platform",
      description:
        "Production-ready business workflow and automation platform streamlining organizational approval processes",
      problem:
        "Manual approval processes create bottlenecks and lack transparency in enterprise workflows",
      solution:
        "Designed and built a configurable workflow orchestration engine with custom business rule support",
      outcome:
        "Automated complex approval chains, reducing process cycle time and improving accountability",
      tech: ["Spring Boot", "MSSQL", "Keycloak", "Docker"],
    },
    {
      name: "TenantForge",
      description:
        "Enterprise onboarding platform with multi-tenant architecture and automated client provisioning",
      problem:
        "Client onboarding was manual, error-prone, and took weeks to complete",
      solution:
        "Built automated provisioning system with self-service capabilities and tenant isolation",
      outcome:
        "Reduced onboarding time from weeks to hours with zero data leakage across tenants",
      tech: ["Spring Boot", "Angular", "MSSQL", "Keycloak", "Docker"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications",
      institution: "IEC University",
      location: "Solan",
      period: "2016 - 2019",
    },
    {
      degree: "Bachelor of Technology (Discontinued)",
      institution: "Sathyabama University",
      location: "Chennai",
      period: "2012 - 2015",
    },
  ],
};
