import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Cloud, Terminal, Compass, CheckCircle2, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

const SERVICES: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Bespoke corporate SaaS, high-throughput web architecture, and secure internal software. We write clean, tested, and self-documenting TypeScript, Go, and Python.',
    icon: 'Code2',
    tags: ['SaaS Engineering', 'API Integration', 'React / NextJS', 'Go Backends']
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture & Scalability',
    description: 'Infrastructure designed for 99.99% availability. Secure cloud meshes, database replicas, serverless computing, and private multi-region setups.',
    icon: 'Cloud',
    tags: ['Google Cloud / AWS', 'Managed DBs', 'Cybersecurity', 'Disaster Recovery']
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation & Pipelines',
    description: 'Say goodbye to manual deployments. We optimize build speeds, package secure Docker containers, manage Kubernetes, and write Terraform code.',
    icon: 'Terminal',
    tags: ['CI/CD Pipelines', 'Docker & K8s', 'Terraform IaC', 'Monitoring & Alerts']
  },
  {
    id: 'ui-ux-strategy',
    title: 'Product & UI/UX Design System',
    description: 'High-converting user interfaces mapped down to fine interactions. We conduct target user research, map user paths, and build flawless Figma assets.',
    icon: 'Compass',
    tags: ['UX Strategy', 'Figma Libraries', 'Interactive Mockups', 'Visual Design']
  }
];

// Details for dynamic tabs on hover/click to increase conversions!
const SERVICE_DETAILS: { [key: string]: { valueProps: string[]; techStack: string } } = {
  'custom-software': {
    valueProps: [
      'Strictly modular TypeScript & typed structures.',
      'Comprehensive unit and integration testing suite.',
      'Sub-second first-paint speeds and lightweight bundles.'
    ],
    techStack: 'React, Node.js, NestJS, Go, Postgres, Redis, TailwindCSS'
  },
  'cloud-architecture': {
    valueProps: [
      'Scale-to-zero capabilities with cloud integrations.',
      'Distributed multi-zone failovers and live replication.',
      'IAM least-privilege security matrices protecting user tables.'
    ],
    techStack: 'GCP, AWS, PostgreSQL, MongoDB, Redis, Apache Kafka'
  },
  'devops-automation': {
    valueProps: [
      'Under 5-minute automated pipeline staging builds.',
      'Zero-downtime rolling upgrades and canary releases.',
      'Infrastructure as Code (IaC) for fast replication.'
    ],
    techStack: 'Github Actions, Terraform, Docker, Kubernetes, Prometheus'
  },
  'ui-ux-strategy': {
    valueProps: [
      'Intricate research backed by clickable user feedback.',
      'W3C WCAG accessibility and touch target comfort compliance.',
      'Developer-friendly Figma handoffs with layout tokens.'
    ],
    techStack: 'Figma, Tailwind, Adobe CC, Framer, UserTesting'
  }
};

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Code2: Code2,
  Cloud: Cloud,
  Terminal: Terminal,
  Compass: Compass
};

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-[#E5FAFF]/20 relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(#023E8A_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#023E8A]">{t('services.badge')}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {t('services.title')}
            </h2>
            <div className="w-20 h-1 bg-[#023E8A] rounded-full" />
          </div>
          <p className="text-slate-600 font-light max-w-sm text-left text-sm sm:text-base">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Dynamic Split Screen Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Service Column */}
          <div className="lg:col-span-7 space-y-4">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              const isActive = activeService === service.id;
              
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? 'bg-white border-[#023E8A] shadow-md shadow-[#023E8A]/5'
                      : 'bg-white/80 hover:bg-white border-slate-200/60 hover:border-sky-200 shadow-sm'
                  }`}
                >
                  <div className="flex gap-4 sm:gap-6 items-start">
                    {/* Icon wrapper */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive ? 'bg-[#023E8A] text-[#E5FAFF]' : 'bg-[#E5FAFF] text-[#023E8A] group-hover:scale-105'
                    }`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-serif text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? 'text-[#023E8A]' : 'text-slate-800'
                        }`}>
                          {t(`services.items.${service.id}.title`)}
                        </h3>
                        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${
                          isActive ? 'transform rotate-90 text-[#023E8A]' : 'group-hover:translate-x-1'
                        }`} />
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed font-light">
                        {t(`services.items.${service.id}.desc`)}
                      </p>

                      {/* Technical Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {(t(`services.items.${service.id}.tags`) as string[]).map((tag: string) => (
                          <span
                            key={tag}
                            className={`text-xs px-2.5 py-1 rounded-md font-medium tracking-wide ${
                              isActive
                                ? 'bg-[#E5FAFF] text-[#023E8A]'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Details Panel (Desktop Detail Screen) */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
            <div className="sleek-card rounded-3xl p-8 space-y-6 text-left relative overflow-hidden shadow-xl">
              {/* background vector accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F7FC] rounded-full blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {activeService ? (
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] bg-[#023E8A]/10 text-[#023E8A] px-2.5 py-1 rounded-sm uppercase tracking-wider font-extrabold">
                        {t('services.radar_badge')}
                      </span>
                      <h4 className="font-serif text-2xl font-bold mt-2 text-slate-900">
                        {t(`services.items.${activeService}.title`)}
                      </h4>
                      <p className="text-slate-500 text-xs font-mono mt-1">
                        {t('services.tech_caps')} {t(`services.items.${activeService}.tech`)}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-6 space-y-4">
                      <h5 className="text-xs font-semibold uppercase text-slate-400 tracking-widest">
                        {t('services.included')}
                      </h5>
                      
                      <ul className="space-y-3.5">
                        {(t(`services.items.${activeService}.props`) as string[]).map((prop: string, i: number) => (
                          <li key={i} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#023E8A] shrink-0 stroke-[2] mt-0.5" />
                            <span className="text-sm text-slate-700 font-light">{prop}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#E5FAFF]/60 p-4 rounded-xl border border-[#E5FAFF] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#023E8A]">
                        <HelpCircle className="w-4 h-4 fill-current text-[#E5FAFF] stroke-[#023E8A]" />
                        <span>{t('services.custom_needs_title')}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {t('services.custom_needs_desc')}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const target = document.getElementById('contact-us');
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#023E8A] hover:bg-[#023E8A]/90 text-white rounded-xl font-semibold text-sm transition-all shadow-md group cursor-pointer"
                    >
                      {t('services.cta_btn')}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                ) : (
                  <div className="h-64 flex items-center justify-center text-slate-400 text-sm font-light">
                    {t('services.select_prompt')}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
