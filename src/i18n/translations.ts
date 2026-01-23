export type Language = 'nl' | 'en';

export interface Translations {
  // Navbar
  navbar: {
    services: {
      ranking: string;
      website: string;
      ads: string;
      bundel: string;
    };
    contact: string;
  };
  
  // Hero
  hero: {
    title: string;
    subtitle: string;
    description: string;
    videoLabel: string;
    videoDuration: string;
    ctaRequest: string;
    ctaBook: string;
    warning: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    description: string;
    contactLink: string;
    moreInfo: string;
    oneTimeSetup: string;
    setupPrice: string;
    monthlyRetainer: string;
    completionTimeline: string;
    timeline: string;
    mostPopular: string;
    favorite: string;
    serviceDetails: {
      seo: {
        description: string;
        oneTimePrice: string;
        timeline: string;
      };
      'google-ads': {
        description: string;
        oneTimePrice: string;
        timeline: string;
      };
      'seo-website': {
        description: string;
        oneTimePrice: string;
        timeline: string;
      };
      bundel: {
        description: string;
        oneTimePrice: string;
        timeline: string;
      };
    };
  };
  
  // How We Work
  howWeWork: {
    title: string;
    description: string;
    contactLink: string;
    steps: {
      onboarding: { title: string; description: string };
      setup: { title: string; description: string };
      updates: { title: string; description: string };
      retainer: { title: string; description: string };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    description: string;
    scheduleMeeting: string;
    requestLoom: string;
    contactInfo: string;
    ourLocation: string;
    openingTimes: string;
    whatsappTooltip: string;
    openingHours: {
      weekdays: { label: string; time: string };
      saturday: { label: string; time: string };
      sunday: { label: string; time: string };
    };
  };
  
  // FAQ
  faq: {
    title: string;
    description: string;
    contactLink: string;
    questions: Array<{
      category: string;
      question: string;
      answer: string;
    }>;
  };
  
  // Common
  common: {
    contact: string;
    learnMore: string;
    getInTouch: string;
  };
  
  // About Us (Wie Wij Zijn)
  aboutUs: {
    title: string;
    intro: string;
    subheader: string;
    videoLink: string;
      mission: {
        title: string;
        description: string;
      };
      whatWeDo: {
        title: string;
        benefits: {
          visibility: {
            title: string;
            description: string;
          };
          traffic: {
            title: string;
            description: string;
          };
          enquiries: {
            title: string;
            description: string;
          };
          conversion: {
            title: string;
            description: string;
          };
          results: {
            title: string;
            description: string;
          };
        };
      };
      approach: {
        title: string;
        description: string;
      };
    whyChoose: {
      title: string;
      guaranteed: string;
      transparent: string;
      weekly: string;
      local: string;
    };
  };
  
  // Footer
  footer: {
    tagline: string;
    pages: string;
    businessInfo: string;
    whatWeDo: string;
    sendEmail: string;
    allRightsReserved: string;
    navLinks: {
      ranking: string;
      ads: string;
      website: string;
      bundel: string;
    };
    pagesLinks: {
      home: string;
      pricing: string;
      privacyPolicy: string;
      termsAndPolicies: string;
      cookies: string;
      gdpr: string;
    };
    legalLinks: {
      privacyPolicy: string;
      termsOfService: string;
      cookiePolicy: string;
      gdpr: string;
    };
  };
  
  // Privacy
  privacy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      informationWeCollect: {
        title: string;
        intro: string;
        providedDirectly: {
          title: string;
          items: string[];
        };
        collectedAutomatically: {
          title: string;
          items: string[];
        };
        note: string;
      };
      howWeUse: {
        title: string;
        intro: string;
        uses: string[];
        note: string;
      };
      informationSharing: {
        title: string;
        intro: string;
        sharingIntro: string;
        sharedWith: string[];
        note: string;
      };
      dataSecurity: {
        title: string;
        content: string[];
      };
      yourRights: {
        title: string;
        intro: string;
        rights: string[];
        note: string;
      };
      contact: {
        title: string;
        intro: string;
        company: string;
        email: string;
        phone: string;
        address: string;
        companyNo: string;
        complaint: string;
        icoLink: string;
      };
    };
  };
  
  // Terms
  terms: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      acceptance: {
        title: string;
        content: string[];
      };
      scope: {
        title: string;
        intro: string;
        services: string[];
        note: string;
      };
      proposals: {
        title: string;
        content: string[];
      };
      fees: {
        title: string;
        intro: string;
        items: {
          projectFees: string;
          retainers: string;
          performanceFees: string;
          adSpend: string;
        };
        note: string;
      };
      clientResponsibilities: {
        title: string;
        intro: string;
        responsibilities: string[];
        note: string;
      };
      performance: {
        title: string;
        content: string[];
      };
      intellectualProperty: {
        title: string;
        content: string[];
      };
      confidentiality: {
        title: string;
        content: string[];
        privacyLink: string;
      };
      termination: {
        title: string;
        intro: string;
        uponTermination: string[];
        note: string;
      };
      liability: {
        title: string;
        content: string[];
      };
      changes: {
        title: string;
        content: string[];
      };
      governingLaw: {
        title: string;
        content: string[];
      };
      contact: {
        title: string;
        intro: string;
        company: string;
        email: string;
        phone: string;
        address: string;
        companyNo: string;
      };
    };
  };
  
  // Cookies
  cookies: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      introduction: {
        title: string;
        content: string[];
        privacyLink: string;
        gdprLink: string;
      };
      whatAre: {
        title: string;
        content: string[];
      };
      types: {
        title: string;
        intro: string;
        essential: {
          title: string;
          description: string;
          example: string;
        };
        analytics: {
          title: string;
          description: string;
          example: string;
        };
        marketing: {
          title: string;
          description: string;
          example: string;
        };
      };
      thirdParty: {
        title: string;
        intro: string;
        services: {
          googleAnalytics: string;
          googleAds: string;
          calendly: string;
          embedded: string;
        };
        note: string;
      };
      managing: {
        title: string;
        intro: string;
        browserSettings: {
          title: string;
          description: string;
          options: string[];
        };
        onSiteControls: {
          title: string;
          description: string;
        };
        note: string;
      };
      impact: {
        title: string;
        intro: string;
        impacts: string[];
      };
      updates: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        intro: string;
        company: string;
        email: string;
        address: string;
        companyNo: string;
      };
    };
  };
  
  // GDPR
  gdpr: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      whatIs: {
        title: string;
        content: string[];
      };
      yourRights: {
        title: string;
        intro: string;
        rights: {
          access: { title: string; description: string };
          rectification: { title: string; description: string };
          erasure: { title: string; description: string };
          restrictProcessing: { title: string; description: string };
          dataPortability: { title: string; description: string };
          object: { title: string; description: string };
        };
      };
      lawfulBasis: {
        title: string;
        intro: string;
        bases: {
          consent: string;
          contract: string;
          legalObligation: string;
          legitimateInterests: string;
        };
      };
      dataRetention: {
        title: string;
        intro: string;
        retention: {
          clientData: string;
          marketing: string;
          analytics: string;
          legal: string;
        };
      };
      dataSecurity: {
        title: string;
        intro: string;
        measures: string[];
      };
      dataBreach: {
        title: string;
        intro: string;
        steps: string[];
      };
      exercisingRights: {
        title: string;
        intro: string;
        company: string;
        dataProtectionContact: string;
        phone: string;
        address: string;
        companyNo: string;
        complaint: string;
      };
      updates: {
        title: string;
        content: string;
      };
    };
  };
  
  // Website Page
  website: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      ctaBook: string;
      ctaRequestVideo: string;
    };
    benefits: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    whyItMatters: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        subtitle: string;
      }>;
    };
    howItWorks: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
        timeline: string;
      }>;
    };
    pricing: {
      title: string;
      paymentInfo: string;
      build: {
        badge: string;
        title: string;
        price: string;
        timeline: string;
        description: string;
        features: string[];
      };
      retainer: {
        badge: string;
        title: string;
        price: string;
        description: string;
        features: string[];
      };
    };
  };
  
  // Ads Page
  ads: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      ctaBook: string;
      ctaRequestVideo: string;
    };
    benefits: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    whyItMatters: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        subtitle: string;
      }>;
    };
    howItWorks: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    pricing: {
      title: string;
      paymentInfo: string;
      importantNote: string;
      labels: {
        included: string;
        suitableFor: string;
        goal: string;
        mostPopular: string;
        importantToKnow: string;
      };
      tiers: {
        starter: {
          name: string;
          subtitle: string;
          totalPrice: string;
          adSpend: string;
          management: string;
          included: string[];
          suitableFor: string[];
          goal: string;
        };
        growth: {
          name: string;
          subtitle: string;
          totalPrice: string;
          adSpend: string;
          management: string;
          included: string[];
          suitableFor: string[];
          goal: string;
        };
        dominance: {
          name: string;
          subtitle: string;
          totalPrice: string;
          adSpend: string;
          management: string;
          included: string[];
          suitableFor: string[];
          goal: string;
        };
      };
    };
  };
  
  // Bundel Page
  bundel: {
    hero: {
      title: string;
      description: string;
      badge?: string;
      ctaBook: string;
      ctaRequestVideo: string;
    };
    benefits: {
      title: string;
      badge?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    whyItMatters: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        subtitle: string;
      }>;
    };
    howItWorks: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    pricing: {
      title: string;
      componentsTitle: string;
      paymentInfo: string;
      setup: {
        badge: string;
        title: string;
        price: string;
        timeline: string;
        description: string;
        savings: string;
        monthlyAfterSetup: string;
        adsContinuation: string;
        components: {
          ranking: {
            title: string;
            description: string;
          };
          website: {
            title: string;
            description: string;
          };
          ads: {
            title: string;
            description: string;
          };
        };
      };
    };
  };
  
  // Contact Page
  contactPage: {
    title: string;
    description: string;
    methods: Array<{
      title: string;
      description: string;
      buttonText: string;
    }>;
  };
  
  // Ranking Page
  ranking: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      ctaBook: string;
      ctaRequestVideo: string;
    };
    benefits: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    whyLocalSEO: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        subtitle: string;
      }>;
    };
    howItWorks: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    pricing: {
      title: string;
      paymentInfo: string;
      setup: {
        badge: string;
        title: string;
        price: string;
        timeline: string;
        description: string;
        features: string[];
      };
      retainer: {
        badge: string;
        title: string;
        price: string;
        description: string;
        features: string[];
      };
    };
  };

  // Pricing Page
  pricing: {
    hero: {
      title: string;
      description: string;
    };
    ranking: {
      title: string;
      description: string;
    };
    website: {
      title: string;
      description: string;
    };
    ads: {
      title: string;
      description: string;
    };
    bundel: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  nl: {
    navbar: {
      services: {
        ranking: 'Google Ranking',
        website: 'SEO Website',
        ads: 'Google Ads',
        bundel: 'Bundel Deal',
      },
      contact: 'Contact',
    },
    hero: {
      title: "Top 3 Google ranking in 90 dagen, gegarandeerd.",
      subtitle: "Geen top 3 binnen 90 dagen? Dan werken we gratis door tot je er bent.",
      description: "",
      videoLabel: "Zie Hoe We Bedrijven in Google Ranken",
      videoDuration: "4 min overzicht",
      ctaRequest: "Vraag een Video Aan",
      ctaBook: "Plan een 15-min Gesprek",
      warning: "De top 3 krijgt ruim 60% van al het betaalde verkeer, de overige 40% moet je delen met de rest van Google.",
    },
    services: {
      title: "Onze Diensten",
      subtitle: "Dit zijn de diensten die we aanbieden.",
      description: "Voor verdere info kun je contact opnemen met ons.",
      contactLink: "contact opnemen",
      moreInfo: "Meer Info",
      oneTimeSetup: "Eenmalige setup",
      setupPrice: "Setup Prijs",
      monthlyRetainer: "Maandelijks retainer",
      completionTimeline: "Levertijd",
      timeline: "Levertijd",
      mostPopular: "Meest Populair",
      favorite: "Favoriet",
      serviceDetails: {
        seo: {
          description: `<strong>Kom in Google's Top 3:</strong> we garanderen een top 3 lokale ranking binnen 90 dagen, dat we gratis doorwerken totdat we ons doel hebben bereikt.<br><br>

  <strong>Wat we doen:</strong> complete GBP setup of opruiming, on-page SEO, locatiesignalen, citatiebouw, en trust signal optimalisatie.<br><br>

  <strong>Waarom het belangrijk is:</strong> 60% van alle verkopen op Google komen uit de top 3 resultaten. Dus als je in de top 3 bent krijg je ongeveer 20% van alle leads.`,
          oneTimePrice: '€2,000',
          timeline: 'Tot 90 dagen'
        },
        'google-ads': {
          description: `<strong>Lokale Google Ads campagnes:</strong> we bieden meerdere tiers voor lokale bedrijven, van starter tot dominant pakket.<br><br>
    
    <strong>Wat we doen:</strong> volledige campagnesetup, doorlopende targeting, copy optimalisatie, en dagelijkse monitoring om ROI te maximaliseren.<br><br>
    
    <strong>Waarom het belangrijk is:</strong> wij verzorgen setup, optimalisatie en schaal. Jij controleert de uitgaven, wij zorgen dat het presteert.`,
          oneTimePrice: '€300+ p/m',
          timeline: 'Directe resultaten'
        },
        'seo-website': {
          description: `<strong>SEO-first websites die converteren.</strong> Ontworpen om te ranken, gebouwd om te verkopen. Elke pagina is gestructureerd voor Google zichtbaarheid en gebruikersactie: duidelijke CTAs, ingebouwde agenda's, betaallinks, en snelle prestaties.<br><br>

  Een hoog-converterende homepage en servicepagina's, gebouwd voor jouw niche en doelzoekwoorden. Schone moderne code en mobile-first gebouwd om je verkeer te laten groeien.`,
          oneTimePrice: '€5,000',
          timeline: '1–2 maanden'
        },
        bundel: {
          description: `<strong>Alles-in-één marketingoplossing:</strong> Ranking, Ads, Website en meer in één compleet pakket voor maximale zichtbaarheid en leads.<br><br>

    <strong>Wat je krijgt:</strong> Local SEO & Ranking, Google Ads campagnes (€10 per dag ad spend), SEO Website, en ongoing support - alles wat je nodig hebt om te groeien.<br><br>

    <strong>Waarom het werkt:</strong> Geïntegreerde aanpak zorgt voor betere resultaten dan losse diensten. Alles werkt samen voor maximale impact.`,
          oneTimePrice: '€7,000',
          timeline: '2–3 maanden'
        }
      }
    },
    howWeWork: {
      title: "Hoe We Werken",
      description: "Altijd bereikbaar en elke week inzicht in voortgang en resultaten. Nieuwe klant?",
      contactLink: "Contact opnemen",
      steps: {
        onboarding: {
          title: "Onboarding Gesprek",
          description: "We plannen een gesprek om je doelen af te stemmen, prijzen te bevestigen en het actieplan uit te werken.",
        },
        setup: {
          title: "Setup & Lancering",
          description: "We renoveren je GBP, verbeteren on-site SEO, en bouwen citaties op om voor te bereiden op ranking.",
        },
        updates: {
          title: "Wekelijkse Updates",
          description: "Voortdurende updates elke week, met consistente inspanningen om je rankings hoger te krijgen.",
        },
        retainer: {
          title: "Langetermijn Retainer",
          description: "We behouden je top rankings en schalen op met diensten zoals ads, websites en automatiseringen.",
        },
      },
    },
    ranking: {
      hero: {
        title: "Domineer Lokale Zoekresultaten",
        subtitle: "Met Een Top 3 Ranking Op Google & Maps",
        description: "Word gevonden door lokale kopers met hoge intentie die naar jouw dienst zoeken. We garanderen resultaten of je betaalt niet.",
        ctaBook: "Plan Een Gesprek",
        ctaRequestVideo: "Vraag Een Loom Video Aan",
      },
      benefits: {
        title: "Local SEO & Google Maps Ranking",
        items: [
          {
            title: "Top 3 Ranking",
            description: "Gegarandeerde top 3 lokale ranking binnen 90 dagen of volledige terugbetaling",
          },
          {
            title: "GBP Optimalisatie",
            description: "Complete Google Business Profile setup en optimalisatie",
          },
          {
            title: "Citatiebouw",
            description: "Bouw lokale citaties op en zorg voor NAP consistentie op het web",
          },
          {
            title: "Review Strategie",
            description: "Review acquisitie strategie en templates om vertrouwen op te bouwen",
          },
          {
            title: "Doorlopende Monitoring",
            description: "Regelmatige ranking controles en continue optimalisatie",
          },
        ],
      },
      whyLocalSEO: {
        title: "Waarom Local SEO Belangrijk Is",
        description: "Sterke Google rankings plaatsen je voor klaar-om-te-kopen lokale klanten. In plaats van leads na te jagen, verschijn je waar ze zoeken, en verander je Google in een stabiele, hoog-intentie lead bron.",
        items: [
          {
            title: "Kom In De Top 3",
            subtitle: "Google Maps & lokale pack zichtbaarheid",
          },
          {
            title: "Meer Telefoontjes & Vragen",
            subtitle: "Hogere click-through door betere rankings",
          },
          {
            title: "Vertrouwd Boven Concurrenten",
            subtitle: "Ranking + reviews = veiligste lokale keuze",
          },
          {
            title: "Lagere Kosten Per Lead",
            subtitle: "Meer organische leads, minder ad uitgaven",
          },
          {
            title: "Verdedig Je Positie",
            subtitle: "Moeilijker voor anderen om je te overtreffen",
          },
        ],
      },
      howItWorks: {
        title: "Hoe We Werken",
        description: "Een schoon, eenvoudig 4-stappen proces dat je hoger laat ranken op Google Maps en lokale zoekopdrachten, en je daar houdt.",
        steps: [
          {
            title: "Onboarding Gesprek",
            description: "Onboarding gesprek, Google aanwezigheid check, en een korte Loom video met je situatie en actieplan.",
          },
          {
            title: "Initiële Setup & Bouw",
            description: "Repareren van kern GBP en SEO problemen, tracking setup, zoekwoordplan, en fundamenten bouwen voor Google Maps ranking.",
          },
          {
            title: "Updates & Rapporten",
            description: "Duidelijke wekelijkse updates en gestructureerde maandelijkse rapporten met voortgang, leads en volgende stappen.",
          },
          {
            title: "Retainer & Blijven Op De Top",
            description: "Doorlopende optimalisatie van content, citaties, reviews en technische aanpassingen om je langdurig voorop te houden.",
          },
        ],
      },
      pricing: {
        title: "Prijzen Voor Local Google Top 3 Ranking",
        paymentInfo: "Ons werk begint zodra de betaling is ontvangen. Je kunt betalen via bankoverschrijving, creditcard, contant of met Bitcoin ($BTC).",
        setup: {
          badge: "EENMALIGE SETUP",
          title: "Audit & Optimalisatie",
          price: "€2,000",
          timeline: "Tot 90 dagen",
          description: "Vooraf betaald voor al het initiële SEO werk en Google Business Profile setup.",
          features: [
            "Complete SEO & GBP audit & setup",
            "Zoekwoordonderzoek & optimalisatie",
            "Website SEO & technische fixes",
            "Initiële citatiebouw",
            "GBP content: foto's, posts & review hulp",
            "Wekelijkse updates",
          ],
        },
        retainer: {
          badge: "MAANDELIJKS RETAINER",
          title: "SEO & Beheer",
          price: "€500 p/m",
          description: "Maandelijkse vergoeding voor doorlopende optimalisatie, groei en rapportage.",
          features: [
            "Content creatie & optimalisatie",
            "Link building campagnes",
            "Review generatie plan",
            "GBP posts & updates",
            "Foto updates",
            "Maandelijkse rapporten & analyse",
          ],
        },
      },
    },
    website: {
      hero: {
        title: "SEO & Verkoop Websites",
        subtitle: "Die Traffic & Omzet Genereren",
        description: "Homepage gebouwd om te ranken + toegewijde servicepagina's met ingebouwde lead capture en boekingsflows. Volledige website met SEO fundament voor conversie.",
        ctaBook: "Plan Een Gesprek",
        ctaRequestVideo: "Vraag Een Loom Video Aan",
      },
      benefits: {
        title: "SEO & Verkoop Geoptimaliseerde Websites",
        items: [
          {
            title: "SEO Fundament",
            description: "Gebouwd om te ranken met juiste structuur en optimalisatie",
          },
          {
            title: "Lead Capture",
            description: "Ingebouwde lead capture formulieren en boekingsflows",
          },
          {
            title: "Mobile First",
            description: "Responsief ontwerp geoptimaliseerd voor alle apparaten",
          },
          {
            title: "Snelle Prestaties",
            description: "Geoptimaliseerd voor snelheid en gebruikerservaring",
          },
          {
            title: "Conversie Focus",
            description: "Ontworpen om bezoekers om te zetten in leads en klanten",
          },
        ],
      },
      whyItMatters: {
        title: "Waarom Je SEO & Verkoop Geoptimaliseerde Website Belangrijk Is",
        description: "Je SEO & Verkoop Geoptimaliseerde Website is de motor die je leads aanstuurt. Wanneer het gebouwd is voor ranking, snelheid en conversie, wordt het een langetermijn asset die verkeer aantrekt en bezoekers automatisch omzet in vragen.",
        items: [
          {
            title: "Rank Hoog & Trek Verkeer Aan",
            subtitle: "SEO-first structuur, snelheid & content",
          },
          {
            title: "Zet Bezoekers Automatisch Om",
            subtitle: "Formulieren, CTA's & flows die voor je verkopen",
          },
          {
            title: "Verminder Betaalde Ad Afhankelijkheid",
            subtitle: "Organisch verkeer dat CAC verlaagt",
          },
          {
            title: "Langetermijn ROI & Groei",
            subtitle: "Asset dat in de loop van de tijd compound",
          },
          {
            title: "Snelle Laadtijd & Hoge Prestaties",
            subtitle: "Core Web Vitals geoptimaliseerd voor SEO",
          },
        ],
      },
      howItWorks: {
        title: "Hoe Het Werkt",
        description: "Ons gestroomlijnde 4-stappen proces om je SEO-geoptimaliseerde website te ontwerpen, bouwen en lanceren in slechts 3 weken.",
        steps: [
          {
            title: "Discovery & Strategie",
            description: "Definieer doelen, doelgroep, benodigde pagina's, SEO strategie, zoekwoordonderzoek, en complete content planning.",
            timeline: "Week 1",
          },
          {
            title: "Design & Ontwikkeling",
            description: "Maak homepage, servicepagina's, lead capture funnels, boekingsflows, en alle conversie-gerichte elementen met SEO optimalisatie.",
            timeline: "Week 1-2",
          },
          {
            title: "Integratie & Testen",
            description: "Verbind formulieren, boekingssystemen, analytics, CRM integraties, en test grondig alle gebruikersflows en functionaliteit.",
            timeline: "Week 2-3",
          },
          {
            title: "Launch & Optimalisatie",
            description: "Ga live, dien in bij zoekmachines, monitor prestaties, en optimaliseer op basis van echte data met doorlopende ondersteuning.",
            timeline: "Week 3",
          },
        ],
      },
      pricing: {
        title: "Prijzen Voor SEO & Verkoop Geoptimaliseerde Websites",
        paymentInfo: "Ons werk begint zodra de betaling is ontvangen. Je kunt betalen via bankoverschrijving, creditcard, contant of met Bitcoin ($BTC).",
        build: {
          badge: "EENMALIGE BOUW",
          title: "Website Ontwikkeling",
          price: "€5,000",
          timeline: "1–2 maanden",
          description: "Vooraf betaald. Moet volledig betaald worden voordat het project start.",
          features: [
            "Mobile first design & styling",
            "Moderne code (React, TypeScript, Tailwind, CSS)",
            "SEO setup (fundament + llms.txt)",
            "Lead capture, booking & analytics",
            "Aangepaste media + 3 revisies",
            "Testen & launch",
          ],
        },
        retainer: {
          badge: "MAANDELIJKS RETAINER",
          title: "Hosting + Aanpassingen",
          price: "€100+ p/m",
          description: "Premium hosting en 1 grote of 3 kleine aanpassingen per maand.",
          features: [
            "Premium hosting & beveiliging",
            "99% uptime garantie",
            "1 grote of 3 kleine aanpassingen/maand",
            "Technisch onderhoud",
            "Prioriteit support toegang",
          ],
        },
      },
    },
    ads: {
      hero: {
        title: "Krijg Meer Gekwalificeerde Leads Vandaag",
        subtitle: "Niet Over 6 Maanden",
        description: "Sla het wachten over. We bouwen en beheren Google Ads campagnes die je direct bovenaan zoekresultaten plaatsen, zodat je vanaf dag één gekwalificeerde leads genereert.",
        ctaBook: "Plan Een Gesprek",
        ctaRequestVideo: "Vraag Een Loom Video Aan",
      },
      benefits: {
        title: "Google Ads Beheer",
        items: [
          {
            title: "Directe Resultaten",
            description: "Begin met het genereren van gekwalificeerde leads vanaf dag één, niet over 6 maanden",
          },
          {
            title: "Hoge ROI",
            description: "3x-5x rendement op ad uitgaven typisch na optimalisatieperiode",
          },
          {
            title: "Gerichte Campagnes",
            description: "Zoekwoordonderzoek gericht op klaar-om-te-kopen, hoog-intentie zoekopdrachten",
          },
          {
            title: "Doorlopende Optimalisatie",
            description: "Reguliere bid, zoekwoord en negatieve zoekwoord optimalisatie op basis van je tier",
          },
          {
            title: "Transparante Rapportage",
            description: "Duidelijke maandelijkse rapporten en schaal aanbevelingen",
          },
        ],
      },
      whyItMatters: {
        title: "Waarom Google Ads Kiezen",
        description: "Google Ads geeft je directe zichtbaarheid bovenaan zoekresultaten. Je controleert de uitgaven, de targeting, het ad schema, en je betaalt alleen wanneer iemand actief klikt. Perfect voor snelle, voorspelbare lead generatie.",
        items: [
          {
            title: "Directe Resultaten",
            subtitle: "Verschijn direct bovenaan",
          },
          {
            title: "Volledige Budget Controle",
            subtitle: "Zet campagnes aan/uit wanneer je wilt",
          },
          {
            title: "Hoog-Intentie Verkeer",
            subtitle: "Mensen die nu zoeken",
          },
          {
            title: "Duidelijke ROI Tracking",
            subtitle: "Zie kosten per lead in realtime",
          },
          {
            title: "Domineer Concurrenten",
            subtitle: "Overbied de concurrentie direct",
          },
        ],
      },
      howItWorks: {
        title: "Hoe Je Google Ads Campagne Werkt",
        description: "Een eenvoudig 4-stappen proces van onboarding tot doorlopende optimalisatie, zodat je precies weet wat er gebeurt met je Google Ads en waar je budget naartoe gaat.",
        steps: [
          {
            title: "Onboarding & Discovery",
            description: "We krijgen toegang tot je ad account, begrijpen je doelen, aanbiedingen, locaties, en ideale klanten, en verzamelen bestaande assets.",
          },
          {
            title: "Strategie & Campagne Setup",
            description: "We verzorgen zoekwoordonderzoek, concurrentiechecks, geo-targeting, campagnestructuur, ad copy, extensies, en conversie tracking.",
          },
          {
            title: "Launch, Learning & Optimalisatie",
            description: "Campagnes gaan snel live. We monitoren zoektermen, bids, en conversies, voegen negatieven toe, en verfijnen targeting naarmate de data binnenkomt.",
          },
          {
            title: "Doorlopend Beheer & Schalen",
            description: "We optimaliseren continu bids, ads, en audiences, testen nieuwe invalshoeken, rapporteren maandelijks resultaten, en schalen wat winstgevend werkt.",
          },
        ],
      },
      pricing: {
        title: "Google Ads Pakketten – Lokale Bedrijven",
        paymentInfo: "Ons werk begint zodra de betaling is ontvangen. Je kunt betalen via bankoverschrijving, creditcard, contant of met Bitcoin ($BTC).",
        importantNote: "Ad spend staat los van de servicekosten. Geen lead- of omzetgaranties. Focus op zichtbaarheid, data en schaalbare groei.",
        labels: {
          included: "Inbegrepen",
          suitableFor: "Geschikt voor",
          goal: "Doel",
          mostPopular: "MEEST POPULAIR",
          importantToKnow: "Belangrijk om te weten:",
        },
        tiers: {
          starter: {
            name: "Starter",
            subtitle: "Aanwezigheid & eerste leads",
            totalPrice: "€500 per maand",
            adSpend: "€10 per dag (€300 p/m)",
            management: "Beheer & service: €200 p/m",
            included: [
              "1 zoekcampagne",
              "Max. 5 zoekwoorden",
              "1 stad / regio",
              "Basis conversietracking (calls of formulier)",
              "Maandelijkse optimalisatie",
            ],
            suitableFor: [
              "Schilders",
              "Hoveniers",
              "Schoonmaak",
              "Lagere concurrentie niches",
            ],
            goal: "Eerste leads & Data verzamelen",
          },
          growth: {
            name: "Groei",
            subtitle: "Structurele leadgeneratie",
            totalPrice: "€900 per maand",
            adSpend: "€20 per dag (€600 p/m)",
            management: "Beheer & service: €300 p/m",
            included: [
              "1–2 campagnes",
              "Max. 10 zoekwoorden",
              "Search + Call Ads",
              "Conversietracking (calls + formulieren)",
              "Wekelijkse optimalisatie",
              "Maandelijkse rapportage",
            ],
            suitableFor: [
              "Meeste lokale dienstverleners",
              "Middelmatige tot hoge concurrentie",
            ],
            goal: "Consistente aanvragen & Betrouwbare leadflow",
          },
          dominance: {
            name: "Dominant",
            subtitle: "Lokale markt domineren",
            totalPrice: "€1.300 per maand",
            adSpend: "€30 per dag (€900 p/m)",
            management: "Beheer & service: €400 p/m",
            included: [
              "2–3 campagnes",
              "Search",
              "Call-only",
              "Brand protection",
              "15–20 zoekwoorden",
              "Strakke locatie-targeting",
              "Agressieve biedstrategieën",
              "Wekelijkse deep optimisaties",
              "Conversie-optimalisatie input",
              "Prioriteit support",
            ],
            suitableFor: [
              "Loodgieters",
              "Elektriciens",
              "Dakdekkers",
              "Spoed- en high-ticket niches",
            ],
            goal: "Maximale zichtbaarheid, Concurrenten wegdrukken & Lokale dominantie",
          },
        },
      },
    },
    bundel: {
      hero: {
        title: "Complete Marketing Bundel",
        description: "Alles-in-één marketingoplossing: Ranking, Ads, Website en meer. Maximale zichtbaarheid en leads in één compleet pakket.",
        ctaBook: "Boek een Gesprek",
        ctaRequestVideo: "Vraag een Loom Video Aan",
      },
      benefits: {
        title: "Complete Marketing Bundel",
        items: [
          {
            title: "Local SEO",
            description: "Top 3 ranking garantie binnen 90 dagen",
          },
          {
            title: "Google Ads",
            description: "Lead generatie campagnes met hoge ROI",
          },
          {
            title: "SEO Website",
            description: "Website gebouwd om te ranken en converteren",
          },
          {
            title: "Ongoing Support",
            description: "Continue optimalisatie en monitoring",
          },
          {
            title: "Alles-in-Één",
            description: "Geïntegreerde aanpak voor maximale impact",
          },
        ],
      },
      whyItMatters: {
        title: "Waarom de Complete Marketing Bundel?",
        description: "Alles-in-één marketingoplossing die Ranking, Ads en Website combineert voor maximale zichtbaarheid en leads. Geïntegreerde aanpak zorgt voor betere resultaten dan losse diensten.",
        items: [
          {
            title: "Alles-in-Één",
            subtitle: "Ranking, Ads en Website in één pakket",
          },
          {
            title: "Maximale Zichtbaarheid",
            subtitle: "Zichtbaar op alle kanalen tegelijk",
          },
          {
            title: "Geïntegreerde Aanpak",
            subtitle: "Alles werkt samen voor betere resultaten",
          },
          {
            title: "Snellere Resultaten",
            subtitle: "Meerdere kanalen = meer leads sneller",
          },
          {
            title: "Eén Contactpunt",
            subtitle: "Alles via één team, één strategie",
          },
        ],
      },
      howItWorks: {
        title: "Hoe We Werken",
        description: "Een geïntegreerde 4-stappen proces dat Ranking, Ads en Website combineert voor maximale zichtbaarheid en leads.",
        steps: [
          {
            title: "Onboarding & Strategie",
            description: "We bespreken je doelen, analyseren je huidige situatie, en maken een complete marketingstrategie voor Ranking, Ads en Website.",
          },
          {
            title: "Setup & Implementatie",
            description: "We starten met Local SEO setup, Google Ads campagnes, en bouwen je SEO Website. Alles wordt geïntegreerd voor maximale impact.",
          },
          {
            title: "Launch & Optimalisatie",
            description: "Alles gaat live en we beginnen direct met optimalisatie. We monitoren rankings, ad prestaties, en website conversies.",
          },
          {
            title: "Ongoing Management",
            description: "Continue optimalisatie van alle drie de pijlers: SEO rankings verbeteren, ads optimaliseren, en website conversies verhogen.",
          },
        ],
      },
      pricing: {
        title: "Bundel Prijzen",
        componentsTitle: "De Bundel Bestaat Uit:",
        paymentInfo: "Ons werk begint zodra de betaling is ontvangen. Je kunt betalen via bankoverschrijving, creditcard, contant of met Bitcoin ($BTC).",
        setup: {
          badge: "ALLES-IN-ÉÉN MARKETING PAKKET",
          title: "Complete Marketing Bundel",
          price: "€7,000",
          timeline: "Slechts 2–3 maanden",
          description: "Eenmalige investering voor een complete marketingoplossing die je bedrijf naar de top brengt. Deze bundel combineert organische ranking, een geoptimaliseerde website en gerichte advertenties voor maximale zichtbaarheid. Veel klanten zien al een positieve ROI binnen 3 maanden.",
          savings: "Bespaar €1,000 ten opzichte van alles los te kopen (€8,000 vs €7,000).",
          monthlyAfterSetup: "Na setup: €550/maand voor Google Ranking + Hosting (i.p.v. €600/maand voor beide los).",
          adsContinuation: "Na 3 maanden kunnen we doorgaan met Google Ads campagnes.",
          components: {
            ranking: {
              title: "Google Ranking Top 3",
              description: "Top 3 ranking garantie binnen 90 dagen op Google Maps en lokale zoekresultaten.",
            },
            website: {
              title: "SEO Website",
              description: "Website gebouwd om te ranken met SEO fundament, lead capture formulieren, mobile first design, snelle laadtijden en conversie-gerichte structuur.",
            },
            ads: {
              title: "Google Ads",
              description: "3 maanden Google Ads campagnes met €10 per dag ad spend (€300 p/m). Structurele leadgeneratie met wekelijkse optimalisatie.",
            },
          },
        },
      },
    },
    pricing: {
      hero: {
        title: "Prijzen & Pakketten",
        description: "Transparante prijzen voor alle diensten. Kies het pakket dat bij jouw bedrijf past.",
      },
      ranking: {
        title: "Prijzen Voor Local Google Top 3 Ranking",
        description: "Eenmalige setup + maandelijks retainer voor doorlopende optimalisatie en groei.",
      },
      website: {
        title: "Prijzen Voor SEO & Verkoop Geoptimaliseerde Websites",
        description: "Eenmalige bouw + maandelijks retainer voor hosting en aanpassingen.",
      },
      ads: {
        title: "Google Ads Pakketten – Lokale Bedrijven",
        description: "Drie tiers om te kiezen op basis van jouw behoeften en budget.",
      },
      bundel: {
        title: "Bundel Prijzen",
        description: "Alles-in-één marketingoplossing voor maximale zichtbaarheid en leads.",
      },
    },
    contactPage: {
      title: "Hoe Wil Je Contact Opnemen?",
      description: "Kies de methode die het beste voor je werkt. We zijn er om te helpen.",
      methods: [
        {
          title: "Plan Een Afspraak",
          description: "Boek een kort gesprek om je bedrijfsdoelen te bespreken en hoe we je kunnen helpen.",
          buttonText: "Boek Nu",
        },
        {
          title: "Vraag Een Video Aan",
          description: "Ontvang een gepersonaliseerde Loom video (rond de 5 minuten) over je bedrijfsbehoeften.",
          buttonText: "Aanvragen",
        },
        {
          title: "E-mail Ons",
          description: "Geef je de voorkeur aan e-mail? Stuur ons direct een bericht en we reageren zo snel mogelijk.",
          buttonText: "Stuur E-mail",
        },
      ],
    },
    contact: {
      title: "Kom In Contact",
      description: "Laten we kijken hoe we je kunnen helpen om lokale zoekresultaten te domineren.",
      scheduleMeeting: "Plan een Afspraak",
      requestLoom: "Ontvang een Loom Video",
      contactInfo: "Contactgegevens",
      ourLocation: "Onze Locatie",
      openingTimes: "Openingstijden",
      whatsappTooltip: "Chat met ons op WhatsApp",
      openingHours: {
        weekdays: { label: "Ma - Vr:", time: "08:00 - 21:00" },
        saturday: { label: "Zaterdag:", time: "09:00 - 20:00" },
        sunday: { label: "Zondag:", time: "10:30 - 17:00" },
      },
    },
    faq: {
      title: "Veelgestelde Vragen",
      description: "Alles wat je moet weten over onze diensten, prijzen en proces. Kun je je antwoord niet vinden?",
      contactLink: "Neem contact op",
      questions: [
        {
          category: "Aan de Slag",
          question: "Hoe lang duurt het voordat Local SEO resultaten laat zien?",
          answer: "De meeste klanten zien verbeterde Google Business Profile rankings binnen 2-4 weken, met significante zichtbaarheidsverhogingen over 2-3 maanden. Local SEO is een doorlopend proces dat momentum opbouwt in de loop van de tijd, wat resulteert in aanhoudende groei in lokale zoekzichtbaarheid en klantaanvragen.",
        },
        {
          category: "Aan de Slag",
          question: "Werken jullie met bedrijven buiten Nederland?",
          answer: "Ja! We zijn gevestigd aan de Kieler Bocht 104, Veendam, 9642 CE, Nederland. We werken actief met bedrijven in Nederland, de EU en het VK. Onze digitale marketingdiensten, waaronder **Google Ranking**, **Google Ads**, **SEO Website** en **Bundel**, worden op afstand geleverd aan klanten in deze regio's.",
        },
        {
          category: "Aan de Slag",
          question: "Wat is het typische ROI van Google Ads campagnes?",
          answer: "Onze **Google Ads** klanten zien meestal significante return on ad spend binnen de eerste paar weken van lancering. We focussen op lokale zoekopdrachten met hoge intentie en conversie-optimalisatie om je advertentiebudget te maximaliseren en kwaliteitsleads te genereren die converteren naar betalende klanten.",
        },
        {
          category: "Aan de Slag",
          question: "Heb ik een nieuwe website nodig voor SEO?",
          answer: "Niet per se. We kunnen je bestaande website optimaliseren voor SEO en conversies. Als je huidige site echter traag is, niet mobielvriendelijk is, of gebouwd is op verouderde technologie, raden we aan om een nieuwe conversie-geoptimaliseerde **SEO Website** te bouwen om resultaten te maximaliseren.",
        },
        {
          category: "Aan de Slag",
          question: "Kan ik een gepersonaliseerde Loom video aanvragen?",
          answer: "Ja! Vraag een 2-4 minuten gepersonaliseerde Loom video aan, afgestemd op jouw bedrijf. We analyseren je specifieke situatie en bieden actiegerichte inzichten over hoe onze diensten je kunnen helpen je doelen te bereiken. [Vraag je Loom video hier aan](https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog).",
        },
        {
          category: "Diensten & Prijzen",
          question: "Welke diensten bieden jullie precies aan?",
          answer: "We focussen op vier kerngebieden: **Google Ranking** (local SEO & GBP optimalisatie), **Google Ads** (lead-gerichte campagnes), **SEO Website** (snelle, conversie-gerichte sites) en **Complete Bundels** (alles-in-één marketingoplossing).",
        },
        {
          category: "Diensten & Prijzen",
          question: "Hoe werkt jullie prijsstelling?",
          answer: "We combineren een eenmalige setup fee met een maandelijks retainer voor doorlopende optimalisatie en ondersteuning:\n\n**Google Ranking** - €2,000 setup + €500/maand retainer\n\n**Google Ads** - €1,000 setup + 20% van ad spend\n\n**SEO Websites** - €5,000 build + €100+/maand retainer voor hosting en SEO ondersteuning\n\n**Complete Bundels** - €7,000 setup + €550/maand + 15% ad spend\n\nPrijzen kunnen variëren op basis van je niche, locatie en omvang van het werk, wat we verduidelijken tijdens het eerste gesprek.",
        },
        {
          category: "Diensten & Prijzen",
          question: "Bieden jullie contracten aan of kan ik altijd opzeggen?",
          answer: "De meeste pakketten hebben een minimumtermijn zodat we genoeg tijd hebben om goede resultaten te leveren, vooral voor **Google Ranking**. Na die periode kun je opschalen, pauzeren of stoppen met duidelijke opzegtermijnen die vooraf zijn overeengekomen.",
        },
        {
          category: "Technisch & Ondersteuning",
          question: "Heb ik technische kennis nodig om met jullie te werken?",
          answer: "Nee. We verzorgen alle technische setup, tracking en optimalisatie voor **Google Ranking**, **Google Ads** en **SEO Website**. Jij blijft gefocust op het runnen van je bedrijf terwijl wij de data vertalen naar duidelijke acties.",
        },
        {
          category: "Technisch & Ondersteuning",
          question: "Hoe rapporteren jullie resultaten en prestaties?",
          answer: "Je krijgt regelmatige rapporten met duidelijke metrics: rankings, leads, telefoontjes, formulierinzendingen, ad-prestaties en website-activiteit. We houden het simpel en actiegericht zodat je precies weet wat je krijgt voor je investering.",
        },
        {
          category: "Technisch & Ondersteuning",
          question: "Wat gebeurt er als iets kapot gaat of ik wijzigingen nodig heb?",
          answer: "Als iets stopt met werken of je updates nodig hebt, neem je contact met ons op via de **Contact** pagina of e-mail en wij lossen het op. Actieve klanten met een retainer krijgen prioriteitsondersteuning en doorlopende verbeteringen als onderdeel van hun plan.",
        },
        {
          category: "Over Ons",
          question: "Wie is Van Borg Limited en waar specialiseren jullie je in?",
          answer: "Van Borg Limited is een digitale marketingpartner gericht op het helpen van lokale en service-gebaseerde bedrijven om te winnen op **Google Ranking**, **Google Ads** en **SEO Website** builds die bezoekers omzetten in leads.",
        },
        {
          category: "Over Ons",
          question: "Met welke soorten bedrijven werken jullie meestal?",
          answer: "We werken uitsluitend met lokale en hoogwaardige servicebedrijven die afhankelijk zijn van leads en geboekte opdrachten: ambachten, thuisdiensten, gezondheid & welzijn, B2B-diensten en andere specialisten die profiteren van sterke lokale zichtbaarheid. We werken niet met e-commerce of online winkels.",
        },
        {
          category: "Over Ons",
          question: "Hoe weet ik of we een goede match zijn?",
          answer: "Als je afhankelijk bent van lokale of inkomende leads, in de topresultaten op Google wilt verschijnen en klaar bent om te investeren in schaalbare groei in plaats van gissen, zijn we waarschijnlijk een goede match. Als je twijfelt, boek dan een snelle call via de **Contact** pagina en we vertellen het je recht voor zijn raap.",
        },
        {
          category: "Over Ons",
          question: "Wat zijn jullie bedrijfsgegevens?",
          answer: "**Adres:**\nVan Borg Limited\nKieler Bocht 104\nVeendam, 9642 CE\nNederland\n\n**Telefoon:** [+31 6 4473 2266](tel:+31644732266)\n\n**E-mail:** [info@vanborglimited.com](mailto:info@vanborglimited.com)",
        },
        {
          category: "Resultaten & ROI",
          question: "Wat voor resultaten kan ik verwachten?",
          answer: "Voor **Google Ranking** garanderen we een top 3 lokale ranking binnen 90 dagen of volledige terugbetaling. **Google Ads** campagnes tonen meestal resultaten binnen de eerste week, met significante ROI binnen 3 maanden. **SEO Websites** zijn gebouwd om te converteren vanaf dag één, met meetbare verbeteringen in leads en boekingen.",
        },
        {
          category: "Resultaten & ROI",
          question: "Hoe meet je succes en ROI?",
          answer: "We rapporteren regelmatig over rankings, leads, telefoontjes, formulierinzendingen, ad-prestaties en website-activiteit. Je krijgt duidelijke metrics die laten zien wat je krijgt voor je investering, inclusief ROI-berekeningen voor ad-campagnes en conversiepercentages voor websites.",
        },
        {
          category: "Proces & Tijdlijn",
          question: "Hoe lang duurt het voordat mijn project start?",
          answer: "Na het onboarding gesprek en betaling van de setup fee, starten we meestal binnen 1-2 werkdagen. Voor **Google Ranking** beginnen we direct met de GBP audit en optimalisatie. **Google Ads** campagnes kunnen binnen een week live zijn. **SEO Websites** hebben een tijdlijn van 1-2 maanden vanaf start.",
        },
        {
          category: "Proces & Tijdlijn",
          question: "Wat gebeurt er na de setup fase?",
          answer: "Na de initiële setup fase ga je over naar de maandelijkse retainer fase. Je krijgt wekelijkse updates over voortgang en resultaten, doorlopende optimalisatie, en prioriteitsondersteuning. We blijven werken aan het verbeteren van je rankings, het optimaliseren van je campagnes, en het onderhouden van je website.",
        },
      ],
    },
    common: {
      contact: "Contact",
      learnMore: "Meer informatie",
      getInTouch: "Neem contact op",
    },
    aboutUs: {
      title: "Over Ons",
      intro: "Van Borg Limited is een digitale marketingbureau gevestigd in Londen, gespecialiseerd in het helpen van lokale en service-gebaseerde bedrijven om te groeien door middel van effectieve SEO, Google Ads en hoog-converterende websites.",
      subheader: "Beter zichtbaarheid, meer leads en meer omzet voor lokale bedrijven.",
      videoLink: "Gratis video",
      mission: {
        title: "Onze Missie",
        description: "Wij helpen lokale bedrijven in Nederland, Europa en het VK om zichtbaar te worden in Google's top 3 lokale zoekresultaten.\n\nOnze focus:\nZichtbaarheid → Meer leads → Meer omzet.\n\nVan Borg is een digitaal marketingbureau dat zich richt op resultaat. Geen vaag gedoe, alleen meetbare groei.",
      },
      whatWeDo: {
        title: "Wat We Doen",
        benefits: {
          visibility: {
            title: "Top 3 Ranking",
            description: "Sta waar klanten klikken: bovenaan in Google.",
          },
          traffic: {
            title: "Direct Verkeer",
            description: "Meer zoekers, direct naar jouw bedrijf.",
          },
          enquiries: {
            title: "Winstgevende",
            description: "Leads die bellen, boeken en kopen.",
          },
          conversion: {
            title: "Conversie Focus",
            description: "Verkeer omzetten in echte klanten.",
          },
          results: {
            title: "Meetbare Resultaten",
            description: "Duidelijke rapportage en meetbare ROI.",
          },
        },
      },
      approach: {
        title: "Onze Aanpak",
        description: "Eenvoudig, transparant en resultaatgericht. We focussen op meetbare resultaten en werken met een combinatie van one-time setup kosten en maandelijkse retainers voor continue optimalisatie.",
      },
      whyChoose: {
        title: "Waarom Kiezen voor Van Borg Limited?",
        guaranteed: "Gegarandeerde Resultaten: Rank in Google's Top 3 binnen 90 dagen, of krijg elke cent terug.",
        transparent: "Transparante Prijzen: Duidelijke pricing zonder verborgen kosten.",
        weekly: "Wekelijkse Updates: Regelmatige rapportage over je rankings en prestaties.",
        local: "Lokaal & Internationaal: Gevestigd in Londen, maar werken met bedrijven in Nederland, door heel het VK en daarbuiten.",
      },
    },
    footer: {
      tagline: "Het domineren van lokale zoekresultaten vertaalt zich direct in meer gekwalificeerde leads en meer omzet.",
      pages: "Pagina's",
      businessInfo: "Bedrijfsinformatie",
      whatWeDo: "Wat We Doen",
      sendEmail: "Stuur Een E-mail",
      allRightsReserved: "Alle rechten voorbehouden.",
      navLinks: {
        ranking: "Ranking",
        ads: "Ads",
        website: "Website",
        bundel: "Bundel",
      },
      pagesLinks: {
        home: "Home",
        pricing: "Prijzen",
        privacyPolicy: "Privacybeleid",
        termsAndPolicies: "Voorwaarden en Beleid",
        cookies: "Cookies",
        gdpr: "GDPR",
      },
      legalLinks: {
        privacyPolicy: "Privacybeleid",
        termsOfService: "Servicevoorwaarden",
        cookiePolicy: "Cookiebeleid",
        gdpr: "GDPR",
      },
    },
    gdpr: {
      title: "GDPR-naleving",
      subtitle: "Algemene Verordening Gegevensbescherming (AVG) Informatie",
      lastUpdated: "Laatst bijgewerkt",
      sections: {
        whatIs: {
          title: "1. Wat is de AVG?",
          content: [
            "De Algemene Verordening Gegevensbescherming (AVG) is een uitgebreide gegevensbeschermingswet die op 25 mei 2018 van kracht werd. Deze is van toepassing op organisaties die persoonsgegevens verwerken van personen in het VK en de EU, ongeacht waar de organisatie zich bevindt.",
            "Bij Van Borg Limited zijn we toegewijd aan het beschermen van uw privacy en zorgen we ervoor dat alle persoonsgegevens worden behandeld in overeenstemming met de AVG en de Britse gegevensbeschermingswet. Voor meer informatie over hoe we gegevens verzamelen en gebruiken, zie ons [Privacybeleid](/privacy).",
          ],
        },
        yourRights: {
          title: "2. Uw rechten onder de AVG",
          intro: "Als individu heeft u verschillende rechten met betrekking tot uw persoonsgegevens. Deze omvatten:",
          rights: {
            access: {
              title: "Recht op inzage",
              description: "U kunt bevestiging vragen dat we uw persoonsgegevens verwerken en vragen om een kopie van de informatie die we over u hebben.",
            },
            rectification: {
              title: "Recht op rectificatie",
              description: "U kunt ons vragen om onjuiste of onvolledige persoonsgegevens die we hebben te corrigeren of aan te vullen.",
            },
            erasure: {
              title: "Recht op verwijdering",
              description: "Onder bepaalde omstandigheden kunt u verzoeken dat we uw persoonsgegevens verwijderen (het 'recht om vergeten te worden').",
            },
            restrictProcessing: {
              title: "Recht op beperking van verwerking",
              description: "U kunt ons vragen om te beperken hoe we uw persoonsgegevens gebruiken in specifieke situaties.",
            },
            dataPortability: {
              title: "Recht op gegevensoverdraagbaarheid",
              description: "U kunt verzoeken dat we uw gegevens verstrekken in een gestructureerd, veelgebruikt, machineleesbaar formaat, of deze over te dragen aan een andere controller waar dit technisch haalbaar is.",
            },
            object: {
              title: "Recht van bezwaar",
              description: "U kunt bezwaar maken tegen bepaalde soorten verwerking, waaronder directe marketing en verwerking op basis van gerechtvaardigde belangen.",
            },
          },
        },
        lawfulBasis: {
          title: "3. Wettelijke grondslag voor verwerking",
          intro: "We verwerken persoonsgegevens op basis van een of meer van de volgende wettelijke gronden:",
          bases: {
            consent: "Toestemming: Waar u duidelijke toestemming heeft gegeven voor ons om uw persoonsgegevens te verwerken voor een specifiek doel.",
            contract: "Contract: Waar verwerking noodzakelijk is om een contract met u uit te voeren of om stappen te ondernemen op uw verzoek voordat een contract wordt gesloten.",
            legalObligation: "Wettelijke verplichting: Waar we gegevens moeten verwerken om te voldoen aan een wettelijke of regelgevende vereiste.",
            legitimateInterests: "Gerechtvaardigde belangen: Waar verwerking noodzakelijk is voor onze gerechtvaardigde zakelijke belangen en uw belangen en fundamentele rechten deze belangen niet overschrijven.",
          },
        },
        dataRetention: {
          title: "4. Gegevensbewaring",
          intro: "We bewaren persoonsgegevens alleen zolang als nodig is om de doeleinden te vervullen waarvoor ze zijn verzameld of om te voldoen aan wettelijke, boekhoudkundige of rapportagevereisten.",
          retention: {
            clientData: "Klant- en projectgegevens: Bewaard voor de duur van de zakelijke relatie plus tot 7 jaar.",
            marketing: "Marketingcontacten: Bewaard totdat toestemming wordt ingetrokken of na een periode van aanhoudende inactiviteit.",
            analytics: "Website-analytische gegevens: Bewaard in overeenstemming met onze analytische tools (meestal tot 26 maanden).",
            legal: "Juridische records: Bewaard zoals vereist onder toepasselijke wetgeving.",
          },
        },
        dataSecurity: {
          title: "5. Gegevensbeveiligingsmaatregelen",
          intro: "We implementeren passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies, wijziging of openbaarmaking, waaronder:",
          measures: [
            "Versleuteling van gegevens tijdens overdracht waar passend",
            "Veilige hosting en regelmatige beveiligingsupdates",
            "Toegangscontroles en authenticatie op basis van rollen",
            "Bewustwording en training van personeel over gegevensbescherming",
            "Gedocumenteerde incidentrespons- en escalatieprocedures",
          ],
        },
        dataBreach: {
          title: "6. Meldplicht bij gegevenslekken",
          intro: "In het onwaarschijnlijke geval van een inbreuk op persoonsgegevens die waarschijnlijk een risico voor uw rechten en vrijheden met zich meebrengt, zullen we:",
          steps: [
            "De relevante toezichthoudende autoriteit (zoals de Autoriteit Persoonsgegevens) zonder onredelijke vertraging op de hoogte stellen en, indien mogelijk, binnen 72 uur.",
            "Getroffen personen zonder onredelijke vertraging informeren wanneer er een hoog risico is voor hun rechten en vrijheden.",
            "Duidelijke informatie verstrekken over de aard van het lek en de genomen stappen om dit aan te pakken.",
            "Onze controles beoordelen en versterken om het risico op herhaling te verminderen.",
          ],
        },
        exercisingRights: {
          title: "7. Uw rechten uitoefenen",
          intro: "Om een van uw AVG-rechten uit te oefenen of een vraag te stellen over hoe we persoonsgegevens behandelen, [neem contact met ons op](/contact) via de onderstaande gegevens. We streven ernaar om binnen een maand te reageren op alle geldige verzoeken.",
          company: "Bedrijf",
          dataProtectionContact: "Contact gegevensbescherming",
          phone: "Telefoon",
          address: "Adres",
          companyNo: "KvK-nummer",
          complaint: "U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP) als u van mening bent dat uw gegevens niet in overeenstemming met de gegevensbeschermingswet zijn behandeld.",
        },
        updates: {
          title: "8. Updates van deze kennisgeving",
          content: "We kunnen deze AVG-kennisgeving van tijd tot tijd bijwerken om wijzigingen in onze praktijken, technologie of wettelijke vereisten weer te geven. De nieuwste versie is altijd beschikbaar op deze pagina met de bijgewerkte datum bovenaan weergegeven.",
        },
      },
    },
    cookies: {
      title: "Cookiebeleid",
      subtitle: "Dit Cookiebeleid legt uit hoe Van Borg Limited cookies en vergelijkbare technologieën op onze website gebruikt.",
      lastUpdated: "Laatst bijgewerkt",
      sections: {
        introduction: {
          title: "1. Inleiding",
          content: [
            "Dit Cookiebeleid beschrijft hoe en waarom Van Borg Limited (\"wij\", \"ons\", \"onze\") cookies en vergelijkbare technologieën gebruikt wanneer u **vanborg.com** bezoekt.",
            "Dit beleid moet samen met ons [Privacybeleid](/privacy) en [AVG-kennisgeving](/gdpr) worden gelezen, die uitleggen hoe we persoonsgegevens in het algemeen behandelen.",
          ],
          privacyLink: "Privacybeleid",
          gdprLink: "AVG-kennisgeving",
        },
        whatAre: {
          title: "2. Wat zijn cookies?",
          content: [
            "Cookies zijn kleine tekstbestanden die op uw apparaat (computer, tablet of mobiel) worden opgeslagen wanneer u een website bezoekt. Ze stellen de site in staat om uw apparaat te herkennen, uw voorkeuren te onthouden en helpen ons begrijpen hoe de website wordt gebruikt.",
            "Sommige cookies zijn noodzakelijk voor de site om te functioneren, terwijl andere ons helpen de prestaties te verbeteren, inhoud aan te passen of de effectiviteit van onze marketing te meten.",
          ],
        },
        types: {
          title: "3. Soorten cookies die we gebruiken",
          intro: "We groeperen cookies die we op deze website gebruiken in de onderstaande categorieën. Specifieke cookies en duur kunnen variëren naarmate we tools en tracking bijwerken.",
          essential: {
            title: "Essentiële cookies",
            description: "Deze cookies zijn vereist voor de website om correct te functioneren. Ze maken kernfuncties mogelijk zoals paginanavigatie, beveiliging en basis toegankelijkheid.",
            example: "Voorbeeldgebruik: cookie-keuzes onthouden, load balancing, sessiebeheer.",
          },
          analytics: {
            title: "Analytische cookies",
            description: "Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, welke pagina's het populairst zijn en waar we kunnen verbeteren. Gegevens worden meestal geaggregeerd en geanonimiseerd.",
            example: "Voorbeeldgebruik: Google Analytics 4 paginaweergaven, gebeurtenissen en prestatiemetrics.",
          },
          marketing: {
            title: "Marketing & Prestatie cookies",
            description: "Deze cookies kunnen worden gebruikt om de prestaties van onze campagnes te meten of om relevantere advertenties te tonen op basis van uw interesses en interacties met onze inhoud.",
            example: "Voorbeeldgebruik: Google Ads conversies, remarketing tags.",
          },
        },
        thirdParty: {
          title: "4. Cookies van derden & Tools",
          intro: "We gebruiken vertrouwde diensten van derden om ons te helpen onze website en marketing te leveren, analyseren en verbeteren. Deze providers kunnen hun eigen cookies instellen wanneer u met onze site interageert:",
          services: {
            googleAnalytics: "Google Analytics / Google Tag Manager: Voor gebruikersanalyses en prestatiemeting.",
            googleAds: "Google Ads: Voor het volgen van conversies en het optimaliseren van advertentiecampagnes.",
            calendly: "Calendly: Voor het boeken van gesprekken en het beheren van afspraakplanning.",
            embedded: "Ingebedde inhoud: Van platforms zoals Google Maps of andere derden die worden gebruikt voor UX.",
          },
          note: "Deze derden hebben hun eigen privacy- en cookiebeleid. We raden aan om deze direct te bekijken voor meer details. Voor meer informatie over hoe we gegevens beschermen, zie ons [Privacybeleid](/privacy) en [GDPR-beleid](/gdpr).",
        },
        managing: {
          title: "5. Cookie toestemming & Voorkeuren",
          intro: "Wanneer u onze website voor het eerst bezoekt, ziet u mogelijk een cookiebanner of kennisgeving die uitlegt dat we cookies gebruiken en opties biedt om ze te accepteren of te beheren.",
          browserSettings: {
            title: "Browserinstellingen",
            description: "De meeste webbrowsers stellen u in staat om cookies te beheren via hun instellingen. Meestal kunt u:",
            options: [
              "Alle cookies of alleen cookies van derden blokkeren",
              "Bestaande cookies van uw apparaat verwijderen",
              "Voorkeuren instellen voor specifieke websites",
            ],
          },
          onSiteControls: {
            title: "On-site controles",
            description: "Waar geïmplementeerd, kunt u uw cookie-keuzes opnieuw bekijken via de cookiebanner of instellingenlink in de footer om niet-essentiële cookies op elk moment aan te passen.",
          },
          note: "Let op: Het uitschakelen van sommige cookies (vooral essentiële of functionele cookies) kan invloed hebben op hoe de website werkt.",
        },
        impact: {
          title: "6. Impact van het uitschakelen van cookies",
          intro: "Als u ervoor kiest om cookies uit te schakelen of te blokkeren, werken sommige delen van onze website mogelijk niet zoals bedoeld. Bijvoorbeeld:",
          impacts: [
            "U moet mogelijk voorkeuren bij elk bezoek opnieuw invoeren.",
            "Sommige interactieve functies (bijv. boekingswidgets) werken mogelijk niet goed.",
            "We kunnen mogelijk uw taal- of regiovoorkeuren niet onthouden.",
            "Analytische en prestatiegegevens zullen beperkt zijn, wat ons vermogen om de site te verbeteren kan verminderen.",
          ],
        },
        updates: {
          title: "7. Updates van dit Cookiebeleid",
          content: "We kunnen dit Cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze technologie, wettelijke vereisten of de cookies die we gebruiken weer te geven. De nieuwste versie is altijd beschikbaar op deze pagina met de bijgewerkte datum bovenaan weergegeven.",
        },
        contact: {
          title: "8. Neem contact met ons op",
          intro: "Als u vragen heeft over ons gebruik van cookies of dit beleid, [neem contact met ons op](/contact):",
          company: "Bedrijf",
          email: "E-mail",
          address: "Adres",
          companyNo: "KvK-nummer",
        },
      },
    },
    privacy: {
      title: "Privacybeleid",
      subtitle: "Dit Privacybeleid legt uit hoe Van Borg Limited uw persoonsgegevens verzamelt, gebruikt en beschermt wanneer u onze website bezoekt of met ons werkt. We verwerken persoonsgegevens in overeenstemming met de UK GDPR en toepasselijke gegevensbeschermingswetten.",
      lastUpdated: "Laatst bijgewerkt",
      sections: {
        informationWeCollect: {
          title: "1. Informatie die we verzamelen",
          intro: "We verzamelen informatie die u vrijwillig aan ons verstrekt, evenals gegevens die automatisch worden verzameld wanneer u met onze website of diensten interageert.",
          providedDirectly: {
            title: "Informatie die u direct verstrekt:",
            items: [
              "Contactgegevens (naam, e-mail, telefoonnummer)",
              "Bedrijfsinformatie (bedrijfsnaam, diensten, locatie)",
              "Berichten verzonden via formulieren, e-mail of live chat",
              "Informatie ingediend tijdens consultaties of onboarding",
            ],
          },
          collectedAutomatically: {
            title: "Automatisch verzamelde informatie:",
            items: [
              "IP-adres, browsertype, apparaattype en besturingssysteem",
              "Gebruiksgegevens zoals bezochte pagina's, tijd op pagina en verwijzende URL's",
              "Cookies en vergelijkbare technologieën gebruikt voor analytics, beveiliging en prestaties",
            ],
          },
          note: "We verzamelen alleen informatie die nodig is om onze diensten te verlenen, prestaties te verbeteren en een veilige gebruikerservaring te waarborgen. Voor meer informatie over cookies, zie ons [Cookiebeleid](/cookies).",
        },
        howWeUse: {
          title: "2. Hoe we uw informatie gebruiken",
          intro: "Uw informatie wordt gebruikt om ons bedrijf te runnen en een hoogwaardige service te leveren. Dit omvat:",
          uses: [
            "Het verlenen, beheren en verbeteren van onze [Local SEO](/ranking), [Google Ads](/ads), [SEO Website](/website) en [Complete Bundels](/bundel) diensten",
            "Reageren op vragen en op maat gemaakte aanbevelingen aanbieden",
            "Beheren van consultaties, onboarding en doorlopende serviceverlening",
            "Verzenden van service-updates, administratieve berichten en facturen",
            "Verzenden van marketingcommunicatie, alleen waar toestemming is gegeven",
            "Analyseren van websitegebruik en prestaties om gebruikerservaring te verbeteren",
            "Beschermen tegen frauduleuze, misbruikende of onbevoegde activiteit",
          ],
          note: "We verwerken persoonsgegevens in overeenstemming met de UK GDPR en alleen voor legitieme zakelijke doeleinden. Voor meer informatie over uw rechten, zie ons [GDPR-beleid](/gdpr).",
        },
        informationSharing: {
          title: "3. Informatiedeling & Openbaarmaking",
          intro: "We verkopen of verhuren uw persoonsgegevens niet. We delen alleen informatie waar nodig om ons bedrijf te runnen of waar wettelijk vereist.",
          sharingIntro: "We kunnen informatie delen met:",
          sharedWith: [
            "Vertrouwde leveranciers van derden (hosting, e-mail, analytics, betalingsverwerking en vergelijkbare diensten)",
            "Serviceproviders die onze operaties ondersteunen onder strikte vertrouwelijkheidsverplichtingen",
            "Overheidsinstanties, waar vereist door wet of juridisch proces",
            "Professionele adviseurs (juridisch, boekhouding) onder vertrouwelijkheidsovereenkomsten",
          ],
          note: "Alle gegevens die met serviceproviders worden gedeeld, worden verwerkt in overeenstemming met de UK GDPR en mogen alleen worden gebruikt voor de specifieke taken waarvoor ze zijn verstrekt. Zie ook ons [GDPR-beleid](/gdpr) voor meer details over gegevensbescherming.",
        },
        dataSecurity: {
          title: "4. Gegevensbeveiliging",
          content: [
            "We gebruiken industrie-standaard technische en organisatorische maatregelen om uw informatie te beschermen, waaronder versleuteling waar passend, veilige servers, toegangscontroles en regelmatige beveiligingsbeoordelingen.",
            "Hoewel we best practices volgen, kan geen enkele methode van transmissie via internet of methode van elektronische opslag 100% veilig worden gegarandeerd. We monitoren continu onze systemen om risico's te minimaliseren en snel te reageren op potentiële problemen.",
          ],
        },
        yourRights: {
          title: "5. Uw rechten onder UK GDPR",
          intro: "Als een UK of EU gebruiker heeft u de volgende rechten met betrekking tot uw gegevens:",
          rights: [
            "Recht op toegang tot uw persoonsgegevens",
            "Recht op rectificatie van onjuiste of onvolledige informatie",
            "Recht om verwijdering te verzoeken (\"recht om vergeten te worden\")",
            "Recht om bepaalde verwerkingsactiviteiten te beperken of ertegen bezwaar te maken",
            "Recht op gegevensoverdraagbaarheid",
            "Recht om toestemming op elk moment in te trekken, waar verwerking gebaseerd is op toestemming",
            "Recht om een klacht in te dienen bij de UK Information Commissioner's Office (ICO)",
          ],
          note: "Om een van deze rechten uit te oefenen, [neem contact met ons op](/contact) via de onderstaande gegevens. We streven ernaar om binnen 30 dagen te reageren op alle geldige verzoeken. Voor uitgebreide informatie over uw rechten, zie ons [GDPR-beleid](/gdpr).",
        },
        contact: {
          title: "6. Neem contact met ons op",
          intro: "Als u vragen heeft over dit Privacybeleid of hoe we uw persoonsgegevens behandelen, [neem contact met ons op](/contact):",
          company: "Bedrijf",
          email: "E-mail",
          phone: "Telefoon",
          address: "Adres",
          companyNo: "KvK-nummer",
          complaint: "Voor formele klachten met betrekking tot gegevensbescherming kunt u ook contact opnemen met de",
          icoLink: "https://ico.org.uk",
        },
      },
    },
    terms: {
      title: "Voorwaarden & Beleid",
      subtitle: "Deze Voorwaarden & Beleid regelen uw gebruik van de diensten die door Van Borg Limited worden verstrekt. Door met ons samen te werken of onze website te gebruiken, gaat u akkoord met deze voorwaarden.",
      lastUpdated: "Laatst bijgewerkt",
      sections: {
        acceptance: {
          title: "1. Aanvaarding van de Voorwaarden",
          content: [
            "Door toegang te krijgen tot onze website, een consultatie te boeken of Van Borg Limited in te schakelen voor diensten, bevestigt u dat u deze Voorwaarden & Beleid heeft gelezen, begrepen en ermee akkoord gaat, samen met elk schriftelijk voorstel of serviceovereenkomst die aan u is uitgegeven.",
            "Als u niet akkoord gaat met deze voorwaarden, mag u onze website niet gebruiken of ons niet inschakelen voor diensten.",
          ],
        },
        scope: {
          title: "2. Reikwijdte van Diensten",
          intro: "Van Borg Limited biedt digitale marketing- en automatiseringsdiensten, waaronder:",
          services: [
            "[Local SEO](/ranking) en Google Business Profile optimalisatie",
            "[Google Ads](/ads) strategie, setup, beheer en optimalisatie",
            "[SEO Website](/website) en conversie-gerichte website-ontwerp en -ontwikkeling",
            "[Complete Bundels](/bundel) met automatiseringsworkflows (lead handling, follow-up, rapportage)",
            "Gerelateerde consultancy, audits en strategische adviesdiensten",
          ],
          note: "De exacte reikwijdte, deliverables, tarieven en tijdlijnen voor elk project worden uiteengezet in een schriftelijk voorstel, statement of work of serviceovereenkomst die aan u wordt uitgegeven en schriftelijk (inclusief e-mail) wordt overeengekomen voordat het werk begint.",
        },
        proposals: {
          title: "3. Voorstellen, Wijzigingen & Goedkeuringen",
          content: [
            "Elk voorstel of offerte dat door Van Borg Limited wordt uitgegeven, is geldig voor de periode die op het document staat vermeld (of 30 dagen indien niet gespecificeerd) en is onderworpen aan bevestiging van reikwijdte en tijdlijnen.",
            "Wijzigingen in de overeengekomen reikwijdte (bijvoorbeeld extra pagina's, extra campagnes of nieuwe functies) kunnen invloed hebben op tarieven en tijdlijnen. Geen materiële wijzigingen zullen worden geïmplementeerd zonder schriftelijke bevestiging en, indien relevant, een bijgewerkte tariefovereenkomst.",
            "U bent verantwoordelijk voor het beoordelen en goedkeuren van belangrijke deliverables zoals advertentieteksten, landingspagina's, website-inhoud. Goedkeuring (inclusief per e-mail) wordt behandeld als bevestiging dat de deliverable klaar is om live te gaan.",
          ],
        },
        fees: {
          title: "4. Tarieven, Betaling & Facturering",
          intro: "Tenzij anders schriftelijk overeengekomen, zijn onze standaard commerciële voorwaarden:",
          items: {
            projectFees: "Project / setup tarieven: Een niet-terugbetaalbare aanbetaling is vooraf verschuldigd, met het saldo verschuldigd bij voltooiing of op overeengekomen projectmijlpalen.",
            retainers: "Retainers en beheerskosten: Maandelijks vooruit gefactureerd en betaalbaar op of vóór de vervaldatum die op de factuur staat vermeld.",
            performanceFees: "Prestatie- of percentage-van-uitgaven tarieven: Waar van toepassing, berekend op overeengekomen criteria (bijvoorbeeld een percentage van advertentie-uitgaven).",
            adSpend: "Advertentie-uitgaven: Direct door u betaald aan het platform (bijv. Google Ads) of aan ons terugbetaald als wij namens u betalen.",
          },
          note: "Alle tarieven worden geciteerd in GBP en zijn exclusief eventuele toepasselijke belastingen, tenzij anders vermeld. Te late of niet-betaling kan resulteren in opschorting van diensten en/of rente of te-laat-betalingskosten zoals toegestaan door de wet.",
        },
        clientResponsibilities: {
          title: "5. Klantverantwoordelijkheden",
          intro: "Om ons in staat te stellen effectief te leveren, gaat u akkoord met het tijdig verstrekken van toegang tot de informatie, goedkeuringen en systemen die we redelijkerwijs nodig hebben, waaronder:",
          responsibilities: [
            "Nauwkeurige bedrijfsinformatie, branding en servicedetails",
            "Toegang tot relevante platforms (bijv. Google Business Profile, Google Ads, analytics, website CMS)",
            "Tijdige beoordeling en feedback op deliverables",
            "Betaling van facturen in overeenstemming met overeengekomen voorwaarden",
          ],
          note: "U bent verantwoordelijk voor het waarborgen dat alle inhoud, claims en aanbiedingen met betrekking tot uw bedrijf voldoen aan toepasselijke wetten en branchevoorschriften. Wij zijn niet verantwoordelijk voor de wettelijke naleving van uw onderliggende producten, diensten of bedrijfsmodel.",
        },
        performance: {
          title: "6. Prestaties, Resultaten & Platforms van Derden",
          content: [
            "Digitale marketingprestaties zijn afhankelijk van veel factoren, waaronder marktomstandigheden, concurrentie, budgetniveaus, uw interne verkoopprocessen en externe platforms zoals Google. Hoewel we werken om resultaten te maximaliseren, kan geen specifieke ranking, leadvolume of omzetniveau worden gegarandeerd.",
            "U erkent dat diensten kunnen afhankelijk zijn van platforms van derden (bijvoorbeeld Google, hostingproviders, CRM-systemen en automatiseringshulpmiddelen). Wij zijn niet verantwoordelijk voor wijzigingen die door deze platforms worden aangebracht, downtime, beleidswijzigingen of technische problemen buiten onze directe controle, hoewel we redelijke inspanningen zullen gebruiken om impact te beperken waar mogelijk.",
          ],
        },
        intellectualProperty: {
          title: "7. Intellectueel Eigendom",
          content: [
            "U behoudt eigendom van alle reeds bestaande intellectuele eigendom, inclusief uw merk, logo's, inhoud en gegevens die aan ons zijn verstrekt.",
            "Tenzij anders schriftelijk overeengekomen, krijgt u een niet-exclusieve licentie om de deliverables die we voor u maken (zoals advertentieteksten, landingspagina's en website-assets) te gebruiken voor uw eigen zakelijke doeleinden, onder voorbehoud van volledige betaling van alle tarieven.",
            "Van Borg Limited behoudt eigendom van alle onderliggende frameworks, processen, codebibliotheken, sjablonen en know-how die worden gebruikt bij het leveren van de diensten, en kan deze hergebruiken in toekomstige projecten met andere klanten.",
          ],
        },
        confidentiality: {
          title: "8. Vertrouwelijkheid & Gegevensbescherming",
          content: [
            "Beide partijen gaan akkoord om vertrouwelijk te houden alle niet-openbare informatie die van de andere partij is ontvangen in verband met de diensten, en om dergelijke informatie alleen te gebruiken voor het doel van het leveren of ontvangen van die diensten.",
            "We behandelen persoonsgegevens in overeenstemming met ons [Privacybeleid](/privacy) en de UK GDPR. Waar vereist, kan een aparte Data Processing Agreement (DPA) worden opgesteld. Voor meer informatie over gegevensbescherming, zie ook ons [GDPR-beleid](/gdpr) en [Cookiebeleid](/cookies).",
          ],
          privacyLink: "Privacybeleid",
        },
        termination: {
          title: "9. Termijn & Beëindiging",
          intro: "Tenzij anders gespecificeerd in een serviceovereenkomst, kan elke partij een lopende engagement beëindigen door 30 dagen schriftelijke kennisgeving te geven.",
          uponTermination: [
            "Alle openstaande facturen worden onmiddellijk verschuldigd en betaalbaar",
            "Werk voltooid en tijd opgelopen tot de beëindigingsdatum blijft factureerbaar",
            "We zullen een redelijke export van belangrijke gegevens en assets in standaardformaten verstrekken, waar van toepassing",
          ],
          note: "We kunnen diensten onmiddellijk beëindigen of opschorten als er sprake is van ernstige schending van deze voorwaarden, herhaalde niet-betaling of gebruik van ons werk op een onwettige of misbruikende manier.",
        },
        liability: {
          title: "10. Beperking van Aansprakelijkheid",
          content: [
            "Voor zover toegestaan door de wet, is Van Borg Limited niet aansprakelijk voor enig indirect, incidenteel, gevolgschade of speciaal verlies, inclusief verlies van winst, omzet, gegevens of kansen die voortvloeien uit of verband houden met de diensten.",
            "Onze totale geaggregeerde aansprakelijkheid voor elke claim die voortvloeit uit een project of lopende overeenkomst mag niet hoger zijn dan de totale tarieven die door u aan Van Borg Limited zijn betaald voor de specifieke diensten in de twaalf (12) maanden voorafgaand aan de gebeurtenis die aanleiding gaf tot de claim.",
          ],
        },
        changes: {
          title: "11. Wijzigingen in deze Voorwaarden",
          content: [
            "We kunnen deze Voorwaarden & Beleid van tijd tot tijd bijwerken om wijzigingen in onze diensten, wettelijke vereisten of bedrijfspraktijken weer te geven. De nieuwste versie is altijd beschikbaar op deze pagina, met de effectieve datum bovenaan weergegeven.",
            "Waar wijzigingen materieel zijn en een lopende overeenkomst beïnvloeden, zullen we u op redelijke wijze op de hoogte stellen (bijvoorbeeld per e-mail).",
          ],
        },
        governingLaw: {
          title: "12. Toepasselijk Recht & Jurisdictie",
          content: [
            "Deze Voorwaarden & Beleid, en elk geschil of claim die daaruit voortvloeit of daarmee verband houdt, worden beheerst door en geconstrueerd in overeenstemming met de wetten van Engeland en Wales.",
            "De rechtbanken van Engeland en Wales hebben exclusieve jurisdictie om elk geschil te beslechten dat voortvloeit uit of verband houdt met deze voorwaarden of de diensten die we verlenen.",
          ],
        },
        contact: {
          title: "13. Contactgegevens",
          intro: "Als u vragen heeft over deze Voorwaarden & Beleid, [neem dan contact met ons op](/contact):",
          company: "Bedrijf",
          email: "E-mail",
          phone: "Telefoon",
          address: "Adres",
          companyNo: "KvK-nummer",
        },
      },
    },
  },
  en: {
    navbar: {
      services: {
        ranking: 'Google Ranking',
        website: 'SEO Website',
        ads: 'Google Ads',
        bundel: 'Package Deal',
      },
      contact: 'Contact',
    },
    hero: {
      title: "Top 3 Google Maps ranking in 90 days, guaranteed.",
      subtitle: "Not in the top 3 within 90 days? We'll work for free until you are.",
      description: "",
      videoLabel: "See How We Rank Businesses On Google",
      videoDuration: "4 min overview",
      ctaRequest: "Request a Loom Video",
      ctaBook: "Schedule A 15-min Call",
      warning: "More than 60% of paid traffic goes to the top 3. The remaining 40% is divided across everyone else on Google.",
    },
    services: {
      title: "Our Services",
      subtitle: "These are all the services we offer.",
      description: "For more information, you can contact us.",
      contactLink: "contact us",
      moreInfo: "More Info",
      oneTimeSetup: "One-time setup",
      setupPrice: "Setup Price",
      monthlyRetainer: "Monthly retainer",
      completionTimeline: "Completion timeline",
      timeline: "Timeline",
      mostPopular: "Most Popular",
      favorite: "Favorite",
      serviceDetails: {
        seo: {
          description: `<strong>Get into Google's Top 3:</strong> we guarantee a top 3 local ranking within 90 days, we work for free until we achieve our goal.<br><br>

  <strong>What we do:</strong> complete GBP setup or cleanup, on-page SEO, location signals, citation building, and trust signal optimisation.<br><br>

  <strong>Why it matters:</strong> 60% of all sales on Google come from the top 3 results. So when you're in the top 3, you get approximately 20% of all leads.`,
          oneTimePrice: '£2,000',
          timeline: 'Up to 90 days'
        },
        'google-ads': {
          description: `<strong>Local Google Ads campaigns:</strong> we offer multiple tiers for local businesses, from starter to dominance packages.<br><br>
    
    <strong>What we do:</strong> full campaign setup, ongoing targeting, copy optimisation, and daily monitoring to maximise ROI.<br><br>
    
    <strong>Why it matters:</strong> great ads mean nothing without strategy. We handle setup, optimisation, and scale. You control the ad spend.`,
          oneTimePrice: '£300+ p/m',
          timeline: 'Instant results'
        },
        'seo-website': {
          description: `<strong>We build SEO-first websites that convert.</strong> Designed to rank, built to sell. Every page is structured for Google visibility and user action: clear CTAs, embedded calendars, payment links, and fast performance.<br><br>

  A high-converting homepage and service pages, built for your niche and target keywords. Clean modern code and mobile-first built to grow your traffic.`,
          oneTimePrice: '£5,000',
          timeline: '1–2 months'
        },
        bundel: {
          description: `<strong>All-in-one marketing solution:</strong> Ranking, Ads, Website and more in one complete package for maximum visibility and leads.<br><br>

    <strong>What you get:</strong> Local SEO & Ranking, Google Ads campaigns (€10 per day ad spend), SEO Website, and ongoing support - everything you need to grow.<br><br>

    <strong>Why it works:</strong> Integrated approach delivers better results than separate services. Everything works together for maximum impact.`,
          oneTimePrice: '£7,000',
          timeline: '2–3 months'
        }
      }
    },
    howWeWork: {
      title: "How We Work",
      description: "Always available and weekly insights into progress and results. New client?",
      contactLink: "Get in touch",
      steps: {
        onboarding: {
          title: "Onboarding Call",
          description: "We schedule a call to align on your objectives, confirm pricing, and outline the detailed action plan for your business.",
        },
        setup: {
          title: "Setup & Launch",
          description: "We overhaul your GBP, improve on‑site SEO, and build citations to prepare and optimize for ranking success.",
        },
        updates: {
          title: "Weekly Updates",
          description: "Ongoing updates every week, with consistent work and strategic efforts to push your rankings higher.",
        },
        retainer: {
          title: "Long-Term Retainer",
          description: "We maintain your top rankings and scale up with additional services like ads, websites, and automations.",
        },
      },
    },
    contact: {
      title: "Get In Touch",
      description: "Let's discuss how we can help you dominate local search, and generate more leads.",
      scheduleMeeting: "Schedule A Meeting",
      requestLoom: "Receive a Loom Video",
      contactInfo: "Contact Information",
      ourLocation: "Our Location",
      openingTimes: "Opening Times",
      whatsappTooltip: "Chat with us on WhatsApp",
      openingHours: {
        weekdays: { label: "Mon - Fri:", time: "8:00 AM - 9:00 PM" },
        saturday: { label: "Saturday:", time: "9:00 AM - 8:00 PM" },
        sunday: { label: "Sunday:", time: "10:30 AM - 5:00 PM" },
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Everything you need to know about our services, pricing, and process. Can't find your answer?",
      contactLink: "Get in touch",
      questions: [
        {
          category: "Getting Started",
          question: "How long does Local SEO take to show results?",
          answer: "Most clients see improved Google Business Profile rankings within 2-4 weeks, with significant visibility increases over 2-3 months. Local SEO is an ongoing process that builds momentum over time, resulting in sustained growth in local search visibility and customer enquiries.",
        },
        {
          category: "Getting Started",
          question: "Do you work with businesses outside the Netherlands?",
          answer: "Yes! We are based at Kieler Bocht 104, Veendam, 9642 CE, Netherlands. We actively work with businesses in the Netherlands, the EU, and the UK. Our digital marketing services including **Google Ranking**, **Google Ads**, **SEO Website**, and **Bundel** are delivered remotely to clients in these regions.",
        },
        {
          category: "Getting Started",
          question: "What's the typical ROI from Google Ads campaigns?",
          answer: "Our **Google Ads** clients typically see significant return on ad spend within the first few weeks of launch. We focus on local searches with high intent and conversion optimization to maximize your advertising budget and generate quality leads that convert into paying customers.",
        },
        {
          category: "Getting Started",
          question: "Do I need a new website for SEO?",
          answer: "Not necessarily. We can optimize your existing website for SEO and conversions. However, if your current site is slow, not mobile-friendly, or built on outdated technology, we recommend building a new conversion-optimised **SEO Website** to maximize results.",
        },
        {
          category: "Getting Started",
          question: "Can I request a personalized Loom video?",
          answer: "Yes! Request a personalized Loom video (around 5 minutes) tailored to your business. We'll analyze your specific situation and provide actionable insights on how our services can help you achieve your goals. [Request your Loom video here](https://docs.google.com/forms/d/e/1FAIpQLSfJ8aclT9LyywMbioiuLp4UKavLoojglUtuSXbOKKx1b_CgIA/viewform?usp=dialog).",
        },
        {
          category: "Services & Pricing",
          question: "What services do you offer exactly?",
          answer: "We focus on four core areas: **Google Ranking** (local SEO & GBP optimisation), **Google Ads** (lead-focused campaigns), **SEO Website** (fast, conversion-focused sites), and **Complete Bundels** (all-in-one marketing solution).",
        },
        {
          category: "Services & Pricing",
          question: "How does your pricing work?",
          answer: "We combine a one-time setup fee with a monthly retainer for ongoing optimisation and support:\n\n**Google Ranking** - €2,000 setup + €500/month retainer\n\n**Google Ads** - €1,000 setup + 20% of ad spend\n\n**SEO Websites** - €5,000 build + €100+/month retainer for hosting and SEO support\n\n**Complete Bundels** - €7,000 setup + €550/month + 15% ad spend\n\nPricing may vary based on your niche, location, and scope of work, which we clarify during the first call.",
        },
        {
          category: "Services & Pricing",
          question: "Do you offer contracts or can I cancel anytime?",
          answer: "Most packages have a minimum term so we have enough time to deliver good results, especially for **Google Ranking**. After that period, you can scale up, pause, or stop with clear cancellation terms agreed in advance.",
        },
        {
          category: "Technical & Support",
          question: "Do I need technical knowledge to work with you?",
          answer: "No. We handle all the technical setup, tracking, and optimisation for **Google Ranking**, **Google Ads**, and **SEO Website**. You stay focused on running your business while we translate the data into clear actions.",
        },
        {
          category: "Technical & Support",
          question: "How do you report results and performance?",
          answer: "You get regular reports with clear metrics: rankings, leads, calls, form submissions, ad performance, and website activity. We keep it simple and actionable so you know exactly what you're getting for your investment.",
        },
        {
          category: "Technical & Support",
          question: "What happens if something breaks or I need changes?",
          answer: "If anything stops working or you need updates, you contact us via the **Contact** page or email and we handle it. Active clients with a retainer get priority support and ongoing improvements as part of their plan.",
        },
        {
          category: "About Us",
          question: "Who is Van Borg Limited and what do you specialise in?",
          answer: "Van Borg Limited is a digital marketing partner focused on helping local and service-based businesses win on **Google Ranking**, **Google Ads**, and **SEO Website** builds that convert visitors into leads.",
        },
        {
          category: "About Us",
          question: "What types of businesses do you usually work with?",
          answer: "We exclusively work with local and high-value service businesses that rely on leads and booked jobs: trades, home services, health & wellness, B2B services, and other specialists who benefit from strong local visibility. We do not work with e-commerce or online stores.",
        },
        {
          category: "About Us",
          question: "How do I know if we're a good fit?",
          answer: "If you rely on local or inbound leads, want to appear in the top results on Google, and are ready to invest in scalable growth instead of guessing, we're probably a good fit. If you're unsure, book a quick call via the **Contact** page and we'll tell you straight.",
        },
        {
          category: "About Us",
          question: "What are your business details?",
          answer: "**Address:**\nVan Borg Limited\nKieler Bocht 104\nVeendam, 9642 CE\nNetherlands\n\n**Phone:** [+31 6 4473 2266](tel:+31644732266)\n\n**Email:** [info@vanborglimited.com](mailto:info@vanborglimited.com)",
        },
        {
          category: "Results & ROI",
          question: "What results can I expect?",
          answer: "For **Google Ranking**, we guarantee a top 3 local ranking within 90 days or full refund. **Google Ads** campaigns typically show results within the first week, with significant ROI within 3 months. **SEO Websites** are built to convert from day one, with measurable improvements in leads and bookings.",
        },
        {
          category: "Results & ROI",
          question: "How do you measure success and ROI?",
          answer: "We regularly report on rankings, leads, calls, form submissions, ad performance, and website activity. You get clear metrics showing what you're getting for your investment, including ROI calculations for ad campaigns and conversion rates for websites.",
        },
        {
          category: "Process & Timeline",
          question: "How long until my project starts?",
          answer: "After the onboarding call and payment of the setup fee, we typically start within 1-2 business days. For **Google Ranking**, we begin immediately with GBP audit and optimisation. **Google Ads** campaigns can be live within a week. **SEO Websites** have a timeline of 1-2 months from start.",
        },
        {
          category: "Process & Timeline",
          question: "What happens after the setup phase?",
          answer: "After the initial setup phase, you move to the monthly retainer phase. You get weekly updates on progress and results, ongoing optimisation, and priority support. We continue working on improving your rankings, optimising your campaigns, and maintaining your website.",
        },
      ],
    },
    ranking: {
      hero: {
        title: "Dominate Local Search Results",
        subtitle: "With A Top 3 Ranking on Google & Maps",
        description: "Get found by high-intent local buyers searching for your service. We guarantee results or you don't pay.",
        ctaBook: "Book A Call",
        ctaRequestVideo: "Request a Loom Video",
      },
      benefits: {
        title: "Local SEO & Google Maps Ranking",
        items: [
          {
            title: "Top 3 Ranking",
            description: "Guaranteed top 3 local ranking within 90 days or full refund",
          },
          {
            title: "GBP Optimization",
            description: "Complete Google Business Profile setup and optimization",
          },
          {
            title: "Citation Building",
            description: "Build local citations and ensure NAP consistency across the web",
          },
          {
            title: "Review Strategy",
            description: "Review acquisition strategy and templates to build trust",
          },
          {
            title: "Ongoing Monitoring",
            description: "Regular ranking checks and continuous optimization",
          },
        ],
      },
      whyLocalSEO: {
        title: "Why Local SEO Matters",
        description: "Strong Google rankings put you in front of ready-to-buy local customers. Instead of chasing leads, you show up where they search, and turn Google into a steady, high-intent lead source.",
        items: [
          {
            title: "Get Into the Top 3",
            subtitle: "Google Maps & local pack visibility",
          },
          {
            title: "More Calls & Enquiries",
            subtitle: "Higher click-through from better rankings",
          },
          {
            title: "Trusted Over Competitors",
            subtitle: "Rank + reviews = safest local choice",
          },
          {
            title: "Lower Cost Per Lead",
            subtitle: "More organic leads, less ad spend",
          },
          {
            title: "Defend Your Position",
            subtitle: "Harder for others to outrank you",
          },
        ],
      },
      howItWorks: {
        title: "How We Work",
        description: "A clean, simple 4-step process that gets you ranking higher on Google Maps and local search, and keeps you there.",
        steps: [
          {
            title: "Onboarding Call & Loom Audit",
            description: "Onboarding call, Google presence review, and a short Loom video with your situation and action plan.",
          },
          {
            title: "Initial Setup & Build",
            description: "Fix core GBP and SEO issues, set up tracking, define keyword plan, and build foundations for Google Maps ranking.",
          },
          {
            title: "Updates & Reports",
            description: "Clear weekly updates and structured monthly reports showing progress, leads, and next steps.",
          },
          {
            title: "Retainer & Staying on Top",
            description: "Ongoing optimisation of content, citations, reviews and technical tweaks to keep you ahead long term.",
          },
        ],
      },
      pricing: {
        title: "Pricing For Local Google Top 3 Ranking",
        paymentInfo: "Our work begins once payment is received. You can pay via bank transfer, credit card, cash, or with Bitcoin ($BTC).",
        setup: {
          badge: "ONE-TIME SETUP",
          title: "Audit & Optimisation",
          price: "£2,000",
          timeline: "Up to 90 days",
          description: "Paid upfront for all initial SEO work and Google Business Profile setup.",
          features: [
            "Complete SEO & GBP audit & setup",
            "Keyword research & optimisation",
            "Website SEO & technical fixes",
            "Initial citation building",
            "GBP content: photos, posts & review assistance",
            "Weekly updates",
          ],
        },
        retainer: {
          badge: "MONTHLY RETAINER",
          title: "SEO & Management",
          price: "£500 p/m",
          description: "Monthly fee for ongoing optimisation, growth, and reporting.",
          features: [
            "Content creation & optimisation",
            "Link building campaigns",
            "Review generation plan",
            "GBP posts & updates",
            "Photo updates",
            "Monthly reports & analysis",
          ],
        },
      },
    },
    website: {
      hero: {
        title: "SEO & Sales Optimized Websites",
        subtitle: "That Drive Traffic & Revenue",
        description: "Homepage built to rank + dedicated service pages with embedded lead capture and booking flows. Full website with SEO foundation that is conversion focus.",
        ctaBook: "Book a Call",
        ctaRequestVideo: "Request a Loom Video",
      },
      benefits: {
        title: "SEO & Sales Optimized Websites",
        items: [
          {
            title: "SEO Foundation",
            description: "Built to rank with proper structure and optimization",
          },
          {
            title: "Lead Capture",
            description: "Embedded lead capture forms and booking flows",
          },
          {
            title: "Mobile First",
            description: "Responsive design optimized for all devices",
          },
          {
            title: "Fast Performance",
            description: "Optimized for speed and user experience",
          },
          {
            title: "Conversion Focus",
            description: "Designed to convert visitors into leads and customers",
          },
        ],
      },
      whyItMatters: {
        title: "Why Your SEO & Sales Optimized Website Matters",
        description: "Your SEO & Sales Optimized Website is the engine that powers your leads. When it's built for ranking, speed, and conversion, it becomes a long-term asset that attracts traffic and turns visitors into enquiries, automatically.",
        items: [
          {
            title: "Rank High & Attract Traffic",
            subtitle: "SEO-first structure, speed & content",
          },
          {
            title: "Convert Visitors Automatically",
            subtitle: "Forms, CTAs & flows that sell for you",
          },
          {
            title: "Reduce Paid Ad Dependence",
            subtitle: "Organic traffic that lowers CAC",
          },
          {
            title: "Long-Term ROI & Growth",
            subtitle: "Asset that compounds over time",
          },
          {
            title: "Fast Loading & High Performance",
            subtitle: "Core Web Vitals optimized for SEO",
          },
        ],
      },
      howItWorks: {
        title: "How It Works",
        description: "Our streamlined 4-step process to design, build, and launch your SEO-optimized website in just 3 weeks.",
        steps: [
          {
            title: "Discovery & Strategy",
            description: "Define goals, target audience, pages needed, SEO strategy, keyword research, and complete content planning.",
            timeline: "Week 1",
          },
          {
            title: "Design & Development",
            description: "Create homepage, service pages, lead capture funnels, booking flows, and all conversion-focused elements with SEO optimization.",
            timeline: "Week 1-2",
          },
          {
            title: "Integration & Testing",
            description: "Connect forms, booking systems, analytics, CRM integrations, and thoroughly test all user flows and functionality.",
            timeline: "Week 2-3",
          },
          {
            title: "Launch & Optimization",
            description: "Go live, submit to search engines, monitor performance, and optimize based on real data with ongoing support.",
            timeline: "Week 3",
          },
        ],
      },
      pricing: {
        title: "SEO & Sales Optimized Website Pricing",
        paymentInfo: "Our work begins once payment is received. You can pay via bank transfer, credit card, cash, or with Bitcoin ($BTC).",
        build: {
          badge: "ONE-TIME BUILD",
          title: "Website Development",
          price: "€5,000",
          timeline: "1–2 months",
          description: "Paid upfront. Must be paid in full before the project starts.",
          features: [
            "Mobile first design & styling",
            "Modern code (React, TypeScript, Tailwind, CSS)",
            "SEO setup (foundation + llms.txt)",
            "Lead capture, booking & analytics",
            "Custom media + 3 revisions",
            "Testing & launch",
          ],
        },
        retainer: {
          badge: "MONTHLY RETAINER",
          title: "Hosting + Updates",
          price: "€100+ p/m",
          description: "Premium hosting and 1 major or 3 minor updates per month.",
          features: [
            "Premium hosting & security",
            "99% uptime guarantee",
            "1 major or 3 minor updates/month",
            "Technical maintenance",
            "Priority support access",
          ],
        },
      },
    },
    ads: {
      hero: {
        title: "Get More Qualified Leads Today",
        subtitle: "Not in 6 Months Time",
        description: "Skip the waiting game. We build and manage Google Ads campaigns that put you at the top of search results instantly, so you start generating qualified leads from day one.",
        ctaBook: "Book A Call",
        ctaRequestVideo: "Request a Loom Video",
      },
      benefits: {
        title: "Google Ads Management",
        items: [
          {
            title: "Instant Results",
            description: "Start generating qualified leads from day one, not in 6 months",
          },
          {
            title: "High ROI",
            description: "3x-5x return on ad spend typical after optimization period",
          },
          {
            title: "Targeted Campaigns",
            description: "Keyword research focused on ready-to-buy, high-intent searches",
          },
          {
            title: "Ongoing Optimization",
            description: "Regular bid, keyword and negative keyword optimization based on your tier",
          },
          {
            title: "Transparent Reporting",
            description: "Clear monthly reports and scaling recommendations",
          },
        ],
      },
      whyItMatters: {
        title: "Why Choose Google Ads",
        description: "Google Ads gives you instant visibility at the top of search results. You control the spend, the targeting, the ad schedule, and you only pay when someone actively clicks. Perfect for fast, predictable lead generation.",
        items: [
          {
            title: "Instant Results",
            subtitle: "Appear at the top immediately",
          },
          {
            title: "Full Budget Control",
            subtitle: "Turn campaigns on/off anytime",
          },
          {
            title: "High-Intent Traffic",
            subtitle: "People searching right now",
          },
          {
            title: "Clear ROI Tracking",
            subtitle: "See cost per lead in real time",
          },
          {
            title: "Dominate Competitors",
            subtitle: "Outbid the competition instantly",
          },
        ],
      },
      howItWorks: {
        title: "How Your Google Ads Campaign Works",
        description: "A simple 4-step process from onboarding to ongoing optimisation, so you know exactly what's happening with your Google Ads and where your budget is going.",
        steps: [
          {
            title: "Onboarding & Discovery",
            description: "We get access to your ad account, understand your goals, offers, locations, and ideal clients, and pull together existing assets.",
          },
          {
            title: "Strategy & Campaign Setup",
            description: "We handle keyword research, competitor checks, geo-targeting, campaign structure, ad copy, extensions, and conversion tracking.",
          },
          {
            title: "Launch, Learning & Optimisation",
            description: "Campaigns go live quickly. We monitor search terms, bids, and conversions, add negatives, and refine targeting as the data comes in.",
          },
          {
            title: "Ongoing Management & Scaling",
            description: "We continuously optimise bids, ads, and audiences, test new angles, report results monthly, and scale what's working profitably.",
          },
        ],
      },
      pricing: {
        title: "Google Ads Packages – Local Businesses",
        paymentInfo: "Our work begins once payment is received. You can pay via bank transfer, credit card, cash, or with Bitcoin ($BTC).",
        importantNote: "Ad spend is separate from service costs. No lead or revenue guarantees. Focus on visibility, data, and scalable growth.",
        labels: {
          included: "Included",
          suitableFor: "Suitable for",
          goal: "Goal",
          mostPopular: "MOST POPULAR",
          importantToKnow: "Important to know:",
        },
        tiers: {
          starter: {
            name: "Starter",
            subtitle: "Presence & First Leads",
            totalPrice: "€500 per month",
            adSpend: "€10 per day (€300 p/m)",
            management: "Management & service: €200 p/m",
            included: [
              "1 search campaign",
              "Max. 5 keywords",
              "1 city / region",
              "Basic conversion tracking (calls or form)",
              "Monthly optimization",
            ],
            suitableFor: [
              "Painters",
              "Gardeners",
              "Cleaning",
              "Lower competition niches",
            ],
            goal: "First leads & Data collection",
          },
          growth: {
            name: "Growth",
            subtitle: "Structural Lead Generation",
            totalPrice: "€900 per month",
            adSpend: "€20 per day (€600 p/m)",
            management: "Management & service: €300 p/m",
            included: [
              "1–2 campaigns",
              "Max. 10 keywords",
              "Search + Call Ads",
              "Conversion tracking (calls + forms)",
              "Weekly optimization",
              "Monthly reporting",
            ],
            suitableFor: [
              "Most local service providers",
              "Medium to high competition",
            ],
            goal: "Consistent enquiries & Reliable lead flow",
          },
          dominance: {
            name: "Dominance",
            subtitle: "Dominate Local Market",
            totalPrice: "€1,300 per month",
            adSpend: "€30 per day (€900 p/m)",
            management: "Management & service: €400 p/m",
            included: [
              "2–3 campaigns",
              "Search",
              "Call-only",
              "Brand protection",
              "15–20 keywords",
              "Tight location targeting",
              "Aggressive bidding strategies",
              "Weekly deep optimizations",
              "Conversion optimization input",
              "Priority support",
            ],
            suitableFor: [
              "Plumbers",
              "Electricians",
              "Roofers",
              "Emergency and high-ticket niches",
            ],
            goal: "Maximum visibility, Push out competitors & Local dominance",
          },
        },
      },
    },
    bundel: {
      hero: {
        title: "Complete Marketing Bundel",
        description: "All-in-one marketing solution: Ranking, Ads, Website and more. Maximum visibility and leads in one complete package.",
        ctaBook: "Book A Call",
        ctaRequestVideo: "Request a Loom Video",
      },
      benefits: {
        title: "Complete Marketing Bundel",
        items: [
          {
            title: "Local SEO",
            description: "Top 3 ranking guarantee within 90 days",
          },
          {
            title: "Google Ads",
            description: "Lead generation campaigns with high ROI",
          },
          {
            title: "SEO Website",
            description: "Website built to rank and convert",
          },
          {
            title: "Ongoing Support",
            description: "Continuous optimization and monitoring",
          },
          {
            title: "All-in-One",
            description: "Integrated approach for maximum impact",
          },
        ],
      },
      whyItMatters: {
        title: "Why the Complete Marketing Bundel?",
        description: "All-in-one marketing solution that combines Ranking, Ads and Website for maximum visibility and leads. Integrated approach delivers better results than separate services.",
        items: [
          {
            title: "All-in-One",
            subtitle: "Ranking, Ads and Website in one package",
          },
          {
            title: "Maximum Visibility",
            subtitle: "Visible on all channels at once",
          },
          {
            title: "Integrated Approach",
            subtitle: "Everything works together for better results",
          },
          {
            title: "Faster Results",
            subtitle: "Multiple channels = more leads faster",
          },
          {
            title: "One Point of Contact",
            subtitle: "Everything through one team, one strategy",
          },
        ],
      },
      howItWorks: {
        title: "How We Work",
        description: "An integrated 4-step process that combines Ranking, Ads and Website for maximum visibility and leads.",
        steps: [
          {
            title: "Onboarding & Strategy",
            description: "We discuss your goals, analyze your current situation, and create a complete marketing strategy for Ranking, Ads and Website.",
          },
          {
            title: "Setup & Implementation",
            description: "We start with Local SEO setup, Google Ads campaigns, and build your SEO Website. Everything is integrated for maximum impact.",
          },
          {
            title: "Launch & Optimization",
            description: "Everything goes live and we start optimizing immediately. We monitor rankings, ad performance, and website conversions.",
          },
          {
            title: "Ongoing Management",
            description: "Continuous optimization of all three pillars: improve SEO rankings, optimize ads, and increase website conversions.",
          },
        ],
      },
      pricing: {
        title: "Bundle Pricing",
        componentsTitle: "The Bundle Consists Of:",
        paymentInfo: "Our work begins once payment is received. You can pay via bank transfer, credit card, cash, or with Bitcoin ($BTC).",
        setup: {
          badge: "ALL-IN-ONE MARKETING PACKAGE",
          title: "Complete Marketing Bundel",
          price: "€7,000",
          timeline: "Just 2–3 months",
          description: "One-time investment for a complete marketing solution that takes your business to the top. This bundle combines organic ranking, an optimized website, and targeted ads for maximum visibility. Many clients see positive ROI within 3 months.",
          savings: "Save €1,000 compared to buying everything separately (€8,000 vs €7,000).",
          monthlyAfterSetup: "After setup: €550/month for Google Ranking + Hosting (instead of €600/month for both separately).",
          adsContinuation: "After 3 months, we can continue with Google Ads campaigns.",
          components: {
            ranking: {
              title: "Google Ranking Top 3",
              description: "Top 3 ranking guarantee within 90 days on Google Maps and local search results.",
            },
            website: {
              title: "SEO Website",
              description: "Website built to rank with SEO foundation, lead capture forms, mobile first design, fast loading times and conversion-focused structure.",
            },
            ads: {
              title: "Google Ads",
              description: "3 months of Google Ads campaigns with €10 per day ad spend (€300 p/m). Structural lead generation with weekly optimization.",
            },
          },
        },
      },
    },
    pricing: {
      hero: {
        title: "Pricing & Packages",
        description: "Transparent pricing for all services. Choose the package that fits your business.",
      },
      ranking: {
        title: "Pricing For Local Google Top 3 Ranking",
        description: "One-time setup + monthly retainer for ongoing optimization and growth.",
      },
      website: {
        title: "Pricing For SEO & Sales Optimised Websites",
        description: "One-time build + monthly retainer for hosting and adjustments.",
      },
      ads: {
        title: "Google Ads Packages – Local Businesses",
        description: "Three tiers to choose from based on your needs and budget.",
      },
      bundel: {
        title: "Bundle Pricing",
        description: "All-in-one marketing solution for maximum visibility and leads.",
      },
    },
    contactPage: {
      title: "How Would You Like to Connect?",
      description: "Choose the method that works best for you. We're here to help.",
      methods: [
        {
          title: "Schedule a Meeting",
          description: "Book a 15-minute call to discuss your business goals and how we can help you achieve them.",
          buttonText: "Book Now",
        },
        {
          title: "Request a Loom Video",
          description: "Get a personalized Loom video (around 5 minutes) about your business needs.",
          buttonText: "Request a Video",
        },
        {
          title: "Email Us",
          description: "Prefer email? Send us a message directly and we'll respond as soon as possible.",
          buttonText: "Send Email",
        },
      ],
    },
    common: {
      contact: "Contact",
      learnMore: "Learn more",
      getInTouch: "Get in touch",
    },
    aboutUs: {
      title: "About Us",
      intro: "Van Borg Limited is a digital marketing agency based in Veendam, Netherlands, specializing in helping local and service-based businesses grow through effective SEO, Google Ads, and high-converting websites.",
      subheader: "Better visibility, more leads and more revenue for local businesses.",
      videoLink: "Get an analysis video",
      mission: {
        title: "Our Mission",
        description: "We help local businesses in the Netherlands, Europe and the UK become visible in Google's top 3 local search results.\n\nOur focus:\nVisibility → More leads → More revenue.\n\nVan Borg is a digital marketing agency focused on results. No fluff, only measurable growth.",
      },
      whatWeDo: {
        title: "What We Do",
        benefits: {
          visibility: {
            title: "Top 3 Visibility",
            description: "Stand where customers click: at the top of Google.",
          },
          traffic: {
            title: "Direct Traffic",
            description: "More searchers, directly to your business.",
          },
          enquiries: {
            title: "Profitable",
            description: "Leads that call, book, and buy.",
          },
          conversion: {
            title: "Conversion Focus",
            description: "Turn traffic into real customers.",
          },
          results: {
            title: "Measurable Results",
            description: "Clear reporting and measurable ROI.",
          },
        },
      },
      approach: {
        title: "Our Approach",
        description: "Simple, transparent, and results-driven. We focus on measurable results and work with a combination of one-time setup costs and monthly retainers for continuous optimization.",
      },
      whyChoose: {
        title: "Why Choose Van Borg Limited?",
        guaranteed: "Guaranteed Results: Rank in Google's Top 3 within 90 days, or get every penny back.",
        transparent: "Transparent Pricing: Clear pricing without hidden costs.",
        weekly: "Weekly Updates: Regular reporting on your rankings and performance.",
        local: "Local & International: Based in Veendam, Netherlands, but working with businesses in the Netherlands, the EU, and the UK.",
      },
    },
    footer: {
      tagline: "Dominating local search results translates directly into more qualified leads and increased revenue.",
      pages: "Pages",
      businessInfo: "Business Info",
      whatWeDo: "What We Do",
      sendEmail: "Send An Email",
      allRightsReserved: "All rights reserved.",
      navLinks: {
        ranking: "Ranking",
        ads: "Ads",
        website: "Website",
        bundel: "Bundel",
      },
      pagesLinks: {
        home: "Home",
        pricing: "Pricing",
        privacyPolicy: "Privacy Policy",
        termsAndPolicies: "Terms and Policies",
        cookies: "Cookies",
        gdpr: "GDPR",
      },
      legalLinks: {
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
        gdpr: "GDPR",
      },
    },
    gdpr: {
      title: "GDPR Compliance",
      subtitle: "General Data Protection Regulation (GDPR) Information",
      lastUpdated: "Last updated",
      sections: {
        whatIs: {
          title: "1. What is GDPR?",
          content: [
            "The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on 25 May 2018. It applies to organisations that process personal data of individuals in the UK and EU, regardless of where the organisation is located.",
            "At Van Borg Limited, we are committed to protecting your privacy and ensuring that all personal data is handled in accordance with GDPR and UK data protection law. For more information about how we collect and use data, see our [Privacy Policy](/privacy).",
          ],
        },
        yourRights: {
          title: "2. Your Rights Under GDPR",
          intro: "As an individual, you have several rights regarding your personal data. These include:",
          rights: {
            access: {
              title: "Right of Access",
              description: "You can request confirmation that we process your personal data and ask for a copy of the information we hold about you.",
            },
            rectification: {
              title: "Right to Rectification",
              description: "You can ask us to correct or complete any inaccurate or incomplete personal data we hold.",
            },
            erasure: {
              title: "Right to Erasure",
              description: "In certain circumstances, you can request that we delete your personal data (the \"right to be forgotten\").",
            },
            restrictProcessing: {
              title: "Right to Restrict Processing",
              description: "You can ask us to limit how we use your personal data in specific situations.",
            },
            dataPortability: {
              title: "Right to Data Portability",
              description: "You can request that we provide your data in a structured, commonly used, machine-readable format, or transfer it to another controller where technically feasible.",
            },
            object: {
              title: "Right to Object",
              description: "You can object to certain types of processing, including direct marketing and processing based on legitimate interests.",
            },
          },
        },
        lawfulBasis: {
          title: "3. Lawful Basis for Processing",
          intro: "We process personal data under one or more of the following lawful bases:",
          bases: {
            consent: "Consent: Where you have given clear consent for us to process your personal data for a specific purpose.",
            contract: "Contract: Where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.",
            legalObligation: "Legal obligation: Where we must process data to comply with a legal or regulatory requirement.",
            legitimateInterests: "Legitimate interests: Where processing is necessary for our legitimate business interests and your interests and fundamental rights do not override those interests.",
          },
        },
        dataRetention: {
          title: "4. Data Retention",
          intro: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected or to meet legal, accounting or reporting requirements.",
          retention: {
            clientData: "Client and project data: Retained for the duration of the business relationship plus up to 7 years.",
            marketing: "Marketing contacts: Retained until consent is withdrawn or after a period of sustained inactivity.",
            analytics: "Website analytics data: Retained in line with our analytics tools (typically up to 26 months).",
            legal: "Legal records: Retained as required under applicable law.",
          },
        },
        dataSecurity: {
          title: "5. Data Security Measures",
          intro: "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration or disclosure, including:",
          measures: [
            "Encryption of data in transit where appropriate",
            "Secure hosting and regular security updates",
            "Role-based access controls and authentication",
            "Staff awareness and training on data protection",
            "Documented incident response and escalation procedures",
          ],
        },
        dataBreach: {
          title: "6. Data Breach Notification",
          intro: "In the unlikely event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:",
          steps: [
            "Notify the relevant supervisory authority (such as the ICO) without undue delay and, where feasible, within 72 hours.",
            "Inform affected individuals without undue delay where there is a high risk to their rights and freedoms.",
            "Provide clear information about the nature of the breach and the steps taken to address it.",
            "Review and strengthen our controls to reduce the risk of recurrence.",
          ],
        },
        exercisingRights: {
          title: "7. Exercising Your Rights",
          intro: "To exercise any of your GDPR rights or to ask a question about how we handle personal data, please [contact us](/contact) using the details below. We aim to respond to all valid requests within one month.",
          company: "Company",
          dataProtectionContact: "Data Protection Contact",
          phone: "Phone",
          address: "Address",
          companyNo: "Company No",
          complaint: "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data has not been handled in accordance with data protection law.",
        },
        updates: {
          title: "8. Updates to This Notice",
          content: "We may update this GDPR notice from time to time to reflect changes in our practices, technology or legal requirements. The latest version will always be available on this page with the updated date shown at the top.",
        },
      },
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "This Cookie Policy explains how Van Borg Limited uses cookies and similar technologies on our website.",
      lastUpdated: "Last updated",
      sections: {
        introduction: {
          title: "1. Introduction",
          content: [
            "This Cookie Policy describes how and why Van Borg Limited (\"we\", \"us\", \"our\") uses cookies and similar technologies when you visit **vanborg.com**.",
            "This policy should be read together with our [Privacy Policy](/privacy) and [GDPR Notice](/gdpr), which explain how we handle personal data more generally.",
          ],
          privacyLink: "Privacy Policy",
          gdprLink: "GDPR Notice",
        },
        whatAre: {
          title: "2. What Are Cookies?",
          content: [
            "Cookies are small text files that are stored on your device (computer, tablet or mobile) when you visit a website. They allow the site to recognise your device, remember your preferences and help us understand how the website is being used.",
            "Some cookies are necessary for the site to function, while others help us improve performance, tailor content or measure the effectiveness of our marketing.",
          ],
        },
        types: {
          title: "3. Types of Cookies We Use",
          intro: "We group cookies we use on this website into the categories below. Specific cookies and durations may vary as we update tooling and tracking.",
          essential: {
            title: "Essential Cookies",
            description: "These cookies are required for the website to function correctly. They enable core features such as page navigation, security and basic accessibility.",
            example: "Example usage: remembering cookie choices, load balancing, session management.",
          },
          analytics: {
            title: "Analytics Cookies",
            description: "These cookies help us understand how visitors use our website, which pages are most popular and where we can improve. Data is typically aggregated and anonymised.",
            example: "Example usage: Google Analytics 4 page views, events and performance metrics.",
          },
          marketing: {
            title: "Marketing & Performance Cookies",
            description: "These cookies may be used to measure the performance of our campaigns or to serve more relevant ads based on your interests and interactions with our content.",
            example: "Example usage: Google Ads conversions, remarketing tags.",
          },
        },
        thirdParty: {
          title: "4. Third-Party Cookies & Tools",
          intro: "We use trusted third-party services to help us deliver, analyse and improve our website and marketing. These providers may set their own cookies when you interact with our site:",
          services: {
            googleAnalytics: "Google Analytics / Google Tag Manager: For usage analytics and performance measurement.",
            googleAds: "Google Ads: For tracking conversions and optimising advertising campaigns.",
            calendly: "Calendly: For booking calls and managing appointment scheduling.",
            embedded: "Embedded content: From platforms such as Google Maps or other third parties used for UX.",
          },
          note: "These third parties have their own privacy and cookie policies. We recommend reviewing them directly for more detail. For more information about how we protect data, see our [Privacy Policy](/privacy) and [GDPR policy](/gdpr).",
        },
        managing: {
          title: "5. Cookie Consent & Preferences",
          intro: "When you first visit our website, you may see a cookie banner or notice explaining that we use cookies and providing options to accept or manage them.",
          browserSettings: {
            title: "Browser Settings",
            description: "Most web browsers allow you to control cookies through their settings. Typically, you can:",
            options: [
              "Block all cookies or only third-party cookies",
              "Delete existing cookies from your device",
              "Set preferences for specific websites",
            ],
          },
          onSiteControls: {
            title: "On-Site Controls",
            description: "Where implemented, you can revisit your cookie choices via the cookie banner or settings link in the footer to adjust non-essential cookies at any time.",
          },
          note: "Note: Disabling some cookies (especially essential or functional cookies) may impact how the website works.",
        },
        impact: {
          title: "6. Impact of Disabling Cookies",
          intro: "If you choose to disable or block cookies, some parts of our website may not function as intended. For example:",
          impacts: [
            "You may need to re-enter preferences on each visit.",
            "Some interactive features (e.g. booking widgets) may not work properly.",
            "We may be unable to remember your language or region settings.",
            "Analytics and performance data will be limited, which can reduce our ability to improve the site.",
          ],
        },
        updates: {
          title: "7. Updates to This Cookie Policy",
          content: "We may update this Cookie Policy from time to time to reflect changes in our technology, legal requirements or the cookies we use. The latest version will always be available on this page with the updated date shown at the top.",
        },
        contact: {
          title: "8. Contact Us",
          intro: "If you have any questions about our use of cookies or this policy, please [contact us](/contact):",
          company: "Company",
          email: "Email",
          address: "Address",
          companyNo: "Company No",
        },
      },
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "This Privacy Policy explains how Van Borg Limited collects, uses and protects your personal data when you visit our website or work with us. We process personal data in accordance with the UK GDPR and applicable data protection laws.",
      lastUpdated: "Last updated",
      sections: {
        informationWeCollect: {
          title: "1. Information We Collect",
          intro: "We collect information that you voluntarily provide to us as well as data collected automatically when you interact with our website or services.",
          providedDirectly: {
            title: "Information you provide directly:",
            items: [
              "Contact details (name, email, phone number)",
              "Business information (company name, services, location)",
              "Messages sent via forms, email, or live chat",
              "Information submitted during consultations or onboarding",
            ],
          },
          collectedAutomatically: {
            title: "Information collected automatically:",
            items: [
              "IP address, browser type, device type and operating system",
              "Usage data such as pages visited, time on page and referring URLs",
              "Cookies and similar technologies used for analytics, security and performance",
            ],
          },
          note: "We only collect information necessary to provide our services, improve performance and ensure a secure user experience. For more information about cookies, see our [Cookie Policy](/cookies).",
        },
        howWeUse: {
          title: "2. How We Use Your Information",
          intro: "Your information is used to operate our business and deliver a high-quality service. This includes:",
          uses: [
            "Providing, managing and improving our [Local SEO](/ranking), [Google Ads](/ads), [SEO Website](/website) and [Complete Bundels](/bundel) services",
            "Responding to enquiries and offering tailored recommendations",
            "Managing consultations, onboarding and ongoing service delivery",
            "Sending service updates, administrative messages and invoices",
            "Sending marketing communications, only where consent has been given",
            "Analysing website usage and performance to improve user experience",
            "Protecting against fraudulent, abusive or unauthorised activity",
          ],
          note: "We process personal data in accordance with the UK GDPR and only for legitimate business purposes. For more information about your rights, see our [GDPR policy](/gdpr).",
        },
        informationSharing: {
          title: "3. Information Sharing & Disclosure",
          intro: "We do not sell or rent your personal data. We only share information where necessary to operate our business or where legally required.",
          sharingIntro: "We may share information with:",
          sharedWith: [
            "Trusted third-party vendors (hosting, email, analytics, payment processing and similar services)",
            "Service providers who support our operations under strict confidentiality obligations",
            "Government authorities, where required by law or legal process",
            "Professional advisors (legal, accounting) under confidentiality agreements",
          ],
          note: "Any data shared with service providers is processed in accordance with the UK GDPR and may only be used for the specific tasks for which it was provided. See also our [GDPR policy](/gdpr) for more details about data protection.",
        },
        dataSecurity: {
          title: "4. Data Security",
          content: [
            "We use industry-standard technical and organisational measures to protect your information, including encryption where appropriate, secure servers, access controls and regular security reviews.",
            "While we follow best practices, no method of transmission over the internet or method of electronic storage can be guaranteed 100% secure. We continuously monitor our systems to minimise risks and respond quickly to potential issues.",
          ],
        },
        yourRights: {
          title: "5. Your Rights Under UK GDPR",
          intro: "As a UK or EU user, you have the following rights in relation to your data:",
          rights: [
            "Right to access your personal data",
            "Right to rectify inaccurate or incomplete information",
            "Right to request deletion (\"right to be forgotten\")",
            "Right to restrict or object to certain processing activities",
            "Right to data portability",
            "Right to withdraw consent at any time, where processing is based on consent",
            "Right to lodge a complaint with the UK Information Commissioner's Office (ICO)",
          ],
          note: "To exercise any of these rights, please [contact us](/contact) using the details below. We aim to respond to all valid requests within 30 days. For comprehensive information about your rights, see our [GDPR policy](/gdpr).",
        },
        contact: {
          title: "6. Contact Us",
          intro: "If you have any questions about this Privacy Policy or how we handle your personal data, please [contact us](/contact):",
          company: "Company",
          email: "Email",
          phone: "Phone",
          address: "Address",
          companyNo: "Company No",
          complaint: "For formal complaints regarding data protection, you may also contact the",
          icoLink: "https://ico.org.uk",
        },
      },
    },
    terms: {
      title: "Terms & Conditions",
      subtitle: "These Terms & Conditions govern your use of the services provided by Van Borg Limited. By working with us or using our website, you agree to be bound by these terms.",
      lastUpdated: "Last updated",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing our website, booking a consultation, or engaging Van Borg Limited for services, you confirm that you have read, understood and agree to be bound by these Terms & Conditions, together with any written proposal or service agreement issued to you.",
            "If you do not agree with these terms, you should not use our website or engage us for services.",
          ],
        },
        scope: {
          title: "2. Scope of Services",
          intro: "Van Borg Limited provides digital marketing and automation services, including:",
          services: [
            "[Local SEO](/ranking) and Google Business Profile optimisation",
            "[Google Ads](/ads) strategy, setup, management and optimisation",
            "[SEO Website](/website) and conversion-focused website design and development",
            "[Complete Bundels](/bundel) with automation workflows (lead handling, follow-up, reporting)",
            "Related consultancy, audits and strategic advisory services",
          ],
          note: "The exact scope, deliverables, fees and timelines for each project will be set out in a written proposal, statement of work or service agreement issued to you and agreed in writing (including email) before work begins.",
        },
        proposals: {
          title: "3. Proposals, Changes & Approvals",
          content: [
            "Any proposal or quotation issued by Van Borg Limited is valid for the period stated on the document (or 30 days if not specified) and is subject to confirmation of scope and timelines.",
            "Changes to the agreed scope (for example, additional pages, extra campaigns or new features) may impact fees and timelines. No material changes will be implemented without written confirmation and, where relevant, an updated fee agreement.",
            "You are responsible for reviewing and approving key deliverables such as ad copy, landing pages, website content. Approval (including by email) will be treated as confirmation that the deliverable is ready to go live.",
          ],
        },
        fees: {
          title: "4. Fees, Payment & Billing",
          intro: "Unless otherwise agreed in writing, our standard commercial terms are:",
          items: {
            projectFees: "Project / setup fees: A non-refundable deposit is payable upfront, with the balance due on completion or on agreed project milestones.",
            retainers: "Retainers and management fees: Billed monthly in advance and payable on or before the due date stated on the invoice.",
            performanceFees: "Performance or percentage-of-spend fees: Where applicable, calculated on agreed criteria (for example, a percentage of ad spend).",
            adSpend: "Ad spend: Paid directly by you to the platform (e.g. Google Ads) or reimbursed to us if we pay on your behalf.",
          },
          note: "All fees are quoted in GBP and are exclusive of any applicable taxes unless otherwise stated. Late or non-payment may result in suspension of services and/or interest or late-payment charges as permitted by law.",
        },
        clientResponsibilities: {
          title: "5. Client Responsibilities",
          intro: "To enable us to deliver effectively, you agree to provide timely access to the information, approvals and systems we reasonably require, including:",
          responsibilities: [
            "Accurate business information, branding and service details",
            "Access to relevant platforms (e.g. Google Business Profile, Google Ads, analytics, website CMS)",
            "Prompt review and feedback on deliverables",
            "Payment of invoices in line with agreed terms",
          ],
          note: "You are responsible for ensuring that all content, claims and offers related to your business comply with applicable laws and industry regulations. We are not responsible for legal compliance of your underlying products, services or business model.",
        },
        performance: {
          title: "6. Performance, Results & Third-Party Platforms",
          content: [
            "Digital marketing performance depends on many factors, including market conditions, competition, budget levels, your internal sales processes and external platforms such as Google. While we work to maximise results, no specific ranking, lead volume or revenue level can be guaranteed.",
            "You acknowledge that services may rely on third-party platforms (for example Google, hosting providers, CRM systems and automation tools). We are not responsible for changes made by these platforms, downtime, policy changes or technical issues beyond our direct control, though we will use reasonable efforts to mitigate impact where possible.",
          ],
        },
        intellectualProperty: {
          title: "7. Intellectual Property",
          content: [
            "You retain ownership of all pre-existing intellectual property, including your brand, logos, content and data provided to us.",
            "Unless otherwise agreed in writing, you are granted a non-exclusive licence to use the deliverables we create for you (such as ad copy, landing pages and website assets) for your own business purposes, subject to full payment of all fees.",
            "Van Borg Limited retains ownership of all underlying frameworks, processes, code libraries, templates and know-how used in delivering the services, and may reuse these in future projects with other clients.",
          ],
        },
        confidentiality: {
          title: "8. Confidentiality & Data Protection",
          content: [
            "Both parties agree to keep confidential any non-public information received from the other party in connection with the services, and to use such information only for the purpose of delivering or receiving those services.",
            "We handle personal data in accordance with our [Privacy Policy](/privacy) and the UK GDPR. Where required, a separate Data Processing Agreement (DPA) can be put in place. For more information about data protection, see also our [GDPR policy](/gdpr) and [Cookie Policy](/cookies).",
          ],
          privacyLink: "Privacy Policy",
        },
        termination: {
          title: "9. Term & Termination",
          intro: "Unless specified otherwise in a service agreement, either party may terminate an ongoing engagement by giving 30 days' written notice.",
          uponTermination: [
            "All outstanding invoices become immediately due and payable",
            "Work completed and time incurred up to the termination date will remain billable",
            "We will provide a reasonable export of key data and assets in standard formats, where applicable",
          ],
          note: "We may terminate or suspend services immediately if there is serious breach of these terms, repeated non-payment or use of our work in an unlawful or abusive manner.",
        },
        liability: {
          title: "10. Limitation of Liability",
          content: [
            "To the fullest extent permitted by law, Van Borg Limited shall not be liable for any indirect, incidental, consequential or special loss, including loss of profit, revenue, data or opportunities arising out of or in connection with the services.",
            "Our total aggregate liability for any claim arising from a project or ongoing agreement shall not exceed the total fees paid by you to Van Borg Limited for the specific services in the twelve (12) months preceding the event giving rise to the claim.",
          ],
        },
        changes: {
          title: "11. Changes to These Terms",
          content: [
            "We may update these Terms & Conditions from time to time to reflect changes in our services, legal requirements or business practices. The latest version will always be available on this page, with the effective date shown at the top.",
            "Where changes are material and affect an ongoing agreement, we will notify you by reasonable means (for example, by email).",
          ],
        },
        governingLaw: {
          title: "12. Governing Law & Jurisdiction",
          content: [
            "These Terms & Conditions, and any dispute or claim arising out of or in connection with them, shall be governed by and construed in accordance with the laws of England and Wales.",
            "The courts of England and Wales shall have exclusive jurisdiction to settle any dispute arising from or connected with these terms or the services we provide.",
          ],
        },
        contact: {
          title: "13. Contact Information",
          intro: "If you have any questions about these Terms & Conditions, please [contact us](/contact):",
          company: "Company",
          email: "Email",
          phone: "Phone",
          address: "Address",
          companyNo: "Company No",
        },
      },
    },
  },
};
