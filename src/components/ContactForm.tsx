import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ShieldCheck, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$10k - $30k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const BUDGETS = [
    '< $10,000 (Short MVP)',
    '$10,000 - $30,000 (Standard Product)',
    '$30,000 - $100,000 (Enterprise Suite)',
    '> $100,000 (Dedicated Team / Multi-Cloud)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields (Name, Email, and Project Details).');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-end backend delivery API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '$10k - $30k',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact-us" className="py-24 bg-gradient-to-b from-white to-[#E5FAFF]/40 relative scroll-mt-20">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E1F7FC]/50 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#023E8A]">{t('contact.badge')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1 bg-[#023E8A] mx-auto rounded-full" />
          <p className="text-slate-600 font-light text-base sm:text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Dual Panel Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Agency coordinates Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-3 text-left">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">{t('contact.status')}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800">
                  {t('contact.hq_title')}
                </h3>
                <p className="text-slate-500 font-light text-sm">
                  {t('contact.hq_desc')}
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-white/70 border border-slate-100 shadow-sm text-left items-center">
                  <div className="w-10 h-10 rounded-lg bg-[#E5FAFF] text-[#023E8A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t('contact.office_label')}</span>
                    <span className="text-sm font-medium text-slate-800">The Kinetic Tower, Floor 42, SCBD, Jakarta, Indonesia</span>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-white/70 border border-slate-100 shadow-sm text-left items-center">
                  <div className="w-10 h-10 rounded-lg bg-[#E5FAFF] text-[#023E8A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t('contact.email_label')}</span>
                    <a href="mailto:hello@kineticstudio.co" className="text-sm font-semibold text-[#023E8A] hover:underline">
                      hello@kineticstudio.co
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-white/70 border border-slate-100 shadow-sm text-left items-center">
                  <div className="w-10 h-10 rounded-lg bg-[#E5FAFF] text-[#023E8A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t('contact.phone_label')}</span>
                    <a href="tel:+628113000880" className="text-sm font-semibold text-slate-800 hover:text-[#023E8A] transition-colors">
                      +62 (21) 500-1288 / +62 811-3000-880
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Info box */}
            <div className="bg-[#023E8A]/5 p-6 rounded-2xl border border-[#023E8A]/10 space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase text-[#023E8A] tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                <span>{t('contact.nda_title')}</span>
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {t('contact.nda_desc')}
              </p>
              
              <div className="pt-2 border-t border-slate-200/50 flex flex-wrap gap-4 text-[10px] font-semibold text-slate-400">
                <span className="flex items-center gap-1">🛡️ ISO 27001 SECURE</span>
                <span className="flex items-center gap-1">🏢 SOC2 TYPE II COMPLIANT</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="sleek-card rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          {t('contact.form.name_label')} <span className="text-[#023E8A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('contact.form.name_placeholder')}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#023E8A] focus:ring-2 focus:ring-[#E5FAFF] focus:outline-none text-slate-800 transition-all placeholder-slate-400 bg-[#FCFDFE] text-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          {t('contact.form.email_label')} <span className="text-[#023E8A]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t('contact.form.email_placeholder')}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#023E8A] focus:ring-2 focus:ring-[#E5FAFF] focus:outline-none text-slate-800 transition-all placeholder-slate-400 bg-[#FCFDFE] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Company input */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          {t('contact.form.company_label')}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={t('contact.form.company_placeholder')}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#023E8A] focus:ring-2 focus:ring-[#E5FAFF] focus:outline-none text-slate-800 transition-all placeholder-slate-400 bg-[#FCFDFE] text-sm"
                        />
                      </div>

                      {/* Budget selector */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                          {t('contact.form.budget_label')}
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#023E8A] focus:ring-2 focus:ring-[#E5FAFF] focus:outline-none text-slate-800 transition-all bg-[#FCFDFE] text-sm"
                        >
                          {BUDGETS.map((bg) => (
                            <option key={bg} value={bg}>
                              {bg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message description box */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        {t('contact.form.message_label')} <span className="text-[#023E8A]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('contact.form.message_placeholder')}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#023E8A] focus:ring-2 focus:ring-[#E5FAFF] focus:outline-none text-slate-800 transition-all placeholder-slate-400 bg-[#FCFDFE] text-sm resize-none leading-relaxed"
                      />
                    </div>

                    {/* Form Error Notice */}
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-150 rounded-lg text-xs font-medium text-red-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#023E8A] hover:bg-[#023E8A]/95 text-white font-semibold text-base rounded-xl transition-all shadow-lg hover:shadow-[#023E8A]/15 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>{t('contact.form.loading')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>{t('contact.form.submit_btn')}</span>
                        </>
                      )}
                    </button>

                    <div className="text-center font-light text-slate-400 text-[11px] leading-normal pt-2">
                      {t('contact.form.nda_notice')}
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-6 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E5FAFF] text-[#023E8A] flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-serif text-3xl font-bold text-[#023E8A]">
                        {t('contact.success.title')}
                      </h4>
                      <p className="text-slate-600 max-w-md font-light text-sm sm:text-base leading-relaxed">
                        {t('contact.success.desc')}
                      </p>
                    </div>

                    <div className="bg-[#E5FAFF]/40 border border-[#E5FAFF] p-4 rounded-xl text-left max-w-md flex gap-3 text-xs text-slate-600">
                      <Sparkles className="w-5 h-5 text-[#023E8A] shrink-0" />
                      <p>
                        <strong>{t('contact.success.next_steps').split('**')[1]}</strong> {t('contact.success.next_steps').split('**')[2]}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold uppercase text-slate-400 hover:text-[#023E8A] transition-colors hover:underline cursor-pointer pt-4"
                    >
                      {t('contact.success.reset_btn')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
