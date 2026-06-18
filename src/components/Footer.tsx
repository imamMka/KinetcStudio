import React from 'react';
import { Zap, Github, Linkedin, Twitter, ArrowUp, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to Kinetic Insights! Our tech newsletters are dispatched bi-weekly.');
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-light text-sm relative border-t border-slate-800">
      
      {/* Decorative highlight */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#023E8A] via-sky-400 to-[#023E8A]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
          
          {/* Main Brand Section */}
          <div className="col-span-2 md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-lg bg-[#023E8A] flex items-center justify-center text-white shadow-md">
                <Zap className="w-4 h-4 fill-current text-[#E5FAFF]" />
              </div>
              <span className="font-serif text-xl tracking-tight text-white font-bold">
                Kinetic <span className="text-slate-300 font-sans font-light text-lg">Studio</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            
            {/* Social icons */}
            <div className="flex gap-4 pt-2">
              <a href="#github" className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-[#023E8A] transition-all flex items-center justify-center">
                <Github className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-[#023E8A] transition-all flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-[#023E8A] transition-all flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: System services */}
          <div className="col-span-1 md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Deliverables
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t('footer.links.saas')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t('footer.links.cloud')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t('footer.links.devops')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t('footer.links.design')}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Info */}
          <div className="col-span-1 md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">{t('footer.links.why')}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">{t('footer.links.portfolio')}</a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-white transition-colors">{t('footer.links.contact')}</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors block">Careers <span className="bg-[#023E8A] text-white px-1.5 py-0.5 rounded-sm font-semibold ml-1 shrink-0 text-[9px] uppercase tracking-wide">{t('footer.hiring')}</span></a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Sign up to increase active conversion rates */}
          <div className="col-span-2 md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              {t('footer.newsletter.title')}
            </h4>
            <p className="text-xs text-slate-400 leading-normal max-w-sm">
              {t('footer.newsletter.desc')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
              <input
                type="email"
                required
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700/60 focus:border-[#023E8A] focus:outline-none rounded-lg text-xs text-slate-300 placeholder-slate-500"
              />
              <button
                type="submit"
                className="bg-[#023E8A] hover:bg-[#023E8A]/90 text-white px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer shrink-0 flex items-center justify-center gap-1"
              >
                <Send className="w-3 h-3" />
                <span>{t('footer.newsletter.submit')}</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright line, layout back-to-top badge */}
        <div className="pt-8 border-t border-slate-800 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {currentYear} {t('footer.copyright')}
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</a>
            <a href="#nda" className="hover:text-slate-300 transition-colors">{t('footer.nda')}</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#023E8A] hover:text-white flex items-center justify-center transition-all shadow-md group cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
