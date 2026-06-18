import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Braces, Sparkles, AlertCircle } from 'lucide-react';
import { ProcessStep } from '../types';
import { useLanguage } from '../context/LanguageContext';

const PROCESS_STEPS: (ProcessStep & { icon: string; bulletColor: string })[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Strategy',
    description: 'We host interactive alignment sessions, draft comprehensive technical flowcharts, refine custom user stories, and outline the precise project scope bounds. No guesswork allowed.',
    duration: 'Week 1',
    icon: 'Search',
    bulletColor: 'bg-indigo-500'
  },
  {
    stepNumber: 2,
    title: 'Design & Architecture',
    description: 'Our team crafts high-fidelity, interactive viewport prototypes in Figma. Simultaneously, our cloud engineers draft system schematics, cluster topologies, and entity relationship diagrams.',
    duration: 'Weeks 2-3',
    icon: 'PenTool',
    bulletColor: 'bg-emerald-500'
  },
  {
    stepNumber: 3,
    title: 'Agile Software Development',
    description: 'We code in bi-weekly sprints, continuously shipping modular features to a secure private staging server. You receive transparent sprint review recordings and demo links.',
    duration: 'Weeks 4-8',
    icon: 'Braces',
    bulletColor: 'bg-[#023E8A]'
  },
  {
    stepNumber: 4,
    title: 'Pristine QA & Deployment',
    description: 'We trigger automated testing models, perform penetration testing sweeps, audit responsive viewports, set up clean cloud monitoring dashboards, and carry out a seamless launch.',
    duration: 'Weeks 9+',
    icon: 'Sparkles',
    bulletColor: 'bg-amber-500'
  }
];

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Search: Search,
  PenTool: PenTool,
  Braces: Braces,
  Sparkles: Sparkles
};

export default function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#E5FAFF]/50 relative overflow-hidden">
      {/* Decorative vertical pattern */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#023E8A]">{t('process.badge')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t('process.title')}
          </h2>
          <div className="w-16 h-1 bg-[#023E8A] mx-auto rounded-full" />
          <p className="text-slate-600 font-light text-base sm:text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Connecting Track Line (Desktop and Mobile left) */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Search;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.stepNumber}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Badge (Chronological Orb) */}
                  <div className="absolute left-[24px] md:left-1/2 top-1.5 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true, margin: '-50px' }}
                      className={`w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white ${step.bulletColor}`}
                    >
                      <IconComponent className="w-5 h-5 stroke-[2.5]" />
                    </motion.div>
                  </div>

                  {/* Spacer or Left Card context */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-16 pl-14 md:pl-0 text-left ${
                    isEven ? 'md:text-right md:block hidden' : 'md:block hidden'
                  }`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="space-y-3"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5FAFF] text-[#023E8A] text-xs font-semibold tracking-wide">
                          {t(`process.items.${index}.duration`)}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-slate-800">
                          {t(`process.items.${index}.title`)}
                        </h3>
                        <p className="text-slate-600 font-light text-sm leading-relaxed">
                          {t(`process.items.${index}.desc`)}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Divider line for desktop center visual spacing */}
                  <div className="hidden md:block w-0 h-4" />

                  {/* Right Card context or Mobile Card */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-16 text-left ${
                    !isEven ? 'md:block' : 'md:hidden block'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="space-y-3"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5FAFF] text-[#023E8A] text-xs font-semibold tracking-wide">
                        {t(`process.items.${index}.duration`)}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-slate-800">
                        {t(`process.items.${index}.title`)}
                      </h3>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        {t(`process.items.${index}.desc`)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Even Card displayed on mobile left-bound alignment */}
                  <div className={`w-full pl-14 md:hidden block mt-1 text-left ${
                    isEven ? 'block' : 'hidden'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="space-y-3"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5FAFF] text-[#023E8A] text-xs font-semibold tracking-wide">
                        {t(`process.items.${index}.duration`)}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-slate-800">
                        {t(`process.items.${index}.title`)}
                      </h3>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        {t(`process.items.${index}.desc`)}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center gap-4 text-left">
          <AlertCircle className="w-5 h-5 text-[#023E8A] shrink-0" />
          <p className="text-xs text-slate-500 font-light">
            <strong>{t('process.warning_bold')}</strong> {t('process.warning').replace('Need express delivery? ', '').replace('Butuh pengiriman kilat? ', '')}
          </p>
        </div>

      </div>
    </section>
  );
}
