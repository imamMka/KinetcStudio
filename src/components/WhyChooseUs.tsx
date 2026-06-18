import React from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Eye, Clock, Check } from 'lucide-react';
import { Strength } from '../types';
import { useLanguage } from '../context/LanguageContext';

const STRENGTHS: Strength[] = [
  {
    id: 'scalable-solutions',
    title: 'Scalable Solutions',
    description: 'We build with high-velocity backends and cloud native frameworks engineered to handle sudden spikes and endless organic growth organically.',
    icon: 'Layers'
  },
  {
    id: 'expert-developers',
    title: 'Expert Developers',
    description: 'Our engineers are senior product minds who understand business workflows, code cleanliness, testing paradigms, and secure containerization.',
    icon: 'ShieldCheck'
  },
  {
    id: 'transparent-process',
    title: 'Transparent Process',
    description: 'Track daily progress on virtual boards and see live software staging updates. We speak clearly, report early, and run regular agile sprint reviews.',
    icon: 'Eye'
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    description: 'No broken promises or endless rollouts. Our modern estimation engine and focused scope controls get your software polished and shipped right.',
    icon: 'Clock'
  }
];

// Helper to map icon string to Component
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Eye: Eye,
  Clock: Clock
};

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#E5FAFF]/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#023E8A]">{t('why.badge')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t('why.title')}
          </h2>
          <div className="w-16 h-1 bg-[#023E8A] mx-auto rounded-full" />
          <p className="text-[#023E8A]/80 font-light text-base sm:text-lg">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRENGTHS.map((strength, idx) => {
            const IconComponent = iconMap[strength.icon] || Layers;
            return (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 sleek-card rounded-3xl flex flex-col justify-between"
              >
                {/* Accent Top Border Hover Effect */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#023E8A] to-sky-400 rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 bg-[#E5FAFF] text-[#023E8A] rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#023E8A] transition-colors">
                      {t(`why.items.${strength.id}.title`)}
                    </h3>
                    <p className="text-slate-600 text-sm font-normal leading-relaxed">
                      {t(`why.items.${strength.id}.desc`)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#023E8A] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>{t('why.guarantee')}</span>
                  <Check className="w-3.5 h-3.5 ml-1.5 stroke-[3]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#023E8A] to-[#012A5E] p-8 sm:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden"
        >
          {/* subtle noise/light shapes */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-10 top-0 w-40 h-40 bg-[#E5FAFF]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#E5FAFF] text-xs font-semibold uppercase tracking-wider">
                {t('why.cta_badge')}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                {t('why.cta_title')}
              </h3>
              <p className="text-sky-100 font-light text-sm max-w-xl">
                {t('why.cta_desc')}
              </p>
            </div>
            
            <button
              onClick={() => {
                const element = document.getElementById('contact-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white text-[#023E8A] hover:bg-[#E5FAFF] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-white/15 transition-all w-full md:w-auto text-center cursor-pointer hover:-translate-y-0.5 shrink-0"
            >
              {t('why.cta_btn')}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
