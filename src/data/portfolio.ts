import type { PortfolioData } from "@/types/portfolio";

const fallbackSiteUrl = "https://www.heshamali.com";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl,
).origin;

export const portfolio = {
  person: {
    name: "Hesham Ali",
    shortName: "HA",
    role: "Junior Software Engineer focused on Backend, Integrations, Automation, WordPress, and E-commerce Solutions.",
    location: "Alexandria, Egypt",
    email: "heshamali.dev@gmail.com",
    whatsapp: {
      number: "+20 112 140 8868",
      url: "https://wa.me/201121408868?text=Hi%20Hesham%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      label: "Chat on WhatsApp",
      ariaLabel: "Chat with Hesham on WhatsApp (opens in a new tab)",
    },
    linkedInUrl: "https://www.linkedin.com/in/hesham-ali-dev",
    // TODO: Replace with Hesham's confirmed public GitHub profile URL.
    githubUrl: null,
    cvUrl: "/hesham-ali-cv.pdf",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Hello, I’m Hesham Ali",
    headline:
      "I build backend systems, custom WordPress platforms, and e-commerce solutions.",
    description:
      "I’m a Junior Software Engineer focused on backend development, APIs, system integrations, WordPress solutions, workflow automation, and e-commerce delivery.",
    supportingText:
      "I help turn business requirements and unclear processes into practical systems that teams can use, maintain, and scale.",
  },
  proof: [
    { value: "1M+", label: "Platform scale exposure" },
    { value: "5,000+", label: "CRM import and pagination testing" },
    { value: "API-First", label: "Integrations and workflow automation" },
  ],
  about: {
    heading:
      "I work at the intersection of software, business processes, and system delivery.",
    paragraphs: [
      "I’m Hesham Ali, a Junior Software Engineer and Business Information Systems student based in Alexandria, Egypt.",
      "My experience covers backend systems, CRM workflows, API integrations, workflow automation, WordPress Multisite platforms, custom plugin development, and Salla e-commerce stores.",
      "My approach starts with understanding the real business process behind a request. I map the workflow, identify the technical requirements, and contribute to a practical solution that can be tested, deployed, and maintained.",
    ],
  },
  expertise: [
    {
      number: "01",
      title: "Backend Systems & APIs",
      description:
        "I contribute to backend systems that support real business workflows, including authentication, data processing, reporting, queues, and third-party integrations.",
      capabilities: [
        "REST API development",
        "Authentication and authorization",
        "Database-driven applications",
        "Background queues and workflows",
        "CRM backend support",
        "Testing and troubleshooting",
      ],
    },
    {
      number: "02",
      title: "WordPress & Custom Plugins",
      description:
        "I build and maintain WordPress solutions that go beyond standard themes, including Multisite environments and plugin-specific business logic.",
      capabilities: [
        "Custom WordPress plugins",
        "WordPress Multisite",
        "Booking and payment workflows",
        "Custom dashboards",
        "Performance optimization",
        "Legacy website maintenance",
      ],
    },
    {
      number: "03",
      title: "Salla & E-commerce Delivery",
      description:
        "I deliver Salla stores from initial setup through testing, launch preparation, and client handover—not just template changes.",
      capabilities: [
        "Store setup and configuration",
        "Custom-coded theme sections",
        "Tabby and Tamara integrations",
        "Google Analytics setup",
        "Functional testing",
        "Launch preparation and handover",
      ],
    },
    {
      number: "04",
      title: "Integrations & Automation",
      description:
        "I connect systems and automate business workflows using APIs, webhooks, workflow tools, and third-party platforms.",
      capabilities: [
        "API and webhook integrations",
        "WhatsApp and Chatwoot",
        "Facebook Lead Ads",
        "CRM automation",
        "n8n workflows",
        "Business process mapping",
      ],
    },
  ],
  spotlight: [
    {
      eyebrow: "Custom engineering",
      title: "WordPress Solutions",
      description:
        "Business-focused WordPress functionality, Multisite behavior, and existing-platform improvements built for practical workflows.",
      capabilities: [
        "Custom plugin development",
        "WordPress Multisite functionality",
        "Booking and consultation systems",
        "Manual payment workflows",
        "Custom dashboards",
        "Pricing and analytics features",
      ],
    },
    {
      eyebrow: "Complete delivery",
      title: "Salla E-commerce Solutions",
      description:
        "Store delivery spanning configuration, storefront customization, payments, analytics, testing, launch preparation, and handover.",
      capabilities: [
        "Complete store setup",
        "Storefront design",
        "Custom theme sections",
        "Tabby and Tamara integration",
        "Checkout and functional testing",
        "Launch preparation and client handover",
      ],
    },
  ],
  experience: {
    role: "Junior Software Engineer",
    company: "Moraqmen",
    period: "January 2026 — Present",
    description:
      "I work on client-facing software projects across CRM systems, backend integrations, workflow automation, WordPress platforms, and Salla e-commerce stores.",
    responsibilities: [
      "Translate business requirements into system workflows.",
      "Support CRM systems, backend integrations, APIs, webhooks, databases, and automation workflows.",
      "Develop custom WordPress plugin functionality.",
      "Deliver and customize Salla e-commerce stores.",
      "Troubleshoot inherited systems and support staging and production deployment.",
    ],
    environment: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Webhooks",
      "Docker",
      "GitHub Actions",
      "WordPress",
      "Salla",
      "React",
      "Supabase",
    ],
  },
  stack: [
    {
      title: "Backend & APIs",
      items: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "REST APIs",
        "Webhooks",
        "JWT",
        "bcrypt",
      ],
    },
    {
      title: "Data & Infrastructure",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Supabase",
        "Redis",
        "Docker",
        "GitHub Actions",
        "Nginx",
      ],
    },
    {
      title: "WordPress & E-commerce",
      items: [
        "WordPress",
        "WooCommerce",
        "Custom Plugins",
        "WordPress Multisite",
        "Salla",
        "Custom Theme Sections",
        "Payment Integrations",
      ],
    },
    {
      title: "Automation & Integrations",
      items: [
        "n8n",
        "Chatwoot",
        "Facebook Lead Ads",
        "Workflow Automation",
        "System Integration",
        "API-driven Workflows",
      ],
    },
  ],
  principles: [
    {
      number: "01",
      title: "Understand the Process",
      description:
        "I start with the business workflow, users, edge cases, and the real problem behind the technical request.",
    },
    {
      number: "02",
      title: "Build Practical Solutions",
      description:
        "I focus on systems that solve the required problem without adding unnecessary complexity.",
    },
    {
      number: "03",
      title: "Improve Existing Systems",
      description:
        "I’m comfortable troubleshooting inherited projects and improving maintainability.",
    },
    {
      number: "04",
      title: "Test Before Delivery",
      description:
        "I validate functional scenarios and support delivery across staging and production environments.",
    },
  ],
  education: {
    degree: "Bachelor’s Degree in Business Information Systems",
    institution:
      "Egyptian Institute of Alexandria Academy for Management and Accounting",
    graduation: "Expected graduation: 2027",
    description:
      "My Business Information Systems background helps me understand both software implementation and the business processes behind a solution.",
  },
  contact: {
    heading: "Have a system, WordPress platform, or e-commerce project in mind?",
    description:
      "I’m available to discuss backend systems, API integrations, workflow automation, custom WordPress development, platform maintenance, and Salla e-commerce projects.",
  },
} satisfies PortfolioData;
