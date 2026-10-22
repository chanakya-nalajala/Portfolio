import type { ResumeData } from "../types";

export const resumeData: ResumeData = {
  personal: {
    name: "Chanakya Nalajala",
    title: "Lead – Solution Engineer",
    subtitle: "Building enterprise systems that actually work in production",
    location: "Hyderabad, Telangana, India",
    email: "chanakya180@gmail.com",
    phone: "+919490375485",
    linkedin: "https://www.linkedin.com/in/chanakya-nalajala/",
    github: "https://github.com/chanakya-nalajala",
    website: "https://chanakya.got-a.page",
    summary:
      "Lead – Solution Engineer with 6+ years of experience building enterprise-level software products, specializing in Java, Spring Boot, Angular, and React, modernizing enterprise platforms to elevate performance, scalability, and maintainability. Leads a technical vertical of 10+ engineers, owning end-to-end delivery and support across 18+ client accounts. Delivered secure, multi-tenant systems with Keycloak (MFA, PKCE, custom IdPs, RBAC) and multilingual (i18n/RTL) UIs; optimized APIs and native SQL to cut response times by up to 35% and lift operational efficiency 25–30%. Architected Java microservices with Spring Cloud (Gateway, Eureka, Config Server), implementing Saga, CQRS, and event-driven patterns over Kafka. Built AI features (LangChain4j, pgvector, OpenAI), leveraging Redis/Ehcache and Hibernate Envers for caching and auditability.",
    headline:
      "I build scalable full-stack applications with Java, Spring Boot, Angular, and React",
  },

  highlights: [
    {
      number: "6+",
      label: "Years",
      subtext: "Java & Spring Boot",
    },
    {
      number: "10+",
      label: "Engineers",
      subtext: "Led in my vertical",
    },
    {
      number: "18+",
      label: "Client accounts",
      subtext: "End-to-end delivery",
    },
    {
      number: "35%",
      label: "Faster",
      subtext: "API response times",
    },
  ],

  experience: [
    {
      role: "Lead – Solution Engineer",
      company: "Ascent Business Technologies",
      location: "Gurugram",
      start: "Jul 2026",
      end: "Present",
      highlights: [
        "Lead a technical vertical of 10+ direct resources, driving mentorship, performance management, and career growth across the team.",
        "Own end-to-end technical delivery and support for 18+ client accounts, ensuring SLA compliance, architectural consistency, and quality across concurrent engagements.",
        "Drive solutioning and technical strategy for new implementations, partnering with stakeholders to define architecture, scope, and delivery roadmaps.",
        "Establish engineering best practices (code review standards, escalation processes, knowledge-sharing frameworks) to scale delivery across the vertical.",
        "Architected a new application on industry-standard patterns, achieving optimized P95/P99 latency through distributed caching and event-driven architecture.",
        "Built reusable custom plugins/components published to a private Nexus repository and streamlined the overall architecture with defined frontend/backend rules and guidelines to enforce coding uniformity across AI coding agents.",
      ],
    },
    {
      role: "Senior Software Engineer II",
      company: "Ascent Business Technologies",
      location: "Gurugram",
      start: "Jul 2024",
      end: "Jun 2026",
      highlights: [
        "Led full-stack modernization, migrating Spring Boot and Angular, improving performance and maintainability by ~30%.",
        "Hardened IAM with Keycloak (MFA, PKCE, custom IdPs), enforcing granular RBAC and secure SSO across tenants.",
        "Delivered secure multi-tenant architecture (shared schema, tenant-aware filters/ACLs) strengthening data segregation and compliance.",
        "Built React-based admin/dashboard UIs integrated with Spring Boot REST APIs, complementing Angular frontend modules.",
        "Increased throughput and auditability via Redis/Ehcache caching and Hibernate Envers; optimized hotspots using EntityManager + native SQL.",
        "Decomposed monolithic modules into Spring Boot microservices using Spring Cloud Gateway and Eureka, applying Saga and CQRS patterns for distributed transaction management.",
        "Implemented event-driven inter-service communication using Kafka, improving system decoupling and async processing reliability.",
      ],
    },
    {
      role: "Senior Software Engineer I",
      company: "Ascent Business Technologies",
      location: "Gurugram",
      start: "Sep 2022",
      end: "Jun 2024",
      highlights: [
        "Delivered multilingual Angular apps with i18n and RTL support for Arabic/English, ensuring consistent UX across web and mobile.",
        "Optimized state management with RxJS/NgRx, boosting responsiveness by 30%.",
        "Implemented ShedLock and Quartz for background jobs, improving real-time dashboard updates by 25%.",
        "Eliminated Hibernate N+1 and tuned indexes/execution plans with fetch joins and entity graphs, reducing API response times by ~35%.",
        "Integrated MIR3, EverBridge, F24, and Twilio for real-time multilingual notifications, increasing engagement by 20%.",
        "Built real-time dashboards with MITKAT, enhancing data insights for faster decisions.",
        "Developed a custom Keycloak provider for advanced user/group queries, improving authentication flexibility by 20%.",
      ],
    },
    {
      role: "Analyst Engineer",
      company: "Conceptive Consulting",
      location: "Hyderabad",
      start: "Mar 2020",
      end: "Sep 2022",
      highlights: [
        "Built and supported enterprise applications using Java (Spring Boot), Angular, React, and React Native.",
        "Contributed to feature development, bug fixing, performance improvements, and UI enhancements across web and mobile platforms.",
        "Worked on API integration, authentication/authorization flows, reusable components, and database-driven modules while ensuring clean code, maintainability, and timely delivery in Agile teams.",
      ],
    },
  ],

  education: [
    {
      institution: "IEC University",
      location: "Solan",
      degree: "Bachelor of Computer Applications",
      start: "2016",
      end: "2019",
    },
    {
      institution: "Sathyabama University",
      location: "Chennai",
      degree: "Bachelor of Technology (Disc.)",
      start: "2012",
      end: "2015",
    },
  ],

  expertiseAreas: [
    {
      title: "Java & Spring Boot Microservices",
      description:
        "Working with Spring Boot 3.x, Spring Cloud (Gateway, Eureka, Config Server), Security, JPA/Hibernate 6, and microservices. Architected distributed systems with Saga, CQRS, and event-driven patterns. Recently migrated a monolith and 8 services from Boot 2.x to 3.x with zero downtime.",
      level: "Expert",
    },
    {
      title: "Full-Stack Development",
      description:
        "Building modern web applications with Angular (v10-v20), React, TypeScript, and Spring Boot REST APIs. Delivered multilingual (i18n/RTL) UIs, reactive forms with RxJS/NgRx, and admin dashboards integrated with backend services.",
      level: "Expert",
    },
    {
      title: "Platform Modernization",
      description:
        "Platform migrations are my thing. Spring Boot 2→3, Angular 10→20, Jakarta EE migrations. Always with zero downtime because production doesn't sleep. Built React-based admin dashboards for faster internal tooling delivery.",
      level: "Expert",
    },
    {
      title: "Performance Tuning",
      description:
        "Fixed N+1 queries with fetch joins and entity graphs, added multi-level caching (Redis/Ehcache), optimized SQL and indexes. Cut response times by 35% and increased throughput by 40% in current role using Hibernate 6 and native SQL optimization.",
      level: "Expert",
    },
    {
      title: "Security & Multi-Tenancy",
      description:
        "Keycloak integration with MFA, PKCE, custom IdPs, OAuth2/OpenID Connect, granular RBAC, Row-level security, Tenant-aware filters/ACLs, Secure multi-tenant architecture (shared schema)",
      level: "Advanced",
    },
    {
      title: "Event-Driven Architecture",
      description:
        "Implemented inter-service communication via Kafka for distributed systems. Applied Saga orchestration, CQRS with event sourcing, and Outbox pattern for reliable async processing and transaction management.",
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
        "~30% performance improvement, modern security features, eliminated technical debt",
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
        "Built React-based admin dashboards for complementary tooling",
      ],
      impact:
        "40% faster build times, 25% smaller bundle size, modern reactive patterns, improved responsiveness by 30%",
      technologies: [
        "Angular 20",
        "React",
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
        "Applied Saga and CQRS patterns for transaction management",
      ],
      impact:
        "Independent deployability, 50% faster feature delivery, improved scalability and system decoupling",
      technologies: [
        "Spring Boot",
        "Spring Cloud (Gateway, Eureka, Config Server)",
        "Kafka",
        "Docker",
      ],
    },
  ],

  engineeringDepth: {
    performance: [
      {
        title: "N+1 Query Elimination",
        description:
          "Implemented fetch joins and entity graphs in Hibernate 6, reducing API response times by ~35%",
        impact: "~35% faster response times",
        tech: "Hibernate 6, JPA, Entity Graphs, Fetch Joins",
      },
      {
        title: "Multi-Level Caching Strategy",
        description:
          "Designed Redis + Ehcache architecture for hot data paths with smart invalidation, increasing throughput and auditability",
        impact: "~40% throughput increase",
        tech: "Redis, Ehcache, Spring Cache",
      },
      {
        title: "Native SQL & Index Optimization",
        description:
          "Optimized database hotspots using EntityManager with native SQL, tuned indexes and execution plans to lift operational efficiency",
        impact: "25-30% operational efficiency improvement",
        tech: "Native SQL, PostgreSQL, Oracle, MSSQL, Indexing",
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
          "Built secure tenant isolation using shared schema with row-level security, tenant-aware filters/ACLs, strengthening data segregation and compliance",
        impact: "Zero data leakage across 100+ tenants",
        tech: "Spring Boot, JPA, Hibernate Filters, Multi-tenancy",
      },
      {
        title: "Microservices with Spring Cloud",
        description:
          "Architected Java microservices with Spring Cloud Gateway, Eureka, Config Server. Designed resilient inter-service communication with circuit breakers and fallback mechanisms",
        impact:
          "99.9% uptime despite service failures, improved system decoupling",
        tech: "Spring Cloud (Gateway, Eureka, Config Server), Resilience4j, Feign Client",
      },
      {
        title: "Event-Driven Workflow Engine",
        description:
          "Built configurable business process engine using Saga orchestration, CQRS and event sourcing patterns over Kafka for distributed transaction management",
        impact: "60% faster approval workflows, reliable async processing",
        tech: "Spring Boot, Kafka, Event Sourcing, Saga, CQRS",
      },
      {
        title: "React Admin Dashboards",
        description:
          "Built React-based admin dashboards integrated with Spring Boot REST APIs, complementing Angular frontend modules for faster internal tooling delivery",
        impact:
          "Accelerated internal tooling and improved developer productivity",
        tech: "React, TypeScript, Spring Boot REST APIs",
      },
    ],
    security: [
      {
        title: "Enterprise IAM with Keycloak",
        description:
          "Hardened IAM with Keycloak integration for SSO, MFA, PKCE, custom IdPs, and granular RBAC across microservices, enforcing secure multi-tenant access",
        impact:
          "Enterprise-grade security compliance, strengthened data segregation",
        tech: "Keycloak, OAuth2, OpenID Connect, MFA, PKCE, RBAC",
      },
      {
        title: "JWT-based Microservice Security",
        description:
          "Implemented stateless authentication with JWT tokens, refresh tokens, and role-based access control for secure distributed systems",
        impact: "Secure, scalable authentication across microservices",
        tech: "Spring Security, JWT, OAuth2 Resource Server",
      },
      {
        title: "Custom Keycloak Provider",
        description:
          "Developed custom Keycloak provider for advanced user/group queries, improving authentication flexibility",
        impact: "20% improvement in authentication flexibility",
        tech: "Keycloak SPI, Java, Custom Providers",
      },
    ],
  },

  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "SQL"],
    backend: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Microservices",
      "JPA/Hibernate 6",
      "Spring Cloud (Gateway, Eureka, Config Server)",
      "Spring Modulith",
      "Kafka",
      "Event-Driven Architecture",
      "Reactive Programming",
    ],
    frontend: [
      "Angular",
      "React",
      "RxJS",
      "NgRx",
      "Reactive Forms",
      "i18n/RTL",
    ],
    patterns: ["Saga", "CQRS", "Event Sourcing", "Circuit Breaker"],
    security: [
      "Keycloak",
      "OAuth2",
      "OpenID Connect",
      "RBAC",
      "MFA",
      "PKCE",
      "Custom IdP Integration",
    ],
    performance: ["Redis", "Ehcache", "Performance Tuning", "Indexing"],
    data: ["Oracle", "MSSQL", "MySQL", "PostgreSQL"],
    devops: ["Docker", "Maven", "Git", "Tomcat", "IntelliJ IDEA"],
    ai: ["LangChain4j", "RAG", "pgvector", "OpenAI API"],
  },

  projects: [
    {
      name: "ClearTrail Workflow Platform",
      description:
        "Production-ready business workflow and automation platform built with Java Spring Boot, designed to streamline organizational approval processes",
      problem:
        "Manual approval processes create bottlenecks and lack transparency in enterprise workflows",
      solution:
        "Designed and built a configurable workflow orchestration engine with custom business rule support using CQRS and event sourcing patterns",
      outcome:
        "Automated complex approval chains, reducing process cycle time by 60% and improving accountability",
      tech: ["Java", "Spring Boot", "MSSQL", "Keycloak", "Docker"],
    },
    {
      name: "TenantForge",
      description:
        "Comprehensive enterprise onboarding platform built with Spring Boot and Angular, featuring multi-tenant architecture, automated provisioning, and seamless client onboarding workflows",
      problem:
        "Client onboarding was manual, error-prone, and took weeks to complete",
      solution:
        "Built automated provisioning system with self-service capabilities, secure tenant isolation using shared schema with row-level security and tenant-aware filters",
      outcome:
        "Reduced onboarding time from weeks to hours with zero data leakage across tenants",
      tech: ["Java", "Spring Boot", "Angular", "MSSQL", "Keycloak", "Docker"],
    },
    {
      name: "Doc2Chat",
      description:
        "Spring Boot application that leverages LangChain4j library and OpenAI models to enable conversational question answering over your own documents",
      problem:
        "Organizations struggle to extract insights from large document repositories efficiently",
      solution:
        "Built AI-powered document intelligence platform. Ingests documents, stores embeddings in pgvector database, and provides secure API for chat-based retrieval augmented generation (RAG)",
      outcome:
        "Enables natural language querying over document collections with context-aware responses",
      tech: ["Java", "Spring Boot", "pgvector", "LangChain4j", "OpenAI API"],
    },
  ],
};
