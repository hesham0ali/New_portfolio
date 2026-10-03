export type NavigationItem = {
  label: string;
  href: string;
};

export type ProofItem = {
  value: string;
  label: string;
};

export type ExpertiseItem = {
  number: string;
  title: string;
  label?: string;
  description: string;
  capabilities: string[];
  href?: string;
  ctaLabel?: string;
};

export type SpotlightItem = {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  environment: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type Principle = {
  number: string;
  title: string;
  description: string;
};

export type PortfolioData = {
  person: {
    name: string;
    shortName: string;
    role: string;
    location: string;
    email: string;
    whatsapp: {
      number: string;
      url: string;
      label: string;
      ariaLabel: string;
    };
    linkedInUrl: string;
    githubUrl: string;
    cvUrl: string;
  };
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    supportingText: string;
  };
  proof: ProofItem[];
  about: {
    heading: string;
    paragraphs: string[];
  };
  expertise: ExpertiseItem[];
  spotlight: SpotlightItem[];
  experience: Experience;
  stack: StackGroup[];
  principles: Principle[];
  education: {
    degree: string;
    institution: string;
    graduation: string;
    description: string;
  };
  contact: {
    heading: string;
    description: string;
  };
};
