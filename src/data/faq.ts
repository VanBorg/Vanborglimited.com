import { FAQ } from '../types';

export const faqItems: FAQ[] = [
  // Business & Ownership FAQs
  {
    question: "Do I own the AI system once it's built?",
    answer: "You own your bot's content, user data, and custom flows — but Van Borg retains ownership of all core logic, infrastructure, and backend architecture. You are licensing AI infrastructure under strict contract terms. This is not SaaS. This is enforcement-grade automation.",
    category: "business"
  },
  {
    question: "Can I self-host or migrate the bot elsewhere?",
    answer: "No. All systems must run on Van Borg-approved infrastructure. Self-hosting, sandboxing, or third-party replication is a violation of our licensing terms and triggers immediate kill-switch activation.",
    category: "business"
  },
  {
    question: "What makes Van Borg different from other chatbot providers?",
    answer: "We don't sell templates. We license AI infrastructure — engineered, deployed, and protected. There is no SaaS lock-in, no passive hosting. We build systems that automate operations, not just talk to leads.",
    category: "business"
  },
  {
    question: "Do you use my customer data?",
    answer: "No. You own 100% of your customer data. We do not access, store, or sell client data. Anonymous system logs may be collected solely to improve technical performance.",
    category: "business"
  },
  // Support & Maintenance FAQs
  {
    question: "What happens if I stop paying for maintenance?",
    answer: "Your bot is automatically deactivated after 72 hours of non-payment. All add-ons and services are suspended until the plan is reactivated. This applies to all tiers. There are no exceptions.",
    category: "support"
  },
  {
    question: "Do I need a plan after the bot is delivered?",
    answer: "Yes. All licensed systems require an active maintenance or optimization plan to remain live. Essential Maintenance is required for Tiers 01–02. Proactive Optimization is required for Tiers 03–04.",
    category: "support"
  },
  // Sales & Payment FAQs
  {
    question: "What if I don't complete final payment?",
    answer: "Your bot does not go live. Van Borg does not deploy, transfer, or host systems until all financial terms are fulfilled. Partial builds remain locked until payment is complete.",
    category: "sales"
  },
  {
    question: "Can I customize my system over time?",
    answer: "Yes. Your system is modular. You can license add-ons like CRM Sync, WhatsApp Integration, Loyalty Logic, and Dashboards at any time — assuming you're on an active plan.",
    category: "sales"
  },
  // Sales FAQs
  {
    question: 'How quickly can you build a custom chatbot?',
    answer: 'Our standard turnaround time for custom chatbots ranges from 2-14 days, depending on complexity. Basic lead capture bots can be ready in as little as 48 hours, while more complex solutions with multiple integrations may take up to two weeks. For enterprise-level custom builds, the timeline is typically 3-6 weeks to ensure proper integration and testing.',
    category: 'sales'
  },
  {
    question: 'Do I need to pay ongoing subscription fees?',
    answer: 'We are not a SaaS platform. You don\'t pay for feature access — you license a permanent AI system. However, all live bots require an active maintenance plan to remain operational. Essential Maintenance is mandatory for Tiers 01–02. Proactive Optimization is required for Tiers 03–04. This ensures uptime, protection, and performance.',
    category: 'sales'
  },
  {
    question: "What happens if my license is revoked?",
    answer: "Your system is immediately deactivated. All automation add-ons are suspended, and access is locked. Van Borg enforces licensing through infrastructure kill-switches. Continued use without a license is considered IP breach and triggers legal enforcement.",
    category: "legal"
  },
  {
    question: "How do you handle upgrades after the build?",
    answer: "We support modular scaling. You can add new features like WhatsApp, CRM Sync, Loyalty Logic, or Dashboards at any time. We don't rebuild — we extend. Upgrade paths are structured, fast, and cost-controlled.",
    category: "support"
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes. You can move from Essential to Proactive at any time. Downgrades may not be permitted depending on your bot tier. Tiers 03–04 require Proactive Optimization to remain live.",
    category: "support"
  },
  {
    question: "Do you offer training for my team?",
    answer: "Yes. After launch, we provide onboarding sessions covering system usage, content management, and admin operations. Proactive Optimization clients also receive ongoing strategy sessions, prompt refinement, and conversion tuning — managed and executed by Van Borg. We do not provide access to core logic or infrastructure unless contractually scoped. System frameworks remain proprietary and protected under license.",
    category: "support"
  },
  {
    question: "What happens if I copy or clone the bot?",
    answer: "Any unauthorized duplication, extraction, or redeployment of Van Borg systems violates your license and triggers immediate system shutdown, access revocation, and legal action. We enforce kill-switch protocols.",
    category: "legal"
  },
  {
    question: 'How much does a typical chatbot cost?',
    answer: 'Our bot packages range from €1,200 for basic lead generation bots to €20,000+ for enterprise-level solutions with multiple integrations. Most clients start with a €3,000-5,000 solution that covers their core business needs. Add-on automations range from €500-3,000 each, allowing you to extend functionality without rebuilding your entire system.',
    category: 'sales'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. Our standard model is 50% upfront and 50% on delivery. For larger builds, we offer structured payment plans — but these include finance loading. Three-payment schedules add 10% to the total. Six-payment schedules add 25%. Maintenance plans can be billed monthly or annually with discounts for yearly commitment. No payment = no deployment. No exceptions.',
    category: 'sales'
  },
  {
    question: 'What\'s included in the quoted price?',
    answer: 'Our quotes include everything you need to get your system up and running: custom design, development, testing, training data creation, deployment, and basic setup assistance. We also include a 30-day adjustment period after launch to fine-tune responses and behaviors based on real-world interactions.',
    category: 'sales'
  },
  {
    question: 'How fast can I get started?',
    answer: 'Basic bots can be deployed in as little as 2-4 days. More complex solutions with deep integrations typically take 1-2 weeks. Custom enterprise solutions require 3-6 weeks for full development and testing. After your initial consultation, we\'ll provide you with a specific timeline based on your requirements and current production schedule.',
    category: 'sales'
  },
  {
    question: 'What are the different bot tiers available?',
    answer: 'We offer four main bot tiers: (1) Lead Capture System (€1,200-1,800) built in 2-4 days for basic lead capture and FAQ answering, (2) Client Booking Assistant (€2,000-3,500) built in 5-7 days with complete booking automation, (3) Full-Service Chat Automation (€4,000-7,000) built in 10-14 days with multi-channel support and loyalty programs, and (4) Custom AI Solution (€8,000-20,000+) built in 3-6 weeks with enterprise-grade features and white-label UI.',
    category: 'sales'
  },
  {
    question: 'What add-ons are available for my bot?',
    answer: 'We offer various add-ons including: Follow-Up Emails/SMS (€500-1,000), Abandoned Chat Recovery (€500-800), CRM Sync Integration (€800-1,200), Calendar & Booking System (€1,000-1,500), WhatsApp Integration (€1,500-2,000), Loyalty & Reward Flows (€1,500-2,000), and Analytics Dashboard Setup (€2,000-3,000). Each add-on can be integrated seamlessly with your existing bot system.',
    category: 'sales'
  },
  
  // Business FAQs
  {
    question: 'Who owns the chatbot and data after it\'s built?',
    answer: 'You retain 100% ownership of your chatbot, all its training data, and any customer data collected. We believe in client ownership rather than ongoing dependencies. If you choose our maintenance plans, we host and maintain the system for you, but you still own everything and can request full exports at any time. You can also transition to self-hosting whenever you wish.',
    category: 'business'
  },
  {
    question: 'Can I expand my bot with more capabilities later?',
    answer: 'Absolutely. Our bots are designed to be modular and expandable. You can start with core functionality and add features like appointment booking, payment processing, or additional integrations as your needs evolve. Each add-on integrates seamlessly with your existing system without requiring a full rebuild.',
    category: 'business'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in creating AI solutions for coaches, consultants, clinics, studios, and agencies. Our deepest expertise is in fitness, wellness, health coaching, and professional service providers. We\'ve built systems for physical trainers, nutrition coaches.',
    category: 'business'
  },
  {
    question: 'Do you offer white label solutions?',
    answer: 'Yes, we offer complete white label solutions for agencies that want to resell our AI systems to their clients. Our white label program includes custom branding, agency dashboards, and competitive pricing structures. You can present these solutions as part of your own product stack with no mention of Van Borg.',
    category: 'business'
  },
  {
    question: 'How do you handle client confidentiality?',
    answer: 'All client projects are kept strictly confidential under our standard NDA. We never share specific details about your business logic, customer data, or proprietary processes. For portfolio purposes, we only reference general industry and solution type unless given explicit permission to share more details.',
    category: 'business'
  },
  {
    question: 'What if I want to modify the bot myself?',
    answer: 'Our systems are designed with different levels of client control. You can manage basic content and responses through our admin interface without technical knowledge. For deeper customization, we offer a developer handover option with full documentation and code access, making it straightforward for your technical team to modify the system.',
    category: 'business'
  },
  {
    question: 'What\'s the difference between licensing and traditional SaaS?',
    answer: 'SaaS platforms charge monthly fees to rent access to generic tools — but you never own anything. Van Borg licenses full-stack AI systems built specifically for your business, with your logic, your flows, and your outcomes. You own your bot\'s content and customer data. We maintain the protected infrastructure under a licensed agreement. No escalating subscriptions. No forced upgrades. No feature limitations. Just infrastructure you control — and we enforce.',
    category: 'business'
  },
  {
    question: 'What maintenance plans do you offer?',
    answer: 'We offer two maintenance plans: (1) Essential Maintenance (€250-500/month) for basic hosting, security, and support, required for Lead Capture and Booking Assistant bots; and (2) Proactive Optimization (€600-2,500/month) which includes everything from Essential plus flow rewrites, conversion optimization, campaign management, and priority support, required for Full-Service and Custom AI bots.',
    category: 'business'
  },
  {
    question: 'What happens if I stop my maintenance plan?',
    answer: 'If your maintenance plan lapses, your system will be automatically deactivated within 72 hours, all automation add-ons will be disabled immediately, and no access restoration will be provided unless reactivated through a written agreement. This is strictly enforced as our bots require active maintenance to ensure security, compliance, and optimal performance.',
    category: 'business'
  },
  
  // Automation FAQs
  {
    question: 'What systems can your automations integrate with?',
    answer: 'Our automations can integrate with most popular business systems including Zapier, Make (formerly Integromat), Google Workspace, Microsoft Office, major CRMs (Salesforce, HubSpot, etc.), appointment scheduling tools (Calendly, Acuity, etc.), payment processors (Stripe, PayPal), and email marketing platforms. For specialized or proprietary systems, we can build custom API integrations.',
    category: 'automation'
  },
  {
    question: 'How are your bots different from ChatGPT?',
    answer: 'While ChatGPT is a general-purpose AI, our bots are custom-trained on your business data with specific conversion goals. They\'re designed to handle particular business processes, integrate with your systems, and deliver measurable results rather than just answering questions. Our bots focus on driving business outcomes like capturing leads, booking appointments, and guiding customers through your sales process - all using your brand voice and business logic.',
    category: 'automation'
  },
  {
    question: 'Can your bots handle appointment scheduling?',
    answer: 'Yes. Our bots can integrate with most calendar systems to check availability and book appointments directly. They can handle rescheduling, cancellations, and send automated reminders to reduce no-shows. The scheduling system can accommodate complex rules like buffer times between appointments, specific availability for different service types, and multi-provider scenarios.',
    category: 'automation'
  },
  {
    question: 'Do your bots work with my existing website?',
    answer: 'Yes. Our bots can be embedded directly into your existing website with no redesign required. They work with all major website platforms including WordPress, Wix, Squarespace, Shopify, WebFlow, and custom-built sites. We provide simple embed codes that your team can implement, or we can assist with the integration at no additional cost.',
    category: 'automation'
  },
  {
    question: 'Can the chatbot handle payments?',
    answer: 'Yes, our bots can be integrated with payment processors like Stripe and PayPal to facilitate secure transactions directly within the chat interface. They can generate and send payment links, create invoices, track payment status, and confirm successful transactions. This is particularly useful for deposits, session bookings, and product purchases.',
    category: 'automation'
  },
  {
    question: 'How do you train the AI to sound like our brand?',
    answer: 'We develop a custom voice profile for your brand based on your existing content, key phrases, and communication style. This profile is then incorporated into your bot\'s training data. We also conduct several calibration sessions where we fine-tune responses to match your preferred tone, terminology, and messaging approach.',
    category: 'automation'
  },
  {
    question: 'Does the bot work outside business hours?',
    answer: 'Yes, your bot operates 24/7/365, capturing leads and providing assistance even when you\'re not available. You can configure the bot to handle different scenarios based on business hours - for example, capturing detailed information after hours while setting expectations about when a human will follow up.',
    category: 'automation'
  },
  {
    question: 'Can the bot speak multiple languages?',
    answer: 'Yes, our bots can be configured to support multiple languages. We can build multilingual capabilities into your system, allowing it to detect user language and switch conversation flows accordingly. For businesses serving international audiences, this provides a seamless experience for all customers regardless of their preferred language.',
    category: 'automation'
  },
  {
    question: 'What types of automation add-ons do you offer?',
    answer: 'We offer several automation add-ons including Follow-Up Emails/SMS for converting abandoned leads, Abandoned Chat Recovery for reclaiming leads lost mid-chat, CRM Sync Integration for pushing data to your CRM, Calendar & Booking System for direct scheduling, WhatsApp Integration for mobile-first experiences, Loyalty & Reward Flows for retention, and Analytics Dashboard Setup for performance tracking. These can be added to any bot tier based on your needs.',
    category: 'automation'
  },
  {
    question: 'What\'s the typical ROI for your chatbot systems?',
    answer: 'Our clients typically see ROI within 30-60 days. For lead generation bots, we usually see 120-150% more qualified leads. For booking assistants, clients report 20+ hours saved weekly and 30-40% reduction in no-shows. Full-service systems often deliver 5x ROI within the first month through improved conversion rates, higher customer retention, and reduced operational costs.',
    category: 'automation'
  },
  
  // Support FAQs
  {
    question: 'What does maintenance include?',
    answer: 'Our maintenance plans include performance monitoring, response optimization, critical updates, training on new data, and technical support. The Essential Maintenance plan (€250-500/month) covers hosting, security, uptime monitoring, and basic updates. The Proactive Optimization plan (€600-2,500/month) adds strategic improvement, A/B testing, detailed analytics, and priority support for continued performance growth.',
    category: 'support'
  },
  {
    question: 'What happens if I need changes to my bot?',
    answer: 'If you have an active maintenance plan, minor changes and updates are included. For significant feature additions or redesigns, we provide existing clients with preferential rates on additional development. We offer a straightforward change request process through our client portal, and most minor adjustments can be implemented within 1-3 business days.',
    category: 'support'
  },
  {
    question: 'Is there a way to test bot performance?',
    answer: 'Yes. All our installations include analytics dashboards that track key metrics including conversations started, completion rates, goal conversion, and user satisfaction. We also provide regular performance reports for maintenance clients. For advanced analytics, we can set up custom tracking for specific KPIs relevant to your business goals and integrate with tools like Google Analytics.',
    category: 'support'
  },
  {
    question: 'How secure is the data handled by your bots?',
    answer: 'Security is a priority in our development process. All data is encrypted in transit and at rest. We build GDPR-compliant systems and can provide SOC 2 compliance for enterprise clients. We never access or use client data for any purpose other than intended functionality. For clients with specific security requirements, we can implement additional measures like custom data retention policies and enhanced access controls.',
    category: 'support'
  },
  {
    question: 'What ongoing support do I receive after launch?',
    answer: 'All clients receive 30 days of complimentary post-launch support to ensure smooth operation and make minor adjustments as needed. Beyond that, our maintenance plans offer different levels of ongoing support. Essential Maintenance includes email support with 48-hour response times, while Proactive Optimization provides priority support with 24-hour response and regular strategy calls.',
    category: 'support'
  },
  {
    question: 'Can you help with compliance requirements?',
    answer: 'Yes, we build systems that comply with relevant regulations like GDPR for data protection. For healthcare clients, we can implement HIPAA-compliant solutions with appropriate security measures, BAA agreements, and data handling protocols. For financial services, we adhere to applicable financial regulations and compliance requirements.',
    category: 'support'
  },
  {
    question: 'What happens if something breaks?',
    answer: 'Both our maintenance plans include monitoring and emergency fixes. For Essential Maintenance clients, we address critical issues within 48 hours. Proactive Optimization clients receive priority attention with same-day assessment and fixes for critical issues. We also maintain regular backups to ensure quick restoration in case of any system failures.',
    category: 'support'
  },
  
  // New Category: Legal FAQs
  {
    question: 'What are the licensing terms for Van Borg systems?',
    answer: 'You are licensing a system with restricted, defined rights. You own the chatbot content, client-facing copy, customer data collected, and custom frontend components built exclusively for you. Van Borg retains all underlying logic, flow frameworks, training scaffolds, backend architecture, proprietary integrations, enforcement rights, and deployment controls. No redistribution, replication, or sandboxing is permitted under our licensing model.',
    category: 'legal'
  },
  {
    question: 'What infrastructure requirements exist for Van Borg systems?',
    answer: 'All systems must be deployed on Van Borg-approved infrastructure only (e.g., Netlify, VPS, Edge). You are strictly prohibited from hosting or migrating any part of your system to external infrastructure, exporting flows or prompt logic into other tools, or running your bot without an active maintenance plan. License is tied to an active maintenance plan, with Essential Plan required for Tiers 01-02 and Proactive Plan required for Tiers 03-04.',
    category: 'legal'
  },
  {
    question: 'What happens if I violate the terms of service?',
    answer: 'Van Borg enforces a zero-tolerance IP policy. Violations such as hosting or cloning systems on non-approved infrastructure, attempting to replicate flows or logic, operating without an active license plan, or reselling our technology will result in immediate deactivation of all systems, revocation of access credentials, potential legal action for IP infringement, and contract voiding without refund. Van Borg retains the right to enforce kill-switches across infrastructure upon confirmed breach.',
    category: 'legal'
  },
  {
    question: 'How is my data protected under privacy laws?',
    answer: 'We adhere to GDPR and applicable data protection regulations. You retain full ownership of all customer data collected through your AI system. Van Borg does not access, sell, or utilize your data for any purpose other than providing and improving contracted services. We collect anonymous usage logs solely to enhance system performance. You can request a complete export of your customer data at any time, which will be provided in a standard format within a reasonable timeframe.',
    category: 'legal'
  },
  {
    question: 'What are the terms for dispute resolution?',
    answer: 'Any disputes are first addressed through informal resolution attempts. If unsuccessful, we move to mediation before arbitration or litigation. Any formal dispute shall be resolved through binding arbitration conducted in London, United Kingdom. You agree to resolve disputes individually and waive participation in class action lawsuits. These Terms are governed by the laws of England and Wales, with legal proceedings initiated and resolved in the courts of that jurisdiction unless specified otherwise in writing.',
    category: 'legal'
  },
  
  // New Category: Technical FAQs
  {
    question: 'How does your chatbot technology work?',
    answer: 'Our chatbots use a combination of advanced large language models (like GPT-4), custom-trained on your specific business data, and rule-based decision systems. Unlike generic AI tools, our systems include structured conversation flows, business logic integration, and multi-step automation sequences. Each bot is designed with your specific business processes in mind, with custom prompts and training that matches your brand voice and response requirements.',
    category: 'technical'
  },
  {
    question: 'Can I customize the chatbot\'s appearance?',
    answer: 'Yes, the visual appearance of your chatbot is fully customizable to match your brand\'s colors, typography, and overall aesthetic. We provide options for chat bubbles, embedded forms, full-page experiences, or minimalist designs. For enterprise clients, we can create completely custom UI/UX designs that seamlessly integrate with your existing website or application.',
    category: 'technical'
  },
  {
    question: 'How do you ensure the chatbot gives accurate answers?',
    answer: 'We ensure accuracy through a multi-layered approach: (1) Custom training on your business-specific data and approved responses, (2) Structured conversation flows for critical processes rather than pure AI generation, (3) Regular review and optimization based on real conversation logs, (4) Content safeguards and approval workflows for sensitive information, and (5) Fallback mechanisms to human operators for complex or uncertain queries.',
    category: 'technical'
  },
  {
    question: 'What hosting and infrastructure do you use?',
    answer: 'Our systems are deployed on enterprise-grade infrastructure using a combination of Netlify, Vercel, or custom VPS solutions depending on requirements. We implement security best practices including SSL encryption, regular security audits, and compliance with industry standards. All infrastructure is monitored 24/7 for uptime and performance, with automatic scaling capabilities for high-traffic scenarios.',
    category: 'technical'
  },
  {
    question: 'Can my bot handle file uploads or media content?',
    answer: 'Yes, our advanced bot tiers (02-04) can handle file uploads including images, documents, and other media files. This capability is useful for intake forms, document collection, photo submissions for quotes or assessments, and more. All file handling is done securely with proper validation, virus scanning, and access controls in place. Uploaded files can be stored in your secure database and linked to customer records.',
    category: 'technical'
  }
];