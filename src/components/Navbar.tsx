import React, { useState } from 'react';
import { ShoppingBag, Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { journeyTranslations } from '../data/journeyTranslations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onScrollToSection,
  cartCount,
  onOpenCart,
}) => {
  const t = translations[currentLang];
  const jt = journeyTranslations[currentLang] || journeyTranslations.en;
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact requested menu: Home, Our Story, Brocade, Silk, Design Your Own, Shop
  const navItems = [
    { key: 'hero', label: jt.nav.home },
    { key: 'our-story', label: jt.nav.ourStory },
    { key: 'brocade', label: jt.nav.brocade },
    { key: 'silk', label: jt.nav.silk },
    { key: 'customizer', label: jt.nav.designYourOwn },
    { key: 'shop', label: jt.nav.shop },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => onScrollToSection('hero')}
          className="text-left group cursor-pointer focus:outline-hidden"
        >
          <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#1E293B] group-hover:text-[#8A3D2B] transition-colors">
            {t.brandName}
          </span>
        </button>

        {/* Zone 2: 6 Clean nav links with smooth scrolling */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A443D]">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onScrollToSection(item.key)}
                className={`transition-colors cursor-pointer py-1 border-b-2 text-[13px] xl:text-[14px] whitespace-nowrap ${
                  isActive
                    ? 'border-[#8A3D2B] text-[#8A3D2B] font-semibold'
                    : 'border-transparent hover:text-[#1E293B] hover:border-[#D4C9BD]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 2 Actions (Language Selector & Cart) */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#DCD3C5] bg-[#F5EFE6] hover:bg-[#EDE5D8] text-xs font-medium text-[#37302A] transition-colors cursor-pointer"
              title="Đổi ngôn ngữ / Change language"
            >
              <Globe className="w-3.5 h-3.5 text-[#8A3D2B]" />
              <span className="font-semibold uppercase tracking-wider">{currentLang}</span>
              <span className="text-[11px] opacity-75 hidden sm:inline">
                {LANGUAGES.find((l) => l.code === currentLang)?.flag}
              </span>
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-44 rounded-lg bg-white shadow-xl border border-[#E6DDCE] py-1.5 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1 text-[11px] font-mono text-[#8C827A] border-b border-[#F0EAE1] uppercase tracking-wider">
                    Select Language
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-[#FAF7F2] transition-colors cursor-pointer ${
                        currentLang === lang.code
                          ? 'text-[#8A3D2B] font-semibold bg-[#FAF4ED]'
                          : 'text-[#4A443D]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      {currentLang === lang.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A3D2B]" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-md border border-[#DCD3C5] bg-[#F5EFE6] hover:bg-[#EDE5D8] text-[#2C2825] transition-colors cursor-pointer"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#1E293B]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8A3D2B] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#4A443D] hover:bg-[#EFE8DD] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-4 pt-2 pb-5 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onScrollToSection(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#EFE8DD] text-[#8A3D2B] font-semibold'
                    : 'text-[#4A443D] hover:bg-[#F3EDE2]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
